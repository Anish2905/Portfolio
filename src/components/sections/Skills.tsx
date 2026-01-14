"use client";

import { motion } from "framer-motion";
import { SKILLS_DATA } from "@/lib/constants";

export default function Skills() {
    return (
        <section id="skills" className="py-16">
            <div className="max-w-4xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10"
                >
                    <span className="section-label">Skills</span>
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                        What I work with
                    </h2>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {Object.entries(SKILLS_DATA).map(([key, skills], index) => (
                        <motion.div
                            key={key}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bento-card"
                        >
                            <h3 className="font-medium text-sm capitalize mb-4 text-[hsl(var(--muted-foreground))]">
                                {key.replace("_", " ")}
                            </h3>
                            <ul className="space-y-2">
                                {skills.map((skill) => (
                                    <li
                                        key={skill}
                                        className="text-sm text-[hsl(var(--foreground))]"
                                    >
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
