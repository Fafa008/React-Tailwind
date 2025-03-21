import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
import { Moon, Sun } from "lucide-react";

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

  return (
    <>
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 z-50"
      >
        {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>
      <section className="h-screen w-full bg-red-500 dark:bg-red-900">
        1
      </section>
      <section className="h-screen w-full bg-blue-500 dark:bg-blue-900">
        2
      </section>
      <section className="h-screen w-full bg-green-500 dark:bg-green-900">
        3
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
