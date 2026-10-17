"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine pointer and no reduced motion preference
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouch || reducedMotion) {
      return;
    }

    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest("a") ||
          target.closest("button") ||
          target.closest("[role='button']") ||
          target.getAttribute("data-interactive") === "true")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Smooth lerp for trailing ring
  useEffect(() => {
    if (!mounted) return;

    let animId: number;
    const updateRing = () => {
      setRingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.2,
        y: prev.y + (position.y - prev.y) * 0.2,
      }));
      animId = requestAnimationFrame(updateRing);
    };
    animId = requestAnimationFrame(updateRing);

    return () => cancelAnimationFrame(animId);
  }, [mounted, position]);

  if (!mounted || !isVisible) return null;

  return (
    <>
      {/* Central tiny neon-pastel dot */}
      <div
        className="pointer-events-none fixed z-50 rounded-full bg-ooo-marceline transition-transform duration-75 ease-out"
        style={{
          width: "6px",
          height: "6px",
          transform: `translate3d(${position.x - 3}px, ${position.y - 3}px, 0)`,
        }}
      />
      {/* Subtle trailing ring */}
      <div
        className={`pointer-events-none fixed z-50 rounded-full border border-ooo-marceline/60 transition-[transform,opacity,border-color] duration-200 ease-out ${
          isHovering
            ? "scale-150 bg-ooo-marceline/20 border-ooo-marceline"
            : "scale-100 bg-transparent"
        }`}
        style={{
          width: "22px",
          height: "22px",
          transform: `translate3d(${ringPos.x - 11}px, ${ringPos.y - 11}px, 0)`,
        }}
      />
    </>
  );
}
