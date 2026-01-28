import { motion } from "framer-motion";
import { FaUmbrellaBeach, FaMountain, FaShip, FaCampground } from "react-icons/fa"
import destination1 from "@/assets/Holidays/holiday1.png"
import destination2 from "@/assets/Holidays/Image5.png"
import destination3 from "@/assets/Holidays/holiday1.png"
import destination4 from "@/assets/Holidays/holiday2.png"
import destination5 from "@/assets/Holidays/Image5.png"

const holidays = [
  {
    title: "VIP Beaches",
    image: destination1,
  },
  {
    title: "Mountain Walks",
    image: destination2,
  },
  {
    title: "Luxury Yachts",
    image: destination3,
  },
  {
    title: "Recreational Camps",
    image: destination4,
  },
  {
    title: "Recreational Camps",
    image: destination5,
  },
];

const features = [
  {
    title: "VIP Beaches",
    icon: FaUmbrellaBeach,
    description:
      "Experience exclusive beachfront accommodations with premium amenities and serene ocean views.",
  },
  {
    title: "Mountain Walks",
    icon: FaMountain,
    description:
      "Relax in cozy lodges nestled in the mountains while enjoying breathtaking trails and scenery.",
  },
  {
    title: "Luxury Yachts",
    icon: FaShip,
    description:
      "Stay on high-end yachts offering comfort, privacy, and unparalleled maritime experiences.",
  },
  {
    title: "Recreational Camps",
    icon: FaCampground,
    description:
      "Discover unique camping stays with modern comforts, perfect for family adventures and retreats.",
  },
];

const BestHolidays = () => {
  return (
    <section className="mt-10 pl-5 pr-14">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center md:mb-28 mb-16"
        >
          <span className="font-justAnotherHand text-3xl">Stay With Us</span>
          <h2 className="font-extrabold text-3xl md:text-4xl font-barlow">Premium Stays & Experiences</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Explore our curated accommodations and destinations designed for comfort, luxury, and unforgettable memories.
          </p>
        </motion.div>

        {/* Background */}
        <div className="w-full px-6 md:px-10 bg-center bg-cover rounded-b-[32px]" style={{ backgroundImage: `url("/popularDestinations.jpg")` }}>

          {/* Image row */}
          <div className="flex relative md:bottom-20 flex-wrap md:flex-nowrap justify-center gap-4 md:gap-5 items-center md:px-20">
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
              </motion.div>
            ))}
          </div>

          {/* Description */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10 px-4 md:px-10 pb-20">
            {features.map(({ title, icon: Icon, description }) => (
              <div key={title} className="flex flex-col text-center md:text-left">

                {/* Icon */}
                <div className="mb-4 flex justify-center md:justify-start">
                  <Icon className="text-4xl text-[#040404]" />
                </div>

                <h2 className="font-bold text-xl mb-2 font-Barlow">{title}</h2>
                <p className="text-base font-Barlow">{description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default BestHolidays;
