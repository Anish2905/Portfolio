"use client";

import { motion } from "framer-motion";
import { PROJECTS_DATA } from "@/lib/constants";

const GithubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const ExternalIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="section-label">Projects</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-heading">
            Selected Creations
          </h2>
          <p className="text-indigo-200/50 text-sm mt-2 max-w-md">
            A hand-picked selection of full-stack systems, deep learning tools, and core developer tools.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="project-card flex flex-col justify-between group"
            >
              <div>
                {/* Header line: Featured Badge & Date */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  {project.featured ? (
                    <span className="tag text-[10px] font-bold tracking-wider px-2.5 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/25">
                      Featured
                    </span>
                  ) : (
                    <span className="text-xs text-indigo-300/40 font-mono">Project // {project.id}</span>
                  )}
                  <span className="text-xs text-indigo-300/40 font-mono font-medium">
                    {project.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-indigo-200/70 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded bg-white/5 border border-white/10 text-indigo-200/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-indigo-200/80 hover:text-white transition-colors flex items-center gap-2 text-sm font-semibold"
                >
                  <GithubIcon />
                  <span>Repository</span>
                </motion.a>
                
                {project.external && (
                  <motion.a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2 text-sm font-semibold ml-2"
                  >
                    <ExternalIcon />
                    <span>Live Demo</span>
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="https://github.com/Anish2905"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-outline inline-flex gap-2.5 items-center"
          >
            <GithubIcon />
            <span>Explore More on GitHub</span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
