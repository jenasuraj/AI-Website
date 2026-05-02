import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import Features from "@/sections/Features";
import Dashboard from "@/sections/Dashboard";
import HowItWorks from "@/sections/HowItWorks";
import Benefits from "@/sections/Benefits";
import CTA from "@/sections/Modernsection";
import Testimonials from "@/sections/Testimonials";
import FAQ from "@/sections/FAQ";
import FinalCTA from "@/sections/FinalCTA";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <Dashboard />
      <Features />
      <HowItWorks />
      <Benefits />
      <CTA />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
