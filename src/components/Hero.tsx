import { Button } from "./ui/button";
import { MapPin, Clock } from "lucide-react";
import heroImage from "@/assets/hero-liquor.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Waldorf's Premier
            <span className="text-primary block">Liquor Destination</span>
          </h1>
          
          <p className="text-xl text-muted-foreground">
            Your trusted local source for premium liquor, fine wines, craft beer, tobacco, and vape products in Waldorf, Maryland.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg">
              <MapPin className="mr-2 h-5 w-5" />
              Visit Our Store
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              <Clock className="mr-2 h-5 w-5" />
              Store Hours
            </Button>
          </div>
          
          <div className="pt-4 flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="font-medium">Serving Waldorf, MD & Southern Maryland</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;