import React, { useEffect, useRef } from "react";

interface InfiniteScrollProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: "fast" | "slow" | "normal";
  className?: string;
}

export const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  children,
  direction = "left",
  speed = "normal",
  className = "",
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!prefersReducedMotion && scrollerRef.current && innerRef.current) {
      scrollerRef.current.setAttribute("data-animated", "true");

      const content = Array.from(innerRef.current.children);
      content.forEach((item) => {
        const clone = item.cloneNode(true) as HTMLElement;
        clone.setAttribute("aria-hidden", "true");
        innerRef.current?.appendChild(clone);
      });
    }
  }, []);

  // Déterminer la durée de l'animation en fonction de la vitesse
  const animationDuration = {
    fast: "20s",
    slow: "60s",
    normal: "40s",
  }[speed];

  return (
    <div
      ref={scrollerRef}
      className={`max-w-[600px] mx-auto overflow-hidden ${className}`}
      data-direction={direction}
      style={{
        maskImage:
          "linear-gradient(90deg, transparent, white 20%, white 80%, transparent)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, white 20%, white 80%, transparent)",
      }}
    >
      <div
        ref={innerRef}
        className="scroller__inner py-4 flex gap-4 whitespace-nowrap"
        style={{
          animation: `scroll ${animationDuration} linear infinite`,
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        {children}
        {/* Dupliquer les enfants pour une boucle fluide */}
        {React.Children.map(children, (child, index) => (
          <div key={`clone-${index}`} aria-hidden="true">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};
