"use client";
import React, { useRef, useEffect, useCallback } from "react";

type CardMarqueeProps = {
  items: { id: string | number; content: React.ReactNode }[];
  speed?: number;
  direction?: "left" | "right";
  gap?: number;
  pauseOnHover?: boolean;
  className?: string;
  cardClassName?: string;
};

export function CardMarquee({
  items = [],
  speed = 50,
  direction = "left",
  gap = 16, // Daha modern bir görünüm için varsayılan boşluğu azalttım.
  pauseOnHover = true,
  className = "",
  cardClassName = "",
}: CardMarqueeProps) {
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const requestIdRef = useRef<number | null>(null);

  // Animasyonu useCallback ile sarmalayarak gereksiz yeniden oluşturmaları engelliyoruz.
  const animate = useCallback(() => {
    if (!contentRef.current) return;

    const content = contentRef.current;
    const scrollWidth = content.scrollWidth / 2; // Orijinal içeriğin genişliği
    const currentTransform =
      new DOMMatrix(getComputedStyle(content).transform).e || 0;

    let newPosition =
      direction === "left"
        ? currentTransform - speed / 100
        : currentTransform + speed / 100;

    // Pürüzsüz ve sonsuz döngü mantığı
    if (direction === "left" && Math.abs(newPosition) >= scrollWidth) {
      newPosition += scrollWidth;
    } else if (direction === "right" && newPosition >= 0) {
      // Sağa doğru giderken başlangıç pozisyonuna döner
      newPosition -= scrollWidth;
    }

    content.style.transform = `translateX(${newPosition}px)`;
    requestIdRef.current = requestAnimationFrame(animate);
  }, [speed, direction]);

  useEffect(() => {
    if (!marqueeRef.current || !contentRef.current) return;

    // Başlangıç pozisyonunu ayarlama (sağa gidiş için)
    if (direction === "right") {
      const scrollWidth = contentRef.current.scrollWidth / 2;
      contentRef.current.style.transform = `translateX(-${scrollWidth}px)`;
    }

    // Animasyonu başlat
    requestIdRef.current = requestAnimationFrame(animate);

    // Hover (üzerine gelince durma) olayları
    const marqueeEl = marqueeRef.current;
    const startAnimation = () => {
      if (!requestIdRef.current) {
        requestIdRef.current = requestAnimationFrame(animate);
      }
    };
    const stopAnimation = () => {
      if (requestIdRef.current) {
        cancelAnimationFrame(requestIdRef.current);
        requestIdRef.current = null;
      }
    };

    if (pauseOnHover) {
      marqueeEl.addEventListener("mouseenter", stopAnimation);
      marqueeEl.addEventListener("mouseleave", startAnimation);
    }

    // Cleanup
    return () => {
      stopAnimation();
      if (pauseOnHover) {
        marqueeEl.removeEventListener("mouseenter", stopAnimation);
        marqueeEl.removeEventListener("mouseleave", startAnimation);
      }
    };
  }, [animate, direction, pauseOnHover]);

  // Sonsuz döngü için içeriği iki kez render ediyoruz
  const duplicatedItems = [...items, ...items];

  return (
    <div     ref={marqueeRef} className={`w-full overflow-hidden ${className}`}>
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
