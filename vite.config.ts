import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode } ) => {
  // Carrega as variáveis de ambiente (útil para configurações avançadas)
  const env = loadEnv(mode, process.cwd(), '');

  return {
    // --- CORREÇÃO PRINCIPAL ---
    // Define o caminho base para o projeto. Essencial para o GitHub Pages.
    // Garante que os links para CSS e JS funcionem corretamente.
    base: "/cafe-com-cyber/",

    // --- OTIMIZAÇÃO DE PRODUÇÃO ---
    // Configurações para o processo de "build" (quando você publica o site)
    build: {
      // Melhora o desempenho dividindo o código em pedaços menores (chunks).
      // Isso faz com que o navegador carregue apenas o necessário para cada página,
      // acelerando o carregamento inicial.
      rollupOptions: {
        output: {
          manualChunks(id: string) {
            // Separa as bibliotecas grandes (como react) em um arquivo separado "vendor".
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          }
        }
      }
    },

    // --- CONFIGURAÇÕES ORIGINAIS MANTIDAS ---
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      // O lovable-tagger só será ativado em modo de desenvolvimento,
      // não afetando a versão final de produção.
      mode === 'development' && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        // Mantém o alias "@" para facilitar a importação de arquivos.
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
