import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const InteractiveOverlay: React.FC = () => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!overlayRef.current || isOpen) return;

      const x = Math.round((e.clientX / window.innerWidth) * 100);
      const y = Math.round((e.clientY / window.innerHeight) * 100);

      gsap.to(overlayRef.current, {
        "--x": `${x}%`,
        "--y": `${y}%`,
        duration: 0.3,
        ease: "sine.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isOpen]);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section className="h-screen p-12 font-['Bebas_Neue'] bg-blue-500 dark:bg-blue-900">
        <h1 className="text-7xl">EXPECT SICK SH*T FROM HERE ON OUT.</h1>
        <span className="w-[60px] h-[60px] rounded-full bg-black flex cursor-pointer">
          <Arrow />
        </span>
      </section>

      <section
        ref={overlayRef}
        className={`h-screen p-12 bg-black text-white absolute top- left-0 w-full font-['Bebas_Neue'] transition-[clip-path] duration-100
          ${isOpen ? "is-open" : ""}`}
        style={
          {
            clipPath: "circle(100px at var(--x, 50%) var(--y, 50%))",
            "--x": "50%",
            "--y": "50%",
          } as React.CSSProperties
        }
      >
        <h1 className="text-7xl">EXPECT SICK SH*T FROM HERE ON OUT.</h1>
        <span
          onClick={toggleOverlay}
          className="w-[60px] h-[60px] rounded-full bg-black flex cursor-pointer"
        >
          <Arrow />
        </span>
      </section>
    </>
  );
};

const Arrow: React.FC = () => (
  <svg
    viewBox="0 0 62 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="m-4 fill-white"
  >
    <path d="M61.0607 13.0607C61.6465 12.4749 61.6465 11.5251 61.0607 10.9393L51.5147 1.3934C50.9289 0.807612 49.9792 0.807612 49.3934 1.3934C48.8076 1.97918 48.8076 2.92893 49.3934 3.51472L57.8787 12L49.3934 20.4853C48.8076 21.0711 48.8076 22.0208 49.3934 22.6066C49.9792 23.1924 50.9289 23.1924 51.5147 22.6066L61.0607 13.0607ZM0 13.5H60V10.5H0V13.5Z" />
  </svg>
);

export default InteractiveOverlay;
