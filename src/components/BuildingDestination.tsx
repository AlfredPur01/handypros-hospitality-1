import { motion } from "framer-motion";
import { Check } from "lucide-react";
import testimonials from "@/assets/testimonials.png";

const features = [
  "Trusted, local travel experts",
  "Real-time itinerary updates",
  "Various versions have evolved over",
  "Flexible, hassle-free bookings",
  "Trusted, local travel experts",
  "Real-time itinerary updates",
];

const BuildingDestination = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="text-primary font-medium">HandyPros</span>
              <h2 className="section-title mt-2">Building Destination to Get Things Done</h2>
              <p className="text-muted-foreground mt-4">
                No one shall be subjected to arbitrary arrest, detention or exile. Everyone is entitled in full equality.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <span className="text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            <button className="btn-primary">
              EXPLORE TRIP
            </button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={testimonials}
              alt="Happy travelers"
              className="w-full rounded-2xl"
            />
          </motion.div>
        </div>

        {/* Trust Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-lg font-semibold mb-8">
            Trusted By the highest performance teams at
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <span className="text-2xl font-bold text-muted-foreground">NISSAN</span>
            <span className="text-sm text-muted-foreground">MOTOR CORPORATION</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BuildingDestination;
