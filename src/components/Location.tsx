import { MapPin, Phone, Clock } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const Location = () => {
  return (
    <section id="location" className="py-20 bg-muted/20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Visit Us in Waldorf</h2>
          <p className="text-xl text-muted-foreground">
            Located at 3215 Plaza Way in a bright shopping center with easy parking
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
                Waldorf, MD 20603
              </p>
              <Button variant="outline" size="lg" className="w-full" asChild>
                <a href="https://www.google.com/maps/search/?api=1&query=A1+Plaza+Liquors+and+Wines+Waldorf+MD" target="_blank" rel="noopener noreferrer">
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
                <a href="tel:+12406072336">
                  (240) 607-2336
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3103.8745423!2d-76.9284251!3d38.6120838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7339f8a8e8f8f%3A0x8f8f8f8f8f8f8f8f!2s3215%20Plaza%20Way%2C%20Waldorf%2C%20MD%2020603!5e0!3m2!1sen!2sus!4v1234567890"
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