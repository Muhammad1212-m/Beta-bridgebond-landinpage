'use client';

import { Button } from "@/components/ui/button";
import { ChevronDown, Rocket } from "lucide-react";
import Image from "next/image";

interface HeroProps {
  onCtaClick: () => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  const scrollToForm = () => {
    onCtaClick();
    const element = document.getElementById('signup-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className=" flex  bg-background">
      <div className="w-full max-w-screen-xl mx-auto px-6 py-2">
        {/* Desktop centered Coming Soon badge */}
        <div className="hidden lg:flex justify-center mb-8 mt-4">
          <div className="flex items-center gap-2 bg-[#E4F6FF] text-black px-6 py-3 rounded-full text-3xl font-medium animate-pulse" data-testid="text-coming-soon-desktop">
            <Rocket className="h-10 w-10" />
            Coming Soon
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              {/* Mobile Coming Soon badge */}
              <div className="flex justify-center lg:hidden">
                <div className="flex items-center gap-2 bg-[#E4F6FF] text-black px-6 py-3 rounded-full text-3xl font-medium animate-pulse" data-testid="text-coming-soon-mobile">
                  <Rocket className="h-5 w-5" />
                  Coming Soon
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground text-center lg:text-left">
                The simple{" "}
                <span className="text-primary">culture connectivity</span>{" "}
                platform for the modern workforce.
              </h1>
              
              <p className="text-xl text-muted-foreground font-medium text-center lg:text-left">
                Launching in Early 2026 — Be the first to join the beta.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={scrollToForm}
                className="text-lg px-8 py-6 hover-elevate active-elevate-2"
                data-testid="button-request-access"
              >
                Request Early Access
                <ChevronDown className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right Content - App Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative max-w-md w-full">
              <Image 
                src="/assets/Group 1000008160_1758706727099.png"
                alt="Bridgebond.ai app mockup showing culture connectivity features"
                width={400}
                height={800}
                className="w-full h-auto rounded-3xl shadow-2xl"
                data-testid="img-app-mockup"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}