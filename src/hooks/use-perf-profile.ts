import { useEffect, useState } from "react";
import { useMediaQuery } from "./use-media-query";

export function usePerfProfile() {
  const [ready, setReady] = useState(false);
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const isMobile = useMediaQuery("(max-width: 767px)");

  useEffect(() => {
    setReady(true);
  }, []);

  // Disable 3D on mobile or if user prefers reduced motion
  const disable3D = prefersReducedMotion || isMobile;

  // Cap pixel ratio for performance
  const maxDpr = isMobile ? 1 : 2;

  return {
    ready,
    disable3D,
    maxDpr,
  };
}
