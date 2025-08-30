import { Link } from 'react-router-dom';
import { articles } from '../../data/articles'; // Certifique-se de que o caminho está correto
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User } from "lucide-react";

export default function ArticlesArchive() {
  return (
    <>
      <Header />
      <main className="container mx-auto max-w-5xl px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">
          Todos os Artigos
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map(article => (
            <Link to={`/articles/${article.id}`} key={article.id}>
              <Card className="hover:shadow-cyber-soft transition-all duration-300 border-border/50 bg-card/50 backdrop-blur">
                <CardHeader>
                  <Badge variant="secondary" className="text-xs mb-2">
                    {article.category}
                  </Badge>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {article.description}
                  </p>
                  <div className="flex items-center text-xs text-muted-foreground mt-4">
                    <div className="flex items-center space-x-1 mr-4">
                      <User className="h-3 w-3" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
