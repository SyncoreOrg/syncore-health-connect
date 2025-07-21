import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CaseStudies from "@/components/CaseStudies";
import Mission from "@/components/Mission";
import Team from "@/components/Team";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <section id="features">
          <Features />
        </section>
        <section id="cases">
          <CaseStudies />
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
    </div>
  );
};

export default Index;
