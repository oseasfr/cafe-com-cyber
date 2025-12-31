import { loadArticles } from '../lib/articleLoader';
const articleModules = import.meta.glob('../content/articles/*.md?raw', { 
  eager: true,
  import: 'default'
}) as Record<string, string>;
const articleContents = Object.values(articleModules);
export const articles = loadArticles(articleContents);
export type { Article, ArticleMetadata } from '../lib/articleLoader';
