import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import Preloader from "./components/Preloader";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Works from "./components/Works";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function App() {
  const [loading, setLoading] = useState(true);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    lenisRef.current = lenis;
    let raf: number;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  // lock scroll while preloading
  useEffect(() => {
    if (loading) lenisRef.current?.stop();
    else lenisRef.current?.start();
  }, [loading]);

  const scrollTo = (hash: string) => {
    lenisRef.current?.scrollTo(hash, { duration: 1.4, offset: -20 });
  };

  return (
    <div className="grain bg-ink text-bone font-body min-h-svh selection:bg-ember selection:text-ink">
      <Cursor />

      <AnimatePresence mode="wait">
        {loading && <Preloader onDone={() => setLoading(false)} />}
      </AnimatePresence>

      <Navbar onNavigate={scrollTo} />

      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Works />
        <Skills />
        <Education />
      </main>

      <Contact />
    </div>
  );
}
