"use client";

import { motion } from "framer-motion";

export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="text-center"
            >
                <div className="relative w-16 h-16 mx-auto mb-4">
                    <motion.div
                        className="absolute inset-0 rounded-full border-4 border-[hsl(var(--foreground))] border-t-transparent"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                </div>
                <p className="text-[hsl(var(--muted-foreground))] text-sm">Loading...</p>
            </motion.div>
        </div>
    );
}
