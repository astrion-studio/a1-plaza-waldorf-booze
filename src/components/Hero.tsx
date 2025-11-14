import { Button } from "./ui/button";
import { MapPin, Phone, Car } from "lucide-react";
import heroImage from "@/assets/hero-liquor.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[650px] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/85 to-background/30" />
      </div>
      
      <div className="container relative z-10 py-20">
        <div className="max-w-3xl space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 text-sm font-medium text-foreground">
            <Car className="h-4 w-4 text-secondary" />
            <span>Now with Drive-Thru Service</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            Liquor store in Waldorf with{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              drive-thru
            </span>
            , lottery, beer, wine & spirits.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            A1 Plaza Liquors & Wines offers a drive-thru liquor window, cold beer, wine, tequila, whiskey, vodka, rum, mixers, snacks, tobacco, vape and self-serve lottery machine at 3215 Plaza Way.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              size="lg" 
              className="text-lg shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <a href="tel:+12406072336">
                <Phone className="mr-2 h-5 w-5" />
                Call now
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg shadow-md hover:shadow-lg transition-all"
              asChild
            >
              <a href="https://www.google.com/maps/search/?api=1&query=A1+Plaza+Liquors+and+Wines+Waldorf+MD" target="_blank" rel="noopener noreferrer">
                <MapPin className="mr-2 h-5 w-5" />
                Get directions
              </a>
            </Button>
          </div>
          
          <div className="pt-6 flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="font-medium">3215 Plaza Way, Waldorf, MD 20603</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              <span className="font-medium">(240) 607-2336</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;