import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Heart, Star, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const categories = [
  { id: "all", name: "All" },
  { id: "accommodation", name: "Accommodation" },
  { id: "car-hiring", name: "Car Hiring" },
  { id: "flight-booking", name: "Flight Booking" },
  { id: "tours", name: "Tours & Excursions" },
];

const services = [
  {
    id: 1,
    name: "Luxury Beach Villa",
    category: "accommodation",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=500&fit=crop",
    rating: 4.93,
    favorite: true,
  },
  {
    id: 2,
    name: "Mountain Retreat",
    category: "accommodation",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=500&fit=crop",
    rating: 4.75,
    favorite: true,
  },
  {
    id: 3,
    name: "City Center Apartment",
    category: "accommodation",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=500&fit=crop",
    rating: 5.00,
    favorite: false,
  },
  {
    id: 4,
    name: "Seaside Bungalow",
    category: "accommodation",
    image: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=400&h=500&fit=crop",
    rating: 4.97,
    favorite: true,
  },
  {
    id: 5,
    name: "Hilltop Estate",
    category: "accommodation",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=500&fit=crop",
    rating: 4.99,
    favorite: true,
  },
  {
    id: 6,
    name: "Urban Loft",
    category: "accommodation",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=500&fit=crop",
    rating: 4.90,
    favorite: true,
  },
  {
    id: 7,
    name: "Clifftop Villa",
    category: "accommodation",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=500&fit=crop",
    rating: 4.98,
    favorite: true,
  },
  {
    id: 8,
    name: "Beachfront House",
    category: "accommodation",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=500&fit=crop",
    rating: 4.85,
    favorite: false,
  },
  {
    id: 9,
    name: "Luxury SUV Rental",
    category: "car-hiring",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=500&fit=crop",
    rating: 4.88,
    favorite: true,
  },
  {
    id: 10,
    name: "Convertible Sports Car",
    category: "car-hiring",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=500&fit=crop",
    rating: 4.92,
    favorite: false,
  },
  {
    id: 11,
    name: "Economy Sedan",
    category: "car-hiring",
    image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=400&h=500&fit=crop",
    rating: 4.70,
    favorite: false,
  },
  {
    id: 12,
    name: "Premium Minivan",
    category: "car-hiring",
    image: "https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=400&h=500&fit=crop",
    rating: 4.85,
    favorite: true,
  },
  {
    id: 13,
    name: "First Class Flight",
    category: "flight-booking",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=500&fit=crop",
    rating: 4.95,
    favorite: true,
  },
  {
    id: 14,
    name: "Business Class",
    category: "flight-booking",
    image: "https://images.unsplash.com/photo-1540339832862-474599807836?w=400&h=500&fit=crop",
    rating: 4.89,
    favorite: false,
  },
  {
    id: 15,
    name: "Safari Adventure",
    category: "tours",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&h=500&fit=crop",
    rating: 4.96,
    favorite: true,
  },
  {
    id: 16,
    name: "City Walking Tour",
    category: "tours",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=500&fit=crop",
    rating: 4.78,
    favorite: false,
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const [liked, setLiked] = useState(service.favorite);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group cursor-pointer"
    >
      <div className="relative rounded-xl overflow-hidden mb-3">
        <img
          src={service.image}
          alt={service.name}
          className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setLiked(!liked);
          }}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center transition-transform hover:scale-110"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              liked ? "fill-red-500 text-red-500" : "text-foreground"
            }`}
          />
        </button>
        {/* Guest Favorite Badge */}
        {service.favorite && (
          <div className="absolute top-3 left-3 bg-background text-foreground px-3 py-1 rounded-full text-xs font-medium shadow-md">
            Guest favorite
          </div>
        )}
      </div>
      <div className="space-y-1">
        <h3 className="font-semibold text-foreground">{service.name}</h3>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Star className="w-3 h-3 fill-foreground text-foreground" />
          <span className="text-foreground font-medium">{service.rating.toFixed(2)}</span>
        </div>
      </div>
    </motion.div>
  );
};

const ServiceCategory = ({ 
  title, 
  items 
}: { 
  title: string; 
  items: typeof services;
}) => {
  const scrollContainerRef = useState<HTMLDivElement | null>(null);

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-xl font-bold flex items-center gap-2"
        >
          {title}
          <ChevronRight className="w-5 h-5" />
        </motion.h2>
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-muted transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-muted transition-colors">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
        {items.slice(0, 8).map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </div>
  );
};

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = services.filter((service) => {
    const matchesCategory = activeCategory === "all" || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const groupedServices = {
    all: filteredServices,
    accommodation: filteredServices.filter((s) => s.category === "accommodation"),
    "car-hiring": filteredServices.filter((s) => s.category === "car-hiring"),
    "flight-booking": filteredServices.filter((s) => s.category === "flight-booking"),
    tours: filteredServices.filter((s) => s.category === "tours"),
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content */}
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-8">
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <div className="flex items-center gap-4 flex-wrap">
              {["Testing", "Testing", "Testing"].map((placeholder, i) => (
                <div key={i} className="text-muted-foreground text-sm">
                  {placeholder}
                </div>
              ))}
            </div>
            <button className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 transition-opacity">
              <Search className="w-5 h-5" />
            </button>
          </motion.div>

          {/* Category Sections */}
          {activeCategory === "all" ? (
            <>
              <ServiceCategory title="All" items={groupedServices.all} />
              <ServiceCategory title="Accommodation" items={groupedServices.accommodation} />
              <ServiceCategory title="Car Hiring" items={groupedServices["car-hiring"]} />
              <ServiceCategory title="Flight Booking" items={groupedServices["flight-booking"]} />
              <ServiceCategory title="Tours & Excursions" items={groupedServices.tours} />
            </>
          ) : (
            <ServiceCategory 
              title={categories.find(c => c.id === activeCategory)?.name || ""} 
              items={filteredServices} 
            />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
