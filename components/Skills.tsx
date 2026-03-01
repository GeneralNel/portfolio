"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const skillCategories = [
  {
    title: "Languages",
    icon: "{ }",
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "Brightscript",
      "C#",
      "C++",
      "Swift",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Frameworks",
    icon: "< />",
    skills: [
      "React",
      "Next.js",
      "React Native",
      ".NET",
      "Node.js",
      "Spring",
      "UIKit",
      "SceneGraph",
    ],
  },
  {
    title: "Cloud & Data",
    icon: "☁",
    skills: [
      "AWS S3",
      "Firebase",
      "SQL Server",
      "MySQL",
      "REST APIs",
      "GraphQL",
      "Docker",
    ],
  },
  {
    title: "Platforms",
    icon: "▶",
    skills: [
      "Roku OS",
      "Connected TV",
      "iOS",
      "Web",
      "Git",
      "CI/CD",
      "Figma",
    ],
  },
];

function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 300, damping: 20 };
  const rotateX = useSpring(useMotionValue(0), springConfig);
  const rotateY = useSpring(useMotionValue(0), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    rotateX.set((-mouseY / rect.height) * 12);
    rotateY.set((mouseX / rect.width) * 12);
    x.set(mouseX * 0.05);
    y.set(mouseY * 0.05);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        x,
        y,
        transformStyle: "preserve-3d",
      }}
      className={`${className} ${isHovered ? "z-10" : ""}`}
    >
      {children}
    </motion.div>
  );
}

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative px-6 py-32 md:py-44">
      <div ref={containerRef} className="mx-auto max-w-5xl">
        <AnimatedSection>
          <p className="section-label mb-4">Skills</p>
          <h2
            className="mb-20 text-[clamp(2rem,5vw,4rem)] font-extrabold leading-[1.05] tracking-tight md:mb-28"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Tech stack &
            <br />
            <span className="text-[--color-text-secondary]">focus areas</span>
          </h2>
        </AnimatedSection>

        <div className="perspective grid grid-cols-1 gap-5 md:grid-cols-2">
          {skillCategories.map((cat, idx) => (
            <AnimatedSection key={cat.title} delay={idx * 0.15}>
              <TiltCard>
                <div className="glass group h-full rounded-2xl p-7 transition-all duration-300 hover:border-[rgba(156,191,90,0.1)] hover:bg-[--color-glass-hover] md:p-8">
                  <div className="mb-6 flex items-center justify-between">
                    <h3
                      className="text-lg font-bold tracking-tight md:text-xl"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      {cat.title}
                    </h3>
                    <span
                      className="text-lg text-[--color-accent] opacity-60"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {cat.icon}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={
                          isInView
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0.8 }
                        }
                        transition={{
                          delay: idx * 0.15 + sIdx * 0.03 + 0.3,
                          duration: 0.4,
                          ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
                        }}
                        className="rounded-full border border-[rgba(255,255,255,0.1)] px-3.5 py-1.5 text-[11px] tracking-wide text-[--color-text-secondary] transition-all duration-150 hover:border-[rgba(156,191,90,0.35)] hover:text-[--color-text]"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </AnimatedSection>
          ))}
        </div>

        {/* Education — featured section */}
        <AnimatedSection delay={0.5} className="mt-24 md:mt-32">
          {/* Section header with divider */}
          <div className="mb-10 flex items-center gap-5">
            <p className="section-label shrink-0">Education</p>
            <div className="h-px flex-1 bg-[rgba(255,255,255,0.05)]" />
            <p
              className="shrink-0 text-[10px] text-[--color-text-muted] uppercase tracking-[0.2em]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Dual 4.0
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {/* Westcliff — accent-tinted (current / in progress) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] }}
              className="group relative overflow-hidden rounded-2xl border border-[rgba(156,191,90,0.18)] bg-[rgba(156,191,90,0.04)] p-8 md:p-10"
            >
              {/* Ghost watermark GPA */}
              <div
                className="pointer-events-none absolute -right-3 -top-8 select-none text-[10rem] font-extrabold leading-none text-[--color-accent] opacity-[0.06] transition-opacity duration-500 group-hover:opacity-[0.1]"
                style={{ fontFamily: "var(--font-syne)" }}
                aria-hidden
              >
                4.0
              </div>

              {/* Status badge */}
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[rgba(156,191,90,0.35)] bg-[rgba(156,191,90,0.1)] px-3.5 py-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[--color-accent] opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[--color-accent]" />
                </span>
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.18em] text-[--color-accent]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Graduate · In Progress
                </span>
              </div>

              {/* School & degree */}
              <h3
                className="mb-1 text-2xl font-extrabold leading-tight tracking-tight"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Westcliff University
              </h3>
              <p
                className="mb-7 text-sm text-[--color-text-secondary]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                M.S. Computer Science
              </p>

              {/* GPA — large featured number */}
              <div className="mb-6 flex items-baseline gap-2.5">
                <span
                  className="text-[3.5rem] font-extrabold leading-none text-[--color-accent]"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  4.0
                </span>
                <span
                  className="text-[11px] uppercase tracking-[0.2em] text-[--color-text-muted]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  GPA
                </span>
              </div>

              {/* Date */}
              <p
                className="text-[11px] text-[--color-text-muted]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Jun 2025 — Jun 2026
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-[--color-accent] to-transparent transition-transform duration-500 group-hover:scale-x-100" />
            </motion.div>

            {/* UT Dallas — achievement-rich */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] }}
              className="group relative overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.025)] p-8 md:p-10"
            >
              {/* Ghost watermark GPA */}
              <div
                className="pointer-events-none absolute -right-3 -top-8 select-none text-[10rem] font-extrabold leading-none text-white opacity-[0.03] transition-opacity duration-500 group-hover:opacity-[0.055]"
                style={{ fontFamily: "var(--font-syne)" }}
                aria-hidden
              >
                4.0
              </div>

              {/* Degree badge */}
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.05)] px-3.5 py-1.5">
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.18em] text-[--color-text-secondary]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Undergraduate · B.S.
                </span>
              </div>

              {/* School & degree */}
              <h3
                className="mb-1 text-2xl font-extrabold leading-tight tracking-tight"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                UT Dallas
              </h3>
              <p
                className="mb-7 text-sm text-[--color-text-secondary]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                B.S. Computer Science
              </p>

              {/* GPA — large featured number */}
              <div className="mb-6 flex items-baseline gap-2.5">
                <span
                  className="text-[3.5rem] font-extrabold leading-none text-[--color-text]"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  4.0
                </span>
                <span
                  className="text-[11px] uppercase tracking-[0.2em] text-[--color-text-muted]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  GPA
                </span>
              </div>

              {/* Achievement badges */}
              <div className="mb-5 flex flex-wrap gap-2">
                {["Summa Cum Laude", "Full Scholarship", "Collegium V Honors"].map(
                  (badge, i) => (
                    <motion.span
                      key={badge}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.3 + i * 0.07,
                        duration: 0.35,
                        ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
                      }}
                      className="rounded-full border border-[rgba(255,255,255,0.1)] px-3 py-1 text-[10px] tracking-wide text-[--color-text-secondary]"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {badge}
                    </motion.span>
                  )
                )}
              </div>

              {/* Date */}
              <p
                className="text-[11px] text-[--color-text-muted]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Aug 2018 — May 2022
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-[rgba(255,255,255,0.15)] to-transparent transition-transform duration-500 group-hover:scale-x-100" />
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
