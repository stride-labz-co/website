"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function BottomBlur() {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const offset = 100;

  useEffect(() => {
    let ticking = false;

    const checkScrollPosition = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;

      // Fallback for browsers using document.body for scrolling
      const currentScroll = window.scrollY || scrollTop || 0;
      const totalHeight = scrollHeight || document.body.scrollHeight;
      const windowHeight = window.innerHeight || clientHeight;

      // Check if distance from bottom is within the offset threshold
      const reached = currentScroll + windowHeight >= totalHeight - offset;

      setIsAtBottom(reached);
      ticking = false;
    };

    const handleScroll = () => {
      // Throttle recalculations to the browser's refresh rate
      if (!ticking) {
        window.requestAnimationFrame(checkScrollPosition);
        ticking = true;
      }
    };

    // Run once on mount in case the page is already at the bottom or has no scrollbar
    checkScrollPosition();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "mask-t-from-30% h-20 bg-black/0 fixed bottom-0 inset-x-0 backdrop-blur-sm z-20 transition-opacity duration-1000",
        isAtBottom ? "opacity-0" : "opacity-100",
      )}
    />
  );
}
