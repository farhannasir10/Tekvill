import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import CaseStudies from "@/components/CaseStudies";
import KeyFacts from "@/components/KeyFacts";
import Testimonials from "@/components/Testimonials";
import BrandsTrust from "@/components/BrandsTrust";
import WhyChooseUs from "@/components/WhyChooseUs";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <Capabilities />
      <CaseStudies />
      <KeyFacts />
      <Testimonials />
      <div className="hidden">
        <BrandsTrust />
      </div>
      <WhyChooseUs />
      <FinalCTA />
      <Footer />
    </main>
  );
}
