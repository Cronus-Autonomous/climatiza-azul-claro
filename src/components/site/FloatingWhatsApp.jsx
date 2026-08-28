import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WHATSAPP_DEFAULT_URL } from "@/lib/siteConfig";
import WhatsAppIcon from "./WhatsAppIcon";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={WHATSAPP_DEFAULT_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Solicitar orçamento pelo WhatsApp"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="fixed z-40 bottom-5 right-5 flex items-center gap-2.5 rounded-full pl-4 pr-5 py-3.5 font-ui text-sm font-semibold shadow-[0_12px_30px_-8px_rgba(16,33,43,0.4)]"
          style={{ background: "hsl(194 77% 62%)", color: "hsl(207 72% 16%)" }}
        >
          <span className="relative">
            <WhatsAppIcon className="h-6 w-6" />
            <motion.span
              className="absolute inset-0 rounded-full"
              style={{ background: "hsl(194 77% 62%)", boxShadow: "0 0 0 0 hsl(194 77% 62% / 0.5)" }}
              animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            />
          </span>
          <span className="hidden sm:inline">Solicitar orçamento</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}