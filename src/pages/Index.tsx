import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PopularDestinations from "@/components/PopularDestinations";
import TourPackages from "@/components/TourPackages";
import ExploreOptions from "@/components/ExploreOptions";
import BlogPreview from "@/components/BlogPreview";
import Testimonials from "@/components/Testimonials";
import FlightSearch from "@/components/FlightSearch";
import BuildingDestination from "@/components/BuildingDestination";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <PopularDestinations />
      <TourPackages />
      <ExploreOptions />
      <BlogPreview />
      <Testimonials />
      <FlightSearch />
      <BuildingDestination />
      <Footer />
    </div>
  );
};

export default Index;
