### Bem-Vindo ao Café com Cyber

#### Artigos, notícias e insights da comunidade de analistas com conhecimento em cybersecurity.
☕🔐
---

##### Estrutura do Projeto

```plaintext
├── index.html                     # Arquivo HTML principal
├── populate.html                  # Página auxiliar (popular dados/testes)
├── public/                        # Recursos públicos estáticos
│   ├── lovable-uploads/           # Uploads de imagens
│   │   ├── 5d9ff38a-d664-47c2-bd17-2ea73ba5f9d4.png   # Imagem enviada
│   │   └── readme.md              # Documentação dos uploads
│   ├── favicon.ico                # Ícone do site
│   ├── placeholder.svg            # Placeholder de imagem
│   └── robots.txt                 # Configuração para crawlers
├── src/                           # Código-fonte da aplicação
│   ├── components/                # Componentes React reutilizáveis
│   │   ├── ui/                    # Componentes de interface (shadcn/ui)
│   │   ├── ArticlesSection.tsx    # Seção de artigos de cybersegurança
│   │   ├── CommunitySection.tsx   # Seção da comunidade
│   │   ├── DownloadsSection.tsx   # Seção de downloads
│   │   ├── Footer.tsx             # Rodapé da aplicação
│   │   ├── Header.tsx             # Cabeçalho da aplicação
│   │   └── HeroSection.tsx        # Seção principal (hero)
│   ├── hooks/                     # Custom Hooks React
│   │   ├── use-mobile.ts          # Detecção de dispositivos móveis
│   │   └── use-toast.ts           # Sistema de notificações (toast)
│   ├── lib/                       # Utilitários e bibliotecas internas
│   │   └── utils.ts               # Funções utilitárias
│   ├── pages/                     # Páginas da aplicação
│   │   ├── Index.tsx              # Página inicial
│   │   ├── NotFound.tsx           # Página 404
│   │   └── UnderConstruction.tsx  # Página em construção
│   ├── App.backup.tsx             # Backup do componente App
│   ├── App.tsx                    # Componente raiz
│   ├── index.css                  # Estilos globais + Tailwind
│   ├── main.tsx                   # Ponto de entrada da aplicação
│   └── vite-env.d.ts              # Tipagens do Vite
├── package.json                   # Dependências e scripts
├── package-lock.json              # Lockfile npm
├── force-npm-lock                 # Fixação de lockfile (controle de versão)
├── sync-fix.txt                   # Anotações de correções/sync
├── components.json                # Configuração do shadcn/ui
├── eslint.config.js               # Configuração do ESLint
├── tailwind.config.ts             # Configuração do Tailwind CSS
├── postcss.config.js              # Configuração do PostCSS
├── tsconfig.json                  # Configuração TypeScript principal
├── tsconfig.app.json              # Configuração TS para app
├── tsconfig.node.json             # Configuração TS para Node
├── vite.config.ts                 # Configuração do Vite
├── _routes.json                   # Configuração de rotas (Pages/Deploy)
├── _tutorial.md                   # Documentação/tutorial interno
├── .gitignore                     # Arquivos ignorados pelo Git
└── README.md                      # Documentação do projeto
```
