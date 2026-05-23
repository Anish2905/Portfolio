"use client";

import { useEffect, useState } from "react";

export default function SpotlightCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDark, setIsDark] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const checkTheme = () => {
      setIsDark(!document.documentElement.classList.contains("light"));
    };

    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, []);

  if (!isMounted) return null;

  // Premium neon gradient mesh centered at mouse cursor
  const gradient = isDark
    ? `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(139, 92, 246, 0.08) 0%, rgba(0, 212, 255, 0.04) 40%, transparent 80%)`
    : `radial-gradient(450px circle at ${position.x}px ${position.y}px, rgba(139, 92, 246, 0.04) 0%, rgba(0, 212, 255, 0.02) 45%, transparent 80%)`;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 select-none"
      style={{
        background: gradient,
      }}
    />
  );
}
