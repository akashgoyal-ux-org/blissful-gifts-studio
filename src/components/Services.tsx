import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift, Package, Sparkles, Heart, Star, Crown } from "lucide-react";

const services = [
  {
    icon: Gift,
    title: "Custom Gift Wrapping",
    description: "Personalized wrapping with premium papers, ribbons, and embellishments tailored to your occasion.",
    features: ["Premium wrapping papers", "Silk ribbons & bows", "Custom tags & cards", "Seasonal themes"]
  },
  {
    icon: Package,
    title: "Luxury Gift Boxes",
    description: "Curated gift boxes and hampers for corporate clients and special celebrations.",
    features: ["Branded packaging", "Custom inserts", "Bulk orders", "Corporate solutions"]
  },
  {
    icon: Crown,
    title: "Wedding & Events",
    description: "Elegant packaging solutions for weddings, parties, and milestone celebrations.",
    features: ["Wedding favors", "Event themes", "Bulk wrapping", "Coordinated designs"]
  },
  {
    icon: Sparkles,
    title: "Surprise Reveals",
    description: "Multi-layered unwrapping experiences that build anticipation and create lasting memories.",
    features: ["Layered reveals", "Surprise elements", "Photo moments", "Memory keepsakes"]
  },
  {
    icon: Heart,
    title: "Romantic Packages",
    description: "Intimate and romantic presentations perfect for anniversaries, proposals, and special dates.",
    features: ["Rose petals", "Elegant boxes", "Love notes", "Romantic themes"]
  },
  {
    icon: Star,
    title: "Consultation Service",
    description: "One-on-one consultation to design the perfect presentation for your unique gift.",
    features: ["Personal consultation", "Design concepts", "Material selection", "Styling advice"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-blush/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From intimate personal gifts to grand corporate presentations, we craft each package 
            with the care and artistry your special moments deserve.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 border-border/50 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;