"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    index: "01",
    title: "Crunchyroll",
    subtitle: "Roku Smart TV App",
    description:
      "Leading the UI redesign of Sony's flagship anime streaming platform on Connected TV. Engineering features for 20M+ global users with Brightscript and SceneGraph.",
    tech: ["Brightscript", "TypeScript", "SceneGraph", "AWS S3"],
    gradient: "from-[#f47521]/20 to-[#ff6b35]/5",
    accentColor: "#f47521",
    link: "https://www.crunchyroll.com",
  },
  {
    index: "02",
    title: "HBO Max",
    subtitle: "Connected TV Platform",
    description:
      "Built the streaming app serving 100M+ users globally. Engineered progressive rendering for 60% faster page loads. Feature led Live Sports, CNN Max, and Parental Controls.",
    tech: ["Brightscript", "SceneGraph", "Python", "REST APIs"],
    gradient: "from-[#b385ff]/20 to-[#7b2ff2]/5",
    accentColor: "#b385ff",
    link: "https://www.max.com",
  },
  {
    index: "03",
    title: "Matco Enterprise",
    subtitle: "Corporate Website",
    description:
      "Designed and built the official website for a multinational corporation from concept through deployment. Full-stack Next.js application with modern UI/UX.",
    tech: ["Next.js", "TypeScript", "React", "Tailwind"],
    gradient: "from-[#00d4aa]/20 to-[#00b894]/5",
    accentColor: "#00d4aa",
    link: "https://www.matcoenterprise.com",
  },
  {
    index: "04",
    title: "Fraud Detection API",
    subtitle: "Capital One — Senior Design",
    description:
      "Real-time fraud detection microservice built for Capital One. REST API with OCR-powered document verification using Google Tesseract and Drools rule engine.",
    tech: ["Java", "Spring", "Google Tesseract", "Drools"],
    gradient: "from-[#4da6ff]/20 to-[#0066cc]/5",
    accentColor: "#4da6ff",
  },
];

function ProjectCard({
  project,
  idx,
}: {
  project: (typeof projects)[0];
  idx: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 200, damping: 20 };
  const rotateX = useSpring(useMotionValue(0), springConfig);
  const rotateY = useSpring(useMotionValue(0), springConfig);
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = e.clientX - centerX;
    const y = e.clientY - centerY;

    rotateX.set((-y / rect.height) * 8);
    rotateY.set((x / rect.width) * 8);
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [60, 0, -30]
  );

  return (
    <motion.div style={{ y }} className="perspective">
      <AnimatedSection delay={idx * 0.15} direction={idx % 2 === 0 ? "left" : "right"}>
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="group relative"
        >
          <div
            className={`glass relative overflow-hidden rounded-2xl transition-all duration-300 hover:border-[rgba(255,255,255,0.1)]`}
          >
            {/* Glow follow cursor */}
            {isHovered && (
              <motion.div
                className="pointer-events-none absolute z-0 h-64 w-64 rounded-full opacity-30 blur-[80px]"
                style={{
                  background: project.accentColor,
                  x: glowX,
                  y: glowY,
                  translateX: "-50%",
                  translateY: "-50%",
                }}
              />
            )}

            {/* Gradient preview area */}
            <div
              className={`relative h-48 w-full overflow-hidden bg-gradient-to-br ${project.gradient} md:h-56`}
            >
              {/* Decorative streaming lines */}
              <div className="absolute inset-0 opacity-20">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute h-[1px] bg-white/20"
                    style={{
                      top: `${20 + i * 15}%`,
                      left: "-10%",
                      width: "120%",
                      rotate: -3,
                    }}
                    animate={
                      isHovered
                        ? {
                            x: [0, 40, 0],
                            opacity: [0.1, 0.3, 0.1],
                          }
                        : {}
                    }
                    transition={{
                      duration: 2 + i * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>

              {/* Large index number */}
              <div
                className="absolute bottom-4 right-6 text-[5rem] font-extrabold leading-none opacity-[0.06] md:text-[7rem]"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {project.index}
              </div>

              {/* Play icon overlay on hover */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isHovered
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full"
                  style={{
                    background: `${project.accentColor}33`,
                    backdropFilter: "blur(12px)",
                    border: `1px solid ${project.accentColor}44`,
                  }}
                >
                  <svg
                    className="ml-0.5 h-5 w-5"
                    style={{ color: project.accentColor }}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </motion.div>
            </div>

            {/* Content */}
            <div className="relative z-10 p-6 md:p-7">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <span
                    className="mb-1 block text-[10px] tracking-[0.3em]"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: project.accentColor,
                    }}
                  >
                    {project.index}
                  </span>
                  <h3
                    className="text-xl font-bold tracking-tight md:text-2xl"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="mt-0.5 text-xs text-[--color-text-secondary]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {project.subtitle}
                  </p>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[rgba(255,255,255,0.1)] transition-all duration-150 hover:border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.05)]"
                  >
                    <svg
                      className="h-3.5 w-3.5 text-[--color-text-secondary]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </a>
                )}
              </div>

              <p
                className="mb-5 text-sm leading-relaxed text-[--color-text-secondary]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[rgba(255,255,255,0.1)] px-3 py-1 text-[10px] tracking-wider text-[--color-text-muted] transition-colors duration-150 hover:text-[--color-text-secondary]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatedSection>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-32 md:py-44">
      <div className="mx-auto max-w-5xl">
        <AnimatedSection>
          <p className="section-label mb-4">Projects</p>
          <h2
            className="mb-20 text-[clamp(2rem,5vw,4rem)] font-extrabold leading-[1.05] tracking-tight md:mb-28"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Featured
            <br />
            <span className="text-[--color-text-secondary]">work</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
