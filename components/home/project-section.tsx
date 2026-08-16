"use client";
import { MoveLeft, MoveRight } from "lucide-react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  type TargetAndTransition,
  useMotionValueEvent,
  useScroll,
  useTransform,
  type Variants,
} from "motion/react";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { type CaseStudy, caseStudies } from "@/lib/case-studies-data";

type Direction = 1 | -1;
type SlotPosition = "left" | "center" | "right";

interface Slot {
  pos: SlotPosition;
  item: CaseStudy;
}

const mod = (n: number, m: number): number => ((n % m) + m) % m;

const SLOT = {
  left: {
    x: "-110%",
    z: -220,
    scale: 0.95,
    rotateY: -15,
    opacity: 0.55,
    zIndex: 1,
  },
  center: { x: "0%", z: 0, scale: 1, rotateY: 0, opacity: 1, zIndex: 2 },
  right: {
    x: "110%",
    z: -220,
    scale: 0.95,
    rotateY: 15,
    opacity: 0.55,
    zIndex: 1,
  },
} satisfies Record<SlotPosition, TargetAndTransition>;

const variants: Variants = {
  ...SLOT,
  enter: ({ dir, isClickAnim }: { dir: Direction; isClickAnim: boolean }) =>
    isClickAnim
      ? {
          x: dir > 0 ? "150%" : "-150%",
          z: -400,
          scale: 0.5,
          rotateY: dir > 0 ? 45 : -45,
          opacity: 0,
          zIndex: 0,
        }
      : { opacity: 0 },
  exit: ({ dir, isClickAnim }: { dir: Direction; isClickAnim: boolean }) =>
    isClickAnim
      ? {
          x: dir > 0 ? "-150%" : "150%",
          z: -400,
          scale: 0.5,
          rotateY: dir > 0 ? -45 : 45,
          opacity: 0,
          zIndex: 0,
        }
      : { opacity: 0 },
};

export default function ProjectSection() {
  const containerRef = useRef(null);
  const [state, setState] = useState<"zooming" | "stable">("zooming");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.75) {
      setState("stable");
    } else {
      setState("zooming");
    }
  });

  const intro = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], {
    scale: [0.6, 0.8, 1, 1],
    opacity: [0, 0.5, 1, 1],
    filter: ["blur(10px)", "blur(0px)", "blur(0px)", "blur(0px)"],
  });

  const items = [...caseStudies];
  if (items.length < 3) throw new Error("Carousel3D needs at least 3 items");

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [direction, setDirection] = useState<Direction>(1);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const n = items.length;

  const go = useCallback(
    (dir: Direction) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setDirection(dir);
      setActiveIndex((i) => mod(i + dir, n));
    },
    [isAnimating, n],
  );

  const slots: Slot[] = [
    { pos: "left", item: items[mod(activeIndex - 1, n)] },
    { pos: "center", item: items[activeIndex] },
    { pos: "right", item: items[mod(activeIndex + 1, n)] },
  ];

  return (
    <MotionConfig
      transition={{
        type: "tween",
        duration: 0.6,
        ease: "easeInOut",
      }}
    >
      <div ref={containerRef} className="h-[150dvh] relative">
        <AnimatePresence>
          <motion.div
            layout
            className="h-dvh sticky top-0 flex flex-col justify-center items-center mask-x-from-90% mask-x-to-95% overflow-x-hidden"
            style={{ perspective: "1400px" }}
          >
            <motion.div
              layout="y"
              className="w-160 aspect-3/2 my-4 relative"
              style={{
                transformStyle: "preserve-3d",
                scale: intro.scale,
                opacity: intro.opacity,
                filter: intro.filter,
              }}
            >
              <AnimatePresence
                custom={{ direction, isClickAnim: isAnimating }}
                initial={false}
              >
                {slots
                  .filter((i) =>
                    state === "zooming" ? i.pos === "center" : true,
                  )
                  .map(({ pos, item }) => (
                    <motion.div
                      key={item.id}
                      className="absolute inset-0 flex flex-col items-center will-change-transform"
                      style={{ transformStyle: "preserve-3d" }}
                      custom={{ direction, isClickAnim: isAnimating }}
                      variants={variants}
                      initial="enter"
                      animate={pos}
                      exit="exit"
                      transition={{
                        type: "tween",
                        duration: 0.6,
                        ease: "easeInOut",
                      }}
                      onAnimationComplete={() => {
                        if (pos === "center") {
                          setIsAnimating(false);
                        }
                      }}
                    >
                      <Image
                        className="aspect-3/2 w-full object-cover rounded-xl"
                        height={300}
                        width={600}
                        src={item.img}
                        alt={item.title}
                      />
                    </motion.div>
                  ))}
              </AnimatePresence>
            </motion.div>
            <AnimatePresence mode="popLayout">
              {activeIndex !== undefined && state === "stable" && (
                <motion.div
                  layout="y"
                  className="flex flex-col items-center gap-1 mb-4"
                  key={items[activeIndex].id}
                >
                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl font-bold mt-4"
                  >
                    {items[activeIndex].title}
                  </motion.h2>
                  <motion.p
                    className="max-w-prose text-sm text-pretty text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "tween",
                      duration: 0.4,
                      ease: "easeInOut",
                      delay: 0.2,
                    }}
                  >
                    {items[activeIndex].description}
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {state === "stable" && (
                <motion.div
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 80 }}
                  layout="y"
                  className="flex gap-2"
                >
                  <button
                    className="aspect-square p-4 rounded-full bg-black/20"
                    type="button"
                    onClick={() => go(-1)}
                  >
                    <MoveLeft className="size-4" />
                  </button>
                  <button
                    className="aspect-square p-4 rounded-full bg-black/20"
                    type="button"
                    onClick={() => go(1)}
                  >
                    <MoveRight className="size-4" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}
