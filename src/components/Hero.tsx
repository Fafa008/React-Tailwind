import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";

function App() {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState<string>("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants: Variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "yellow",
      mixBlendMode: "difference" as const,
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <div className="flex items-center justify-center h-screen bg-yellow-400">
      <h1
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        className="text-9xl font-bold"
      >
        Hello World
      </h1>
      <motion.div
        className="w-8 h-8 bg-black rounded-full fixed top-0 left-0 pointer-events-none"
        variants={variants}
        animate={cursorVariant}
      />
    </div>
  );
}

export default App;
