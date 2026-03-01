"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 10]);

  const letterVariants = {
    hidden: { y: 100, opacity: 0, rotateX: 90 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        delay: 0.3 + i * 0.04,
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
      },
    }),
  };

  const words = ["MUSHFIQ", "RASHID"];
  let globalIndex = 0;

  const bgGlowY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/4 left-1/4 h-[600px] w-[600px] rounded-full opacity-[0.03]"
          style={{
            background:
              "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
            y,
          }}
        />
        <motion.div
          className="absolute -bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full opacity-[0.02]"
          style={{
            background:
              "radial-gradient(circle, #ffffff 0%, transparent 70%)",
            y: bgGlowY,
          }}
        />
      </div>

      <motion.div
        style={{ y, opacity, scale, rotateX }}
        className="relative z-10 mx-auto max-w-6xl text-center"
      >
        {/* Mono label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="section-label mb-8"
        >
          Software Engineer &mdash; San Francisco
        </motion.p>

        {/* Name */}
        <div
          className="perspective mb-6 overflow-hidden"
          style={{ perspective: "1200px" }}
        >
          <h1
            className="flex flex-wrap items-center justify-center gap-x-[0.3em] text-[clamp(2.2rem,8vw,8rem)] font-extrabold leading-[1] tracking-[-0.03em]"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            {words.map((word, wIdx) => (
              <span key={wIdx} className="inline-flex gap-x-[0.02em]">
                {word.split("").map((letter) => {
                  const i = globalIndex++;
                  return (
                    <motion.span
                      key={i}
                      custom={i}
                      variants={letterVariants}
                      initial="hidden"
                      animate="visible"
                      className="inline-block"
                      style={{ transformOrigin: "bottom" }}
                    >
                      {letter}
                    </motion.span>
                  );
                })}
              </span>
            ))}
          </h1>
        </div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-8"
        >
          <p
            className="mx-auto max-w-xl text-[clamp(0.8rem,1.5vw,1.1rem)] leading-relaxed text-[--color-text-secondary]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Building world-class streaming experiences for millions.{" "}
            Currently engineering at{" "}
            <span className="text-[--color-accent]">Crunchyroll (Sony)</span>.{" "}
            Previously shipping HBO Max at Warner Bros. Discovery.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <MagneticButton href="#contact" strength={0.2}>
            <div className="group glass-strong flex items-center gap-3 rounded-full px-7 py-3.5 transition-all duration-150 hover:border-[rgba(168,255,0,0.2)]">
              <span
                className="text-xs font-medium uppercase tracking-widest text-[--color-text]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Get in touch
              </span>
              <svg
                className="h-3.5 w-3.5 text-[--color-accent] transition-transform duration-150 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </MagneticButton>
          <MagneticButton
            href="https://github.com/mushrashid"
            strength={0.2}
          >
            <div className="glass flex items-center gap-2 rounded-full px-6 py-3.5 transition-all duration-150 hover:border-[rgba(255,255,255,0.12)]">
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
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute -bottom-24 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span
              className="text-[10px] uppercase tracking-[0.3em] text-[--color-text-muted]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Scroll
            </span>
            <div className="h-8 w-[1px] bg-gradient-to-b from-[--color-text-muted] to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
