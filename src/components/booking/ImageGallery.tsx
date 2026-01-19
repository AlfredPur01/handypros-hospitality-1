import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const ImageGallery = ({ images = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images.length) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="container mx-auto px-4 -mt-8 relative z-10"
    >
      <div className="bg-card rounded-2xl shadow-card p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Main Image */}
          <div className="md:col-span-6 relative group">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="aspect-[4/3] rounded-xl overflow-hidden relative"
            >
              <img
                src={images[activeIndex]}
                alt="Package image"
                className="w-full h-full object-cover"
              />

              {/* Navigation */}
              <button
                onClick={() => setActiveIndex((i) => Math.max(0, i - 1))}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() =>
                  setActiveIndex((i) => Math.min(images.length - 1, i + 1))
                }
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          {/* Thumbnails */}
          <div className="md:col-span-6 grid grid-cols-2 gap-3">
            {images.map((img, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveIndex(idx)}
                className={`aspect-[4/3] rounded-xl overflow-hidden relative ${idx === activeIndex
                    ? "ring-2 ring-primary ring-offset-2"
                    : ""
                  }`}
              >
                <img
                  src={img}
                  alt="Thumbnail"
                  className="w-full h-full object-cover"
                />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ImageGallery;

