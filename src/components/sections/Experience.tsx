"use client";

import { motion } from "framer-motion";
import { EXPERIENCE_DATA } from "@/lib/constants";

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="section-label">Experience</span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight font-heading text-foreground">
            Professional Timeline
          </h2>
          <p className="text-muted-foreground text-sm mt-2 max-w-md">
            My career trajectory in software engineering and data analytics.
          </p>
        </motion.div>

        {/* Vertical Timeline container */}
        <div className="relative mt-12">
          {/* Vertical Center/Left Glowing Line */}
          <div className="timeline-line" />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {EXPERIENCE_DATA.map((job, index) => {
              const isCurrent = job.period.toLowerCase().includes("present");
              const isEven = index % 2 === 0;

              return (
                <div key={job.company} className="relative flex flex-col md:flex-row items-center justify-between">
                  {/* Glowing Node Dot on Timeline */}
                  <div className={`timeline-dot ${isCurrent ? "current" : ""}`} />

                  {/* Left spacer / card (Desktop side 1) */}
                  <div className={`w-full md:w-[45%] ${isEven ? "md:order-1" : "md:order-3 md:text-right"}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="bento-card text-left"
                    >
                      {/* Card Header */}
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                        <div>
                          <span className="text-xs text-muted-foreground font-mono font-medium tracking-wide">
                            {job.period}
                          </span>
                          <h3 className="text-lg font-bold text-foreground mt-1">
                            {job.title}
                          </h3>
                          <p className="text-sm font-semibold text-muted-foreground">
                            {job.company}
                          </p>
                        </div>
                        
                        {/* Current badge */}
                        {isCurrent && (
                          <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25 uppercase tracking-wider">
                            Current
                          </span>
                        )}
                      </div>

                      {/* Job Description Points */}
                      <ul className="space-y-3 mt-4">
                        {job.highlights.map((point, pIndex) => (
                          <li
                            key={pIndex}
                            className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex items-start gap-2.5"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 mt-2 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Desktop Middle Spacer */}
                  <div className="hidden md:block w-[10%] md:order-2" />

                  {/* Right spacer (Desktop side 2) */}
                  <div className="hidden md:block w-[45%] md:order-3" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
