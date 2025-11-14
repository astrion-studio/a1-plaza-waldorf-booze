import Header from "@/components/Header";
import Hero from "@/components/Hero";
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
          "name": "A1 Plaza Liquors and Wine",
          "description": "Premium liquor store in Waldorf, Maryland offering liquor, wine, beer, tobacco, and vape products",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "A1 Plaza",
            "addressLocality": "Waldorf",
            "addressRegion": "MD",
            "postalCode": "20601",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "38.6312",
            "longitude": "-76.9394"
          },
          "url": "https://a1plazaliquors.com",
          "telephone": "(301)XXX-XXXX",
          "priceRange": "$$",
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
              "opens": "09:00",
              "closes": "22:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Friday", "Saturday"],
              "opens": "09:00",
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