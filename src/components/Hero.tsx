import { Car } from "lucide-react";
import { useState, useEffect } from "react";
import storefrontImage from "@/assets/a1-plaza-liquors-storefront-waldorf-md.jpg";
import counterImage from "@/assets/a1-plaza-liquors-counter-lottery-waldorf.jpg";
import beerCoolerImage from "@/assets/a1-plaza-liquors-beer-cooler-selection.jpg";
import wineAisleImage from "@/assets/a1-plaza-liquors-wine-aisle-waldorf.jpg";

const Hero = () => {
  const interiorImages = [
    { src: counterImage, alt: "A1 Plaza Liquors checkout counter with lottery machine in Waldorf MD" },
    { src: beerCoolerImage, alt: "Cold beer and seltzer selection at A1 Plaza Liquors Waldorf" },
    { src: wineAisleImage, alt: "Wine aisle with red, white, and sparkling wines at A1 Plaza Liquors" }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % interiorImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [interiorImages.length]);

  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-stretch gap-10">
          <div className="w-full lg:max-w-xl bg-card border border-border/60 rounded-3xl p-8 md:p-10 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm font-medium text-foreground">
              <Car className="h-4 w-4 text-secondary" />
              <span>Now with Drive-Thru Service</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-foreground">
              Liquor store in Waldorf with <span className="text-primary">drive-thru</span>, lottery, beer, wine & spirits.
            </h1>

<div className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed space-y-4">
  <p>
    A1 Plaza Liquors & Wines offers a drive-thru window, cold beer, wine, tequila, whiskey, vodka, rum, mixers, snacks, tobacco, vape and a self-serve lottery machine at 3215 Plaza Way inside Charles County Plaza Shopping Center.
  </p>
  <p>
    You'll also find an on-site bitcoin machine and ATM for quick cash, all run by a woman- and minority-owned small business serving Waldorf for over 25 years.
  </p>
</div>

          </div>

          <div className="w-full lg:flex-1 flex flex-col gap-6">
            <div className="relative w-full aspect-[4/3] max-w-2xl mx-auto lg:max-w-none rounded-3xl overflow-hidden border border-border/60">
              <img
                src={storefrontImage}
                alt="A1 Plaza Liquors and Wines storefront at 3215 Plaza Way Waldorf MD with drive-thru service"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="relative w-full aspect-[4/3] max-w-2xl mx-auto lg:max-w-none rounded-3xl overflow-hidden border border-border/60">
              <img
                src={interiorImages[currentImageIndex].src}
                alt={interiorImages[currentImageIndex].alt}
                className="h-full w-full object-cover transition-opacity duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;