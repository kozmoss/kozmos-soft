"use client";
import React, { useRef, useEffect } from "react";


type CardMarqueeProps = {
  items: { id: string | number; content: React.ReactNode }[];
  speed?: number;
  direction?: "left" | "right";
  gap?: number;
  className?: string;
  cardClassName?: string;
};


export function CardMarquee({
  items = [],
  speed = 40,
  direction = "left",
  gap = 24,
  className = "",
  cardClassName = "",
}: CardMarqueeProps) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const requestIdRef = useRef<number | null>(null);
  const positionRef = useRef(0);
  const contentWidthRef = useRef(0);

  useEffect(() => {
    if (!contentRef.current) return;

    const content = contentRef.current;
    const updateContentWidth = () => {
      contentWidthRef.current = content.scrollWidth / 2;
    };

    updateContentWidth();

    const resizeObserver = new ResizeObserver(updateContentWidth);
    resizeObserver.observe(content);

    // Animation function
    const animate = () => {
      const speedFactor = direction === "right" ? -speed / 50 : speed / 50;
      positionRef.current -= speedFactor;

      if (Math.abs(positionRef.current) >= contentWidthRef.current) {
        positionRef.current = 0;
      }

      content.style.transform = `translateX(${positionRef.current}px)`;
      requestIdRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    requestIdRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      if (requestIdRef.current) {
        cancelAnimationFrame(requestIdRef.current);
      }
      resizeObserver.disconnect();
    };
  }, [speed, direction]);

  const duplicatedItems = [...items, ...items];

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div
        ref={contentRef}
        className="flex"
        style={{ gap: `${gap}px`, willChange: "transform" }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className={`flex-shrink-0 ${cardClassName}`}
          >
            <div className="h-[300px] relative overflow-hidden rounded">
              {item.content}

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
