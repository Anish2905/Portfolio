"use client";

import { motion } from "framer-motion";
import { EXPERIENCE_DATA } from "@/lib/constants";

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="section-label">Experience</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-heading">
            Professional Timeline
          </h2>
          <p className="text-indigo-200/50 text-sm mt-2 max-w-md">
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
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="bento-card text-left"
                    >
                      {/* Card Header */}
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                        <div>
                          <span className="text-xs text-purple-400 font-mono font-bold tracking-wide">
                            {job.period}
                          </span>
                          <h3 className="text-lg font-bold text-white mt-1">
                            {job.title}
                          </h3>
                          <p className="text-sm font-medium text-cyan-400">
                            {job.company}
                          </p>
                        </div>
                        
                        {/* Current badge with glow */}
                        {isCurrent && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 uppercase tracking-widest animate-pulse">
                            Current
                          </span>
                        )}
                      </div>

                      {/* Job Description Points */}
                      <ul className="space-y-3 mt-4">
                        {job.highlights.map((point, pIndex) => (
                          <li
                            key={pIndex}
                            className="text-xs sm:text-sm text-indigo-200/70 leading-relaxed flex items-start gap-2.5"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/70 mt-1.5 shrink-0" />
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
