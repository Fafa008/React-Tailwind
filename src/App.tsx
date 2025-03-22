import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
import Hero from "./components/Hero.tsx";
import HorizontalScroll from "./components/Horizontal.tsx";
import { Section } from "./components/section/section.tsx";
import { InfiniteScroll } from "./components/InfinitScroll.tsx";
import { Star } from "lucide-react";

function App() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    if (titleRef.current) {
      gsap.from(titleRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "bounce.out",
      });
    }

    return () => {
      lenis.destroy();
    };
  }, []);

  const items = Array.from({ length: 5 }, (_, i) => (
    <div
      key={i}
      className="inline-flex items-center justify-center px-8 py-4 mx-4 bg-white rounded-lg shadow-md"
    >
      <Star className="w-6 h-6 mr-2 text-yellow-500" />
      <span className="text-lg font-semibold">Item {i + 1}</span>
    </div>
  ));

  return (
    <>
      <Hero />
      <Section color="bg-green-500" title="Section 2" />
      <HorizontalScroll />
      <section className="h-screen w-full bg-green-500 dark:bg-green-900">
        <InfiniteScroll direction="left" speed="fast">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-4 py-2 bg-gray-200 rounded-lg"
            >
              Item {index + 1}
            </div>
          ))}
        </InfiniteScroll>
      </section>
      <section className="h-screen w-full bg-yellow-500 dark:bg-yellow-900">
        4
      </section>
      <section className="h-screen w-full bg-purple-500 dark:bg-purple-900">
        5
      </section>
      <section className="h-screen w-full bg-orange-500 dark:bg-orange-900">
        6
      </section>
    </>
  );
}

export default App;
