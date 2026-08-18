"use client";
import { Plus } from "lucide-react";
import {
  AnimatePresence,
  LayoutGroup,
  MotionConfig,
  motion,
  type Variants,
} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NoiseTexture } from "@/components/ui/noise-texture";
import { services } from "@/lib/services-data";
import { cn } from "@/lib/utils";

const variants: Variants = {
  initial: { opacity: 0 },
  inView: { opacity: 1, transition: { duration: 0.5 } },
};

export default function ServicesSection() {
  return (
    <MotionConfig
      transition={{ type: "tween", duration: 0.4, ease: "circInOut" }}
    >
      <LayoutGroup>
        <motion.section
          id="services"
          className="flex flex-col py-32 mt-8 bg-black rounded-2xl text-neutral-100 mx-2 relative overflow-hidden"
        >
          <NoiseTexture />
          <div className="size-[50vw] bg-white/10 top-[-60vw] translate-y-1/2 right-8 blur-[128px] absolute" />
          <div className="size-[50vw] bg-white/10 bottom-[-60vw] -translate-y-1/2 left-8 blur-[128px] absolute" />

          <motion.div
            variants={variants}
            initial="initial"
            whileInView="inView"
            viewport={{ once: true, amount: "all" }}
            className="grid lg:grid-cols-[0.25fr_0.75fr] px-8 mb-20 gap-4 z-1"
          >
            <p className="flex items-center gap-2 font-medium h-fit">
              <span className="size-5 grid place-content-center bg-background rounded-full text-foreground">
                <Plus className="size-4" />
              </span>{" "}
              What we do
            </p>
            <h2 className="text-6xl lg:text-9xl font-semibold">
              Services.
              <sup className="text-muted-foreground text-4xl align-super">
                ({services.length})
              </sup>
            </h2>
          </motion.div>
          {services.map((service, i) => (
            <ServiceCard
              isOpenInitial={i === 0}
              key={service.num}
              service={service}
            />
          ))}
          <motion.div
            variants={variants}
            initial="initial"
            whileInView="inView"
            viewport={{ once: true, amount: "all" }}
            layout
            className="grid grid-cols-[0.15fr_0.85fr] lg:grid-cols-[0.25fr_0.75fr] px-8 mt-8 lg:mt-20 z-1"
          >
            <div />
            <Link
              className="bg-background text-foreground px-6 py-4 w-fit font-medium lg:text-lg rounded-full"
              href="#contact"
            >
              Get Started
            </Link>
          </motion.div>
        </motion.section>
      </LayoutGroup>
    </MotionConfig>
  );
}

function ServiceCard({
  service,
  isOpenInitial,
}: {
  service: (typeof services)[0];
  isOpenInitial?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(isOpenInitial ?? false);

  return (
    <motion.button
      variants={variants}
      initial="initial"
      whileInView="inView"
      viewport={{ once: true, amount: "all" }}
      type="button"
      layout
      className={cn(
        "grid grid-cols-[0.15fr_0.85fr] lg:grid-cols-[0.25fr_0.75fr] px-8 w-full overflow-hidden z-1",
      )}
      onClick={() => setIsOpen(!isOpen)}
    >
      <motion.p
        layout="position"
        className="text-xs lg:text-base text-muted text-start py-6"
      >
        ({service.num})
      </motion.p>
      <motion.div
        layout
        className="flex border-b border-neutral-800 py-6 gap-12"
      >
        <motion.div layout className="w-full relative flex flex-col">
          <AnimatePresence initial={false} mode="popLayout">
            {isOpen ? (
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                layout="y"
                key={`long-${service.num}`}
                className="grid lg:grid-cols-[0.2fr_0.4fr_0.4fr] gap-8 pb-8"
              >
                <Image
                  width={700}
                  height={350}
                  className="aspect-2/1 w-40 lg:w-80 rounded-lg object-cover"
                  src={service.coverImg}
                  alt={service.desc}
                />
                <div className="text-left">
                  <motion.h2
                    layoutId={`${service.num}-title`}
                    className="text-2xl lg:text-3xl font-medium w-fit"
                  >
                    {service.name}
                  </motion.h2>
                  <p className="text-xs lg:text-base mt-2 text-neutral-400 font-medium">
                    {service.desc}
                  </p>
                </div>
                <div className="text-left">
                  <span className="text-sm text-neutral-400 mb-4 block">
                    Categories
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {service.tags
                      .filter((_, i) => i < 6)
                      .map((tag) => (
                        <span
                          key={tag}
                          className="bg-neutral-100 text-neutral-800 text-xs px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.p
                // initial={{ opacity: 0, y: 200 }}
                // animate={{ opacity: 1, y: 0 }}
                // exit={{ opacity: 0, y: 200 }}
                layout
                key={`short-${service.num}`}
                layoutId={`${service.num}-title`}
                className="text-xl lg:text-2xl w-fit text-left"
              >
                {service.name}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
        <motion.div
          layout="position"
          className="p-2 rounded-full border border-neutral-600 h-fit hidden lg:block"
        >
          <Plus
            className={cn(
              "transition-transform duration-400",
              isOpen && "rotate-45",
            )}
          />
        </motion.div>
      </motion.div>
    </motion.button>
  );
}
