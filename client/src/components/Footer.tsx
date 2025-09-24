import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo placeholder */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">B</span>
            </div>
            <span className="text-xl font-bold text-foreground">bridgebond</span>
          </div>

          {/* Contact and tagline */}
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground mb-1">Built for frontline teams</p>
            <a 
              href="mailto:hello@bridgebond.ai" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-contact-email"
            >
              hello@bridgebond.ai
            </a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a 
              href="https://linkedin.com/company/bridgebond" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-linkedin"
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t text-center">
          <p className="text-xs text-muted-foreground">
            © 2025 Bridgebond.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}