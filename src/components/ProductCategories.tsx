import { Wine, Beer, Cigarette, Wind, Flame, Coffee, ShoppingBag, Ticket } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const categories = [
  {
    icon: Flame,
    title: "Premium Spirits",
    items: ["Tequila", "Whiskey", "Vodka", "Rum", "Gin"],
    description: "Top-shelf and affordable spirits for every occasion",
    keywords: "liquor store Waldorf MD"
  },
  {
    icon: Wine,
    title: "Wine Selection",
    items: ["Red Wine", "White Wine", "Rosé", "Sparkling"],
    description: "Curated wines from around the world",
    keywords: "wine shop Waldorf"
  },
  {
    icon: Beer,
    title: "Cold Beer & Seltzer",
    items: ["Singles", "6-Packs", "Cases", "Craft Beer"],
    description: "Always cold, wide variety of local and domestic favorites",
    keywords: "beer store Waldorf"
  },
  {
    icon: Coffee,
    title: "Mixers & More",
    items: ["Soda", "Juice", "Tonic", "Energy Drinks", "Ice"],
    description: "Everything you need for the perfect cocktail",
    keywords: "mixers Waldorf MD"
  },
  {
    icon: Cigarette,
    title: "Tobacco Products",
    items: ["Cigarettes", "Cigars", "Papers", "Wraps"],
    description: "Quality tobacco products and accessories",
    keywords: "tobacco shop Waldorf"
  },
  {
    icon: Wind,
    title: "Vape Products",
    items: ["Vapes", "E-Liquids", "Pods", "Accessories"],
    description: "Latest vape products and e-cigarettes",
    keywords: "vape store Waldorf MD"
  },
  {
    icon: ShoppingBag,
    title: "Snacks",
    items: ["Chips", "Nuts", "Candy", "Chocolate"],
    description: "Quick snacks and munchies for any craving",
    keywords: "convenience store Waldorf"
  },
  {
    icon: Ticket,
    title: "Lottery",
    items: ["Self-Serve Machine", "Scratch-Offs", "Draw Games"],
    description: "Try your luck with our lottery machine",
    keywords: "lottery Waldorf MD"
  }
];

const ProductCategories = () => {
  return (
    <section id="products" className="py-20 bg-muted/20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Carry</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your one-stop shop for drinks, spirits, wine, cold beer, tobacco, vape, snacks, mixers and lottery in Waldorf, Maryland
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="border transition-all">
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-muted-foreground pt-2">{category.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;