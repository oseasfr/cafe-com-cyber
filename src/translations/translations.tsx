export type Language = 'pt' | 'en';

export type TranslationKey = 
  // Header
  | 'nav.home'
  | 'nav.articles'
  | 'nav.community'
  | 'nav.about'
  | 'nav.usefulLinks'
  | 'nav.passwordGenerator'
  // Hero Section
  | 'hero.title'
  | 'hero.subtitle'
  | 'hero.description'
  | 'hero.cta'
  // Articles Section
  | 'articles.title'
  | 'articles.subtitle'
  | 'articles.viewAll'
  | 'articles.readMore'
  // Community Section
  | 'community.title'
  | 'community.subtitle'
  | 'community.description'
  | 'community.join'
  // About Section
  | 'about.title'
  | 'about.description'
  | 'about.learnMore'
  // Password Generator
  | 'passwordGenerator.title'
  | 'passwordGenerator.subtitle'
  | 'passwordGenerator.analyzePassword'
  | 'passwordGenerator.analyzePlaceholder'
  | 'passwordGenerator.generatePassword'
  | 'passwordGenerator.length'
  | 'passwordGenerator.uppercase'
  | 'passwordGenerator.lowercase'
  | 'passwordGenerator.numbers'
  | 'passwordGenerator.symbols'
  | 'passwordGenerator.copy'
  | 'passwordGenerator.copied'
  | 'passwordGenerator.copiedDescription'
  | 'passwordGenerator.strength'
  | 'passwordGenerator.veryWeak'
  | 'passwordGenerator.weak'
  | 'passwordGenerator.fair'
  | 'passwordGenerator.good'
  | 'passwordGenerator.strong'
  | 'passwordGenerator.empty'
  | 'passwordGenerator.error'
  | 'passwordGenerator.strengthLabel'
  | 'passwordGenerator.crackTime'
  | 'passwordGenerator.selectCharType'
  // Common
  | 'common.loading'
  | 'common.error'
  | 'common.notFound'
  | 'common.backHome';

