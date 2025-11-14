import { MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">A1 Plaza Liquors & Wine</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Waldorf, Maryland's premier liquor store serving the community with quality products and exceptional service.
            </p>
            <p className="text-xs text-muted-foreground">
              © 2024 A1 Plaza Liquors and Wine. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#products" className="hover:text-primary transition-colors">Our Products</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#location" className="hover:text-primary transition-colors">Location & Hours</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                <span>A1 Plaza, Waldorf, MD 20601</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                <span>(301) XXX-XXXX</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                <span>Open 7 Days a Week</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-xs text-muted-foreground">
          <p>Liquor Store Waldorf MD | Wine Shop Waldorf | Beer Store Waldorf | Tobacco Shop Waldorf | Vape Store Waldorf Maryland</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;