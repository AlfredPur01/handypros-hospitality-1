import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="HandPros" className="w-10 h-10 brightness-0 invert" />
              <span className="font-bold text-xl">HandPros</span>
            </div>
            <p className="text-sm text-gray-400">
              Your trusted travel partner for unforgettable experiences around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Accommodation</li>
              <li>Flight Booking</li>
              <li>Tour Packages</li>
              <li>Travel Insurance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>info@handpros.com</li>
              <li>+1 234 567 890</li>
              <li>123 Travel Street, NY</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} HandPros Hospitality. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
