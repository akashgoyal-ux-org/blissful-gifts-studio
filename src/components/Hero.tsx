import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-gifts.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <div className="flex items-center space-x-2 mb-6">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-warm-gray text-sm uppercase tracking-wide">Gifting Studio</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Enfold Every
            <span className="block text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
              Moment in Bliss
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Transform your gifts into unforgettable experiences with our artisan wrapping services, 
            custom gift boxes, and thoughtfully curated presentations that speak from the heart.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('services')}
              className="bg-black text-white hover:bg-gray-800 transition-all duration-300 group"
            >
              Explore Our Services
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('portfolio')}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Heart className="mr-2 w-4 h-4" />
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 animate-pulse"></div>
      <div className="absolute bottom-32 right-32 w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;