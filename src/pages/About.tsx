import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ExploreNearby from "@/components/ExploreNearby";
import FlightSearch from "@/components/FlightSearch";
import BuildingDestination from "@/components/BuildingDestination";
import TourPackages from "@/components/TourPackages";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <PageHero
        title="About"
        breadcrumb={[
          { name: "HOME", path: "/" },
          { name: "ABOUT", path: "/about" },
        ]}
      />
      <ExploreNearby />
      <FlightSearch />
      <BuildingDestination />
      <TourPackages />
      <Footer />
    </div>
  );
};

export default About;
