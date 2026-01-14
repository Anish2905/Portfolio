"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="py-8 border-t border-[hsl(var(--border))]">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-sm text-[hsl(var(--muted-foreground))]"
                >
                    made while mass procrastinating
                </motion.p>
            </div>
        </footer>
    );
}
