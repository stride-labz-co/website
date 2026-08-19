"use client";

import { useLenis } from "lenis/react";
import { ArrowUpRight } from "lucide-react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useReducedMotion,
  type Variants,
} from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Studio", href: "#about", number: "01" },
  { name: "Projects", href: "#projects", number: "02" },
  { name: "Services", href: "#services", number: "03" },
  { name: "Contact", href: "#contact", number: "04" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const lenis = useLenis();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    if (typeof document === "undefined") return;

    if (menuOpen) {
      lenis?.stop();
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;

      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      return () => {
        lenis?.start();
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
      };
    }

    lenis?.start();
  }, [menuOpen, lenis]);

  const menuContainerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.04,
        staggerDirection: -1,
      },
    },
  };

  const menuItemVariants: Variants = {
    hidden: {
      y: shouldReduceMotion ? 0 : "100%",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.55,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    // exit: {
    //   y: shouldReduceMotion ? 0 : "80%",
    //   opacity: 0,
    //   transition: {
    //     duration: shouldReduceMotion ? 0.15 : 0.3,
    //     ease: [0.22, 1, 0.36, 1],
    //   },
    // },
  };

  return (
    <MotionConfig
      transition={{
        type: "tween",
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.header
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={cn(
          "flex justify-between items-center px-6 lg:px-10 fixed top-0 left-0 right-0 z-50 h-16",
          "bg-background/75 backdrop-blur-xl",
        )}
      >
        {/* Smoothly animated backdrop layer to prevent GPU backdrop-filter flashing */}
        {/*<motion.div
          className="absolute inset-0 bg-background/70 backdrop-blur-xl border-b border-border/30 -z-10 pointer-events-none"
          initial={false}
          animate={{ opacity: menuOpen ? 0 : 1 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        />*/}

        <Link
          href="/#hero"
          className="text-xl font-bold tracking-tight text-foreground hover:opacity-80 transition-opacity"
        >
          StrideLabz
        </Link>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            className="flex flex-col justify-center items-center w-10 h-10 rounded-full hover:bg-muted/60 transition-colors cursor-pointer outline-none z-50"
          >
            <div className="relative w-6 h-4 flex flex-col justify-between items-center">
              <motion.span
                animate={{
                  rotate: menuOpen ? 45 : 0,
                  y: menuOpen ? 7 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="w-6 h-0.5 bg-foreground rounded-full origin-center"
              />
              <motion.span
                animate={{
                  opacity: menuOpen ? 0 : 1,
                  scaleX: menuOpen ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
                className="w-6 h-0.5 bg-foreground rounded-full"
              />
              <motion.span
                animate={{
                  rotate: menuOpen ? -45 : 0,
                  y: menuOpen ? -7 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="w-6 h-0.5 bg-foreground rounded-full origin-center"
              />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Spacer to preserve document layout height */}
      <div className="h-16 shrink-0" aria-hidden="true" />

      {/* Fullscreen Overlay Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="fullscreen-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
            data-lenis-prevent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-background/75 backdrop-blur-xl flex flex-col justify-between p-6 md:p-12 lg:p-16"
          >
            {/* Menu Header Status */}
            <div className="flex items-center justify-between pt-16 md:pt-12">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                // exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: 0.05 }}
                className="font-mono text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-2"
              >
                <span className="size-2 rounded-full bg-foreground animate-pulse" />
                <span>Navigation</span>
              </motion.div>
            </div>

            {/* Menu Links */}
            <div className="max-w-4xl w-full mx-auto my-auto py-8">
              <motion.nav
                variants={menuContainerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-col gap-3 sm:gap-4 md:gap-6"
              >
                {navLinks.map((link) => (
                  <div key={link.name} className="overflow-hidden">
                    <motion.div variants={menuItemVariants}>
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="group flex items-center justify-between py-2 sm:py-3 border-b border-border/30 hover:border-foreground/40 transition-colors"
                      >
                        <div className="flex items-baseline gap-4 sm:gap-8">
                          <span className="font-mono text-sm sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                            {link.number}
                          </span>
                          <span className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground group-hover:translate-x-3 transition-transform duration-300 ease-out">
                            {link.name}
                          </span>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ArrowUpRight className="size-6 sm:size-8 md:size-10 text-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </div>
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </motion.nav>
            </div>

            {/* Menu Footer */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              // exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-mono text-muted-foreground border-t border-border/30 pt-6"
            >
              <span>
                © {new Date().getFullYear()} StrideLabs. All rights reserved.
              </span>
              <div className="flex gap-6">
                <Link
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-foreground transition-colors"
                >
                  stridelabz@gmail.com
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
}
