import { useEffect, useState } from "react";

// Returns true when viewport width is considered mobile.
export function useIsMobile(breakpoint: number = 768): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const query = window.matchMedia(`(max-width: ${breakpoint}px)`);

    const update = () => setIsMobile(query.matches);
    update();

    try {
      // Modern API
      query.addEventListener("change", update);
      return () => query.removeEventListener("change", update);
    } catch {
      // Fallback for older browsers
      query.addListener(update);
      return () => query.removeListener(update);
    }
  }, [breakpoint]);

  return isMobile;
}
