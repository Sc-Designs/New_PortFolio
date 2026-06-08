import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";
import About from "./components/About";
import LandingPart from "./components/LandingPart";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Awwards from "./components/Awwards";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

// ✅ Store lenis scroll value globally so any component can read it
export const lenisScrollY = { value: 0 };

const App = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      lerp: 0.08,
      syncTouch: true,
    });

    lenisRef.current = lenis;

    const onTick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    lenis.on("scroll", ({ scroll }) => {
      lenisScrollY.value = scroll; // ✅ capture interpolated value
      ScrollTrigger.update();
    });

    return () => {
      lenis.destroy();
      gsap.ticker.remove(onTick);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <LandingPart />
      <About />
      <Projects />
      <Awwards />
      <Footer />
    </div>
  );
};

export default App;
