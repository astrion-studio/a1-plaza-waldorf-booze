import { MapPin, Phone, Clock } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { STORE_PHONE_DISPLAY, STORE_PHONE_URI } from "@/lib/contact";

const Location = () => {
  return (
    <section id="location" className="py-20 bg-muted/20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Visit Us in Waldorf</h2>
          <p className="text-xl text-muted-foreground">
            Find us inside Charles County Plaza Shopping Center at 3215 Plaza Way with easy parking, a bitcoin machine, and an ATM on site
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          <Card className="border transition-all">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Address</h3>
              <p className="text-muted-foreground leading-relaxed">
                3215 Plaza Way<br />
                Charles County Plaza Shopping Center<br />
                Waldorf, MD 20603
              </p>
              <Button variant="outline" size="lg" className="w-full" asChild>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=A1+Plaza+Liquors+and+Wines+Waldorf+MD"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="border transition-all">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Phone</h3>
              <p className="text-muted-foreground leading-relaxed">
                Call us for product<br />
                availability & questions
              </p>
              <Button variant="outline" size="lg" className="w-full" asChild>
                <a href={STORE_PHONE_URI}>
                  {STORE_PHONE_DISPLAY}
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="border transition-all">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Hours</h3>
              <div className="text-sm text-muted-foreground space-y-2 leading-relaxed">
                <p className="font-medium">Mon–Thu: 10:00am – 10:00pm</p>
                <p className="font-medium">Fri–Sat: 10:00am – 11:00pm</p>
                <p className="font-medium">Sunday: 11:00am – 9:00pm</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 aspect-video max-w-5xl mx-auto rounded-2xl overflow-hidden border">
          <iframe
            src="https://www.google.com/maps?q=3215+Plaza+Way,+Waldorf,+MD+20603&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="A1 Plaza Liquors & Wines Location"
          />
        </div>
      </div>
    </section>
  );
};

export default Location;