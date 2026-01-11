import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, BookOpen, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CursosSection = () => {
  // Função para scroll suave com offset do header
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, anchorId: string) => {
    e.preventDefault();
    const element = document.getElementById(anchorId);
    if (element) {
      const headerHeight = 64; // h-16 = 64px (altura do header)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  return (
    <section id="cursos" className="py-20 relative overflow-hidden">
      {/* Background Effects - Mesmo do CommunitySection */}
      <div className="absolute inset-0 bg-gradient-dark"></div>
      <div className="absolute inset-0 bg-gradient-cyber opacity-30"></div>
      
      {/* Animated Grid Background - Mesmo do CommunitySection */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Cabeçalho */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Cursos
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Listarei nesta página diversos cursos online gratuitos em diversas áreas do conhecimento sobre Cibersegurança.
            </p>
          </div>

          {/* Índice */}
          <Card className="mb-8 border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors">
                <BookOpen className="h-5 w-5" />
                Índice
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>
                  <a 
                    href="#1-escola-virtual-gov" 
                    onClick={(e) => handleAnchorClick(e, '1-escola-virtual-gov')}
                    className="text-primary hover:underline cursor-pointer"
                  >
                    Escola Virtual Gov
                  </a>
                </li>
                <li>
                  <a 
                    href="#2-hackers-do-bem" 
                    onClick={(e) => handleAnchorClick(e, '2-hackers-do-bem')}
                    className="text-primary hover:underline cursor-pointer"
                  >
                    Hackers do Bem
                  </a>
                </li>
                <li>
                  <a 
                    href="#3-senai---sp" 
                    onClick={(e) => handleAnchorClick(e, '3-senai---sp')}
                    className="text-primary hover:underline cursor-pointer"
                  >
                    Senai - SP
                  </a>
                </li>
                <li>
                  <a 
                    href="#4-curso-em-vídeo" 
                    onClick={(e) => handleAnchorClick(e, '4-curso-em-vídeo')}
                    className="text-primary hover:underline cursor-pointer"
                  >
                    Curso em Vídeo
                  </a>
                </li>
                <li>
                  <a 
                    href="#5-cisco-networking-academy" 
                    onClick={(e) => handleAnchorClick(e, '5-cisco-networking-academy')}
                    className="text-primary hover:underline cursor-pointer"
                  >
                    Cisco Networking Academy
                  </a>
                </li>
                <li>
                  <a 
                    href="#6-linux-foundation" 
                    onClick={(e) => handleAnchorClick(e, '6-linux-foundation')}
                    className="text-primary hover:underline cursor-pointer"
                  >
                    Linux Foundation
                  </a>
                </li>
                <li>
                  <a 
                    href="#7-udemy" 
                    onClick={(e) => handleAnchorClick(e, '7-udemy')}
                    className="text-primary hover:underline cursor-pointer"
                  >
                    Udemy
                  </a>
                </li>
              </ol>
            </CardContent>
          </Card>

          {/* Cursos */}
          <div className="space-y-8">
            {/* 1. Escola Virtual Gov */}
            <Card id="1-escola-virtual-gov" className="border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group">
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">1. Escola Virtual Gov</CardTitle>
                <CardDescription>
                  Uma iniciativa{" "}
                  <a
                    href="https://www.enap.gov.br/pt/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    ENAP
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Accordion configurado para ficar sempre aberto quando tiver múltiplos links */}
                <Accordion type="single" collapsible className="w-full" defaultValue="cis-controls">
                  <AccordionItem value="cis-controls">
                    <AccordionTrigger>1.1 CIS Controls</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 ml-4">
                        <li>
                          <a
                            href="https://www.escolavirtual.gov.br/curso/1153"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline inline-flex items-center gap-1"
                          >
                            Fundamentos da Segurança Cibernética - Introdução ao CIS Controls
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.escolavirtual.gov.br/curso/1073"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline inline-flex items-center gap-1"
                          >
                            Segurança Cibernética: Controles 1 a 6 do CIS Controls
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.escolavirtual.gov.br/curso/1132"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline inline-flex items-center gap-1"
                          >
                            Segurança Cibernética: Controles 7 a 12 do CIS Controls
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.escolavirtual.gov.br/curso/1154"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline inline-flex items-center gap-1"
                          >
                            Segurança Cibernética: Controles 13 a 18 do CIS Controls
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="mt-4">
                  <a
                    href="#cursos"
                    onClick={(e) => {
                      e.preventDefault();
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                      });
                    }}
                    className="text-xs text-muted-foreground hover:text-primary inline-flex items-center gap-1 cursor-pointer"
                  >
                    <ChevronDown className="h-3 w-3 rotate-180" />
                    Voltar ao topo
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* 2. Hackers do Bem */}
            <Card id="2-hackers-do-bem" className="border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group">
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">2. Hackers do Bem</CardTitle>
                <CardDescription>
                  O programa Hackers do Bem visa promover a segurança cibernética por meio de iniciativas educativas e ações de impacto social.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="https://hackersdobem.org.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  Hackers do Bem
                  <ExternalLink className="h-4 w-4" />
                </a>
                <div className="mt-4">
                  <a
                    href="#cursos"
                    onClick={(e) => {
                      e.preventDefault();
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                      });
                    }}
                    className="text-xs text-muted-foreground hover:text-primary inline-flex items-center gap-1 cursor-pointer"
                  >
                    <ChevronDown className="h-3 w-3 rotate-180" />
                    Voltar ao topo
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* 3. Senai - SP */}
            <Card id="3-senai---sp" className="border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group">
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">3. Senai - SP</CardTitle>
                <CardDescription>Cursos voltados para Cibersegurança.</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="https://sp.senai.br/curso/por-dentro-da-seguranca-cibernetica/102411?unidade=150"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  Por dentro da Segurança Cibernética
                  <ExternalLink className="h-4 w-4" />
                </a>
                <div className="mt-4">
                  <a
                    href="#cursos"
                    onClick={(e) => {
                      e.preventDefault();
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                      });
                    }}
                    className="text-xs text-muted-foreground hover:text-primary inline-flex items-center gap-1 cursor-pointer"
                  >
                    <ChevronDown className="h-3 w-3 rotate-180" />
                    Voltar ao topo
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* 4. Curso em Vídeo */}
            <Card id="4-curso-em-vídeo" className="border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group">
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">4. Curso em Vídeo</CardTitle>
                <CardDescription>
                  O canal Curso em Vídeo no YouTube oferece tutoriais gratuitos de informática, programação e tecnologias diversas.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="https://www.youtube.com/playlist?list=PLHz_AreHm4dlaTyjolzCFC6IjLzO8O0XV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  Playlist - Segurança da Informação
                  <ExternalLink className="h-4 w-4" />
                </a>
                <div className="mt-4">
                  <a
                    href="#cursos"
                    onClick={(e) => {
                      e.preventDefault();
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                      });
                    }}
                    className="text-xs text-muted-foreground hover:text-primary inline-flex items-center gap-1 cursor-pointer"
                  >
                    <ChevronDown className="h-3 w-3 rotate-180" />
                    Voltar ao topo
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* 5. Cisco Networking Academy */}
            <Card id="5-cisco-networking-academy" className="border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group">
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">5. Cisco Networking Academy</CardTitle>
                <CardDescription>Listagem de cursos gratuitos da Cisco na área de segurança.</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="https://skillsforall.com/catalog?category=course&subject+areas=cybersecurity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  Cisco Networking Academy
                  <ExternalLink className="h-4 w-4" />
                </a>
                <div className="mt-4">
                  <a
                    href="#cursos"
                    onClick={(e) => {
                      e.preventDefault();
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                      });
                    }}
                    className="text-xs text-muted-foreground hover:text-primary inline-flex items-center gap-1 cursor-pointer"
                  >
                    <ChevronDown className="h-3 w-3 rotate-180" />
                    Voltar ao topo
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* 6. Linux Foundation */}
            <Card id="6-linux-foundation" className="border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group">
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">6. Linux Foundation</CardTitle>
                <CardDescription>Catálogo de certificações gratuitas da Linux Foundation.</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="https://training.linuxfoundation.org/resources/?_sft_topic_area=cybersecurity&_sft_content_type=free-course"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  Linux Foundation
                  <ExternalLink className="h-4 w-4" />
                </a>
                <div className="mt-4">
                  <a
                    href="#cursos"
                    onClick={(e) => {
                      e.preventDefault();
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                      });
                    }}
                    className="text-xs text-muted-foreground hover:text-primary inline-flex items-center gap-1 cursor-pointer"
                  >
                    <ChevronDown className="h-3 w-3 rotate-180" />
                    Voltar ao topo
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* 7. Udemy */}
            <Card id="7-udemy" className="border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group">
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">7. Udemy</CardTitle>
                <CardDescription>
                  Página já com o filtro de preço "Gratuito" para os cursos de cibersegurança.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="https://www.udemy.com/courses/it-and-software/network-and-security/?price=price-free&sort=popularity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  Udemy
                  <ExternalLink className="h-4 w-4" />
                </a>
                <div className="mt-4">
                  <a
                    href="#cursos"
                    onClick={(e) => {
                      e.preventDefault();
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                      });
                    }}
                    className="text-xs text-muted-foreground hover:text-primary inline-flex items-center gap-1 cursor-pointer"
                  >
                    <ChevronDown className="h-3 w-3 rotate-180" />
                    Voltar ao topo
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CursosSection;
