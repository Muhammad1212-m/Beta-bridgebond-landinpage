import React from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Inter, DM_Sans } from "next/font/google";
import QueryProvider from "./providers";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: "--font-dm-sans"
});

export const metadata = {
  title: "Bridgebond.ai - Culture Connectivity Platform",
  description: "The simple culture connectivity platform for the modern workforce. Launching in Early 2026 - Be the first to join the beta.",
  openGraph: {
    title: "Bridgebond.ai - Culture Connectivity Platform",
    description: "The simple culture connectivity platform for the modern workforce. Launching in Early 2026 - Be the first to join the beta.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSans.variable} font-sans antialiased bg-background text-foreground`}>
        <QueryProvider>
          <TooltipProvider>
            {children}
            <Toaster />
          </TooltipProvider>
        </QueryProvider>
      </body>
    </html>
  );
}