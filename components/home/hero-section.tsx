"use client";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import HeroImage from "@/assets/hero.avif";

const MImage = motion.create(Image);

export default function HeroSection() {
  const { scrollY } = useScroll();

  const bgTranslateY = useTransform(scrollY, [0, 200], [0, 50]);
  const fdTranslateY = useTransform(scrollY, [0, 350], [0, -25]);

  return (
    <main className="flex-1 flex flex-col m-2 z-30 mt-0 relative bg-alt-background rounded-3xl overflow-hidden min-h-[calc(100dvh-(--spacing(18)))]">
      <motion.div
        style={{ translateY: fdTranslateY }}
        className="absolute inset-0 z-2 pointer-events-none"
      >
        <MImage
          priority
          loading="eager"
          style={{ scale: 1.2 }}
          className="object-cover pointer-events-none"
          fill
          src={HeroImage}
          alt="A computer."
        />
      </motion.div>
      <motion.div
        style={{ translateY: bgTranslateY }}
        className="pt-16 lg:pt-24 xl:pt-32 px-8 lg:px-12 z-1 flex justify-between pointer-events-none"
      >
        <div>
          <h2 className="text-5xl lg:text-7xl font-medium text-neutral-400 tracking-tighter">
            Scale your ideas.
          </h2>
          <h3 className="text-5xl lg:text-7xl font-medium tracking-tighter mt-1">
            Build with AI.
          </h3>
          <p className="text-sm lg:text-base font-light mt-4 max-w-[40ch]">
            A digital product studio engineering interfaces, systems, and
            experiences that create measurable momentum for ambitious brands.
          </p>
          <button
            className="px-4 py-2 bg-black text-neutral-100 mt-4 rounded-xl"
            type="button"
          >
            Start Build
          </button>
        </div>
      </motion.div>
    </main>
  );
}
