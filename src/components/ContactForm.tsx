import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-8">
            <h2 className="text-2xl font-bold">You can send your enquiry via the form below</h2>
            <p className="text-muted-foreground mt-2">Trip Name: Velouria-Monte Sienna</p>
          </div>

          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="form-input"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="form-input"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Choose A country"
                className="form-input"
              />
              <input
                type="tel"
                placeholder="Enter Your Contact Number"
                className="form-input"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="number"
                placeholder="Enter number of adults"
                className="form-input"
                min="1"
              />
              <input
                type="number"
                placeholder="Enter number of children"
                className="form-input"
                min="0"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Enquiry Subject"
                className="form-input"
              />
            </div>

            <div>
              <textarea
                placeholder="Your message..."
                rows={5}
                className="form-input resize-none"
              />
            </div>

            <button type="submit" className="btn-primary">
              Send Mail
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
