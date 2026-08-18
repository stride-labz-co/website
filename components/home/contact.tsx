import { Gauge, Route } from "lucide-react";
import { NoiseTexture } from "../ui/noise-texture";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="flex items-center flex-col-reverse lg:flex-row gap-12 px-4 pt-16 pb-4 lg:px-8 lg:py-32 mt-8 bg-black rounded-2xl text-neutral-100 mx-2 relative overflow-hidden mb-2"
    >
      <NoiseTexture />
      <div className="size-[50vw] bg-white/10 top-[-60vw] translate-y-1/2 right-8 blur-[128px] absolute" />
      <div className="size-[50vw] bg-white/10 bottom-[-60vw] -translate-y-1/2 left-8 blur-[128px] absolute" />

      <div className="basis-full w-full lg:basis-2/5 z-1">
        <form className="space-y-4 bg-alt-background px-4 py-8 lg:p-12 text-foreground rounded-xl w-full">
          <h4 className="text-lg mb-2 font-semibold">StrideLabz</h4>
          <h3 className="text-3xl font-semibold mb-12 text-muted-foreground">
            <span className="text-foreground">Have a project</span> in mind?
          </h3>

          <label className="block">
            <span className="mb-2 block w-fit">Your Name*</span>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
              required
              className="w-full bg-neutral-200 focus-within:bg-alt-background px-4 py-4 rounded-xl transition"
            />
          </label>

          <label className="block">
            <span className="mb-2 block w-fit">E-mail*</span>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="john@doe.com"
              required
              className="w-full bg-neutral-200 focus-within:bg-alt-background px-4 py-4 rounded-xl transition"
            />
          </label>

          <label className="block">
            <span className="mb-2 block w-fit">Message</span>
            <textarea
              name="message"
              id="message"
              placeholder="Your message..."
              className="w-full bg-neutral-200 focus-within:bg-alt-background px-4 py-4 rounded-xl transition"
            />
          </label>

          <button
            className="px-6 py-3 rounded-xl bg-foreground text-background w-full"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>

      <div className="basis-3/5 space-y-12 z-1">
        <h2 className="text-7xl lg:text-9xl font-medium">Let’s talk.</h2>
        <p className="text-2xl lg:text-3xl font-medium max-w-lg text-muted-foreground">
          <span className="text-background">Tell us about your project</span>
          —whether it’s a website, SEO, or marketing.
        </p>

        <a
          className="text-2xl lg:text-3xl font-medium block underline decoration-1 underline-offset-4"
          href="mailto:stridelabz@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          stridelabz@gmail.com
        </a>

        <hr className="border-muted-foreground/50" />
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
          <div>
            <span className="flex items-center gap-4 font-medium text-lg">
              <Gauge className="size-6" /> Quick response.
            </span>
            <p className="text-muted-foreground max-w-xs mt-4">
              If you’re ready to create and collaborate, we’d love to hear from
              you.
            </p>
          </div>
          <div>
            <span className="flex items-center gap-4 font-medium text-lg">
              <Route className="size-6" /> Clear next steps.
            </span>
            <p className="text-muted-foreground max-w-xs mt-4">
              After the consultation, we’ll provide you with a detailed plan and
              timeline.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
