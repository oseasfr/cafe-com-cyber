import { loadArticles } from '../lib/articleLoader';

// Importa os arquivos .md como texto bruto usando ?raw
import artigo1 from '../content/articles/guia-para-analise-de-malwares-em-sistemas-linux.md?raw';
import artigo2 from '../content/articles/quando-foi-a-ultima-vez-que-voce-alterou-sua-senha.md?raw';
import artigo3 from '../content/articles/artigo-teste-001.md?raw';
import artigo4 from '../content/articles/artigo-teste-002.md?raw';
import artigo4 from '../content/articles/artigo-teste-003.md?raw';
import artigo5 from '../content/articles/artigo-teste-004.md?raw';
import artigo6 from '../content/articles/artigo-teste-005.md?raw';

// Carrega todos os artigos usando o loader
export const articles = loadArticles([artigo1, artigo2, artigo3, artigo4, artigo5, artigo6, artigo7]);

// Exporta tipos para uso em outros arquivos
export type { Article, ArticleMetadata } from '../lib/articleLoader';
