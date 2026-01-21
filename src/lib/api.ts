const API_BASE = '/api';

export interface ArticleStats {
  views: number;
  likes: number;
  comments: number;
  userLiked: boolean;
}

export interface Comment {
  id: number;
  article_id: string;
  parent_id: number | null;
  author_name: string;
  content: string;
  likes: number;
  created_at: string;
  userLiked?: boolean;
}

export interface LikeResponse {
  liked: boolean;
  likes: number;
}

// Busca estatísticas do artigo (também incrementa views)
export async function getArticleStats(articleId: string): Promise<ArticleStats> {
  const response = await fetch(`${API_BASE}/stats/${articleId}`);
  if (!response.ok) throw new Error('Failed to fetch stats');
  return response.json();
}

// Curtir/descurtir artigo
export async function toggleArticleLike(articleId: string): Promise<LikeResponse> {
  const response = await fetch(`${API_BASE}/like/${articleId}`, {
    method: 'POST',
  });
  if (!response.ok) throw new Error('Failed to toggle like');
  return response.json();
}

// Busca comentários do artigo
export async function getComments(articleId: string): Promise<Comment[]> {
  const response = await fetch(`${API_BASE}/comments/${articleId}`);
  if (!response.ok) throw new Error('Failed to fetch comments');
  return response.json();
}

// Criar comentário
export async function createComment(
  articleId: string, 
  authorName: string, 
  content: string, 
  parentId?: number
): Promise<Comment> {
  const response = await fetch(`${API_BASE}/comments/${articleId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ author_name: authorName, content, parent_id: parentId }),
  });
  if (!response.ok) throw new Error('Failed to create comment');
  return response.json();
}

// Curtir/descurtir comentário
export async function toggleCommentLike(commentId: number): Promise<LikeResponse> {
  const response = await fetch(`${API_BASE}/comment-like/${commentId}`, {
    method: 'POST',
  });
  if (!response.ok) throw new Error('Failed to toggle comment like');
  return response.json();
}
