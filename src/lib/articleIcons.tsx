/**
 * Mapeamento de categorias/temas para ícones Font Awesome
 * Cada categoria tem um ícone e uma cor associada
 */
export const categoryIcons: Record<string, { icon: string; color: string }> = {
  'Web Security': { icon: 'fa-shield-halved', color: 'text-blue-500' },
  'Architecture': { icon: 'fa-building', color: 'text-purple-500' },
  'Intelligence': { icon: 'fa-eye', color: 'text-green-500' },
  'Network Security': { icon: 'fa-network-wired', color: 'text-orange-500' },
  'Cryptography': { icon: 'fa-key', color: 'text-yellow-500' },
  'Malware': { icon: 'fa-bug', color: 'text-red-500' },
  'Compliance': { icon: 'fa-file-contract', color: 'text-indigo-500' },
  'Incident Response': { icon: 'fa-triangle-exclamation', color: 'text-pink-500' },
  'Forensics': { icon: 'fa-magnifying-glass', color: 'text-cyan-500' },
  'Cloud Security': { icon: 'fa-cloud', color: 'text-sky-500' },
  'Mobile Security': { icon: 'fa-mobile-screen', color: 'text-teal-500' },
  'IoT Security': { icon: 'fa-microchip', color: 'text-amber-500' },
  'Threat Intelligence': { icon: 'fa-brain', color: 'text-violet-500' },
  'Penetration Testing': { icon: 'fa-user-secret', color: 'text-rose-500' },
  'Security Awareness': { icon: 'fa-graduation-cap', color: 'text-emerald-500' },
};

/**
 * Mapeamento de ícones por nome (fallback para compatibilidade com sistema antigo)
 */
export const iconMap: Record<string, { icon: string; color: string }> = {
  'Shield': { icon: 'fa-shield-halved', color: 'text-blue-500' },
  'Lock': { icon: 'fa-lock', color: 'text-purple-500' },
  'Eye': { icon: 'fa-eye', color: 'text-green-500' },
  'Key': { icon: 'fa-key', color: 'text-yellow-500' },
  'Bug': { icon: 'fa-bug', color: 'text-red-500' },
  'Network': { icon: 'fa-network-wired', color: 'text-orange-500' },
  'Cloud': { icon: 'fa-cloud', color: 'text-sky-500' },
  'Search': { icon: 'fa-magnifying-glass', color: 'text-cyan-500' },
};

/**
 * Retorna o ícone Font Awesome apropriado baseado na categoria ou nome do ícone
 */
export function getArticleIcon(category: string, iconName?: string): { icon: string; color: string } {
  // Primeiro tenta pela categoria
  if (categoryIcons[category]) {
    return categoryIcons[category];
  }
  
  // Depois tenta pelo nome do ícone
  if (iconName && iconMap[iconName]) {
    return iconMap[iconName];
  }
  
  // Fallback padrão
  return { icon: 'fa-shield-halved', color: 'text-primary' };
}
