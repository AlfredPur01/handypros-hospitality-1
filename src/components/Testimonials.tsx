import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Jane Chloe Sam",
    role: "Frequent Guest",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    quote: "Staying here was an absolute delight! The rooms were impeccable, the staff attentive, and every detail of my stay was thoughtfully arranged.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Adventure Traveler",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    quote: "From booking to checkout, the experience was seamless. The unique accommodations and curated activities made my stay unforgettable.",
  },
  {
    id: 3,
    name: "Sarah Williams",
    role: "Luxury Guest",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    quote: "Every detail was perfect—from the plush bedding to the local experiences arranged for me. This is my go-to place for premium stays!",
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Family Guest",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    quote: "Our family vacation was seamless. Kid-friendly rooms, fun activities, and comfortable accommodations made it a trip to remember.",
  },
  {
    id: 5,
    name: "Emily Parker",
    role: "Solo Traveler",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
    quote: "I felt safe, comfortable, and well-cared-for throughout my solo stay. The personalized touches truly enhanced the experience.",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = -2; i <= 2; i++) {
      let index = activeIndex + i;
      if (index < 0) index = testimonials.length + index;
      if (index >= testimonials.length) index = index - testimonials.length;
      result.push({ ...testimonials[index], position: i });
    }
    return result;
  };

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-justAnotherHand text-primary text-2xl">Guest Experiences</span>
          <h2 className="section-title mt-2">What Our Guests Say</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Hear from our valued guests about their stays, comfort, and unforgettable experiences at our properties.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative">
          {/* Avatar Row */}
          <div className="flex items-center justify-center gap-4 md:gap-8 mb-8">
            {getVisibleTestimonials().map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={false}
                animate={{
                  scale: testimonial.position === 0 ? 1.3 : Math.abs(testimonial.position) === 1 ? 0.9 : 0.7,
                  opacity: testimonial.position === 0 ? 1 : Math.abs(testimonial.position) === 1 ? 0.8 : 0.5,
                  zIndex: testimonial.position === 0 ? 10 : 5 - Math.abs(testimonial.position),
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`relative cursor-pointer`}
                onClick={() => {
                  const targetIndex = testimonials.findIndex(t => t.id === testimonial.id);
                  setActiveIndex(targetIndex);
                }}
              >
                <div className={`relative ${testimonial.position === 0 ? "w-28 h-28 md:w-32 md:h-32" : "w-16 h-16 md:w-20 md:h-20"}`}>
                  {testimonial.position === 0 && (
                    <>
                      <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-3 h-3">
                        <svg viewBox="0 0 24 24" className="w-full h-full text-muted-foreground">
                          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" />
                        </svg>
                      </div>
                      <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-3 h-3 rotate-180">
                        <svg viewBox="0 0 24 24" className="w-full h-full text-muted-foreground">
                          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" />
                        </svg>
                      </div>
                    </>
                  )}
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className={`w-full h-full rounded-full object-cover border-4 ${testimonial.position === 0
                      ? "border-primary shadow-xl"
                      : "border-background shadow-md"
                      }`}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Active Testimonial Info */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center max-w-2xl mx-auto"
            >
              {/* Rating */}
              <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Star className="w-4 h-4 fill-current" />
                {testimonials[activeIndex].rating}
              </div>

              {/* Name and Role */}
              <h3 className="text-xl font-bold text-foreground mb-1">
                {testimonials[activeIndex].name}
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                {testimonials[activeIndex].role}
              </p>

              {/* Quote */}
              <p className="text-muted-foreground leading-relaxed italic">
                "{testimonials[activeIndex].quote}"
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
