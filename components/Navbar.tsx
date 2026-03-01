"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500);

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
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="fixed bottom-6 left-1/2 z-[100] -translate-x-1/2"
        >
          <div className="glass-strong flex items-center gap-1 rounded-full px-2 py-2 shadow-2xl shadow-black/50">
            {navItems.map((item) => (
              <MagneticButton
                key={item.href}
                strength={0.15}
                onClick={() => handleClick(item.href)}
              >
                <motion.div
                  className={`relative rounded-full px-4 py-2 text-[11px] font-medium tracking-wider uppercase transition-colors duration-150 ${
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
      )}
    </AnimatePresence>
  );
}
