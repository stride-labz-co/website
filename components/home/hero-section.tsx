"use client";
import { MotionConfig, motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import HeroImage from "@/assets/hero.avif";
import CTAButton from "../cta-button";

const MImage = motion.create(Image);

export default function HeroSection() {
  const { scrollY } = useScroll();

  const bgTranslateY = useTransform(scrollY, [0, 50, 200], {
    translateY: [0, 25, 100],
    opacity: [1, 1, 0.5],
    filter: ["blur(0px)", "blur(0px)", "blur(3px)"],
  });
  const fdTranslateY = useTransform(scrollY, [0, 350], [0, -40]);

  return (
    <MotionConfig
      transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
    >
      <main
        id="hero"
        className="flex-1 flex flex-col m-2 z-30 mt-0 relative bg-alt-background rounded-3xl overflow-hidden min-h-[calc(100dvh-(--spacing(18)))]"
      >
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
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
          style={bgTranslateY}
          className="pt-12 lg:pt-24 xl:pt-32 px-6 lg:px-12 z-1 flex justify-between"
        >
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transformOrigin: "left",
                transition: {
                  delay: 0.2,
                  type: "tween",
                  duration: 0.4,
                  ease: "easeInOut",
                },
              }}
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
                transformOrigin: "left",
                transition: {
                  delay: 0.3,
                  type: "tween",
                  duration: 0.4,
                  ease: "easeInOut",
                },
              }}
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
                transformOrigin: "left",
                transition: {
                  delay: 0.4,
                  type: "tween",
                  duration: 0.4,
                  ease: "easeInOut",
                },
              }}
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
                transformOrigin: "left",
                transition: {
                  delay: 0.4,
                  type: "tween",
                  duration: 0.4,
                  ease: "easeInOut",
                },
              }}
            >
              <CTAButton href="#contact">Get Started</CTAButton>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </MotionConfig>
  );
}
