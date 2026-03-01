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
                <div className="glass group h-full rounded-2xl p-7 transition-all duration-300 hover:border-[rgba(168,255,0,0.1)] hover:bg-[--color-glass-hover] md:p-8">
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
                          ease: [0.25, 0.4, 0.25, 1],
                        }}
                        className="rounded-full border border-[rgba(255,255,255,0.1)] px-3.5 py-1.5 text-[11px] tracking-wide text-[--color-text-secondary] transition-all duration-150 hover:border-[rgba(168,255,0,0.35)] hover:text-[--color-text]"
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

        {/* Education badges */}
        <AnimatedSection delay={0.5} className="mt-16">
          <div className="glass rounded-2xl p-7 md:p-8">
            <p className="section-label mb-5">Education</p>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4
                  className="text-base font-bold"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  Westcliff University
                </h4>
                <p
                  className="mt-1 text-xs text-[--color-text-secondary]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  M.S. Computer Science &middot; GPA 4.0
                </p>
                <p
                  className="text-xs text-[--color-text-muted]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Jun 2025 — Jun 2026
                </p>
              </div>
              <div>
                <h4
                  className="text-base font-bold"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  UT Dallas
                </h4>
                <p
                  className="mt-1 text-xs text-[--color-text-secondary]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  B.S. Computer Science &middot; GPA 4.0 &middot; Summa Cum
                  Laude
                </p>
                <p
                  className="text-xs text-[--color-text-muted]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Aug 2018 — May 2022 &middot; Collegium V Honors &middot; Full
                  Scholarship
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
