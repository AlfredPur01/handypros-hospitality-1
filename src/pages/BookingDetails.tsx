import { useParams } from "react-router-dom";
import Navbar from "@/components/Header";
import PageHero from "@/components/PageHero";
import ImageGallery from "@/components/booking/ImageGallery";
import BookingForm from "@/components/booking/BookingForm";
import PaymentDetails from "@/components/booking/PaymentDetails";
import PackagesSection from "@/components/booking/PackagesSection";
import Sidebar from "@/components/booking/Sidebar";
import ContactForm from "@/components/booking/ContactForm";
import Footer from "@/components/Footer";

import { packages } from "@/data/bookingdata";
import path from "path";

const BookingDetails = () => {
  const { slug } = useParams();

  const selectedPackage = packages.find(
    (item) => item.slug === slug
  );

  if (!selectedPackage) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground text-lg">
          Package not found
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <PageHero
        title={selectedPackage.name}
        breadcrumb={[
          { name: "HOME", path: "/" },
          { name: "PACKAGES", path: "/packages" },
        ]}
      />

      <ImageGallery images={selectedPackage.images} />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-12">
            <BookingForm packageData={selectedPackage} />
            <PaymentDetails packageData={selectedPackage} />
            <PackagesSection />
            <ContactForm />
          </div>

          <div className="lg:col-span-1">
            <Sidebar packageData={selectedPackage} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookingDetails;
