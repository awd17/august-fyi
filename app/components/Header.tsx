import Link from "next/link";

export function Header() {
  return (
    <nav className="flex items-center justify-between w-full max-w-3xl m-auto">
      <Link href="/">
        <h1 className="text-2xl font-fira-mono">
          august<span className="text-neutral-500/50 text-xl">.fyi</span>
        </h1>
      </Link>
      <ul className="flex space-x-4 font-geist-mono font-semibold">
        <li>
          <Link
            href="#projects"
            className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-200"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="#contact"
            className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-200"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
