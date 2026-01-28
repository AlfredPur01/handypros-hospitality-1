import { motion } from "framer-motion";
import cloud from "@/assets/cloud.png";
import banner from "@/assets/banner.png";
import hot from "@/assets/hot.png";
import fifty from "@/assets/fifty.png";
import anchor from "@/assets/anchor.png";
import leftImage from "@/assets/left-image.png";
import darkDecor from "@/assets/dark-decor.png";
import star from "@/assets/star.png";

const FlightSearch = () => {
  return (
    <section className="p-20 bg-background relative overflow-hidden">
      <div className="container rounded-2xl mx-auto px-8 bg-[#F5E0D0]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Decorative Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[500px] hidden lg:block"
          >
            <img src={cloud} alt="" className="absolute top-0 left-0 w-32 opacity-80" />
            <img src={banner} alt="" className="absolute top-20 left-20 w-24" />
            <img src={hot} alt="" className="absolute top-10 right-20 w-16" />
            <img src={fifty} alt="" className="absolute bottom-40 left-10 w-20" />
            <img src={anchor} alt="" className="absolute bottom-32 left-32 w-16" />
            <img
              src={leftImage}
              alt="Accommodation preview"
              className="absolute bottom-0 left-0 w-80 rounded-2xl"
            />
          </motion.div>

          {/* Right Stay Search Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h2 className="section-title mb-8">
              Find Your Perfect Stay
            </h2>

            {/* Form */}
            <div className="bg-background border border-border rounded-2xl p-6 space-y-4 shadow-lg relative z-10">

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="City or area"
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">
                    Property Type
                  </label>
                  <input
                    type="text"
                    placeholder="Apartment, Studio, Suite"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">
                    Check-in Date
                  </label>
                  <input type="date" className="form-input" />
                </div>

                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">
                    Check-out Date
                  </label>
                  <input type="date" className="form-input" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">
                    Guests
                  </label>
                  <input
                    type="number"
                    placeholder="Number of guests"
                    className="form-input"
                    min="1"
                  />
                </div>

                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">
                    Nightly Budget
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="10000"
                    className="w-full mt-3"
                  />
                </div>
              </div>

              <button className="btn-primary w-full mt-4">
                CHECK AVAILABILITY
              </button>
            </div>

            {/* Decorative elements */}
            <img
              src={darkDecor}
              alt=""
              className="absolute -bottom-10 -right-10 w-20 opacity-50"
            />
            <img
              src={star}
              alt=""
              className="absolute bottom-20 -right-20 w-12 opacity-60"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FlightSearch;
