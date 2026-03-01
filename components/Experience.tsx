"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    index: "01",
    company: "Crunchyroll (Sony)",
    role: "Software Engineer 2",
    location: "San Francisco, CA",
    period: "Jan 2025 — Present",
    highlights: [
      "Engineering Sony's flagship anime streaming app on Roku Smart TV, serving 20M+ users globally",
      "Led complete UI redesign of Smart TV apps as Engineering Champion — reducing homepage churn and boosting engagement",
      "Built remote asset storage via AWS S3 + Figma automation, cutting app package size by 55%",
    ],
    tech: ["Brightscript", "TypeScript", "SceneGraph", "AWS S3"],
  },
  {
    index: "02",
    company: "Warner Bros. Discovery",
    role: "Software Engineer 2",
    location: "Seattle, WA",
    period: "Jul 2022 — Jan 2025",
    highlights: [
      "Built HBO Max streaming app for 100M+ global users on Roku Connected TV platform",
      "Scaled Max app to 65+ countries — powered Paris Olympics '24, House of the Dragon, March Madness",
      "Engineered progressive rendering cutting Home page load by 60%; drove crash-free rate above 99%",
      "Feature lead for Live Sports (CNN Max), Parental Controls, and Top 10 Movies/Series",
    ],
    tech: ["Brightscript", "SceneGraph", "Python", "REST APIs"],
  },
  {
    index: "03",
    company: "Text-Em-All",
    role: "Software Engineer",
    location: "Dallas, TX",
    period: "Jan 2022 — May 2022",
    highlights: [
      "Led backend development for Profile Pictures feature with REST APIs on .NET and AWS S3",
      "Built analytics dashboards with AWS QuickSight and SQL for onboarding tracking",
      "Boosted onboarding completion rates by 21% through React + C# enhancements",
    ],
    tech: ["React", "C#", ".NET", "AWS S3", "SQL"],
  },
  {
    index: "04",
    company: "Discovery Inc.",
    role: "Software Engineer Intern",
    location: "New York, NY",
    period: "Jun 2021 — Aug 2021",
    highlights: [
      "Shipped production code for Food Network Kitchen iOS — 1M+ MAU, 4.9★ App Store rating",
      "Built the Reviews & Ratings feature end-to-end with Swift, UIKit, GraphQL and REST APIs",
    ],
    tech: ["Swift", "UIKit", "GraphQL", "REST APIs"],
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative px-6 py-32 md:py-44"
    >
      <div className="mx-auto max-w-5xl">
        <AnimatedSection>
          <p className="section-label mb-4">Experience</p>
          <h2
            className="mb-20 text-[clamp(2rem,5vw,4rem)] font-extrabold leading-[1.05] tracking-tight md:mb-28"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Where I&apos;ve
            <br />
            <span className="text-[--color-text-secondary]">built things</span>
          </h2>
        </AnimatedSection>

        <div className="relative">
          {/* Animated timeline line */}
          <div className="absolute left-0 top-0 hidden h-full w-[1px] bg-[--color-text-muted] md:block">
            <motion.div
              className="w-full bg-[--color-accent] origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-20 md:space-y-28 md:pl-16">
            {experiences.map((exp, idx) => (
              <AnimatedSection
                key={exp.company}
                delay={idx * 0.1}
                direction={idx % 2 === 0 ? "left" : "right"}
              >
                <div className="group relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-16 top-2 hidden md:block">
                    <div className="flex h-3 w-3 items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-[--color-text-muted] transition-colors duration-300 group-hover:bg-[--color-accent]" />
                    </div>
                  </div>

                  <div className="glass rounded-2xl p-6 transition-all duration-300 hover:border-[rgba(168,255,0,0.1)] hover:bg-[--color-glass-hover] md:p-8">
                    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div>
                        <span
                          className="mb-2 block text-[10px] tracking-[0.3em] text-[--color-accent]"
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          {exp.index}
                        </span>
                        <h3
                          className="text-2xl font-bold tracking-tight md:text-3xl"
                          style={{ fontFamily: "var(--font-syne)" }}
                        >
                          {exp.company}
                        </h3>
                        <p
                          className="mt-1 text-sm text-[--color-text-secondary]"
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          {exp.role}
                        </p>
                      </div>
                      <div className="text-right">
                        <p
                          className="text-xs text-[--color-text-secondary]"
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          {exp.period}
                        </p>
                        <p
                          className="mt-0.5 text-xs text-[--color-text-muted]"
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          {exp.location}
                        </p>
                      </div>
                    </div>

                    <ul className="mb-6 space-y-3">
                      {exp.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex gap-3">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[--color-accent] opacity-60" />
                          <span
                            className="text-sm leading-relaxed text-[--color-text-secondary]"
                            style={{ fontFamily: "var(--font-mono)" }}
                          >
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-[rgba(255,255,255,0.1)] px-3 py-1 text-[10px] tracking-wider text-[--color-text-muted] transition-colors duration-150 hover:border-[rgba(168,255,0,0.3)] hover:text-[--color-text-secondary]"
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
