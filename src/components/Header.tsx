import { Clock, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=A1+Plaza+Liquors+and+Wines+Waldorf+MD";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex flex-col gap-4 py-4 md:h-20 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-3 md:flex-1">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground font-bold text-lg shadow-md">
            A1
          </div>
          <div className="leading-tight">
            <h1 className="text-xl font-bold text-foreground">A1 Plaza Liquors & Wines</h1>
            <span className="text-sm text-muted-foreground">3215 Plaza Way, Waldorf, MD 20603</span>
          </div>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#products" className="text-sm font-medium transition-colors hover:text-primary">
            Products
          </a>
          <a href="#drive-thru" className="text-sm font-medium transition-colors hover:text-primary">
            Drive-Thru
          </a>
          <a href="#about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </a>
          <a href="#location" className="text-sm font-medium transition-colors hover:text-primary">
            Location
          </a>
        </nav>

        <div className="flex w-full flex-col gap-3 md:w-auto md:items-end">
          <div className="flex flex-col gap-1 text-xs text-muted-foreground md:text-right md:text-sm">
            <div className="flex items-center gap-2 text-foreground md:justify-end">
              <Clock className="h-4 w-4" aria-hidden="true" />
              <span className="font-medium">Store Hours</span>
            </div>
            <div className="space-y-0.5 leading-tight md:space-y-0">
              <p>Mon–Thu 10:00am – 10:00pm</p>
              <p>Fri–Sat 10:00am – 11:00pm</p>
              <p>Sun 11:00am – 9:00pm</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center md:justify-end">
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-center gap-2 shadow-sm sm:w-auto"
              asChild
            >
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                <MapPin className="h-4 w-4" />
                <span>Get Directions</span>
              </a>
            </Button>
            <Button
              variant="default"
              size="sm"
              className="w-full justify-center gap-2 shadow-md sm:w-auto"
              asChild
            >
              <a href="tel:+12406072336">
                <Phone className="h-4 w-4" />
                <span>(240) 607-2336</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;