import { Wine, Beer, Cigarette, Wind, Grape } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const categories = [
  {
    icon: Wine,
    title: "Premium Liquor",
    description: "Extensive selection of spirits, whiskey, vodka, rum, and more",
    keywords: "liquor store Waldorf MD"
  },
  {
    icon: Grape,
    title: "Fine Wines",
    description: "Curated collection of red, white, rosé, and sparkling wines",
    keywords: "wine shop Waldorf"
  },
  {
    icon: Beer,
    title: "Craft & Domestic Beer",
    description: "Wide variety of local craft beers and domestic favorites",
    keywords: "beer store Waldorf"
  },
  {
    icon: Cigarette,
    title: "Tobacco Products",
    description: "Quality tobacco products and smoking accessories",
    keywords: "tobacco shop Waldorf"
  },
  {
    icon: Wind,
    title: "Vape & E-Cigarettes",
    description: "Latest vape products, e-liquids, and accessories",
    keywords: "vape store Waldorf MD"
  }
];

const ProductCategories = () => {
  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Product Selection</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover Waldorf's most comprehensive selection of liquor, wine, beer, tobacco, and vape products
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="border-2 hover:border-primary transition-colors hover:shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                  <p className="text-xs text-primary font-medium">{category.keywords}</p>
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