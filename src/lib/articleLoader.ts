// Interface para metadados do artigo (frontmatter)
export interface ArticleMetadata {
  id: string;
  title: string;
  description: string;
  author: string; // Nome completo do autor (para fallback)
  authorFirstName?: string; // Primeiro nome do autor
  authorLastName?: string; // Sobrenome do autor
  authorAvatar?: string; // URL da foto do autor
  authorBio?: string; // Biografia do autor
  authorSocialLink?: string; // Link LinkedIn ou GitHub
  authorSocialType?: "linkedin" | "github"; // Tipo de rede social
  readTime: string;
  category: string;
  icon: string;
  gradient: string;
  imageUrl?: string;
  publishedAt?: string;
  updatedAt?: string;
  tags?: string[];
  featured?: boolean; // Artigo em destaque
  priority?: number; // Prioridade de exibição (quanto maior, mais importante)
}

// Interface completa do artigo
export interface Article extends ArticleMetadata {
  content: string;
}

/**
 * Parseia o frontmatter YAML do arquivo Markdown
 */
export function parseFrontmatter(markdown: string): { metadata: Partial<ArticleMetadata>; content: string } {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = markdown.match(frontmatterRegex);

  if (!match) {
    throw new Error('Invalid markdown format: missing frontmatter (---)');
  }

  const frontmatterText = match[1];
  const content = match[2].trim();
  const metadata: Partial<ArticleMetadata> = {};

  // Parse simples do YAML frontmatter
  frontmatterText.split('\n').forEach((line) => {
    const trimmedLine = line.trim();
    if (!trimmedLine || trimmedLine.startsWith('#')) return;

    const colonIndex = trimmedLine.indexOf(':');
    if (colonIndex === -1) return;

    const key = trimmedLine.substring(0, colonIndex).trim();
    let value = trimmedLine.substring(colonIndex + 1).trim();

    // Remove aspas se existirem
    value = value.replace(/^["']|["']$/g, '');

    // Parse especial para arrays (tags)
    if (key === 'tags') {
      metadata.tags = value
        .replace(/[\[\]]/g, '')
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean);
    } else if (key === 'readTime') {
      metadata.readTime = value;
    } else if (key === 'featured') {
      // Parse boolean (true/false)
      metadata.featured = value.toLowerCase() === 'true';
    } else if (key === 'priority') {
      // Parse number
      metadata.priority = parseInt(value, 10) || 0;
    } else {
      // Atribui o valor ao metadata
      (metadata as any)[key] = value;
    }
  });

  return { metadata: metadata as Partial<ArticleMetadata>, content };
}

/**
 * Carrega um artigo a partir de um arquivo Markdown
 */
export function loadArticle(markdownContent: string): Article {
  const { metadata, content } = parseFrontmatter(markdownContent);

  // Valida campos obrigatórios
  const requiredFields: (keyof ArticleMetadata)[] = [
    'id',
    'title',
    'description',
    'author',
    'readTime',
    'category',
    'icon',
    'gradient',
  ];

  for (const field of requiredFields) {
    if (!metadata[field]) {
      throw new Error(`Missing required field in frontmatter: ${field}`);
    }
  }

  return {
    ...(metadata as ArticleMetadata),
    content,
  };
}

/**
 * Carrega múltiplos artigos
 */
export function loadArticles(markdownContents: string[]): Article[] {
  return markdownContents
    .map((content) => {
      try {
        return loadArticle(content);
      } catch (error) {
        console.error('Error loading article:', error);
        return null;
      }
    })
    .filter((article): article is Article => article !== null)
    .sort((a, b) => {
      // 1. Primeiro: Artigos featured primeiro
      const featuredA = a.featured === true ? 1 : 0;
      const featuredB = b.featured === true ? 1 : 0;
      if (featuredB !== featuredA) {
        return featuredB - featuredA;
      }

      // 2. Segundo: Por prioridade (maior primeiro)
      const priorityA = a.priority ?? 0;
      const priorityB = b.priority ?? 0;
      if (priorityB !== priorityA) {
        return priorityB - priorityA;
      }

      // 3. Terceiro: Por data de publicação (mais recente primeiro)
      const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
      const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
      return dateB - dateA;
    });
}
