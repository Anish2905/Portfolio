"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center p-8 max-w-md"
            >
                <div className="icon-box rose mx-auto mb-6 w-16 h-16 text-3xl">
                    ⚠️
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                    Something went wrong!
                </h2>
                <p className="text-(--text-secondary) mb-6">
                    An unexpected error occurred. Don&apos;t worry, you can try again.
                </p>
                <button
                    onClick={() => reset()}
                    className="btn-primary"
                >
                    Try Again
                </button>
            </motion.div>
        </div>
    );
}
