"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Compass, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CHECKOUT_URL, LOGIN_URL } from "@/lib/constants";

const navLinks = [
  { label: "Método", href: "#metodo" },
  { label: "Pilares", href: "#pilares" },
  { label: "Sobre", href: "#jornada" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-[var(--cyan-vivid)] to-[var(--blue-royal)] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
              <Compass className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight" style={{ fontFamily: "var(--font-outfit)" }}>
              <span className="gradient-text">PROTOCOLO</span>{" "}
              <span className="text-white">45</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-2 text-sm text-[var(--text-secondary)] hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              className="text-[var(--text-secondary)] hover:text-white"
              render={<a href={LOGIN_URL} />}
            >
              Entrar
            </Button>
            <a
              href={CHECKOUT_URL}
              className="btn-cta inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm"
            >
              Começar Agora
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[var(--text-secondary)] hover:text-white"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav overlay */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden glass border-t border-white/5"
        >
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left px-4 py-3 text-[var(--text-secondary)] hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href={LOGIN_URL}
                className="block text-center px-4 py-3 text-[var(--text-secondary)] hover:text-white rounded-lg transition-colors"
              >
                Entrar
              </a>
              <a
                href={CHECKOUT_URL}
                className="btn-cta block text-center px-4 py-3 rounded-lg text-sm"
              >
                Começar Agora
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
