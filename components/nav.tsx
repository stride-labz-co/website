"use client";
import { MotionConfig, motion } from "motion/react";
import Link from "next/link";

export default function Nav() {
  return (
    <MotionConfig
      transition={{
        type: "tween",
        duration: 0.5,
        ease: "easeInOut",
        delay: 0.2,
      }}
    >
      <motion.header
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex justify-between items-center px-6 lg:px-10 z-50 sticky top-0 bg-background h-16"
      >
        <Link href="/#hero" className="text-xl font-bold">
          StrideLabs
        </Link>
        {/*<div className="flex justify-between items-center w-full">*/}
        <Link href="#about" className="font-medium hidden lg:block">
          Studio
        </Link>
        <Link href="#projects" className="font-medium hidden lg:block">
          Projects
        </Link>
        <Link href="#blog" className="font-medium hidden lg:block">
          Blog
        </Link>
        <Link href="#contact" className="font-medium hidden lg:block">
          Contact
        </Link>
        {/*</div>*/}
        <button
          type="button"
          className="flex flex-col gap-2 cursor-pointer outline-none lg:hidden"
        >
          <div className="w-14 h-0.5 bg-black" />
          <div className="w-14 h-0.5 bg-black" />
        </button>
      </motion.header>
    </MotionConfig>
  );
}
