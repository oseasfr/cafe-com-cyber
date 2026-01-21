interface Env {
  DB: D1Database;
}

interface Comment {
  id: number;
  article_id: string;
  parent_id: number | null;
  author_name: string;
  content: string;
  likes: number;
  created_at: string;
}

// Inicializa as tabelas se não existirem
async function initDB(db: D1Database) {
  await db.exec(`
    CREATE TABLE IF NOT EXISTS article_stats (
      article_id TEXT PRIMARY KEY,
      views INTEGER DEFAULT 0,
      likes INTEGER DEFAULT 0
    );
    
    CREATE TABLE IF NOT EXISTS article_likes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      article_id TEXT NOT NULL,
      visitor_id TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(article_id, visitor_id)
    );
    
    CREATE TABLE IF NOT EXISTS comments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      article_id TEXT NOT NULL,
      parent_id INTEGER,
      author_name TEXT NOT NULL,
      content TEXT NOT NULL,
      likes INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (parent_id) REFERENCES comments(id)
    );
    
    CREATE TABLE IF NOT EXISTS comment_likes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      comment_id INTEGER NOT NULL,
      visitor_id TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(comment_id, visitor_id),
      FOREIGN KEY (comment_id) REFERENCES comments(id)
    );
    
    CREATE INDEX IF NOT EXISTS idx_comments_article ON comments(article_id);
    CREATE INDEX IF NOT EXISTS idx_comments_parent ON comments(parent_id);
  `);
}

