import React from "react";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import TrustBar from "@/components/site/TrustBar";
import Authority from "@/components/site/Authority";
import Systems from "@/components/site/Systems";
import InstallationGallery from "@/components/site/InstallationGallery";
import BeforeAfter from "@/components/site/BeforeAfter";
import Metrics from "@/components/site/Metrics";
import WhyUs from "@/components/site/WhyUs";
import About from "@/components/site/About";
import MissionVisionValues from "@/components/site/MissionVisionValues";
import Comparison from "@/components/site/Comparison";
import Clients from "@/components/site/Clients";
import Testimonials from "@/components/site/Testimonials";
import Process from "@/components/site/Process";
import BusinessSolutions from "@/components/site/BusinessSolutions";
import FAQ from "@/components/site/FAQ";
import FinalCTA from "@/components/site/FinalCTA";
import QuoteForm from "@/components/site/QuoteForm";
import Location from "@/components/site/Location";
import Footer from "@/components/site/Footer";
import FloatingWhatsApp from "@/components/site/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Authority />
        <Systems />
        <InstallationGallery />
        <BeforeAfter />
        <Metrics />
        <WhyUs />
        <About />
        <MissionVisionValues />
        <Comparison />
        <Clients />
        <Testimonials />
        <Process />
        <BusinessSolutions />
        <FAQ />
        <FinalCTA />
        <QuoteForm />
        <Location />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}