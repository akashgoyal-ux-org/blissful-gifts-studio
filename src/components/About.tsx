import { Card, CardContent } from "@/components/ui/card";
import { Heart, Award, Users, Sparkles } from "lucide-react";
import giftCollection from "@/assets/gift-collection.jpg";

const stats = [
  { icon: Heart, number: "500+", label: "Happy Clients" },
  { icon: Award, number: "3+", label: "Years Experience" },
  { icon: Users, number: "50+", label: "Corporate Partners" },
  { icon: Sparkles, number: "1000+", label: "Gifts Wrapped" }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-blush/30 to-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Crafting Memories,
              <span className="block text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
                One Gift at a Time
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Enfold Bliss, we believe that the presentation of a gift is just as important as the gift itself. 
              Our passion lies in transforming ordinary packages into extraordinary experiences that create 
              lasting memories and express heartfelt emotions.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Founded with a vision to bring joy and elegance to every celebration, we specialize in artisan 
              gift wrapping, custom packaging solutions, and creating magical moments that unfold with each 
              carefully crafted detail.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="border-border/50 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-4 text-center">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="relative">
              <img 
                src={giftCollection} 
                alt="Our story" 
                className="rounded-2xl shadow-elegant w-full"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-gradient-to-br from-accent to-primary opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-accent opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;