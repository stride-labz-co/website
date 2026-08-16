"use client";
import Image from "next/image";
import LinkedInIcon from "@/assets/icons/linkedin.svg";
import DhanamImage from "@/assets/person/dhanam.jpeg";
import YagnikImage from "@/assets/person/yagnik.jpeg";

export default function AboutSection() {
  return (
    <div className="px-8 lg:px-12 mt-24">
      <h3 className="text-4xl lg:text-7xl font-semibold tracking-tighter lg:leading-18 text-neutral-500">
        <span className="text-lg tracking-normal mr-4 lg:mr-12 align-text-top leading-relaxed lg:leading-[3] text-neutral-800">
          [Our Approach]
        </span>
        Traditional agencies perfected the art of the pitch.{" "}
        <span className="text-neutral-800">
          We perfected the art of the work.
        </span>{" "}
        When you need{" "}
        <span className="text-neutral-800">
          design that moves at the speed of your ambition
        </span>
        , you need a different kind of studio.
      </h3>
      <div className="mt-12 grid lg:grid-cols-[0.6fr_0.4fr] mb-24">
        <div>
          <h3 className="text-lg lg:text-3xl font-semibold">
            <span className="mr-2 lg:mr-12">&ldquo;</span>
            After 15 years in traditional agencies, I saw the same problems
            repeatedly. Talented designers spending more time in meetings than
            creating. Clients paying for process instead of progress. Great
            ideas dying in revision purgatory.
          </h3>
          <div className="grid lg:grid-cols-2 gap-4 mt-4">
            <p className="mt-2 lg:mt-4 text-lg text-neutral-500">
              Stride Labs is a creative engineering studio focused on delivering
              modern digital systems with clarity, speed, and precision.
            </p>
            <p className="mt-2 lg:mt-4 text-lg text-neutral-500">
              By combining design, engineering, and AI-assisted workflows, we're
              able to move faster, reduce unnecessary overhead, and deliver
              high-quality solutions without the complexity of large traditional
              agencies.
            </p>
          </div>
        </div>
        <div className="flex gap-2 items-center max-lg:mt-12">
          <div className="bg-alt-background p-2 rounded-2xl h-fit w-40 lg:w-60 z-1 translate-x-4 -translate-y-4 -rotate-9">
            <Image
              className="aspect-video w-full object-cover rounded-xl"
              width={200}
              src={DhanamImage}
              alt="Dhanam Patel"
            />
            <h4 className="text-2xl font-medium mt-4">Dhanam Patel</h4>
            <p className="text-neutral-500">Co-founder</p>
            <a
              className="flex gap-2 items-center text-blue-500 underline px-4 py-2 bg-background justify-center rounded-xl mt-2"
              href="https://www.linkedin.com/in/dhanam-patel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          </div>
          <div className="bg-alt-background p-2 rounded-2xl h-fit w-40 lg:w-60 z-2 translate-y-4 rotate-9">
            <Image
              className="aspect-video w-full object-cover rounded-xl"
              width={200}
              src={YagnikImage}
              alt="Yagnik Patel"
            />
            <h4 className="text-2xl font-medium mt-4">Yagnik Patel</h4>
            <p className="text-neutral-500">Co-founder</p>
            <a
              className="flex gap-2 items-center text-blue-500 underline px-4 py-2 bg-background justify-center rounded-xl mt-2"
              href="https://www.linkedin.com/in/yagnikpt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
