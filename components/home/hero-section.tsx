"use client";
import { MotionConfig, motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import HeroImage from "@/assets/hero.avif";
import CTAButton from "../cta-button";

const MImage = motion.create(Image);

export default function HeroSection() {
  const { scrollY } = useScroll();

  const translateY = useTransform(scrollY, [0, 600], [0, 150]);
  const opacity = useTransform(scrollY, [0, 50, 500], [1, 1, 0.5]);

  const fdTranslateY = useTransform(scrollY, [0, 600], [0, -40]);

  return (
    <MotionConfig
      transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
    >
      <motion.main
        id="hero"
        className="flex-1 flex flex-col m-2 z-30 mt-0 relative rounded-3xl overflow-hidden min-h-[calc(100dvh-(--spacing(18)))]"
        animate={{
          backgroundColor: ["var(--background)", "var(--alt-background)"],
          transition: { delay: 0.3 },
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { type: "tween", duration: 0.5, ease: "easeInOut" },
          }}
          style={{ translateY: fdTranslateY }}
          className="absolute max-lg:-bottom-1/3 inset-0 z-2 pointer-events-none"
        >
          <MImage
            priority
            loading="eager"
            style={{ scale: 1.1 }}
            className="object-cover"
            fill
            src={HeroImage}
            alt="A computer."
          />
        </motion.div>
        <motion.div
          style={{ translateY, opacity }}
          className="pt-12 lg:pt-24 xl:pt-32 px-6 lg:px-12 z-1 flex justify-between will-change-transform"
        >
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  delay: 0.3,
                  type: "tween",
                  duration: 0.4,
                  ease: "easeInOut",
                },
              }}
              style={{ transformOrigin: "left" }}
              className="text-5xl lg:text-7xl font-medium text-muted-foreground tracking-tighter"
            >
              Scale your ideas.
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  delay: 0.4,
                  type: "tween",
                  duration: 0.4,
                  ease: "easeInOut",
                },
              }}
              style={{ transformOrigin: "left" }}
              className="text-5xl lg:text-7xl font-medium tracking-tighter mt-1"
            >
              Build with AI.
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  delay: 0.5,
                  type: "tween",
                  duration: 0.4,
                  ease: "easeInOut",
                },
              }}
              style={{ transformOrigin: "left" }}
              className="text-sm lg:text-base font-light mt-4 max-w-[40ch]"
            >
              A digital product studio engineering interfaces, systems, and
              experiences that create measurable momentum for ambitious brands.
            </motion.p>
            <motion.div
              className="mt-4"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  delay: 0.5,
                  type: "tween",
                  duration: 0.4,
                  ease: "easeInOut",
                },
              }}
              style={{ transformOrigin: "left" }}
            >
              <CTAButton href="#contact">Get Started</CTAButton>
            </motion.div>
          </div>
          <div className="bg-background rounded-2xl p-2 max-w-xs shadow max-md:hidden">
            <p className="text-lg p-2 rounded-xl bg-neutral-900 text-neutral-100">
              Interactive UI systems engineered for fluid motion,
              responsiveness, and immersive navigation experiences.
            </p>
          </div>
        </motion.div>
      </motion.main>
    </MotionConfig>
  );
}
