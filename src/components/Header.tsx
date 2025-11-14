import { Phone, MapPin, Clock } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-primary">A1 Plaza</h1>
          <span className="text-sm text-muted-foreground">Liquors & Wine</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#products" className="text-sm font-medium transition-colors hover:text-primary">
            Products
          </a>
          <a href="#about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </a>
          <a href="#location" className="text-sm font-medium transition-colors hover:text-primary">
            Location
          </a>
        </nav>

        <Button variant="default" size="sm" className="hidden md:flex items-center gap-2">
          <Phone className="h-4 w-4" />
          <span>Call Us</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;