import { motion } from "framer-motion";
import { CheckCircle, Car, Plane } from "lucide-react";
import morocco from "@/assets/morocco.jpg";
import bookNow from "@/assets/book-now.png";

const PopularDestinations = () => {
  return (
    <section className="py-20 bg-background -z-50 static">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <div className="w-full hidden md:block">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col justify-center items-center align-text-bottom  pb-40">
              <h1 className='text-3xl md:text-5xl font-black mt-9 font-Barlow '>Featured Accommodations</h1>
              <p className='mt-3 text-sm md:text-2xl font-justAnotherHand'>Curated Stays by Handypros</p>
            </div>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 lg:px-20 pb-16 items-start">
          {/* Left - Featured Destination */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-center md:text-left">
              <h3 className="font-black text-3xl md:text-4xl font-barlow text-[#040404]">Modern Serviced Apartment</h3>
              <p className="mt-4 font-justAnotherHand text-2xl">Fully Serviced <span className="text-[#1C77F3] font-semibold">• Secure Environment</span></p>
            </div>
            <img
              src={morocco}
              alt="Morocco destination"
              className="mt-6 w-full h-[400px] md:w-2/3 rounded-lg object-cover md:object-fill md:h-100 h-50"
            />
          </motion.div>

          {/* Right - Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center "
          >
            <p className="mb-10 max-w-xl">
              Enjoy a stylish, fully furnished apartment designed for both short and extended stays. From cozy interiors to reliable utilities, every detail is tailored for a stress-free living experience.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex flex-col gap-8">
                <div>
                  <Plane size={40} className='bg-black text-white p-2 rounded-md mb-3' />
                  <h2 className='font-bold text-xl'>Fully furnished living space</h2>
                  <p className='text-sm'>From planning to exploration, we ensure every moment is seamless, safe and memorable.</p>
                </div>

                <div className="mt-4">
                  <Car size={40} className='bg-black text-white p-2 rounded-md mb-3' />
                  <h2 className="font-bold text-xl">24/7 power & water supply</h2>
                  <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sunt tempore omnis, amet hic ab accusamus dignissimos aspernatur vero asperiores.</p>
                </div>

                <button className="mt-10 cursor-pointer flex justify-self-start"><a href="" className='bg-[#2BBBE6] px-8 py-4 rounded-sm text-black font-extrabold transition-all hover:bg-gray-800 font-barlow'>Book This Stay</a></button>
              </div>
              {/* Book Now Button */}
              <div className="flex justify-center items-center">
                <img src={bookNow} alt="Book Now" className='max-w-full h-auto' />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
