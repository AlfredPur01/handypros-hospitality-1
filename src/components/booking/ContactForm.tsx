import { motion } from "framer-motion";
import { Send, User, Mail, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactForm = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-card rounded-2xl shadow-card p-8"
    >
      <h2 className="text-xl font-display font-semibold text-foreground mb-2">
        You can send your enquiry via the form below.
      </h2>
      <p className="text-sm text-muted-foreground mb-6">
        We'll get back to you within 24 hours with personalized travel recommendations.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="contact-name" className="text-sm text-muted-foreground">Your Name *</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="contact-name"
                placeholder="Full name"
                className="pl-10 bg-sand border-border"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-email" className="text-sm text-muted-foreground">Email Address *</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="contact-email"
                type="email"
                placeholder="your@email.com"
                className="pl-10 bg-sand border-border"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-phone" className="text-sm text-muted-foreground">Phone Number</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="contact-phone"
                placeholder="+1 234 567 8900"
                className="pl-10 bg-sand border-border"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="contact-subject" className="text-sm text-muted-foreground">Subject *</Label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="contact-subject"
                placeholder="How can we help?"
                className="pl-10 bg-sand border-border"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-message" className="text-sm text-muted-foreground">Your Message *</Label>
            <Textarea
              id="contact-message"
              placeholder="Tell us about your travel plans, preferences, or any questions you have..."
              className="bg-sand border-border min-h-[120px]"
            />
          </div>
        </div>
      </div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-6"
      >
        <Button className="bg-coral hover:bg-accent text-foreground font-medium px-8 py-5 rounded-xl">
          <Send className="w-4 h-4 mr-2" />
          Send Enquiry
        </Button>
      </motion.div>
    </motion.section>
  );
};

export default ContactForm;
