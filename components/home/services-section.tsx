"use client";
import { CirclePlus, Plus } from "lucide-react";
import {
  AnimatePresence,
  LayoutGroup,
  MotionConfig,
  motion,
} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// import NoiseImage from "@/assets/noise.png";
import { services } from "@/lib/services-data";
import { cn } from "@/lib/utils";

export default function ServicesSection() {
  return (
    <MotionConfig
      transition={{ type: "tween", duration: 0.3, ease: "circInOut" }}
    >
      <div className="py-32 mt-8 bg-black rounded-2xl text-neutral-100 mx-2 relative overflow-hidden">
        {/*<Image
          className="object-cover w-full opacity-5 pointer-events-none absolute inset-0"
          src={NoiseImage}
          alt="noise"
        />*/}
        {/*<div />*/}
        <div className="grid lg:grid-cols-[0.25fr_0.75fr] px-8 mb-20 gap-4">
          <p className="flex items-center gap-2 font-medium h-fit">
            <CirclePlus className="size-4" /> What we do
          </p>
          <h2 className="text-6xl lg:text-9xl font-semibold">Services.</h2>
        </div>
        <LayoutGroup>
          {services.map((service, i) => (
            <ServiceCard
              isOpenInitial={i === 0}
              key={service.num}
              service={service}
            />
          ))}
          <motion.div
            layout
            className="grid grid-cols-[0.25fr_0.75fr] px-8 mt-20"
          >
            <div />
            <Link
              className="bg-background text-foreground px-6 py-4 w-fit font-medium text-lg rounded-full"
              href="#contact"
            >
              Get Started
            </Link>
          </motion.div>
        </LayoutGroup>
      </div>
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
      type="button"
      layout
      className={cn(
        "grid grid-cols-[0.15fr_0.85fr] lg:grid-cols-[0.25fr_0.75fr] px-8 w-full overflow-hidden",
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
        <motion.div layout className="w-full">
          <AnimatePresence initial={false} mode="popLayout">
            {isOpen ? (
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                layout
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
                  <h2 className="text-2xl lg:text-3xl font-medium">
                    {service.name}
                  </h2>
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
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 150 }}
                layout
                key={`short-${service.num}`}
                className="text-2xl w-fit text-left"
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
