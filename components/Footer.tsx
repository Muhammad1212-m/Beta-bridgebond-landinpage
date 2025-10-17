'use client';

import { Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center">
            <Image 
              src="/assets/9 copy 1 (1)_1758702541630.png"
              alt="Bridgebond logo"
              width={150}
              height={40}
              className="h-6 w-auto"
              data-testid="footer-logo"
            />
          </div>

          {/* Contact and tagline */}
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground mb-1">Built for frontline teams</p>
            <a 
              href="mailto:info@bridgebond.ai" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-contact-email"
            >
              info@bridgebond.ai
            </a>
          </div>

          {/* Social */}
          <div className="flex text-white items-center gap-4">
            ...........................
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