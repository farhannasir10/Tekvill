import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import CaseStudies from "@/components/CaseStudies";
import Approach from "@/components/Approach";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import BrandsTrust from "@/components/BrandsTrust";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <Capabilities />
      <CaseStudies />
      <Approach />
      <TechStack />
      <Testimonials />
      <BrandsTrust />
      <FinalCTA />
      <Footer />
    </main>
  );
}
