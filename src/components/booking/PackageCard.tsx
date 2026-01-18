import { motion } from "framer-motion";
import { MapPin, Star, Users, Wifi, Utensils, Car, Image } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PackageCardProps {
  title: string;
  location: string;
  price: number;
  rating: number;
  amenities: string[];
  features: string[];
  gradient: string;
  delay?: number;
}

const amenityIcons: Record<string, React.ReactNode> = {
  wifi: <Wifi className="w-3 h-3" />,
  meals: <Utensils className="w-3 h-3" />,
  transport: <Car className="w-3 h-3" />,
  pool: <Users className="w-3 h-3" />,
};

const PackageCard = ({
  title,
  location,
  price,
  rating,
  amenities,
  features,
  gradient,
  delay = 0
}: PackageCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-card rounded-2xl shadow-card overflow-hidden group"
    >
      {/* Image Placeholder */}
      <div className={`aspect-[16/10] bg-gradient-to-br ${gradient} flex items-center justify-center relative overflow-hidden`}>
        <Image className="w-12 h-12 text-white/40" />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-black/20 transition-opacity"
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
          <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
          <span className="text-xs font-medium">{rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-display font-semibold text-foreground mb-1 line-clamp-1">{title}</h3>
        <div className="flex items-center gap-1 text-muted-foreground mb-3">
          <MapPin className="w-3 h-3" />
          <span className="text-xs">{location}</span>
        </div>

        {/* Features */}
        <ul className="space-y-1 mb-4">
          {features.slice(0, 3).map((feature, idx) => (
            <li key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
              <span className="w-1 h-1 bg-primary rounded-full" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Amenities */}
        <div className="flex items-center gap-2 mb-4">
          {amenities.map((amenity, idx) => (
            <div
              key={idx}
              className="w-6 h-6 bg-sand rounded-full flex items-center justify-center text-muted-foreground"
              title={amenity}
            >
              {amenityIcons[amenity.toLowerCase()] || <Wifi className="w-3 h-3" />}
            </div>
          ))}
        </div>

        {/* Price & Button */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-foreground">${price}</span>
            <span className="text-xs text-muted-foreground">/person</span>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="sm" className="bg-primary hover:bg-turquoise-dark text-primary-foreground rounded-lg">
              Book Now
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PackageCard;
