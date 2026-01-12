import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import contactHero from "@/assets/contact-hero.png";

interface PageHeroProps {
  title: string;
  breadcrumb: { name: string; path: string }[];
}

const PageHero = ({ title, breadcrumb }: PageHeroProps) => {
  return (
    <section className="pt-20">
      <div className="container mx-auto px-8">
        <div className="relative flex flex-col lg:flex-row min-h-[400px] rounded-3xl overflow-hidden mx-4">
          {/* Left Peach Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/5 bg-secondary p-8 lg:p-16 flex flex-col justify-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl lg:text-5xl font-bold text-foreground mb-6"
            >
              {title}
            </motion.h1>

            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-4 bg-background rounded-full px-6 py-3 border border-border-orange w-fit"
            >
              {breadcrumb.map((item, index) => (
                <span key={item.path}>
                  {index > 0 && <span className="text-muted-foreground mx-2"></span>}
                  <Link
                    to={item.path}
                    className={`font-medium ${
                      index === breadcrumb.length - 1
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {item.name}
                  </Link>
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-3/5 relative min-h-[300px] lg:min-h-full"
          >
            <img
              src={contactHero}
              alt="Travel couple"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
