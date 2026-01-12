import { motion } from "framer-motion";
import { CheckCircle, Car } from "lucide-react";
import morocco from "@/assets/morocco.jpg";
import bookNow from "@/assets/book-now.png";

const PopularDestinations = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label">Vacation Agency</span>
          <h2 className="section-title mt-2">Popular Destinations</h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Featured Destination */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <span className="font-pacifico text-primary text-lg">Vacation Agency</span>
              <h3 className="text-3xl font-bold mt-2">Explore Morocco</h3>
              <p className="text-muted-foreground mt-2">
                Up Next: AFCON at Morocco December 22nd, 2025
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={morocco}
                alt="Morocco destination"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </motion.div>

          {/* Right - Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-muted-foreground leading-relaxed">
              Explore our handpicked destinations around the world. From tropical paradises to bustling citiies, your travel dreams crafted into unforgettable experiences, find your perfect getaway.
            </p>

            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Trusted Travel Guide</h4>
                <p className="text-muted-foreground text-sm mt-1">
                  From planning to exploration, we ensure every moment is seamless, safe and memorable.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Car className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Personalized Trips</h4>
                <p className="text-muted-foreground text-sm mt-1">
                  We customize detail to match your peace and passion.
                </p>
              </div>
            </div>

            {/* Book Now Button */}
            <div className="pt-4">
              <button className="btn-primary flex items-center gap-3">
                BOOK NOW
                <img src={bookNow} alt="" className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
