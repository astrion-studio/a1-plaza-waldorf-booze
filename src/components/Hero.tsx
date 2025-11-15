import { Car } from "lucide-react";
import heroImage from "@/assets/hero-liquor.jpg";

const Hero = () => {
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

            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed space-y-4">
              <span className="block">
                A1 Plaza Liquors & Wines offers a drive-thru window, cold beer, wine, tequila, whiskey, vodka, rum, mixers, snacks, tobacco, vape and a self-serve lottery machine at 3215 Plaza Way inside Charles County Plaza Shopping Center.
              </span>
              <span className="block">
                You'll also find an on-site bitcoin machine and ATM for quick cash, all run by a woman- and minority-owned small business serving Waldorf for over 25 years.
              </span>
            </p>

          </div>

          <div className="w-full lg:flex-1 space-y-6">
            <div className="relative w-full max-w-2xl mx-auto lg:max-w-none rounded-3xl overflow-hidden border border-border/60">
              <img
                src={heroImage}
                alt="Interior of A1 Plaza Liquors & Wines"
                className="h-full w-full max-h-[340px] sm:max-h-[380px] lg:max-h-[440px] object-cover"
              />
            </div>
            <div className="relative w-full max-w-2xl mx-auto lg:max-w-none rounded-3xl overflow-hidden border border-border/60">
              <img
                src={heroImage}
                alt="A selection of spirits at A1 Plaza Liquors & Wines"
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