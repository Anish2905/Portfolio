"use client";

import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border relative z-10 bg-card">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Copyright block */}
        <p className="text-xs font-mono text-muted-foreground select-none">
          © {currentYear} {SITE_CONFIG.name}. All Rights Reserved.
        </p>

        {/* Humorous / Creative Sub-text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-medium text-muted-foreground text-center"
        >
          Made while mass procrastinating & shipped with ☕
        </motion.p>

        {/* Minimal Tech Tag */}
        <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest bg-muted px-2.5 py-1 rounded border border-border">
          React 19 & Next.js 16
        </p>

      </div>
    </footer>
  );
}
