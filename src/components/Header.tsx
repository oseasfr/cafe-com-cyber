import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { cn } from "@/lib/utils";

interface HeaderProps {
  showPasswordGenerator?: boolean;
}

const Header = ({ showPasswordGenerator = false }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              Café com Cyber
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              to="/articles"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Artigos
            </Link>
            <Link
              to="/community"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Comunidade
            </Link>
            <Link
              to="/links-uteis"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Links Úteis
            </Link>
            {showPasswordGenerator && (
              <Link
                to="/gerador-de-senhas"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Gerador de Senhas
              </Link>
            )}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center">
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              onClick={toggleMenu}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </nav>
        </div>
      </div>
      <div
        className={cn(
          "fixed inset-0 top-14 z-50 grid h-[calc(100vh-3.5rem)] grid-flow-row auto-row
