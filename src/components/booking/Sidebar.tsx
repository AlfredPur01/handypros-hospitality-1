import { motion } from "framer-motion";
import { Star, MapPin, Plane, Calendar, Search, Phone, Clock, Check, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const featuredTrips = [
  {
    title: "Paris Getaway",
    slug: "paris-getaway",
    price: 899,
    rating: 4.9,
    image: "/carousel/paris.png",
  },
  {
    title: "Tokyo Adventure",
    slug: "tokyo-adventure",
    price: 1299,
    rating: 4.8,
    image: "/carousel/japan.png",
  },
  {
    title: "Dubai Luxury",
    slug: "dubai-luxury",
    price: 1599,
    rating: 4.9,
    image: "/carousel/off-road.jpg",
  },
];


const tripDetails = [
  { icon: Clock, label: "Duration", value: "7 Days" },
  { icon: MapPin, label: "Location", value: "Morocco" },
  { icon: Plane, label: "Transport", value: "Flight Included" },
  { icon: Star, label: "Rating", value: "4.8/5" },
];

const includes = [
  "Round-trip flights",
  "5-star accommodation",
  "Daily breakfast",
  "Airport transfers",
  "Guided tours",
  "Travel insurance",
];

const Sidebar = ({ packageData }) => {
  return (
    <div className="space-y-6">
      {/* Quick Book Card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-card rounded-2xl shadow-card p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display font-semibold text-foreground">Quick Book</h3>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span className="text-sm font-medium">4.8</span>
          </div>
        </div>

        <div className="text-center mb-4">
          <div className="text-3xl font-bold text-foreground">$1,299</div>
          <span className="text-sm text-muted-foreground">per person</span>
        </div>

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button className="w-full bg-primary hover:bg-turquoise-dark text-primary-foreground font-medium py-5 rounded-xl mb-4">
            Book This Trip
          </Button>
        </motion.div>

        <ul className="space-y-2">
          {tripDetails.map(({ icon: Icon, label, value }) => (
            <li key={label} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </div>
              <span className="font-medium text-foreground">{value}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* What's Included */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="bg-card rounded-2xl shadow-card p-6"
      >
        <h3 className="font-display font-semibold text-foreground mb-4">What's Included</h3>
        <ul className="space-y-3">
          {includes.map((item, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-sm text-muted-foreground"
            >
              <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                <Check className="w-3 h-3 text-primary" />
              </div>
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Find Your Ticket */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-primary to-turquoise-dark rounded-2xl shadow-card p-6 text-primary-foreground"
      >
        <div className="flex items-center gap-2 mb-4">
          <Plane className="w-5 h-5" />
          <h3 className="font-display font-semibold">Find Your Ticket Now</h3>
        </div>

        <div className="space-y-3">
          <div className="space-y-1">
            <label className="text-xs text-primary-foreground/80">From</label>
            <Input
              placeholder="Departure city"
              className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs text-primary-foreground/80">To</label>
            <Input
              placeholder="Destination"
              className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-1">
              <label className="text-xs text-primary-foreground/80">Departure</label>
              <Input
                type="date"
                className="bg-white/10 border-white/20 text-primary-foreground"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-primary-foreground/80">Return</label>
              <Input
                type="date"
                className="bg-white/10 border-white/20 text-primary-foreground"
              />
            </div>
          </div>
        </div>

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-4">
          <Button className="w-full bg-white text-primary hover:bg-white/90 font-medium py-5 rounded-xl">
            <Search className="w-4 h-4 mr-2" />
            Search Flights
          </Button>
        </motion.div>
      </motion.div>

      {/* Featured Trips */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="bg-card rounded-2xl shadow-card p-6"
      >
        <h3 className="font-display font-semibold text-foreground mb-4">Featured Trips</h3>
        <div className="space-y-4">
          {featuredTrips.map((trip, idx) => (
            <motion.div
              key={trip.slug}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ x: 5 }}
            >
              <Link
                to={`/packages/${trip.slug}`}
                className="flex items-center gap-3 cursor-pointer group"
              >
                {/* Image */}
                <div className="w-16 h-12 rounded-lg overflow-hidden bg-muted">
                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {trip.title}
                  </h4>
                  <div className="flex items-center gap-2">
                    <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                    <span className="text-xs text-muted-foreground">
                      {trip.rating}
                    </span>
                  </div>
                </div>

                {/* Price */}
                <span className="text-sm font-bold text-foreground">
                  ${trip.price}
                </span>
              </Link>
            </motion.div>
          ))}

        </div>
      </motion.div>

      {/* Contact Card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="bg-coral-light rounded-2xl p-6"
      >
        <h3 className="font-display font-semibold text-foreground mb-2">Need Help?</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Our travel experts are available 24/7
        </p>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button variant="outline" className="w-full border-foreground/20 hover:bg-white/50">
            <Phone className="w-4 h-4 mr-2" />
            Contact Us
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Sidebar;
