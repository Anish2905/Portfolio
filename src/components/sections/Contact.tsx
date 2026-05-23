"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { SITE_CONFIG } from "@/lib/constants";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SITE_CONFIG.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Contact Glass Bento Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="bento-card py-16 px-8 md:px-16 text-center border border-border bg-card shadow-sm"
        >
          <span className="section-label">Connect</span>
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-heading mt-4 mb-6 leading-tight text-foreground">
            Let&apos;s Build Something Together
          </h2>
          
          <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto mb-10 leading-relaxed">
            I am currently a Software Developer at HLTHTek Optimus, but always excited to connect, share ideas, collaborate on open-source, or discuss new opportunities.
          </p>

          {/* Email Copy Card Option */}
          <div className="flex flex-col sm:flex-row gap-3.5 justify-center items-center">
            <motion.a
              href={`mailto:${SITE_CONFIG.email}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary"
            >
              <span>Say Hello</span>
              <svg className="w-4 h-4 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </motion.a>

            <motion.button
              onClick={handleCopyEmail}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-outline flex items-center gap-2"
            >
              <span>{copied ? "Email Copied!" : "Copy Email"}</span>
              {copied ? (
                <svg className="w-4 h-4 text-emerald-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
              )}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
