import { motion } from "framer-motion";
import { Upload, FileText, Shield, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PaymentDetails = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      {/* Passport Upload Section */}
      <div className="bg-card rounded-2xl shadow-card p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
            <Upload className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-medium text-foreground">Upload Documents</h3>
            <p className="text-sm text-muted-foreground">Add required travel documents</p>
          </div>
        </div>

        <motion.div
          whileHover={{ borderColor: "hsl(var(--primary))" }}
          className="border-2 border-dashed border-border rounded-xl p-8 text-center cursor-pointer transition-colors hover:bg-sand/50"
        >
          <FileText className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
          <p className="text-sm font-medium text-foreground mb-1">
            Drag & drop or click to upload
          </p>
          <p className="text-xs text-muted-foreground">
            Passport, Visa, or other documents (PDF, JPG, PNG)
          </p>
        </motion.div>
      </div>

      {/* Payment Details */}
      <div className="bg-card rounded-2xl shadow-card p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
            <CreditCard className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-medium text-foreground">Payment Details</h3>
            <p className="text-sm text-muted-foreground">Secure payment information</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm text-muted-foreground">Card Number</Label>
              <Input
                placeholder="1234 5678 9012 3456"
                className="bg-sand border-border"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm text-muted-foreground">Cardholder Name</Label>
              <Input
                placeholder="John Doe"
                className="bg-sand border-border"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm text-muted-foreground">Expiry Date</Label>
              <Input
                placeholder="MM/YY"
                className="bg-sand border-border"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm text-muted-foreground">CVV</Label>
              <Input
                type="password"
                placeholder="•••"
                className="bg-sand border-border"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-4 p-3 bg-primary/5 rounded-lg">
          <Shield className="w-4 h-4 text-primary" />
          <span className="text-xs text-muted-foreground">Your payment is secured with 256-bit encryption</span>
        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-6"
        >
          <Button className="w-full bg-primary hover:bg-turquoise-dark text-primary-foreground font-medium py-6 rounded-xl">
            Confirm & Pay
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PaymentDetails;
