"use client";

import { useEffect, useState } from "react";

export default function SpotlightCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const checkTheme = () => {
            setIsDark(!document.documentElement.classList.contains("light"));
        };

        // Check theme initially and on changes
        checkTheme();
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            observer.disconnect();
        };
    }, []);

    const color = isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(0, 0, 0, 0.03)";

    return (
        <div
            className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
            style={{
                background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${color}, transparent 80%)`,
            }}
        />
    );
}
