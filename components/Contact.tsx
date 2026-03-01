"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import MagneticButton from "./MagneticButton";

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-32 md:py-44">
      <div className="mx-auto max-w-5xl">
        {/* Ambient glow */}
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[--color-accent] opacity-[0.02] blur-[120px]" />

        <AnimatedSection>
          <p className="section-label mb-4">Contact</p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2
            className="mb-8 text-[clamp(2.5rem,7vw,6rem)] font-extrabold leading-[0.95] tracking-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Let&apos;s build
            <br />
            <span className="text-[--color-text-secondary]">
              something great
            </span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p
            className="mb-12 max-w-lg text-sm leading-relaxed text-[--color-text-secondary] md:text-base"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            I&apos;m always interested in hearing about new projects,
            opportunities, and ideas in the streaming media and full-stack
            engineering space.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="flex flex-wrap items-center gap-4">
            <MagneticButton
              href="mailto:mushfiqarashid@gmail.com"
              strength={0.2}
            >
              <motion.div
                className="group relative overflow-hidden rounded-full px-8 py-4"
                style={{ background: "var(--color-accent)" }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span
                  className="relative z-10 flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#050505]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  Send me an email
                </span>
                {/* Hover shimmer */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            </MagneticButton>

            <MagneticButton
              href="https://linkedin.com/in/mushfiqrashid"
              strength={0.2}
            >
              <div className="glass flex items-center gap-2 rounded-full px-6 py-4 transition-all duration-150 hover:border-[rgba(255,255,255,0.12)]">
                <svg
                  className="h-4 w-4 text-[--color-text-secondary]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span
                  className="text-xs font-medium uppercase tracking-widest text-[--color-text-secondary]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  LinkedIn
                </span>
              </div>
            </MagneticButton>

            <MagneticButton
              href="https://github.com/generalnel"
              strength={0.2}
            >
              <div className="glass flex items-center gap-2 rounded-full px-6 py-4 transition-all duration-150 hover:border-[rgba(255,255,255,0.12)]">
                <svg
                  className="h-4 w-4 text-[--color-text-secondary]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span
                  className="text-xs font-medium uppercase tracking-widest text-[--color-text-secondary]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  GitHub
                </span>
              </div>
            </MagneticButton>
          </div>
        </AnimatedSection>

        {/* Footer */}
        <AnimatedSection delay={0.5}>
          <div className="mt-32 flex flex-col items-start justify-between gap-4 border-t border-[rgba(255,255,255,0.04)] pt-8 md:flex-row md:items-center">
            <p
              className="text-[11px] text-[--color-text-muted]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              &copy; {new Date().getFullYear()} Mushfiq Rashid
            </p>
            <p
              className="text-[11px] text-[--color-text-muted]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              San Francisco, CA
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