export const translations: Record<Language, Record<TranslationKey, string>> = {
  pt: {
    // Header
    'nav.home': 'Início',
    'nav.articles': 'Artigos',
    'nav.community': 'Comunidade',
    'nav.about': 'Sobre Nós',
    'nav.usefulLinks': 'Links Úteis',
    'nav.passwordGenerator': 'Gerador de Senhas',
    // Hero Section
    'hero.title': 'Café com Cyber',
    'hero.subtitle': 'Conteúdos diversos sobre Cybersecurity',
    'hero.description': 'Explore artigos, tutoriais e recursos sobre segurança da informação',
    'hero.cta': 'Explorar Artigos',
    // Articles Section
    'articles.title': 'Artigos Recentes',
    'articles.subtitle': 'Conteúdos sobre segurança da informação',
    'articles.viewAll': 'Ver Todos',
    'articles.readMore': 'Ler Mais',
    // Community Section
    'community.title': 'Comunidade',
    'community.subtitle': 'Participe da nossa comunidade',
    'community.description': 'Conecte-se com profissionais e entusiastas de segurança da informação',
    'community.join': 'Participar',
    // About Section
    'about.title': 'Sobre Nós',
    'about.description': 'O Café com Cyber é uma iniciativa dedicada a democratizar o conhecimento em Segurança da Informação. Nossa missão é criar um espaço colaborativo onde profissionais, entusiastas e estudantes possam compartilhar experiências, aprender juntos e fortalecer a comunidade de cibersegurança no Brasil.',
    'about.learnMore': 'Saiba mais',
    // Password Generator
    'passwordGenerator.title': 'Gerador de Senhas Seguras',
    'passwordGenerator.subtitle': 'Proteja suas contas com senhas geradas localmente no seu navegador.',
    'passwordGenerator.analyzePassword': 'Analisar Senha',
    'passwordGenerator.analyzePlaceholder': 'Digite uma senha para análise...',
    'passwordGenerator.generatePassword': 'Gerar Nova Senha',
    'passwordGenerator.length': 'Comprimento',
    'passwordGenerator.uppercase': 'Maiúsculas',
    'passwordGenerator.lowercase': 'Minúsculas',
    'passwordGenerator.numbers': 'Números',
    'passwordGenerator.symbols': 'Símbolos',
    'passwordGenerator.copy': 'Copiar',
    'passwordGenerator.copied': 'Copiado!',
    'passwordGenerator.copiedDescription': 'Senha copiada para a área de transferência.',
    'passwordGenerator.strength': 'Força',
    'passwordGenerator.veryWeak': 'Muito Fraca',
    'passwordGenerator.weak': 'Fraca',
    'passwordGenerator.fair': 'Razoável',
    'passwordGenerator.good': 'Boa',
    'passwordGenerator.strong': 'Forte',
    'passwordGenerator.empty': 'Vazia',
    'passwordGenerator.error': 'Erro',
    'passwordGenerator.strengthLabel': 'Força da Senha',
    'passwordGenerator.crackTime': 'Tempo estimado para quebrar',
    'passwordGenerator.selectCharType': 'Selecione pelo menos um tipo de caractere.',
    // Common
    'common.loading': 'Carregando...',
    'common.error': 'Erro',
    'common.notFound': 'Não encontrado',
    'common.backHome': 'Voltar ao início',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.articles': 'Articles',
    'nav.community': 'Community',
    'nav.about': 'About Us',
    'nav.usefulLinks': 'Useful Links',
    'nav.passwordGenerator': 'Password Generator',
    // Hero Section
    'hero.title': 'Café com Cyber',
    'hero.subtitle': 'Various content about Cybersecurity',
    'hero.description': 'Explore articles, tutorials and resources on information security',
    'hero.cta': 'Explore Articles',
    // Articles Section
    'articles.title': 'Recent Articles',
    'articles.subtitle': 'Content about information security',
    'articles.viewAll': 'View All',
    'articles.readMore': 'Read More',
    // Community Section
    'community.title': 'Community',
    'community.subtitle': 'Join our community',
    'community.description': 'Connect with information security professionals and enthusiasts',
    'community.join': 'Join',
    // About Section
    'about.title': 'About Us',
    'about.description': 'Café com Cyber is an initiative dedicated to democratizing knowledge in Information Security. Our mission is to create a collaborative space where professionals, enthusiasts and students can share experiences, learn together and strengthen the cybersecurity community in Brazil.',
    'about.learnMore': 'Learn more',
    // Password Generator
    'passwordGenerator.title': 'Secure Password Generator',
    'passwordGenerator.subtitle': 'Protect your accounts with passwords generated locally in your browser.',
    'passwordGenerator.analyzePassword': 'Analyze Password',
    'passwordGenerator.analyzePlaceholder': 'Enter a password for analysis...',
    'passwordGenerator.generatePassword': 'Generate New Password',
    'passwordGenerator.length': 'Length',
    'passwordGenerator.uppercase': 'Uppercase',
    'passwordGenerator.lowercase': 'Lowercase',
    'passwordGenerator.numbers': 'Numbers',
    'passwordGenerator.symbols': 'Symbols',
    'passwordGenerator.copy': 'Copy',
    'passwordGenerator.copied': 'Copied!',
    'passwordGenerator.copiedDescription': 'Password copied to clipboard.',
    'passwordGenerator.strength': 'Strength',
    'passwordGenerator.veryWeak': 'Very Weak',
    'passwordGenerator.weak': 'Weak',
    'passwordGenerator.fair': 'Fair',
    'passwordGenerator.good': 'Good',
    'passwordGenerator.strong': 'Strong',
    'passwordGenerator.empty': 'Empty',
    'passwordGenerator.error': 'Error',
    'passwordGenerator.strengthLabel': 'Password Strength',
    'passwordGenerator.crackTime': 'Estimated time to crack',
    'passwordGenerator.selectCharType': 'Select at least one character type.',
    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.notFound': 'Not found',
    'common.backHome': 'Back to home',
  },
};
