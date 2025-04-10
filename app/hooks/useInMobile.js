"use client";
import { useState, useEffect } from "react";

const useIsMobile = (maxWidth = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is available
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia(`(max-width: ${maxWidth}px)`);
      const handleMediaQueryChange = () => setIsMobile(mediaQuery.matches);

      // Set initial value
      handleMediaQueryChange();

      // Add listener for media query changes
      mediaQuery.addEventListener("change", handleMediaQueryChange);

      // Cleanup listener on component unmount
      return () =>
        mediaQuery.removeEventListener("change", handleMediaQueryChange);
    }
  }, [maxWidth]);

  return isMobile;
};

export default useIsMobile;
