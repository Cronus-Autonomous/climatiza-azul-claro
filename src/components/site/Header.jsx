import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Wind } from "lucide-react";
import { siteConfig, WHATSAPP_DEFAULT_URL } from "@/lib/siteConfig";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNav = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          backgroundColor: scrolled ? "rgba(255,255,255,0.85)" : "rgba(11,45,69,0)",
          borderColor: scrolled ? "rgba(204,20%,88%,0.8)" : "rgba(255,255,255,0)",
          boxShadow: scrolled
            ? "0 6px 24px -12px rgba(16,33,43,0.18)"
            : "0 0 0 rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b"
        style={{ WebkitBackdropFilter: scrolled ? "blur(12px)" : "blur(0px)" }}
      >
        <div className="mx-auto max-w-[1320px] px-5 md:px-8">
          <div className="flex h-[72px] items-center justify-between">
            {/* Logo */}
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                handleNav("#inicio");
              }}
              className="flex items-center gap-2.5 shrink-0"
            >
              <span
                className="grid h-9 w-9 place-items-center rounded-lg"
                style={{
                  background: scrolled
                    ? "hsl(207 72% 16%)"
                    : "rgba(255,255,255,0.12)",
                }}
              >
                <Wind
                  className="h-5 w-5"
                  style={{ color: "hsl(194 77% 62%)" }}
                  strokeWidth={2.4}
                />
              </span>
              <span
                className="font-heading font-extrabold tracking-tight text-lg"
                style={{ color: scrolled ? "hsl(207 72% 16%)" : "#fff" }}
              >
                Thermal<span style={{ color: "hsl(194 77% 62%)" }}>Pro</span>
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {siteConfig.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(item.href);
                  }}
                  className="px-3.5 py-2 rounded-full font-ui text-[14px] font-medium transition-colors"
                  style={{
                    color: scrolled
                      ? "hsl(203 46% 18%)"
                      : "rgba(255,255,255,0.85)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = scrolled
                      ? "hsl(200 69% 34%)"
                      : "#fff")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = scrolled
                      ? "hsl(203 46% 18%)"
                      : "rgba(255,255,255,0.85)")
                  }
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={WHATSAPP_DEFAULT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-ui text-sm font-semibold transition-all hover:-translate-y-0.5"
                style={{
                  background: "hsl(194 77% 62%)",
                  color: "hsl(207 72% 16%)",
                  boxShadow: "0 8px 22px -10px hsl(194 77% 62% / 0.7)",
                }}
              >
                <WhatsAppIcon className="h-[17px] w-[17px]" />
                Solicitar orçamento
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden grid h-10 w-10 place-items-center rounded-lg"
              style={{ color: scrolled ? "hsl(207 72% 16%)" : "#fff" }}
              aria-label="Abrir menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="absolute right-0 top-0 h-full w-[82%] max-w-sm bg-white shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between h-[72px] px-5 border-b border-border">
                <span className="font-heading font-extrabold text-lg text-foreground">
                  Thermal<span style={{ color: "hsl(200 69% 34%)" }}>Pro</span>
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-lg text-foreground"
                  aria-label="Fechar menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto px-3 py-4">
                {siteConfig.nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(item.href);
                    }}
                    className="block px-4 py-3.5 rounded-xl font-ui text-[15px] font-medium text-foreground hover:bg-muted transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="p-5 border-t border-border">
                <a
                  href={WHATSAPP_DEFAULT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2.5 rounded-full px-5 py-3.5 font-ui text-sm font-semibold"
                  style={{
                    background: "hsl(194 77% 62%)",
                    color: "hsl(207 72% 16%)",
                  }}
                >
                  <WhatsAppIcon className="h-[18px] w-[18px]" />
                  Solicitar orçamento
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}