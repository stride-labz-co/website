import Link from "next/link";

export default function Nav() {
  return (
    <header className="flex justify-between items-center px-10 z-50 sticky top-0 bg-background h-16">
      <h1 className="text-xl font-bold">StrideLabs</h1>
      {/*<div className="flex justify-between items-center w-full">*/}
      <Link href="/studio" className="font-medium hidden lg:block">
        Studio
      </Link>
      <Link href="/projects" className="font-medium hidden lg:block">
        Projects
      </Link>
      <Link href="/blog" className="font-medium hidden lg:block">
        Blog
      </Link>
      <Link href="/contact" className="font-medium hidden lg:block">
        Contact
      </Link>
      {/*</div>*/}
      <button
        type="button"
        className="flex flex-col gap-2 cursor-pointer outline-none"
      >
        <div className="w-14 h-0.5 bg-black" />
        <div className="w-14 h-0.5 bg-black" />
      </button>
    </header>
  );
}
