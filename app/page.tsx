import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="flex items-center justify-between w-full max-w-3xl m-auto">
        <Link href="/">
          <h1 className="text-2xl font-geist-mono font-bold">
            august<span className="text-neutral-500/50">.fyi</span>
          </h1>
        </Link>
        <ul className="flex space-x-4 font-geist-mono font-semibold">
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <main className="flex flex-col space-y-12 w-full max-w-3xl m-auto mt-8">
        <section id="about" className="font-geist-sans space-y-4">
          <div className="font-departure-mono text-lg">
            <p className="mb-3">
              Hey, my name is{" "}
              <span className="whitespace-nowrap">August Drakton 👋</span>
            </p>
            <p className="mb-3">
              I'm a <span className="whitespace-nowrap">student 👨‍🎓</span> based
              in Los Angeles,<span className="whitespace-nowrap"> CA 📍</span>
            </p>
            <p>
              {" "}
              {/* No bottom margin needed on the last paragraph */}
              Check out what I've{" "}
              <span className="whitespace-nowrap">developed 👨‍💻</span> and get in
              touch with <span className="whitespace-nowrap">me! 📬</span>
            </p>
          </div>
        </section>
        <section id="projects" className="font-geist-sans space-y-4">
          <h2 className="font-inter font-semibold text-lg"></h2>
        </section>
      </main>
    </>
  );
}
