"use client";
import { motion, type Variants } from "motion/react";
import Image from "next/image";
import LinkedInIcon from "@/assets/icons/linkedin.svg";
import DhanamImage from "@/assets/person/dhanam.jpeg";
import YagnikImage from "@/assets/person/yagnik.jpeg";

const variants: Variants = {
  initial: { opacity: 0 },
  inView: { opacity: 1, transition: { duration: 0.5 } },
};

const profileCardsVariants: Variants = {
  initial: { opacity: 0 },
  inView: (side: string) =>
    side === "left"
      ? {
          x: 16,
          y: -16,
          rotate: -9,
          opacity: 1,
          transformOrigin: "100% 100%",
          transition: { type: "spring", stiffness: 350, damping: 25 },
        }
      : {
          x: -16,
          y: 16,
          rotate: 9,
          opacity: 1,
          transformOrigin: "0% 100%",
          transition: {
            delay: 0.2,
            type: "spring",
            stiffness: 350,
            damping: 25,
          },
        },
};

export default function AboutSection() {
  return (
    <motion.section id="about" className="px-6 lg:px-12 mt-24">
      <motion.h3
        variants={variants}
        initial="initial"
        whileInView="inView"
        viewport={{ once: true, amount: "all" }}
        className="text-4xl lg:text-7xl font-semibold tracking-tighter lg:leading-18 text-muted-foreground"
      >
        Traditional agencies perfected the art of the pitch.{" "}
        <span className="text-neutral-800">
          We perfected the art of the work.
        </span>{" "}
        When you need{" "}
        <span className="text-neutral-800">
          design that moves at the speed of your ambition
        </span>
        , you need a different kind of studio.
      </motion.h3>
      <div className="mt-12 grid lg:grid-cols-[0.6fr_0.4fr] mb-24">
        <div>
          <motion.h3
            variants={variants}
            initial="initial"
            whileInView="inView"
            viewport={{ once: true, amount: "all" }}
            className="text-lg lg:text-3xl font-semibold"
          >
            <span className="mr-2 lg:mr-12">&ldquo;</span>
            After 15 years in traditional agencies, I saw the same problems
            repeatedly. Talented designers spending more time in meetings than
            creating. Clients paying for process instead of progress. Great
            ideas dying in revision purgatory.
            <span className="mr-2 lg:ml-12">&rdquo;</span>
          </motion.h3>
          <div className="grid lg:grid-cols-2 gap-4 mt-4">
            <motion.p
              variants={variants}
              initial="initial"
              whileInView="inView"
              viewport={{ once: true, amount: "all" }}
              className="mt-2 lg:mt-4 text-lg text-muted-foreground"
            >
              Stride Labs is a creative engineering studio focused on delivering
              modern digital systems with clarity, speed, and precision.
            </motion.p>
            <motion.p
              variants={variants}
              initial="initial"
              whileInView="inView"
              viewport={{ once: true, amount: "all" }}
              className="mt-2 lg:mt-4 text-lg text-muted-foreground"
            >
              By combining design, engineering, and AI-assisted workflows, we're
              able to move faster, reduce unnecessary overhead, and deliver
              high-quality solutions without the complexity of large traditional
              agencies.
            </motion.p>
          </div>
        </div>
        <div className="flex gap-2 items-center justify-center max-lg:mt-12">
          <motion.div
            custom={"left"}
            variants={profileCardsVariants}
            initial="initial"
            whileInView="inView"
            viewport={{ once: true, amount: "all" }}
            className="bg-alt-background p-2 rounded-2xl h-fit w-40 lg:w-60 z-1"
          >
            <Image
              className="aspect-video w-full object-cover rounded-xl"
              width={200}
              src={DhanamImage}
              alt="Dhanam Patel"
            />
            <h4 className="text-xl lg:text-2xl font-medium mt-4">
              Dhanam Patel
            </h4>
            <p className="max-lg:text-sm text-muted-foreground">Co-founder</p>
            <a
              className="flex gap-2 items-center text-blue-500 underline px-4 py-2 bg-background justify-center rounded-xl mt-2 max-lg:text-sm"
              href="https://www.linkedin.com/in/dhanam-patel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          </motion.div>
          <motion.div
            custom={"right"}
            variants={profileCardsVariants}
            initial="initial"
            whileInView="inView"
            viewport={{ once: true, amount: "all" }}
            className="bg-alt-background p-2 rounded-2xl h-fit w-40 lg:w-60 z-2"
          >
            <Image
              className="aspect-video w-full object-cover rounded-xl"
              width={200}
              src={YagnikImage}
              alt="Yagnik Patel"
            />
            <h4 className="text-xl lg:text-2xl font-medium mt-4">
              Yagnik Patel
            </h4>
            <p className="max-lg:text-sm text-muted-foreground">Co-founder</p>
            <a
              className="flex gap-2 items-center text-blue-500 underline px-4 py-2 bg-background justify-center rounded-xl mt-2 max-lg:text-sm"
              href="https://www.linkedin.com/in/yagnikpt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
