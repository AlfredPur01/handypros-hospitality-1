import { motion } from "framer-motion";
import PackageCard from "./PackageCard";

const accommodationPackages = [
  {
    title: "Royal Moroccan Hotel",
    location: "Rabat, Morocco",
    price: 299,
    rating: 4.8,
    amenities: ["wifi", "meals", "pool"],
    features: ["5-star luxury hotel", "Sea view rooms", "Spa & wellness center"],
    gradient: "from-rose-400 to-pink-500",
  },
  {
    title: "Seaside Resort & Spa",
    location: "Casablanca, Morocco",
    price: 349,
    rating: 4.9,
    amenities: ["wifi", "meals", "transport"],
    features: ["Beachfront location", "All-inclusive meals", "Airport transfer"],
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    title: "Medina Heritage Riad",
    location: "Marrakech, Morocco",
    price: 199,
    rating: 4.7,
    amenities: ["wifi", "meals"],
    features: ["Traditional riad", "Rooftop terrace", "Authentic Moroccan breakfast"],
    gradient: "from-amber-400 to-orange-500",
  },
];

const restaurantPackages = [
  {
    title: "Atlas Mountain View",
    location: "Atlas, Morocco",
    price: 89,
    rating: 4.6,
    amenities: ["meals"],
    features: ["Panoramic views", "Traditional cuisine", "Private dining"],
    gradient: "from-emerald-400 to-teal-500",
  },
  {
    title: "Desert Oasis Restaurant",
    location: "Merzouga, Morocco",
    price: 79,
    rating: 4.5,
    amenities: ["meals", "transport"],
    features: ["Desert dining experience", "Camel rides included", "Sunset dinner"],
    gradient: "from-orange-400 to-red-500",
  },
  {
    title: "Coastal Seafood House",
    location: "Essaouira, Morocco",
    price: 99,
    rating: 4.8,
    amenities: ["meals"],
    features: ["Fresh seafood", "Ocean views", "Wine pairing available"],
    gradient: "from-blue-400 to-indigo-500",
  },
];

const ridePackages = [
  {
    title: "Desert Safari Tour",
    location: "Sahara, Morocco",
    price: 149,
    rating: 4.9,
    amenities: ["transport", "meals"],
    features: ["4x4 adventure", "Overnight camp", "Stargazing"],
    gradient: "from-yellow-400 to-amber-500",
  },
  {
    title: "City Tour Package",
    location: "Fes, Morocco",
    price: 59,
    rating: 4.4,
    amenities: ["transport"],
    features: ["Guided tour", "Historic medina", "Local guide"],
    gradient: "from-purple-400 to-violet-500",
  },
  {
    title: "Mountain Expedition",
    location: "Toubkal, Morocco",
    price: 189,
    rating: 4.7,
    amenities: ["transport", "meals"],
    features: ["Trekking included", "Professional guide", "Equipment provided"],
    gradient: "from-green-400 to-emerald-500",
  },
  {
    title: "Coastal Drive",
    location: "Agadir, Morocco",
    price: 79,
    rating: 4.5,
    amenities: ["transport"],
    features: ["Scenic route", "Beach stops", "Photo opportunities"],
    gradient: "from-sky-400 to-cyan-500",
  },
];

const PackagesSection = () => {
  return (
    <div className="space-y-12">
      {/* Accommodation Packages */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-display font-semibold text-foreground">
            Accommodation Packages
          </h2>
          <motion.button
            whileHover={{ x: 5 }}
            className="text-sm text-primary hover:underline"
          >
            View All →
          </motion.button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {accommodationPackages.map((pkg, idx) => (
            <PackageCard key={pkg.title} {...pkg} delay={idx * 0.1} />
          ))}
        </div>
      </motion.section>

      {/* Restaurant Packages */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-display font-semibold text-foreground">
            Restaurant Packages
          </h2>
          <motion.button
            whileHover={{ x: 5 }}
            className="text-sm text-primary hover:underline"
          >
            View All →
          </motion.button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurantPackages.map((pkg, idx) => (
            <PackageCard key={pkg.title} {...pkg} delay={idx * 0.1} />
          ))}
        </div>
      </motion.section>

      {/* Ride Packages */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-display font-semibold text-foreground">
            Ride Packages
          </h2>
          <motion.button
            whileHover={{ x: 5 }}
            className="text-sm text-primary hover:underline"
          >
            View All →
          </motion.button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ridePackages.map((pkg, idx) => (
            <PackageCard key={pkg.title} {...pkg} delay={idx * 0.1} />
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default PackagesSection;
