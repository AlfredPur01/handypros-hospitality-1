import Navbar from "@/components/Header";
import PageHero from "@/components/PageHero";
import ImageGallery from "@/components/booking/ImageGallery";
import BookingForm from "@/components/booking/BookingForm";
import PaymentDetails from "@/components/booking/PaymentDetails";
import PackagesSection from "@/components/booking/PackagesSection";
import Sidebar from "@/components/booking/Sidebar";
import ContactForm from "@/components/booking/ContactForm";
import Footer from "@/components/Footer";

const BookingDetails = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero
        title="About"
        breadcrumb={[
          { name: "HOME", path: "/" },
          { name: "ABOUT", path: "/about" },
        ]}
      />
      <ImageGallery />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Forms & Packages */}
          <div className="lg:col-span-2 space-y-12">
            <BookingForm />
            <PaymentDetails />
            <PackagesSection />
            <ContactForm />
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookingDetails;
