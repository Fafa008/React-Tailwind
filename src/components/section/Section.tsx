import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SectionProps {
  color: string;
  title: string;
}

export function Section({ color, title }: SectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !circleRef.current) return;

    const circle = circleRef.current;
    const section = sectionRef.current;

    gsap.set(circle, {
      xPercent: -50,
      scale: 1,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "top 20%",
        scrub: 1,
        toggleActions: "play none none reverse",
      },
    });

    tl.to(circle, {
      scale: 50,
      duration: 2,
      ease: "power2.inOut",
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative h-screen overflow-hidden">
      <div
        ref={circleRef}
        className={`absolute top-[-50px] left-0 w-16 h-16 rounded-full ${color}`}
      />
      <div className="relative z-10 h-full flex items-center justify-center">
        <h2 className="text-4xl font-bold text-white">{title}</h2>
      </div>
    </div>
  );
}
