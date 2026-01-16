import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { FaStar } from "react-icons/fa"
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
            <div className="max-w-xl">
              <span className="text-3xl  font-justAnotherHand">HandyPros</span>
              <h2 className="font-extrabold text-[40px] mb-5">Building Destination to Get Things Done</h2>
              <p className="text-sm">
                No one shall be subjected to arbitrary arrest, detention or exile. Everyone is entitled in full equality.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-4 bg-cover bg-center px-6 md:px-16 py-10 md:py-12 w-full rounded-lg" style={{ backgroundImage: `url("/testimonials_bg.png")` }}>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div>
                    <FaStar color="gold" />
                  </div>
                  <span className="text-sm">{feature}</span>
                </motion.div>
              ))}
              <button className="px-6 py-4 mt-8 bg-[#2BBBE6] text-black rounded-md font-bold hover:cursor-pointer w-full sm:w-auto">
                EXPLORE TRIP
              </button>
            </div>
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
