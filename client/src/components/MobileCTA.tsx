import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

interface MobileCTAProps {
  onCtaClick: () => void;
}

export default function MobileCTA({ onCtaClick }: MobileCTAProps) {
  const scrollToForm = () => {
    onCtaClick();
    const element = document.getElementById('signup-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t md:hidden z-50">
      <Button 
        onClick={scrollToForm}
        className="w-full hover-elevate active-elevate-2"
        size="lg"
        data-testid="button-mobile-cta"
      >
        Join Beta Waitlist
        <ChevronUp className="ml-2 h-5 w-5" />
      </Button>
    </div>
  );
}