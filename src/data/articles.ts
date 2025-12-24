export const articles = [
  {
    id: "fundamentos-de-seguranca-em-apis-rest",
    title: "Fundamentos de Segurança em APIs REST",
    description: "Aprenda as melhores práticas para proteger suas APIs contra ataques comuns como injection, broken authentication e muito mais.",
    author: "Ana Santos",
    readTime: "8 min",
    category: "Web Security",
    icon: "Shield", // Adicionei o ícone aqui
    gradient: "from-primary/20 to-accent/20",
    imageUrl: "https://seusite.com/caminho/para/imagem1.png",
    content: `
# Fundamentos de Segurança em APIs REST

A segurança em APIs REST é fundamental para proteger dados sensíveis. Aqui estão os pontos-chave:

## Autenticação e Autorização
Use **JWT** (JSON Web Tokens) ou **OAuth 2.0** para autenticar usuários. Certifique-se de que cada solicitação tem permissão para acessar o recurso.

## Validação de Entrada
Sempre valide e sanitize todos os dados de entrada para evitar ataques como **SQL Injection** e **Cross-Site Scripting (XSS)**.

## Limitação de Taxa (Rate Limiting)
Implemente limites de requisições para prevenir ataques de negação de serviço (DDoS) e força bruta.
`,
  },
  {
    id: "zero-trust-o-futuro-da-seguranca-corporativa",
    title: "Zero Trust: O Futuro da Segurança Corporativa",
    description: "Entenda o modelo Zero Trust e como implementar uma arquitetura de segurança baseada na filosofia 'nunca confie, sempre verifique'.",
    author: "Carlos Lima",
    readTime: "12 min",
    category: "Architecture",
    icon: "Lock",
    gradient: "from-accent/20 to-primary/20",
    imageUrl: "https://seusite.com/caminho/para/imagem2.png",
    content: `
# Zero Trust: O Futuro da Segurança Corporativa

O modelo de segurança **Zero Trust** se baseia no princípio de que nenhuma entidade, dentro ou fora da rede, deve ser automaticamente confiável.

## Princípios Chave
-   **Verificar sempre:** Autentique e autorize cada usuário e dispositivo.
-   **Menor privilégio:** Conceda o mínimo de acesso necessário para completar uma tarefa.
-   **Segmente a rede:** Divida a rede em pequenas áreas de segurança para isolar ameaças.
`,
  },
  {
    id: "osint-tecnicas-de-investigacao-digital",
    title: "OSINT: Técnicas de Investigação Digital",
    description: "Explore ferramentas e metodologias de Open Source Intelligence para investigações de segurança e análise de ameaças.",
    author: "Maria Silva",
    readTime: "15 min",
    category: "Intelligence",
    icon: "Eye",
    gradient: "from-primary/20 to-cyber-glow/20",
    imageUrl: "https://seusite.com/caminho/para/imagem3.png",
    content: `
# OSINT: Técnicas de Investigação Digital

**Open Source Intelligence (OSINT)** é o processo de coletar informações de fontes públicas. É uma habilidade crucial para analistas de segurança.

## Fontes Comuns
-   Redes sociais e fóruns.
-   Registros públicos e bancos de dados de empresas.
-   Motores de busca e ferramentas de mapeamento.

## Ferramentas Úteis
-   **Maltego:** Para visualizar conexões entre dados.
-   **Recon-ng:** Um framework de reconhecimento.
-   **Shodan:** Motor de busca para dispositivos conectados à internet.
`,
  },
];
