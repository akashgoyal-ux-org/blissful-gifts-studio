import { Button } from "@/components/ui/button";
import { Gift, Heart, Star } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <Gift className="w-5 h-5 text-primary-foreground" />
          </div>
          <h1 className="text-xl font-bold text-foreground">Enfold Bliss</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
          <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Portfolio</a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </nav>
        
        <Button variant="default" className="bg-black text-white hover:shadow-elegant transition-all duration-300">
        Book Consultation
      </Button>
      </div>
    </header>
  );
};

export default Header;