import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SignupForm from "@/components/SignupForm";
import Teaser from "@/components/Teaser";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

export default function LandingPage() {
  const [ctaClicked, setCTAClicked] = useState(false);

  const handleCTAClick = () => {
    setCTAClicked(true);
    console.log('CTA clicked - user scrolled to form');
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Hero onCtaClick={handleCTAClick} />
      <Teaser />
      <SignupForm />
      <Footer />
      <MobileCTA onCtaClick={handleCTAClick} />
    </div>
  );
}