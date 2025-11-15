import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DriveThru from "@/components/DriveThru";
import ProductCategories from "@/components/ProductCategories";
import About from "@/components/About";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <DriveThru />
        <ProductCategories />
        <About />
        <Location />
      </main>
      <Footer />
      
      {/* Structured Data for Local SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LiquorStore",
          "name": "A1 Plaza Liquors and Wines",
          "image": "https://a1plazaliquors.com/images/store-front.jpg",
          "description": "A woman- and minority-owned liquor store in Waldorf with a drive-thru window, cold beer, wine, tequila, whiskey, vodka, rum, mixers, snacks, tobacco, vape, bitcoin machine, ATM and lottery. Easy parking at 3215 Plaza Way in Charles County Plaza Shopping Center.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "3215 Plaza Way",
            "addressLocality": "Waldorf",
            "addressRegion": "MD",
            "postalCode": "20603",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "38.6120838",
            "longitude": "-76.9262364"
          },
          "url": "https://a1plazaliquors.com",
          "telephone": "+1-240-607-2336",
          "priceRange": "$$",
          "paymentAccepted": "Cash, Credit Card, Debit Card, NFC Mobile Payments",
          "amenityFeature": [
            {
              "@type": "LocationFeatureSpecification",
              "name": "Drive-thru service"
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Cold beer"
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Parking lot"
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Self-serve lottery machine"
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "On-site bitcoin machine"
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "ATM available"
            }
          ],
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
              "opens": "10:00",
              "closes": "22:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Friday", "Saturday"],
              "opens": "10:00",
              "closes": "23:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Sunday",
              "opens": "10:00",
              "closes": "21:00"
            }
          ],
          "servesCuisine": "Beverages",
          "areaServed": {
            "@type": "City",
            "name": "Waldorf",
            "containedIn": "Maryland"
          }
        })}
      </script>
    </div>
  );
};

export default Index;