import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AIAssistant from "@/components/AIAssistant";
import Mission from "@/components/Mission";
import Team from "@/components/Team";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <AIAssistant />
        <section id="features">
          <Features />
        </section>
        <Mission />
        <section id="team">
          <Team />
        </section>
        <section id="contact">
          <CTA />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
