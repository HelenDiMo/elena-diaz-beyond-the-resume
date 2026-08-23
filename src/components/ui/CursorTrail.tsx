"use client";

import { useEffect, useRef } from "react";

const TRAIL_LENGTH = 12;

type Point = {
  x: number;
  y: number;
};

export default function CursorTrail() {
  const points = useRef<Point[]>(
    Array.from({ length: TRAIL_LENGTH }, () => ({
      x: 0,
      y: 0,
    })),
  );

  const mouse = useRef<Point>({
    x: 0,
    y: 0,
  });

  const raf = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current = {
        x: event.clientX,
        y: event.clientY,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      points.current[0] = {
        x: mouse.current.x,
        y: mouse.current.y,
      };

      for (let i = 1; i < points.current.length; i++) {
        const previous = points.current[i - 1];
        const current = points.current[i];

        current.x += (previous.x - current.x) * 0.35;
        current.y += (previous.y - current.y) * 0.35;
      }

      points.current.forEach((point, index) => {
        const element = document.querySelector(
          `[data-cursor-trail="${index}"]`,
        ) as HTMLElement | null;

        if (!element) return;

        element.style.transform = `translate3d(${point.x}px, ${point.y}px, 0)`;
      });

      raf.current = requestAnimationFrame(animate);
    };

    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      if (raf.current) {
        cancelAnimationFrame(raf.current);
      }
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-9999 hidden md:block"
    >
      {points.current.map((_, index) => {
        const size = Math.max(3, 10 - index * 0.6);
        const opacity = Math.max(0.02, 0.22 - index * 0.016);

        return (
          <span
            key={index}
            data-cursor-trail={index}
            className="absolute left-0 top-0 rounded-full bg-oceanic blur-[1px]"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              opacity,
              marginLeft: `${-size / 2}px`,
              marginTop: `${-size / 2}px`,
            }}
          />
        );
      })}
    </div>
  );
}