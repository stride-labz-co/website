"use client";
import { ChevronRight } from "lucide-react";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { NoiseTexture } from "./ui/noise-texture";

const MChevronRight = motion.create(ChevronRight);
const MLink = motion.create(Link);

type Props = {
  href?: string;
  children: React.ReactNode;
};

export default function CTAButton({ children, href }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <MotionConfig transition={{ type: "spring", stiffness: 400, damping: 32 }}>
      <MLink
        href={href ?? "#"}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="flex relative bg-neutral-900 p-1 text-white rounded-2xl overflow-hidden cursor-pointer w-fit"
        layout
      >
        <NoiseTexture noiseOpacity={0.7} />
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            key="expander"
            layout
            style={{ borderRadius: 14 }}
            className={cn(
              "flex items-center text-foreground bg-background rounded-xl gap-2 z-2",
              !isHovered && "aspect-square px-4",
              isHovered && "px-11",
            )}
          >
            {isHovered && (
              <motion.span className="py-4" key="entry" layout>
                {children}
              </motion.span>
            )}
            <motion.div layout className="py-4">
              <MChevronRight layout className={cn("size-full")} />
            </motion.div>
          </motion.div>
          {!isHovered && (
            <motion.span
              initial={{ x: 20 }}
              animate={{ x: 0 }}
              exit={{ x: 20 }}
              className="py-4 px-8 z-1"
              key="push-aside"
              layout
            >
              {children}
            </motion.span>
          )}
        </AnimatePresence>
      </MLink>
    </MotionConfig>
  );
}
