import { motion } from "framer-motion";
import holiday1 from "@/assets/holiday1.png";
import holiday2 from "@/assets/holiday2.png";
import holiday5 from "@/assets/holiday5.png";

const holidays = [
  {
    title: "VIP Beaches",
    description: "No one shall be subjected to arbitrary arrest, detention or exile. Everyone is entitled in full detention.",
    image: holiday1,
  },
  {
    title: "Mountain Walks",
    description: "No one shall be subjected to arbitrary arrest, detention or exile. Everyone is entitled in full detention.",
    image: holiday2,
  },
  {
    title: "Luxury Yachts",
    description: "No one shall be subjected to arbitrary arrest, detention or exile. Everyone is entitled in full detention.",
    image: holiday1,
  },
  {
    title: "Recreational Camps",
    description: "No one shall be subjected to arbitrary arrest, detention or exile. Everyone is entitled in full detention.",
    image: holiday5,
  },
];

const BestHolidays = () => {
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
          <span className="font-pacifico text-primary text-lg">Vacation Agen c</span>
          <h2 className="section-title mt-2">The Best Holidays</h2>
        </motion.div>

        {/* Holiday Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {holidays.map((holiday, index) => (
            <motion.div
              key={holiday.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative mb-4 rounded-2xl overflow-hidden">
                <img
                  src={holiday.image}
                  alt={holiday.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <h3 className="font-bold text-lg mb-2">{holiday.title}</h3>
              <p className="text-sm text-muted-foreground">{holiday.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestHolidays;