// Gera um ID único para o visitante baseado em headers
function getVisitorId(request: Request): string {
  const ip = request.headers.get('cf-connecting-ip') || 'unknown';
  const userAgent = request.headers.get('user-agent') || 'unknown';
  const combined = `${ip}-${userAgent}`;
  
  // Simple hash
  let hash = 0;
  for (let i = 0; i < combined.length; i++) {
    const char = combined.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(36);
}

// CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export const onRequest: PagesFunction<Env> = async (context) => {
  const { request, env, params } = context;
  const url = new URL(request.url);
  const path = params.route ? (Array.isArray(params.route) ? params.route.join('/') : params.route) : '';
  
  // Handle CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    await initDB(env.DB);
    const visitorId = getVisitorId(request);

    // GET /api/stats/:articleId - Obter estatísticas do artigo
    if (request.method === 'GET' && path.startsWith('stats/')) {
      const articleId = path.replace('stats/', '');
      
      // Incrementa visualização
      await env.DB.prepare(`
        INSERT INTO article_stats (article_id, views, likes) 
        VALUES (?, 1, 0)
        ON CONFLICT(article_id) DO UPDATE SET views = views + 1
      `).bind(articleId).run();
      
      // Busca estatísticas
      const stats = await env.DB.prepare(`
        SELECT views, likes FROM article_stats WHERE article_id = ?
      `).bind(articleId).first();
      
      // Verifica se o visitante já curtiu
      const userLike = await env.DB.prepare(`
        SELECT id FROM article_likes WHERE article_id = ? AND visitor_id = ?
      `).bind(articleId, visitorId).first();
      
      // Conta comentários
      const commentCount = await env.DB.prepare(`
        SELECT COUNT(*) as count FROM comments WHERE article_id = ?
      `).bind(articleId).first<{ count: number }>();

      return new Response(JSON.stringify({
        views: stats?.views || 1,
        likes: stats?.likes || 0,
        comments: commentCount?.count || 0,
        userLiked: !!userLike
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // POST /api/like/:articleId - Curtir/descurtir artigo
    if (request.method === 'POST' && path.startsWith('like/')) {
      const articleId = path.replace('like/', '');
      
      // Verifica se já curtiu
      const existingLike = await env.DB.prepare(`
        SELECT id FROM article_likes WHERE article_id = ? AND visitor_id = ?
      `).bind(articleId, visitorId).first();
      
      if (existingLike) {
        // Remove curtida
        await env.DB.prepare(`
          DELETE FROM article_likes WHERE article_id = ? AND visitor_id = ?
        `).bind(articleId, visitorId).run();
        
        await env.DB.prepare(`
          UPDATE article_stats SET likes = likes - 1 WHERE article_id = ?
        `).bind(articleId).run();
        
        const stats = await env.DB.prepare(`
          SELECT likes FROM article_stats WHERE article_id = ?
        `).bind(articleId).first();
        
        return new Response(JSON.stringify({ 
          liked: false, 
          likes: stats?.likes || 0 
        }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      } else {
        // Adiciona curtida
        await env.DB.prepare(`
          INSERT INTO article_likes (article_id, visitor_id) VALUES (?, ?)
        `).bind(articleId, visitorId).run();
        
        await env.DB.prepare(`
          INSERT INTO article_stats (article_id, views, likes) 
          VALUES (?, 0, 1)
          ON CONFLICT(article_id) DO UPDATE SET likes = likes + 1
        `).bind(articleId).run();
        
        const stats = await env.DB.prepare(`
          SELECT likes FROM article_stats WHERE article_id = ?
        `).bind(articleId).first();
        
        return new Response(JSON.stringify({ 
          liked: true, 
          likes: stats?.likes || 1 
        }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }
    }

    // GET /api/comments/:articleId - Listar comentários
    if (request.method === 'GET' && path.startsWith('comments/')) {
      const articleId = path.replace('comments/', '');
      
      const comments = await env.DB.prepare(`
        SELECT * FROM comments WHERE article_id = ? ORDER BY created_at DESC
      `).bind(articleId).all<Comment>();
      
      // Busca curtidas do usuário nos comentários
      const userCommentLikes = await env.DB.prepare(`
        SELECT comment_id FROM comment_likes WHERE visitor_id = ?
      `).bind(visitorId).all<{ comment_id: number }>();
      
      const likedCommentIds = new Set(userCommentLikes.results?.map(l => l.comment_id) || []);
      
      const commentsWithUserLike = (comments.results || []).map(comment => ({
        ...comment,
        userLiked: likedCommentIds.has(comment.id)
      }));

      return new Response(JSON.stringify(commentsWithUserLike), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // POST /api/comments/:articleId - Criar comentário
    if (request.method === 'POST' && path.startsWith('comments/')) {
      const articleId = path.replace('comments/', '');
      const body = await request.json() as { 
        author_name: string; 
        content: string; 
        parent_id?: number 
      };
      
      if (!body.author_name || !body.content) {
        return new Response(JSON.stringify({ error: 'Nome e comentário são obrigatórios' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }
      
      // Limita tamanho
      const authorName = body.author_name.slice(0, 50);
      const content = body.content.slice(0, 2000);
      
      const result = await env.DB.prepare(`
        INSERT INTO comments (article_id, parent_id, author_name, content)
        VALUES (?, ?, ?, ?)
        RETURNING *
      `).bind(articleId, body.parent_id || null, authorName, content).first<Comment>();

      return new Response(JSON.stringify(result), {
        status: 201,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // POST /api/comment-like/:commentId - Curtir/descurtir comentário
    if (request.method === 'POST' && path.startsWith('comment-like/')) {
      const commentId = parseInt(path.replace('comment-like/', ''));
      
      const existingLike = await env.DB.prepare(`
        SELECT id FROM comment_likes WHERE comment_id = ? AND visitor_id = ?
      `).bind(commentId, visitorId).first();
      
      if (existingLike) {
        await env.DB.prepare(`
          DELETE FROM comment_likes WHERE comment_id = ? AND visitor_id = ?
        `).bind(commentId, visitorId).run();
        
        await env.DB.prepare(`
          UPDATE comments SET likes = likes - 1 WHERE id = ?
        `).bind(commentId).run();
        
        const comment = await env.DB.prepare(`
          SELECT likes FROM comments WHERE id = ?
        `).bind(commentId).first();
        
        return new Response(JSON.stringify({ 
          liked: false, 
          likes: comment?.likes || 0 
        }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      } else {
        await env.DB.prepare(`
          INSERT INTO comment_likes (comment_id, visitor_id) VALUES (?, ?)
        `).bind(commentId, visitorId).run();
        
        await env.DB.prepare(`
          UPDATE comments SET likes = likes + 1 WHERE id = ?
        `).bind(commentId).run();
        
        const comment = await env.DB.prepare(`
          SELECT likes FROM comments WHERE id = ?
        `).bind(commentId).first();
        
        return new Response(JSON.stringify({ 
          liked: true, 
          likes: comment?.likes || 1 
        }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }
    }

    return new Response(JSON.stringify({ error: 'Not found' }), {
      status: 404,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
};
