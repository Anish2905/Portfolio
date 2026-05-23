"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-[-10] overflow-hidden pointer-events-none select-none">
      {/* Animated Mesh Grid Overlay */}
      <div className="bg-mesh-grid" />

      {/* Floating Radial Ambient Orbs */}
      <div className="bg-radial-orbs">
        <motion.div
          className="orb-primary"
          animate={{
            x: [0, 80, -40, 0],
            y: [0, 50, 70, 0],
            scale: [1, 1.12, 0.95, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="orb-secondary"
          animate={{
            x: [0, -90, 50, 0],
            y: [0, -60, -30, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}
