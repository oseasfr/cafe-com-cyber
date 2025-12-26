import { loadArticles } from '../lib/articleLoader';

// Importa os arquivos .md como texto bruto
import artigo1 from '../content/articles/fundamentos-de-seguranca-em-apis-rest.md?raw';
import artigo2 from '../content/articles/zero-trust-o-futuro-da-seguranca-corporativa.md?raw';
import artigo3 from '../content/articles/osint-tecnicas-de-investigacao-digital.md?raw';

// Carrega todos os artigos
export const articles = loadArticles([artigo1, artigo2, artigo3]);

// Exporta tipos
export type { Article, ArticleMetadata } from '../lib/articleLoader';
