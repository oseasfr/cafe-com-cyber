// Interface baseada na estrutura real dos artigos do projeto
export interface Article {
  id: string;
  title: string;
  description: string;
  author: string;
  readTime: string;
  category: string;
  icon: string;
  gradient: string;
  imageUrl?: string;
  content: string;
}

// URL da API - ajuste conforme necessário
const API_URL = 'https://articles-ccc-api.oseasfr.workers.dev/api';

// Tipos de resposta da API
interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

class ArticleService {
  /**
   * Busca todos os artigos da API
   */
  async getAllArticles(): Promise<Article[]> {
    try {
      const res = await fetch(`${API_URL}/articles`);
      
      if (!res.ok) {
        throw new Error(`Failed to fetch articles: ${res.status} ${res.statusText}`);
      }
      
      const data = await res.json();
      
      // Se a API retorna { data: [...] }, extrai o array
      // Caso contrário, assume que já é um array
      return Array.isArray(data) ? data : (data.data || []);
    } catch (error) {
      console.error('Error fetching articles:', error);
      throw error;
    }
  }

  /**
   * Busca um artigo específico por ID
   */
  async getArticleById(id: string): Promise<Article | null> {
    try {
      const res = await fetch(`${API_URL}/articles/${id}`);
      
      if (res.status === 404) {
        return null;
      }
      
      if (!res.ok) {
        throw new Error(`Failed to fetch article: ${res.status} ${res.statusText}`);
      }
      
      const data = await res.json();
      return Array.isArray(data) ? data[0] : (data.data || data);
    } catch (error) {
      console.error(`Error fetching article ${id}:`, error);
      throw error;
    }
  }

  /**
   * Cria um novo artigo
   */
  async createArticle(article: Omit<Article, 'id'>): Promise<Article> {
    try {
      const res = await fetch(`${API_URL}/articles`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(article),
      });
      
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || `Failed to create article: ${res.status}`);
      }
      
      const data = await res.json();
      return data.data || data;
    } catch (error) {
      console.error('Error creating article:', error);
      throw error;
    }
  }

  /**
   * Atualiza um artigo existente
   */
  async updateArticle(id: string, article: Partial<Article>): Promise<Article> {
    try {
      const res = await fetch(`${API_URL}/articles/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(article),
      });
      
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || `Failed to update article: ${res.status}`);
      }
      
      const data = await res.json();
      return data.data || data;
    } catch (error) {
      console.error(`Error updating article ${id}:`, error);
      throw error;
    }
  }

  /**
   * Deleta um artigo
   */
  async deleteArticle(id: string): Promise<void> {
    try {
      const res = await fetch(`${API_URL}/articles/${id}`, {
        method: 'DELETE',
      });
      
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || `Failed to delete article: ${res.status}`);
      }
    } catch (error) {
      console.error(`Error deleting article ${id}:`, error);
      throw error;
    }
  }
}

// Exporta uma instância singleton do serviço
export const articleService = new ArticleService();
export default articleService;
