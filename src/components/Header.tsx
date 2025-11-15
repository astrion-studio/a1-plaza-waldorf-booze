import { Clock, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";

const STORE_NAME = "A1 Plaza Liquors & Wines";
const STORE_ADDRESS = "3215 Plaza Way, Waldorf, MD 20603";
const PHONE_NUMBER_RAW = "+12406072336";
const PHONE_NUMBER_DISPLAY = "(240) 607-2336";
const STORE_HOURS = [
  { days: "Mon–Thu", hours: "10:00am – 10:00pm" },
  { days: "Fri–Sat", hours: "10:00am – 11:00pm" },
  { days: "Sun", hours: "11:00am – 9:00pm" },
];

const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${STORE_NAME} ${STORE_ADDRESS}`,
)}`;

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex flex-col gap-4 py-4 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-6">
        <div className="flex flex-col gap-3 md:justify-self-start">
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
              A1
            </div>
            <div className="leading-tight">
              <h1 className="text-xl font-bold text-foreground">{STORE_NAME}</h1>
              <span className="text-sm text-muted-foreground">{STORE_ADDRESS}</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-center gap-2 shadow-sm sm:w-auto"
              asChild
            >
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                <span>Get Directions</span>
              </a>
            </Button>
            <Button
              variant="default"
              size="sm"
              className="w-full justify-center gap-2 shadow-md sm:w-auto"
              asChild
            >
              <a href={`tel:${PHONE_NUMBER_RAW}`}>
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>{PHONE_NUMBER_DISPLAY}</span>
              </a>
            </Button>
          </div>
        </div>

        <nav className="hidden items-center gap-8 md:flex md:justify-center md:justify-self-center">
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

        <div className="flex w-full flex-col gap-1 text-xs text-muted-foreground md:items-end md:justify-self-end md:text-right md:text-sm">
          <div className="flex items-center gap-2 text-foreground md:justify-end">
            <Clock className="h-4 w-4" aria-hidden="true" />
            <span className="font-medium">Store Hours</span>
          </div>
          <div className="space-y-0.5 leading-tight md:space-y-0">
            {STORE_HOURS.map(({ days, hours }) => (
              <p key={days}>{`${days} ${hours}`}</p>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
