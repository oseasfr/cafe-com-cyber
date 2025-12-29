import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Lock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold">Café com Cyber</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary">Início</a>
              <a href="#artigos" className="hover:text-primary">Artigos</a>
              <a href="#ferramentas" className="hover:text-primary">Ferramentas</a>
              <a href="#comunidade" className="hover:text-primary">Comunidade</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Bem-vindo ao Café com Cyber
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Sua comunidade de Segurança da Informação. Compartilhe conhecimento, 
            aprenda com especialistas e fortaleça suas habilidades em cibersegurança.
          </p>
          <Button size="lg" className="gap-2">
            Explorar Conteúdo <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Articles Section */}
      <section id="artigos" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Artigos Recentes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-full h-48 bg-secondary rounded-md mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Título do Artigo {i}</h3>
                <p className="text-muted-foreground mb-4">
                  Breve descrição do artigo sobre segurança da informação...
                </p>
                <Button variant="outline" size="sm">Ler mais</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Password Generator Section */}
      <section id="ferramentas" className="py-16 bg-secondary/20 relative overflow-hidden">
        {/* Background Decorativo */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Lock className="w-4 h-4" />
              <span className="text-sm font-medium">Ferramenta de Segurança</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Gerador de Senhas Seguras</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Proteja suas contas com senhas geradas localmente no seu navegador.
            </p>
          </div>
          
          {/* Password Generator Component */}
          <div className="max-w-2xl mx-auto bg-card border rounded-lg p-8 shadow-lg">
            <PasswordGenerator />
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="comunidade" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Users className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl font-bold mb-6">Junte-se à Comunidade</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Conecte-se com profissionais de cibersegurança, compartilhe experiências 
              e aprenda com especialistas da área.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg">Participar</Button>
              <Button size="lg" variant="outline">Saiba mais</Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Sobre Nós</h2>
            <p className="text-lg text-muted-foreground mb-6">
              O Café com Cyber é uma iniciativa dedicada a democratizar o conhecimento 
              em Segurança da Informação. Nossa missão é criar um espaço colaborativo 
              onde profissionais, entusiastas e estudantes possam compartilhar experiências, 
              aprender juntos e fortalecer a comunidade de cibersegurança no Brasil.
            </p>
            <Button variant="outline" className="gap-2">
              Saiba mais <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Café com Cyber</h3>
              <p className="text-sm text-muted-foreground">
                Democratizando o conhecimento em Segurança da Informação.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary">Início</a></li>
                <li><a href="#artigos" className="text-muted-foreground hover:text-primary">Artigos</a></li>
                <li><a href="#ferramentas" className="text-muted-foreground hover:text-primary">Ferramentas</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Comunidade</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary">Discord</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">GitHub</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">LinkedIn</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-muted-foreground">contato@cafecomcyber.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 Café com Cyber. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

// Password Generator Component
const PasswordGenerator = () => {
  const [password, setPassword] = React.useState("");
  const [length, setLength] = React.useState(16);
  const [options, setOptions] = React.useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true
  });
  const [copied, setCopied] = React.useState(false);

  const generatePassword = () => {
    let chars = "";
    if (options.uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (options.lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (options.numbers) chars += "0123456789";
    if (options.symbols) chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    if (chars === "") {
      setPassword("Selecione pelo menos uma opção");
      return;
    }

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(newPassword);
    setCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        <input
          type="text"
          value={password}
          readOnly
          className="flex-1 px-4 py-3 border rounded-md bg-secondary/50 font-mono text-lg"
          placeholder="Sua senha aparecerá aqui"
        />
        <Button onClick={copyToClipboard} variant="outline">
          {copied ? "Copiado!" : "Copiar"}
        </Button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            Tamanho: {length}
          </label>
          <input
            type="range"
            min="8"
            max="32"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          {Object.entries(options).map(([key, value]) => (
            <label key={key} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={value}
                onChange={(e) => setOptions({ ...options, [key]: e.target.checked })}
                className="w-4 h-4"
              />
              <span className="capitalize">{key === "uppercase" ? "Maiúsculas" : key === "lowercase" ? "Minúsculas" : key === "numbers" ? "Números" : "Símbolos"}</span>
            </label>
          ))}
        </div>
      </div>

      <Button onClick={generatePassword} className="w-full" size="lg">
        Gerar Senha
      </Button>
    </div>
  );
};

export default Index;
