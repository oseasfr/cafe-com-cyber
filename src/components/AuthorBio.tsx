  import { Link } from 'react-router-dom';
  import ScrollReveal from "@/components/ScrollReveal";

  interface AuthorBioProps {
    author: string;
    date: string;
    readTime: string;
    authorImage?: string; // Imagem do autor é opcional
  }

  export const AuthorBio = ({ author, date, readTime, authorImage }: AuthorBioProps) => {
    return (
      <ScrollReveal>
        <div className="flex items-center space-x-4 mb-8">
          {authorImage && (
            <img
              src={authorImage}
              alt={`Foto de ${author}`}
              className="w-12 h-12 rounded-full object-cover"
            />
          )}
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-foreground">{author}</span>
            <div className="flex items-center text-sm text-muted-foreground space-x-2">
              <span>{date}</span>
              <span>•</span>
              <span>{readTime}</span>
            </div>
          </div>
        </div>
      </ScrollReveal>
    );
  };
