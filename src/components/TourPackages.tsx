import { useState } from "react";
import { motion } from "framer-motion";
import moroccoImg from "@/assets/carousel/morocco.jpg";
import londonImg from "@/assets/carousel/london.png";
import chaoImg from "@/assets/carousel/chao.png";
import japanImg from "@/assets/carousel/japan.png";
import parisImg from "@/assets/carousel/paris.png";
import offRoadImg from "@/assets/carousel/off-road.jpg";

const packages = [
  { name: "Morocco", image: moroccoImg },
  { name: "London", image: londonImg },
  { name: "Chao", image: chaoImg },
  { name: "Japan", image: japanImg },
  { name: "Paris", image: parisImg },
  { name: "Off Road", image: offRoadImg },
];

const tabs = [
  "Multi Holidays",
  "Sport Holidays",
  "Overwater Villa Holidays",
  "Luxury Holidays",
  "Skill Holidays",
];

const TourPackages = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-muted-foreground mb-2">Explore Recent Upcoming Travels</p>
          <h2 className="section-title">Featured Tour Packages</h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(index)}
              className={`tab-item rounded-full ${
                activeTab === index ? "bg-foreground text-background" : "bg-background text-foreground hover:bg-muted"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Package Cards Carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[...packages, ...packages].map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-[280px]"
              >
                <div className="card-destination bg-background">
                  <div className="relative">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-48 object-cover"
                    />
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
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Excellence Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <div className="flex items-center gap-2">
            <span className="text-green-500 font-bold text-lg">Excellent</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
          </div>
        </motion.div>

        <p className="text-center text-muted-foreground mt-4 max-w-2xl mx-auto">
          Carefully curated travel packages with everything you need for an unforgettable journey. All packages include flights, accommodation, and exclusive experiences.
        </p>
      </div>
    </section>
  );
};

export default TourPackages;
