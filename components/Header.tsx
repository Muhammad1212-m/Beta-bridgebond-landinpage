'use client';

import Image from "next/image";

export default function Header() {
  return (
    <header className=" bg-[#E4F6FF]">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-center">
          <Image 
            src="/assets/9 copy 1 (1)_1758702541630.png"
            alt="Bridgebond logo"
            width={200}
            height={50}
            className="h-8 w-auto"
            data-testid="header-logo"
          />
        </div>
      </div>
    </header>
  );
}