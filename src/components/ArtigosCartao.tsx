import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

// Renomeado para ArtigosCartao e a prop para artigo
const ArtigosCartao = ({ artigo }) => {
  return (
    <Card className="flex flex-col justify-between border-border/50 bg-card/30 backdrop-blur">
      <CardHeader>
        <CardTitle className="text-lg">{artigo.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {artigo.description}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <Badge variant="secondary">{artigo.category}</Badge>
        {/* Rota e variável atualizadas */}
        <Link to={`/artigos/${artigo.id}`} className="flex justify-between w-full">
          <span className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
            Ler Artigo →
          </span>
        </Link>
      </CardFooter>
    </Card>
  );
};

// Renomeado o export
export default ArtigosCartao;
