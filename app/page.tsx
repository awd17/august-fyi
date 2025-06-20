import { Header } from "./components/Header";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col space-y-12 w-full max-w-3xl m-auto mt-8">
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
