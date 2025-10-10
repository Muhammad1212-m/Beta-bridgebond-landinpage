import React from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
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
  title: "Bridgebond.Ai - Culture Connectivity Platform",
  description: "The simple culture connectivity platform for the modern workforce. Launching in Early 2026 - Be the first to join the beta.",
  openGraph: {
    title: "Bridgebond.Ai - Culture Connectivity Platform",
    description: "The simple culture connectivity platform for the modern workforce. Launching in Early 2026 - Be the first to join the beta.",
    type: "website",
  },
  icons: [
    { rel: "icon", url: "/favicon.svg", type: "image/svg+xml" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${inter.variable} ${dmSans.variable} font-sans antialiased bg-background text-foreground`}>
        <QueryProvider>
          <TooltipProvider>
            {children}
          </TooltipProvider>
        </QueryProvider>
      </body>
    </html>
  );
}