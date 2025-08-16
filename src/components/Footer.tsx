import { Gift, Heart, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                <Gift className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold">Enfold Bliss</h3>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Transforming ordinary gifts into extraordinary experiences through artisan wrapping, 
              custom packaging, and thoughtful presentation that creates lasting memories.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Custom Gift Wrapping</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Luxury Gift Boxes</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Wedding Packages</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Corporate Gifts</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Consultation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-primary-foreground transition-colors">Portfolio</a></li>
              <li><a href="#about" className="hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-primary-foreground transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Enfold Bliss Gifting Studio. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <Heart className="w-4 h-4 text-accent" />
            <span className="text-primary-foreground/60 text-sm">Made with love in Mumbai</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;