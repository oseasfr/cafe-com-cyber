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
  updatedAt?: string;
  createdAt?: string;
}

const API_URL = 'https://articles-ccc-api.oseasfr.workers.dev/api';

export const articleService = {
  async getAllArticles(): Promise<Article[]> {
    const res = await fetch(`${API_URL}/articles`);
    const data = await res.json();
    if (!data.success) throw new Error(data.error);
    return data.data || [];
  },

  async getArticle(id: string): Promise<Article> {
    const res = await fetch(`${API_URL}/articles/${id}`);
    const data = await res.json();
    if (!data.success) throw new Error(data.error);
    return data.data;
  },

  async updateArticle(id: string, article: Article): Promise<Article> {
    const res = await fetch(`${API_URL}/articles/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(article),
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.error);
    return data.data;
  },

  async createArticle(article: Article): Promise<Article> {
    const res = await fetch(`${API_URL}/articles`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(article),
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.error);
    return data.data;
  },

  async deleteArticle(id: string): Promise<void> {
    const res = await fetch(`${API_URL}/articles/${id}`, {
      method: 'DELETE',
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.error);
  },
};
