import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
          className="text-center text-black mb-8"
        >
          <p className="text-3xl font-light font-justAnotherHand">Explore Recent Upcoming Travels</p>
          <h2 className="text-2xl md:text-4xl font-black font-barlow">Featured Tour Packages</h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(index)}
              className={`tab-item rounded-full ${activeTab === index ? "bg-[#1c77f3] text-background" : "bg-background text-foreground hover:bg-muted"
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
                    <Link to="/booking-details">
                      <button className="btn-primary w-full text-sm py-2">
                        Book Now
                      </button>
                    </Link>
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
          <div className="flex flex-col lg:flex-row justify-center items-center gap-6 mt-8 text-center lg:text-left w-4/5 mx-auto">
            <div className="flex justify-between items-center gap-3">
              <p className="font-semibold">Excellent</p>
              <img src="/Yellow.png" alt="" />
            </div>

            <p className="max-w-md text-sm font-Barlow text-center">
              Carefully curated travel packages with everything you need for an
              unforgettable journey. All packages include flights,
              accommodation, and exclusive experiences.
            </p>

            <div className="logo flex items-center justify-center">
              <img src="/logo.png" alt="logo" width={40} height={40} />
              <h3 className="text-xl font-bold ml-2">
                HandPros Hospitality
              </h3>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TourPackages;
