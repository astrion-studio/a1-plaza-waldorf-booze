import { Phone } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground font-bold text-lg shadow-md">
            A1
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground leading-none">A1 Plaza</h1>
            <span className="text-xs text-muted-foreground">Liquors & Wines</span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
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

        <Button 
          variant="default" 
          size="sm" 
          className="hidden md:flex items-center gap-2 shadow-md"
          asChild
        >
          <a href="tel:+12406072336">
            <Phone className="h-4 w-4" />
            <span>(240) 607-2336</span>
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;