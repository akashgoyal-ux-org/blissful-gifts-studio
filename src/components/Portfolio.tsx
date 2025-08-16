import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import giftCollection from "@/assets/gift-collection.jpg";
import corporateGifts from "@/assets/corporate-gifts.jpg";
import trousseauHamper from "@/assets/trousseau-hamper.jpg";
import corporateHampers from "@/assets/corporate-hampers.jpg";

const portfolioItems = [
  {
    image: giftCollection,
    title: "Birthday Celebration Collection",
    category: "Personal Gifts",
    description: "A vibrant collection of birthday gifts wrapped in coordinated themes with personalized touches."
  },
  {
    image: trousseauHamper,
    title: "Bridal Trousseau Collection",
    category: "Trousseau",
    description: "Luxurious trousseau packaging with traditional Indian elements and modern elegance for brides."
  },
  {
    image: corporateHampers,
    title: "Corporate Holiday Packages",
    category: "Corporate",
    description: "Elegant corporate gifts with custom branding and premium packaging for end-of-year appreciation."
  },
  {
    image: giftCollection,
    title: "Wedding Welcome Hampers",
    category: "Wedding",
    description: "Luxurious welcome gifts for wedding guests featuring local artisan products and custom wrapping."
  },
  {
    image: corporateGifts,
    title: "Festive Gift Hampers",
    category: "Festive",
    description: "Beautiful festive hampers celebrating Indian festivals with traditional sweets and modern touches."
  },
  {
    image: giftCollection,
    title: "Baby Shower Delights",
    category: "Baby",
    description: "Soft and tender packaging in pastel themes perfect for welcoming new arrivals."
  },
  {
    image: corporateGifts,
    title: "Graduation Achievement Set",
    category: "Milestone",
    description: "Sophisticated packaging celebrating academic achievements with elegant gold accents."
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the artistry and attention to detail that goes into every package we create. 
            Each project tells a unique story through thoughtful design and careful execution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border-border/50 hover:shadow-elegant transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="bg-blush text-primary">
                    {item.category}
                  </Badge>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;