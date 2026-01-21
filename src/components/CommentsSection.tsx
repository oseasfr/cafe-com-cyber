import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';
import { ThumbsUp, MessageCircle, Send, ChevronDown, ChevronUp, User } from 'lucide-react';
import { 
  getComments, 
  createComment, 
  toggleCommentLike,
  type Comment
} from '../lib/api';

interface CommentsSectionProps {
  articleId: string;
}

interface CommentItemProps {
  comment: Comment;
  replies: Comment[];
  allComments: Comment[];
  onReply: (parentId: number) => void;
  onLike: (commentId: number) => void;
  likingIds: Set<number>;
  depth?: number;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return 'agora mesmo';
  if (diffMins < 60) return `há ${diffMins} min`;
  if (diffHours < 24) return `há ${diffHours}h`;
  if (diffDays < 7) return `há ${diffDays} dia${diffDays > 1 ? 's' : ''}`;
  
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
  });
}

function CommentItem({ 
  comment, 
  replies, 
  allComments,
  onReply, 
  onLike, 
  likingIds,
  depth = 0 
}: CommentItemProps) {
  const [showReplies, setShowReplies] = useState(true);
  const maxDepth = 3;
  const isLiking = likingIds.has(comment.id);

  return (
    <div className={`${depth > 0 ? 'ml-6 pl-4 border-l-2 border-border/50' : ''}`}>
      <div className="py-4">
        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded-full bg-gradient-cyber flex items-center justify-center">
            <User className="h-4 w-4 text-primary" />
          </div>
          <div>
            <span className="font-medium text-foreground">{comment.author_name}</span>
            <span className="text-xs text-muted-foreground ml-2">
              {formatDate(comment.created_at)}
            </span>
          </div>
        </div>

        {/* Content */}
        <p className="text-muted-foreground mb-3 whitespace-pre-wrap">
          {comment.content}
        </p>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => onLike(comment.id)}
            disabled={isLiking}
            className={`flex items-center gap-1 text-sm transition-colors hover:text-primary ${
              comment.userLiked ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            <ThumbsUp 
              className={`h-4 w-4 ${comment.userLiked ? 'fill-primary' : ''} ${isLiking ? 'animate-pulse' : ''}`} 
            />
            <span>{comment.likes}</span>
          </button>

          {depth < maxDepth && (
            <button
              onClick={() => onReply(comment.id)}
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Responder</span>
            </button>
          )}

          {replies.length > 0 && (
            <button
              onClick={() => setShowReplies(!showReplies)}
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {showReplies ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              <span>{replies.length} resposta{replies.length > 1 ? 's' : ''}</span>
            </button>
          )}
        </div>
      </div>

      {/* Replies */}
      {showReplies && replies.length > 0 && (
        <div>
          {replies.map(reply => (
            <CommentItem
              key={reply.id}
              comment={reply}
              replies={allComments.filter(c => c.parent_id === reply.id)}
              allComments={allComments}
              onReply={onReply}
              onLike={onLike}
              likingIds={likingIds}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function CommentsSection({ articleId }: CommentsSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [authorName, setAuthorName] = useState('');
  const [content, setContent] = useState('');
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [likingIds, setLikingIds] = useState<Set<number>>(new Set());
  const [error, setError] = useState<string | null>(null);

  // Carrega nome salvo do localStorage
  useEffect(() => {
    const savedName = localStorage.getItem('commenter_name');
    if (savedName) setAuthorName(savedName);
  }, []);

  // Carrega comentários
  useEffect(() => {
    loadComments();
  }, [articleId]);

  const loadComments = async () => {
    try {
      const data = await getComments(articleId);
      setComments(data);
    } catch (err) {
      console.error('Failed to load comments:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!authorName.trim()) {
      setError('Por favor, informe seu nome');
      return;
    }
    if (!content.trim()) {
      setError('Por favor, escreva um comentário');
      return;
    }

    setIsSubmitting(true);
    try {
      // Salva nome no localStorage
      localStorage.setItem('commenter_name', authorName.trim());
      
      const newComment = await createComment(
        articleId,
        authorName.trim(),
        content.trim(),
        replyingTo || undefined
      );
      
      setComments(prev => [{ ...newComment, userLiked: false }, ...prev]);
      setContent('');
      setReplyingTo(null);
    } catch (err) {
      setError('Erro ao enviar comentário. Tente novamente.');
      console.error('Failed to create comment:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLike = async (commentId: number) => {
    if (likingIds.has(commentId)) return;

    setLikingIds(prev => new Set(prev).add(commentId));
    try {
      const result = await toggleCommentLike(commentId);
      setComments(prev => prev.map(c => 
        c.id === commentId 
          ? { ...c, likes: result.likes, userLiked: result.liked }
          : c
      ));
    } catch (err) {
      console.error('Failed to like comment:', err);
    } finally {
      setLikingIds(prev => {
        const next = new Set(prev);
        next.delete(commentId);
        return next;
      });
    }
  };

  const handleReply = (parentId: number) => {
    setReplyingTo(parentId);
    document.getElementById('comment-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const cancelReply = () => {
    setReplyingTo(null);
  };

  const replyingToComment = replyingTo 
    ? comments.find(c => c.id === replyingTo) 
    : null;

  const rootComments = comments.filter(c => !c.parent_id);

  return (
    <div id="comments-section" className="mt-12 pt-8 border-t border-border">
      <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
        <MessageCircle className="h-6 w-6 text-primary" />
        Comentários ({comments.length})
      </h3>

      {/* Comment Form */}
      <form id="comment-form" onSubmit={handleSubmit} className="mb-8">
        <div className="bg-card/50 border border-border rounded-lg p-4">
          {replyingToComment && (
            <div className="mb-4 p-3 bg-muted/50 rounded-lg flex items-start justify-between">
              <div>
                <span className="text-sm text-muted-foreground">Respondendo a </span>
                <span className="text-sm font-medium text-foreground">
                  {replyingToComment.author_name}
                </span>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                  {replyingToComment.content}
                </p>
              </div>
              <button
                type="button"
                onClick={cancelReply}
                className="text-muted-foreground hover:text-foreground text-sm"
              >
                Cancelar
              </button>
            </div>
          )}

          <div className="flex gap-4 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-cyber flex items-center justify-center flex-shrink-0">
              <User className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Seu nome"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                className="mb-3"
                maxLength={50}
              />
              <Textarea
                placeholder={replyingTo ? "Escreva sua resposta..." : "Escreva um comentário..."}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-[100px] resize-none"
                maxLength={2000}
              />
            </div>
          </div>

          {error && (
            <p className="text-sm text-red-500 mb-3 ml-14">{error}</p>
          )}

          <div className="flex justify-end">
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="gap-2"
            >
              <Send className="h-4 w-4" />
              {isSubmitting ? 'Enviando...' : replyingTo ? 'Responder' : 'Comentar'}
            </Button>
          </div>
        </div>
      </form>

      {/* Comments List */}
      {isLoading ? (
        <div className="text-center py-8 text-muted-foreground">
          Carregando comentários...
        </div>
      ) : rootComments.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground">
          <MessageCircle className="h-12 w-12 mx-auto mb-3 opacity-50" />
          <p>Nenhum comentário ainda.</p>
          <p className="text-sm">Seja o primeiro a comentar!</p>
        </div>
      ) : (
        <div className="divide-y divide-border/50">
          {rootComments.map(comment => (
            <CommentItem
              key={comment.id}
              comment={comment}
              replies={comments.filter(c => c.parent_id === comment.id)}
              allComments={comments}
              onReply={handleReply}
              onLike={handleLike}
              likingIds={likingIds}
            />
          ))}
        </div>
      )}
    </div>
  );
}
