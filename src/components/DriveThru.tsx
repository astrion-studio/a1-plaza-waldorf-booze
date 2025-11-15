import { Car, Clock, ShoppingBag, Zap } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const DriveThru = () => {
  return (
    <section id="drive-thru" className="py-20 bg-muted/20">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm font-medium text-foreground mb-4">
            <Car className="h-4 w-4 text-secondary" />
            <span>Exclusive Feature</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Drive-Thru <span className="text-primary">Liquor Window</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Grab cold beer, wine, spirits, mixers, snacks, tobacco and vape without leaving your car. Fast in-and-out for after-work stops and bad weather.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="border transition-all">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Quick Service</h3>
              <p className="text-muted-foreground text-sm">
                No need to park or get out. Stay in your car and we'll serve you fast.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border transition-all">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto">
                <ShoppingBag className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Full Selection</h3>
              <p className="text-muted-foreground text-sm">
                Access to cold beer, wine, spirits, mixers, snacks, tobacco, and vape products.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border transition-all">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Convenient Hours</h3>
              <p className="text-muted-foreground text-sm">
                Open late every day. Drive through until 10pm weekdays, 11pm weekends.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border transition-all">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto">
                <Car className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Easy Parking</h3>
              <p className="text-muted-foreground text-sm">
                Bright shopping center with spacious parking. Easy in-and-out access.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DriveThru;
