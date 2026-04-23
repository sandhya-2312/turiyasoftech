import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import DesignSolutions from "../components/DesignSolutions";
import IndustriesSection from "../components/IndustriesSection";
import ContactCardSection from "../components/ContactCardSection";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <DesignSolutions />
        <IndustriesSection />
        <ContactCardSection />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
