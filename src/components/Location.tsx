import { MapPin, Phone, Clock } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const Location = () => {
  return (
    <section id="location" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Visit Us in Waldorf</h2>
          <p className="text-xl text-muted-foreground">
            Conveniently located in Waldorf, Maryland
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Address</h3>
              <p className="text-muted-foreground">
                A1 Plaza<br />
                Waldorf, MD 20601
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Get Directions
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-muted-foreground">
                Call us for product<br />
                availability & questions
              </p>
              <Button variant="outline" size="sm" className="w-full">
                (301) XXX-XXXX
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Hours</h3>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>Mon-Thu: 9AM - 10PM</p>
                <p>Fri-Sat: 9AM - 11PM</p>
                <p>Sunday: 10AM - 9PM</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden border-2 bg-muted">
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            <MapPin className="h-12 w-12 mr-2" />
            <span className="text-lg">Map integration area - Add your Google Maps embed here</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;