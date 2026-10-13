"use client";

import { useEffect, useRef } from "react";

const TRAIL_LENGTH = 12;

const TRAIL_INDEXES = Array.from({ length: TRAIL_LENGTH }, (_, index) => index);

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

  const mouse = useRef<Point | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<Array<HTMLSpanElement | null>>([]);

  const raf = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // En el primer movimiento colocamos toda la estela en el cursor
      // para que no aparezca volando desde la esquina superior izquierda.
      if (!mouse.current) {
        points.current.forEach((point) => {
          point.x = event.clientX;
          point.y = event.clientY;
        });

        if (containerRef.current) {
          containerRef.current.style.visibility = "visible";
        }
      }

      mouse.current = {
        x: event.clientX,
        y: event.clientY,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      if (mouse.current) {
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
          const element = dotRefs.current[index];

          if (!element) return;

          element.style.transform = `translate3d(${point.x}px, ${point.y}px, 0)`;
        });
      }

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
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-9999 hidden md:block"
      style={{ visibility: "hidden" }}
    >
      {TRAIL_INDEXES.map((index) => {
        const size = Math.max(3, 10 - index * 0.6);
        const opacity = Math.max(0.02, 0.22 - index * 0.016);

        return (
          <span
            key={index}
            ref={(element) => {
              dotRefs.current[index] = element;
            }}
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
