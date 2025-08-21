import { Download, FileText, Shield, AlertTriangle, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const DownloadsSection = () => {
  const downloadItems = [
    {
      id: 1,
      title: "Guia Completo de Segurança Digital",
      description: "Manual essencial com as melhores práticas de segurança para usuários e empresas",
      type: "PDF",
      size: "2.4 MB",
      downloads: 1247,
      category: "Iniciante",
      icon: Shield,
      color: "bg-cyber-blue/10 text-cyber-blue border-cyber-blue/20"
    },
    {
      id: 2,
      title: "Checklist de Resposta a Incidentes",
      description: "Lista de verificação completa para resposta rápida a incidentes de segurança",
      type: "PDF",
      size: "1.8 MB",
      downloads: 892,
      category: "Avançado",
      icon: AlertTriangle,
      color: "bg-amber-500/10 text-amber-500 border-amber-500/20"
    },
    {
      id: 3,
      title: "Kit de Ferramentas de Pentesting",
      description: "Compilação das principais ferramentas e comandos para testes de penetração",
      type: "PDF",
      size: "3.1 MB",
      downloads: 756,
      category: "Profissional",
      icon: Lock,
      color: "bg-red-400/10 text-red-400 border-red-400/20"
    },
    {
      id: 4,
      title: "Política de Senhas Corporativas",
      description: "Template de política de senhas para implementação em organizações",
      type: "DOCX",
      size: "856 KB",
      downloads: 634,
      category: "Empresarial",
      icon: FileText,
      color: "bg-blue-400/10 text-blue-400 border-blue-400/20"
    }
  ];

  const handleDownload = (item: typeof downloadItems[0]) => {
    // Simula download - em produção conectaria com backend
    console.log(`Downloading: ${item.title}`);
    
    // Criar um blob simulado para demonstração
    const content = `# ${item.title}\n\n${item.description}\n\nEste é um material educativo do Café com Cyber.`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `${item.title.toLowerCase().replace(/\s+/g, '-')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cyber-dark/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-mono">
            <span className="text-cyber-blue">&gt;</span> Downloads
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Materiais educativos gratuitos para fortalecer seus conhecimentos em cybersecurity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {downloadItems.map((item) => (
            <Card key={item.id} className="bg-cyber-dark/80 border-gray-700 hover:border-cyber-blue/50 transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-lg border ${item.color}`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-white text-xl mb-2 group-hover:text-cyber-blue transition-colors">
                        {item.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-cyber-blue border-cyber-blue/30">
                          {item.category}
                        </Badge>
                        <span className="text-gray-400 text-sm">
                          {item.type} • {item.size}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-gray-300 text-base leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Download className="w-4 h-4" />
                    <span>{item.downloads.toLocaleString()} downloads</span>
                  </div>
                  
                  <Button 
                    onClick={() => handleDownload(item)}
                    className="bg-cyber-blue hover:bg-cyber-blue/80 text-white font-semibold transition-all duration-300 hover:scale-105"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-cyber-blue/10 border border-cyber-blue/20 rounded-lg">
            <Shield className="w-5 h-5 text-cyber-blue" />
            <span className="text-gray-300">
              Todos os materiais são <span className="text-cyber-blue font-semibold">gratuitos</span> e 
              <span className="text-cyber-blue font-semibold"> verificados</span> pela comunidade
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadsSection;