"use client";

import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-purple-500/10 relative z-10 bg-[rgba(3,0,20,0.4)] backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Monogram / Title */}
        <p className="text-xs font-mono text-indigo-300/40 select-none">
          © {currentYear} {SITE_CONFIG.name}. All Rights Reserved.
        </p>

        {/* Humorous / Creative Sub-text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs sm:text-sm font-medium text-purple-400/70 text-center"
        >
          Made while mass procrastinating & shipped with ☕
        </motion.p>

        {/* Minimal Tech Tag */}
        <p className="text-[10px] font-mono text-cyan-400/60 uppercase tracking-widest bg-cyan-400/5 px-2.5 py-1 rounded border border-cyan-400/10">
          React 19 & Next.js 16
        </p>

      </div>
    </footer>
  );
}
