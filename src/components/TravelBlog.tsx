import { motion } from "framer-motion";
import moroccoImg from "@/assets/carousel/morocco.jpg";
import londonImg from "@/assets/carousel/london.png";
import chaoImg from "@/assets/carousel/chao.png";
import japanImg from "@/assets/carousel/japan.png";
import parisImg from "@/assets/carousel/paris.png";
import offRoadImg from "@/assets/carousel/off-road.jpg";

const packages = [
  { name: "Morocco", price: "$5,000", image: moroccoImg },
  { name: "London", price: "$4,200", image: londonImg },
  { name: "Chao", price: "$3,500", image: chaoImg },
  { name: "Japan", price: "$6,000", image: japanImg },
  { name: "Paris", price: "$4,800", image: parisImg },
  { name: "Off Road", price: "$2,500", image: offRoadImg },
];

const TravelBlog = () => {
  return (
    <section className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-pacifico text-primary text-lg">Vacation Agen c</span>
          <h2 className="section-title mt-2">Travel Blog & Insights</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Explore stories, tips, and inspiration from around the world. Discover destinations, travel guides, and experiences that help you plan your next unforgettable journey.
          </p>
        </motion.div>

        {/* Infinite Scroll Carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: [0, -1680] }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              },
            }}
            className="flex gap-6"
          >
            {[...packages, ...packages, ...packages].map((pkg, index) => (
              <div key={index} className="flex-shrink-0 w-[280px]">
                <div className="card-destination bg-background">
                  <div className="relative">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-background text-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {pkg.price}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-2">{pkg.name}</h3>
                    <p className="text-sm text-muted-foreground mb-1">
                      <span className="font-medium">Destination:</span>
                    </p>
                    <p className="text-sm text-foreground font-medium mb-3">{pkg.name}</p>
                    <p className="text-xs text-muted-foreground mb-4">
                      Accomodations, Flights, Transfers, Tours and Excursions, Activities
                    </p>
                    <button className="btn-primary w-full text-sm py-2">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TravelBlog;
