import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import appMockupImage from "@assets/Screenshot 2025-09-11 at 3.02.30 PM_1758701034891.png";

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
    <section className="min-h-screen flex items-center bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                🚀 Coming Soon
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                The simple{" "}
                <span className="text-primary">culture connectivity</span>{" "}
                platform for the modern workforce.
              </h1>
              
              <p className="text-xl text-muted-foreground font-medium">
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
              <img 
                src={appMockupImage} 
                alt="Bridgebond.ai app mockup showing culture connectivity features"
                className="w-full h-auto rounded-3xl shadow-2xl"
                data-testid="img-app-mockup"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}