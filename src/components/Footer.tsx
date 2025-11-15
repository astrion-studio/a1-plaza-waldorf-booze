import { MapPin, Phone, Clock } from "lucide-react";
import { STORE_PHONE_DISPLAY, STORE_PHONE_URI } from "@/lib/contact";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                A1
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">A1 Plaza Liquors & Wines</h3>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Waldorf's woman- and minority-owned liquor store with drive-thru, cold beer, wine, spirits, lottery, bitcoin machine, ATM, tobacco and vape. Serving the community with quality products for 25+ years in Charles County Plaza Shopping Center.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#products" className="hover:text-primary transition-colors">Our Products</a></li>
              <li><a href="#drive-thru" className="hover:text-primary transition-colors">Drive-Thru</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#location" className="hover:text-primary transition-colors">Location & Hours</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=A1+Plaza+Liquors+and+Wines+Waldorf+MD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  3215 Plaza Way, Waldorf, MD 20603
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                <a href={STORE_PHONE_URI} className="hover:text-primary transition-colors">
                  {STORE_PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                <span>Open 7 Days a Week</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center space-y-2">
          <p className="text-xs text-muted-foreground">
            Liquor Store Waldorf MD | Drive-Thru Liquor | Wine Shop Waldorf | Beer Store Waldorf | Tobacco Shop Waldorf | Vape Store Waldorf | Lottery Waldorf
          </p>
          <p className="text-xs text-muted-foreground">
            © 2025 A1 Plaza Liquors & Wines – Waldorf, MD. Please drink responsibly. Must be 21+ to purchase alcohol.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;