"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (!el) return;

    if (window.__lenis) {
      window.__lenis.scrollTo(el as HTMLElement, { offset: -50 });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="fixed top-0 left-0 z-[100] flex items-end justify-center pointer-events-none"
      style={{ width: "100vw", height: "100svh" }}
    >
      <nav
        className="pointer-events-auto mb-8 sm:mb-8 max-w-[calc(100vw-1.5rem)]"
        style={{
          WebkitTapHighlightColor: "transparent",
          userSelect: "none",
          WebkitUserSelect: "none" as unknown as string,
          touchAction: "manipulation",
        }}
      >
        <div
          className="flex items-center gap-0.5 rounded-full px-1.5 py-1.5 shadow-2xl shadow-black/50 sm:gap-1 sm:px-2 sm:py-2"
          style={{
            background: "rgba(10, 10, 10, 0.85)",
            backdropFilter: "blur(40px)",
            WebkitBackdropFilter: "blur(40px)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            boxShadow:
              "0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <button
                key={item.href}
                type="button"
                onClick={() => handleClick(item.href)}
                className="relative appearance-none border-none bg-transparent p-0 outline-none focus:outline-none active:outline-none"
                style={{
                  WebkitTapHighlightColor: "transparent",
                  WebkitTouchCallout: "none" as unknown as string,
                }}
              >
                <div
                  className={`relative rounded-full px-3 py-2 text-[10px] font-medium tracking-wider uppercase sm:px-4 sm:py-2 sm:text-[11px] ${
                    isActive
                      ? "text-[#050505]"
                      : "text-[#888] sm:hover:text-[#ccc]"
                  }`}
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {isActive && (
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
                  <span className="relative z-10 pointer-events-none select-none">
                    {item.label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
