export default function Header() {
  return (
    <header className="bg-background border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-center">
          {/* Logo matching the provided design */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center">
              {/* Geometric triangular icon to match the logo design */}
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 32 32" 
                fill="none" 
                className="text-foreground"
                data-testid="logo-icon"
              >
                <path 
                  d="M16 4L28 26H4L16 4Z" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  fill="none"
                />
                <path 
                  d="M8 20L16 8L24 20H8Z" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  fill="none"
                />
                <circle cx="16" cy="22" r="1" fill="currentColor" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-foreground tracking-tight" data-testid="logo-text">
              bridgebond
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}