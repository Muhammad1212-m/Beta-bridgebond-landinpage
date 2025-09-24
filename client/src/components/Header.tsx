import logoImage from "@assets/9 copy 1 (1)_1758702541630.png";

export default function Header() {
  return (
    <header className="bg-background border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-center">
          <img 
            src={logoImage} 
            alt="Bridgebond logo"
            className="h-8 w-auto"
            data-testid="header-logo"
          />
        </div>
      </div>
    </header>
  );
}