import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { cn } from "@/lib/utils";

const Header = () => {
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
            <a
              href="links-uteis"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Links Úteis
            </a>
            <a
              href="gerador-de-senhas"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Gerador de Senhas
            </a>
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
          "fixed inset-0 top-14 z-50 grid h-[calc(100vh-3.5rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden",
          isMenuOpen ? "block bg-background" : "hidden"
        )}
      >
        <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold">Café com Cyber</span>
          </Link>
          <nav className="grid grid-flow-row auto-rows-max text-sm">
            <Link
              to="/articles"
              className="block py-2 text-sm font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Artigos
            </Link>
            <Link
              to="/community"
              className="block py-2 text-sm font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Comunidade
            </Link>
            <a
              href="links-uteis"
              className="block py-2 text-sm font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Links Úteis
            </a>
            <a
              href="gerador-de-senhas"
              className="block py-2 text-sm font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Gerador de Senhas
            </a>
          </nav>
          <Separator />
          <div className="flex flex-col space-y-2">
            <Link
              to="/em-construcao"
              className="block py-2 text-sm font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Login
            </Link>
          </div>
        </div>
        <Button
          variant="ghost"
          className="absolute right-4 top-4 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
          onClick={toggleMenu}
        >
          <X className="h-6 w-6" />
          <span className="sr-only">Close Menu</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
