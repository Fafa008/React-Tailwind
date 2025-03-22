import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Initialiser ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollContent = scrollRef.current;
    if (!container || !scrollContent) return;

    gsap.to(scrollContent, {
      x: () => -scrollContent.scrollWidth + container.clientWidth,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${scrollContent.scrollWidth - container.clientWidth}`,
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (scrollContent.childElementCount - 1),
          duration: 0.5,
          delay: 0.1,
        },
        anticipatePin: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      <div ref={scrollRef} className="flex w-[400vw] h-full">
        <div className="box w-screen h-screen flex-shrink-0 bg-white flex items-center justify-center">
          Slide 1
        </div>
        <div className="box w-screen h-screen flex-shrink-0 bg-green-500 flex items-center justify-center">
          Slide 2
        </div>
        <div className="box w-screen h-screen flex-shrink-0 bg-red-500 flex items-center justify-center">
          Slide 3
        </div>
        <div className="box w-screen h-screen flex-shrink-0 bg-yellow-500 flex items-center justify-center">
          Slide 4
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
