import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import ContactMap from "@/components/ContactMap";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <PageHero
        title="Contact"
        breadcrumb={[
          { name: "HOME", path: "/" },
          { name: "CONTACT", path: "/contact" },
        ]}
      />
      <ContactForm />
      <ContactMap />
      <Footer />
    </div>
  );
};

export default Contact;
