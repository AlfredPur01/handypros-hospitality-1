import { motion } from "framer-motion";
import { User, Mail, Phone, MapPin, Users, Calendar, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const BookingForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-card rounded-2xl shadow-card p-6"
    >
      <h2 className="text-xl font-display font-semibold text-foreground mb-6">
        Basic Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="fullName" className="text-sm text-muted-foreground">Full Name</Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="fullName"
              placeholder="Enter your name"
              className="pl-10 bg-sand border-border"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm text-muted-foreground">Email Address</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              className="pl-10 bg-sand border-border"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm text-muted-foreground">Phone Number</Label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="phone"
              placeholder="+1 234 567 8900"
              className="pl-10 bg-sand border-border"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="city" className="text-sm text-muted-foreground">City</Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="city"
              placeholder="Your city"
              className="pl-10 bg-sand border-border"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="travelers" className="text-sm text-muted-foreground">No. of Travelers</Label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="travelers"
              type="number"
              placeholder="2"
              min={1}
              className="pl-10 bg-sand border-border"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="date" className="text-sm text-muted-foreground">Preferred Date</Label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="date"
              type="date"
              className="pl-10 bg-sand border-border"
            />
          </div>
        </div>

        <div className="md:col-span-2 space-y-2">
          <Label htmlFor="message" className="text-sm text-muted-foreground">Additional Notes</Label>
          <Textarea
            id="message"
            placeholder="Any special requests or requirements..."
            className="bg-sand border-border min-h-[100px]"
          />
        </div>
      </div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-6"
      >
        <Button className="w-full bg-primary hover:bg-turquoise-dark text-primary-foreground font-medium py-6 rounded-xl">
          Continue Booking
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default BookingForm;
