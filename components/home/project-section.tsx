"use client";
import {
  Badge,
  Diamond,
  MoveLeft,
  MoveRight,
  Pentagon,
  Square,
} from "lucide-react";
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
import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { type CaseStudy, caseStudies } from "@/lib/case-studies-data";
import { Marquee } from "../ui/marquee";

export default function ProjectSection() {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  return (
    <section id="projects" className="mt-12">
      <Marquee>
        <div className="flex gap-6 lg:gap-12 items-center mr-2 lg:mr-10">
          <h3 className="text-6xl lg:text-9xl xl:text-[10rem] font-bold text-neutral-800 tracking-tight">
            Our Works
          </h3>
          <Badge className="size-20 lg:size-48 text-border animate-spin animation-duration-20000" />
        </div>
        <div className="flex gap-6 lg:gap-12 items-center mr-2 lg:mr-10">
          <h3 className="text-6xl lg:text-9xl xl:text-[10rem] font-bold text-neutral-800 tracking-tight">
            Our Works
          </h3>
          <Square className="size-20 lg:size-48 text-border animate-spin animation-duration-20000" />
        </div>
        <div className="flex gap-6 lg:gap-12 items-center mr-2 lg:mr-10">
          <h3 className="text-6xl lg:text-9xl xl:text-[10rem] font-bold text-neutral-800 tracking-tight">
            Our Works
          </h3>
          <Pentagon className="size-20 lg:size-48 text-border animate-spin animation-duration-20000" />
        </div>
        <div className="flex gap-6 lg:gap-12 items-center mr-2 lg:mr-10">
          <h3 className="text-6xl lg:text-9xl xl:text-[10rem] font-bold text-neutral-800 tracking-tight">
            Our Works
          </h3>
          <Diamond className="size-20 lg:size-48 text-border animate-spin animation-duration-20000" />
        </div>
      </Marquee>
      {isSmallScreen ? <SmallScreenView /> : <LargeScreenView />}
    </section>
  );
}

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
  enter: ({
    dir,
    isClickAnim,
    pos,
  }: {
    dir: Direction;
    isClickAnim: boolean;
    pos: SlotPosition;
  }) =>
    isClickAnim
      ? {
          x: dir > 0 ? "150%" : "-150%",
          z: -400,
          scale: 0.5,
          rotateY: dir > 0 ? 45 : -45,
          opacity: 0,
          zIndex: 0,
        }
      : {
          opacity: 0,
          x: pos === "left" ? "-120%" : pos === "right" ? "120%" : "0%",
        },
  exit: ({
    dir,
    isClickAnim,
  }: {
    dir: Direction;
    isClickAnim: boolean;
    pos: SlotPosition;
  }) =>
    isClickAnim
      ? {
          x: dir > 0 ? "-150%" : "150%",
          z: -400,
          scale: 0.5,
          rotateY: dir > 0 ? -45 : 45,
          opacity: 0,
          zIndex: 0,
        }
      : {
          opacity: 0,
        },
};

function LargeScreenView() {
  const containerRef = useRef(null);
  const [state, setState] = useState<"zooming" | "stable">("zooming");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
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
              }}
            >
              <AnimatePresence
                custom={{ direction, isClickAnim: isAnimating }}
                initial={false}
                // onExitComplete={markDone}
              >
                {slots
                  .filter((i) =>
                    state === "zooming" ? i.pos === "center" : true,
                  )
                  .map(({ pos, item }) => (
                    <motion.div
                      key={`${item.id}-${state}`}
                      layout={false}
                      className="absolute inset-0 flex flex-col items-center will-change-transform"
                      style={
                        state === "zooming" && pos === "center"
                          ? {
                              transformStyle: "preserve-3d",
                              scale: intro.scale,
                              opacity: intro.opacity,
                            }
                          : { transformStyle: "preserve-3d" }
                      }
                      custom={{ direction, isClickAnim: isAnimating, pos }}
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
                        if (pos === "center") setIsAnimating(false);
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

            <motion.div
              animate={{ opacity: state === "stable" ? 1 : 0 }}
              layout="y"
              className="flex flex-col items-center gap-1 mb-4"
              key={items[activeIndex].id}
            >
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold mt-4"
              >
                {items[activeIndex].title}
              </motion.h2>
              <motion.p
                className="max-w-prose text-pretty text-center mt-2"
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

            <motion.div
              animate={
                state === "stable"
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 80 }
              }
              layout="y"
              className="flex gap-2"
            >
              <button
                className="aspect-square p-4 rounded-full bg-muted"
                type="button"
                onClick={() => go(-1)}
              >
                <MoveLeft className="size-4" />
              </button>
              <button
                className="aspect-square p-4 rounded-full bg-muted"
                type="button"
                onClick={() => go(1)}
              >
                <MoveRight className="size-4" />
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}

const mobileVars: Variants = {
  initial: { opacity: 0 },
  inView: { opacity: 1, transition: { duration: 0.5 } },
};

const imageZoomIn: Variants = {
  initial: { opacity: 0, scale: 1.2 },
  inView: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const MImage = motion.create(Image);

function SmallScreenView() {
  return (
    <div id="projects" className="py-12 px-6">
      <div className="space-y-8">
        {caseStudies.map((study) => (
          <Link className="block" href={study.url} key={study.id}>
            <motion.div layout className="space-y-2">
              <motion.div className="w-full relative aspect-3/2 rounded-2xl overflow-hidden">
                <MImage
                  variants={imageZoomIn}
                  initial="initial"
                  whileInView="inView"
                  viewport={{ once: true }}
                  fill
                  src={study.img}
                  alt={study.title}
                />
              </motion.div>
              <motion.div
                variants={mobileVars}
                initial="initial"
                whileInView="inView"
                viewport={{ once: true, amount: "all" }}
                className="bg-neutral-100 rounded-2xl p-4"
              >
                <div className="flex flex-col">
                  <h3 className="font-medium text-lg">{study.title}</h3>
                  <span className="text-sm">{study.category}</span>
                </div>
                <p className="text-xs mt-2">{study.description}</p>
              </motion.div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
