"use client";

import { useLenis } from "lenis/react";
import {
  AnimatePresence,
  stagger,
  useAnimate,
  useReducedMotion,
} from "motion/react";
import { useEffect, useState } from "react";

interface CurtainIntroProps {
  onComplete?: () => void;
}

const CHARACTERS = [
  { id: "c-0-S", char: "S" },
  { id: "c-1-t", char: "t" },
  { id: "c-2-r", char: "r" },
  { id: "c-3-i", char: "i" },
  { id: "c-4-d", char: "d" },
  { id: "c-5-e", char: "e" },
  { id: "c-6-L", char: "L" },
  { id: "c-7-a", char: "a" },
  { id: "c-8-b", char: "b" },
  { id: "c-9-z", char: "z" },
];

export default function CurtainIntro({ onComplete }: CurtainIntroProps) {
  const [isComplete, setIsComplete] = useState(false);
  const [scope, animate] = useAnimate();
  const lenis = useLenis();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setIsComplete(true);
      onComplete?.();
      return;
    }

    // Lock scrolling during intro sequence
    lenis?.stop();
    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    let isMounted = true;

    async function runIntroSequence() {
      try {
        // Warm-up buffer: wait 2 animation frames + 80ms for main-thread hydration/layout to settle
        await new Promise((resolve) =>
          requestAnimationFrame(() => requestAnimationFrame(resolve)),
        );
        await new Promise((resolve) => setTimeout(resolve, 80));
        if (!isMounted) return;

        // Phase 1: Assemble wordmark character-by-character with blur + rise-in effect
        await animate(
          ".curtain-char",
          {
            opacity: [0, 1],
            y: [200, 0],
            filter: ["blur(8px)", "blur(0px)"],
          },
          {
            duration: 0.5,
            delay: stagger(0.09),
            ease: [0.16, 1, 0.3, 1],
          },
        );

        // Phase 2: Brief hold on resting state
        await new Promise((resolve) => setTimeout(resolve, 350));
        if (!isMounted) return;

        // Phase 3: Single Upward Curtain Reveal (Power4.easeInOut: cubic-bezier(0.77, 0, 0.175, 1))
        const curtainEase: [number, number, number, number] = [
          0.77, 0, 0.175, 1,
        ];
        await animate(
          "#curtain-sheet",
          { y: "-100%" },
          { duration: 0.8, ease: curtainEase },
        );

        if (!isMounted) return;

        // Phase 4: Cleanup & unlock scroll
        setIsComplete(true);
        onComplete?.();
        lenis?.start();
        document.body.style.overflow = prevBodyOverflow;
        document.documentElement.style.overflow = prevHtmlOverflow;
      } catch {
        setIsComplete(true);
        onComplete?.();
        lenis?.start();
        document.body.style.overflow = prevBodyOverflow;
        document.documentElement.style.overflow = prevHtmlOverflow;
      }
    }

    runIntroSequence();

    return () => {
      isMounted = false;
      lenis?.start();
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
    };
  }, [animate, lenis, onComplete, shouldReduceMotion]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <div
          ref={scope}
          data-lenis-prevent
          className="fixed inset-0 z-9999 pointer-events-none overflow-hidden"
        >
          {/* Single Upward Curtain Sheet */}
          <div
            id="curtain-sheet"
            className="fixed inset-0 bg-foreground will-change-transform pointer-events-auto flex flex-col justify-center px-8 sm:px-16 md:px-24 lg:px-32"
            style={{ transform: "translate3d(0, 0, 0)" }}
          >
            {/* Wordmark Container placed near center-left */}
            <div
              id="curtain-wordmark"
              className="max-w-6xl w-full mx-auto flex items-center justify-center pointer-events-none select-none will-change-[transform,opacity,filter]"
            >
              <h1 className="font-bold text-4xl tracking-tight text-alt-background flex">
                {CHARACTERS.map((item) => (
                  <span
                    key={item.id}
                    className="curtain-char inline-block"
                    style={{
                      opacity: 0,
                      transform: "translate3d(0, 200px, 0)",
                      filter: "blur(8px)",
                      willChange: "transform, opacity, filter",
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                  >
                    {item.char}
                  </span>
                ))}
              </h1>
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
