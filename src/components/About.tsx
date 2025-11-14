import { Award, Users, MapPin } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Quality Selection",
    description: "Carefully curated products from trusted brands and local favorites"
  },
  {
    icon: Users,
    title: "Expert Staff",
    description: "Knowledgeable team ready to help you find exactly what you need"
  },
  {
    icon: MapPin,
    title: "Local & Convenient",
    description: "Proudly serving Waldorf and Southern Maryland communities"
  }
];

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">
              Waldorf's Trusted Liquor Store Since Day One
            </h2>
            <p className="text-lg text-muted-foreground">
              A1 Plaza Liquors and Wine is your premier destination for quality alcoholic beverages, tobacco, and vape products in Waldorf, Maryland. We pride ourselves on offering an exceptional selection and personalized service that sets us apart from other liquor stores in the area.
            </p>
            <p className="text-lg text-muted-foreground">
              Whether you're looking for a special bottle of wine, premium spirits, craft beer, or vape supplies, our knowledgeable staff is here to help you find exactly what you need. We're committed to being Waldorf's #1 choice for all your beverage and tobacco needs.
            </p>
          </div>
          
          <div className="space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;