import { ChefHat, Facebook, Instagram, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container py-8 flex flex-col items-center text-center">
        <div className="flex items-center mb-4">
          <ChefHat className="h-6 w-6 mr-2 text-primary" />
          <span className="font-bold text-lg tracking-wider">ARDE</span>
        </div>
        <div className="flex space-x-4 mb-4">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram /></a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook /></a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter /></a>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} ARDE Restaurante. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};