import { Button } from "./ui/button";
import { MapPin, Phone, Car } from "lucide-react";
import heroImage from "@/assets/hero-liquor.jpg";

const Hero = () => {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-stretch gap-10">
          <div className="w-full lg:max-w-xl bg-card border border-border/60 shadow-xl rounded-3xl p-8 md:p-10 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 text-sm font-medium text-foreground">
              <Car className="h-4 w-4 text-secondary" />
              <span>Now with Drive-Thru Service</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-foreground">
              Liquor store in Waldorf with{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                drive-thru
              </span>
              , lottery, beer, wine & spirits.
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed">
              A1 Plaza Liquors & Wines offers a drive-thru liquor window, cold beer, wine, tequila, whiskey, vodka, rum, mixers, snacks, tobacco, vape and self-serve lottery machine at 3215 Plaza Way.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
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
            </div>

            <div className="pt-6 flex flex-wrap items-center gap-6 text-sm text-foreground">
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

          <div className="w-full lg:flex-1">
            <div className="relative w-full max-w-2xl mx-auto lg:max-w-none rounded-3xl overflow-hidden border border-border/60 shadow-2xl">
              <img
                src={heroImage}
                alt="Interior of A1 Plaza Liquors & Wines"
                className="h-full w-full max-h-[340px] sm:max-h-[380px] lg:max-h-[440px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;