import { useState } from "react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import spa from "@/assets/spa.jpg";
import house from "@/assets/house.jpg";
import offRoad from "@/assets/carousel/off-road.jpg";
import masked from "@/assets/masked.png";

const options = ["Accomodation", "Restaurant", "Spa", "Book a Ride"];

const ExploreOptions = () => {
  const [activeOption, setActiveOption] = useState(2); // Spa is default

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Options */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Logo and Title */}
            <div className="flex items-center gap-3">
              <img src={logo} alt="HandPros" className="w-10 h-10" />
              <span className="font-bold text-xl">HandPros Hospitality</span>
            </div>

            <div>
              <span className="font-pacifico text-primary text-lg">Vacation Agency</span>
              <h2 className="section-title mt-2">Explore Options</h2>
            </div>

            {/* Option List */}
            <ul className="space-y-4">
              {options.map((option, index) => (
                <motion.li
                  key={option}
                  whileHover={{ x: 10 }}
                  onClick={() => setActiveOption(index)}
                  className={`flex items-center gap-3 text-lg cursor-pointer transition-colors ${
                    activeOption === index ? "text-foreground font-semibold" : "text-muted-foreground"
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-current" />
                  {option}
                </motion.li>
              ))}
            </ul>

            {/* Feature Image */}
            <div className="relative">
              <img
                src={spa}
                alt="Spa experience"
                className="w-full h-64 object-cover rounded-2xl"
              />
              <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="font-semibold">84K Happy Adventures</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-muted h-40 rounded-2xl overflow-hidden">
                  {/* Placeholder for friends image */}
                  <div className="w-full h-full bg-gradient-to-br from-amber-100 to-amber-200" />
                </div>
                <img
                  src={house}
                  alt="Contemporary house"
                  className="w-full h-48 object-cover rounded-2xl"
                />
              </div>
              <div className="pt-8 space-y-4">
                <img
                  src={offRoad}
                  alt="Off road adventure"
                  className="w-full h-56 object-cover rounded-2xl"
                />
                <div className="relative">
                  <img
                    src={masked}
                    alt="Travel destination"
                    className="w-full h-40 object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-foreground text-background p-6 rounded-2xl max-w-sm"
            >
              <p className="text-sm">
                No one shall be subjected to arbitrary arrest or detention, arrest or exile.Everyone is entitled in full detention.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExploreOptions;
