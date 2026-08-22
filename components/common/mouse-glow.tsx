"use client";

import { useEffect, useRef } from "react";

export function MouseGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const finePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    if (!finePointer.matches || reducedMotion.matches) return;

    let targetX = -600;
    let targetY = -600;
    let x = targetX;
    let y = targetY;
    let raf = 0;
    let lastTime = 0;
    let hasMoved = false;

    const tick = (time: number) => {
      const elapsed = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      const smoothing = 1 - Math.exp(-5 * elapsed);
      x += (targetX - x) * smoothing;
      y += (targetY - y) * smoothing;
      element.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;

      if (Math.abs(targetX - x) > 0.2 || Math.abs(targetY - y) > 0.2) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = 0;
      }
    };

    const onMouseMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      if (!hasMoved) {
        hasMoved = true;
        x = targetX;
        y = targetY;
        element.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
        return;
      }
      if (!raf) {
        lastTime = performance.now();
        raf = requestAnimationFrame(tick);
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-30 size-[480px] rounded-full opacity-75 mix-blend-screen will-change-transform"
      style={{
        background:
          "radial-gradient(circle, rgba(163,230,53,0.09) 0%, rgba(163,230,53,0.032) 40%, transparent 65%)",
        transform: "translate3d(-600px, -600px, 0) translate(-50%, -50%)",
      }}
    />
  );
}
