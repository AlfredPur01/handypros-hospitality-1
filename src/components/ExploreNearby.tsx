import { motion } from "framer-motion";
import { CheckCircle, Car, House } from "lucide-react";
import explore from "@/assets/explore.png";
import bookNow from "@/assets/book-now.png";

const ExploreNearby = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="section-title text-4xl md:text-5xl">Comfortable Stays</h2>
          <p className="font-justAnotherHand text-primary text-3xl md:text-4xl mt-2">
            Spaces that feel like home — wherever you are
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&h=800&fit=crop&q=80"
              alt="Modern serviced apartment interior"
              className="w-full rounded-2xl"
            />
          </motion.div>

          {/* Center - Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-muted-foreground leading-relaxed">
              At HandyPros Hospitality, we provide fully serviced apartments
              designed for comfort, privacy, and convenience. Whether you're
              staying for a few nights or an extended period, our spaces are
              crafted to give you a calm, secure, and premium living experience.
            </p>

            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Quality You Can Trust</h4>
                <p className="text-muted-foreground text-sm mt-1">
                  Clean, well-maintained apartments with reliable utilities,
                  secure environments, and professional support throughout your stay.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <House className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Flexible Living Options</h4>
                <p className="text-muted-foreground text-sm mt-1">
                  From short stays to long-term accommodation, we offer flexible
                  options that fit your lifestyle and schedule.
                </p>
              </div>
            </div>

            {/* Book Now Button */}
            <div className="pt-4">
              <button className="btn-primary flex items-center gap-3">
                VIEW AVAILABLE STAYS
                <img src={bookNow} alt="" className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Right - Additional Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={bookNow}
              alt="Booking a serviced apartment"
              className="w-full rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExploreNearby;
