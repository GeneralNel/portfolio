"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Work", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1));
      const scrollY = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
        <motion.nav
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] }}
          className="fixed bottom-6 left-1/2 z-[100] -translate-x-1/2 max-w-[calc(100vw-1.5rem)]"
        >
          <div className="glass-strong flex items-center gap-0.5 rounded-full px-1.5 py-1.5 shadow-2xl shadow-black/50 sm:gap-1 sm:px-2 sm:py-2">
            {navItems.map((item) => (
              <MagneticButton
                key={item.href}
                strength={0.15}
                onClick={() => handleClick(item.href)}
              >
                <motion.div
                  className={`relative rounded-full px-3 py-1.5 text-[10px] font-medium tracking-wider uppercase transition-colors duration-150 sm:px-4 sm:py-2 sm:text-[11px] ${
                    activeSection === item.href.slice(1)
                      ? "text-[#050505]"
                      : "text-[#888] hover:text-[#ccc]"
                  }`}
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {activeSection === item.href.slice(1) && (
                    <motion.div
                      layoutId="navPill"
                      className="absolute inset-0 rounded-full"
                      style={{ background: "var(--color-accent)" }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </motion.div>
              </MagneticButton>
            ))}
          </div>
        </motion.nav>
  );
}
