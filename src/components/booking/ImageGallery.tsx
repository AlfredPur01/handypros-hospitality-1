import { motion } from "framer-motion";
import { Image, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const galleryImages = [
  { id: 1, color: "from-rose-400 to-orange-300", label: "Morocco - AFCON, Rabat" },
  { id: 2, color: "from-emerald-400 to-teal-500", label: "Garden View" },
  { id: 3, color: "from-amber-400 to-orange-500", label: "Desert Tour" },
  { id: 4, color: "from-blue-400 to-indigo-500", label: "City Night" },
];

const ImageGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
              className={`aspect-[4/3] rounded-xl bg-gradient-to-br ${galleryImages[activeIndex].color} flex items-center justify-center relative overflow-hidden`}
            >
              <Image className="w-16 h-16 text-white/50" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <span className="text-white font-medium">{galleryImages[activeIndex].label}</span>
              </div>
              <button
                onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveIndex(Math.min(galleryImages.length - 1, activeIndex + 1))}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          {/* Thumbnail Grid */}
          <div className="md:col-span-6 grid grid-cols-2 gap-3">
            {galleryImages.map((img, idx) => (
              <motion.button
                key={img.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveIndex(idx)}
                className={`aspect-[4/3] rounded-xl bg-gradient-to-br ${img.color} flex items-center justify-center relative overflow-hidden ${idx === activeIndex ? "ring-2 ring-primary ring-offset-2" : ""
                  }`}
              >
                <Image className="w-8 h-8 text-white/50" />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ImageGallery;
