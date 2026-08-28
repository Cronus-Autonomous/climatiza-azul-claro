import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { WHATSAPP_DEFAULT_URL } from "@/lib/siteConfig";
import WhatsAppIcon from "./WhatsAppIcon";

const trust = [
  "Atendimento profissional",
  "Orçamento claro",
  "Equipe especializada",
];

export default function FinalCTA() {
  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: "hsl(207 72% 16%)" }}
    >
      <div className="absolute inset-0 blueprint-grid-dark opacity-25" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 60% at 50% 100%, hsl(200 69% 34% / 0.3), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-[1320px] px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading font-extrabold leading-[1.1] tracking-[-0.02em] text-white text-balance"
            style={{ fontSize: "clamp(1.9rem, 4vw, 3.1rem)" }}
          >
            Seu conforto não deveria depender de uma{" "}
            <span style={{ color: "hsl(194 77% 62%)" }}>instalação improvisada.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-white/70 leading-relaxed text-lg"
          >
            Conte o que você precisa. Nossa equipe avalia a melhor solução para
            o seu ambiente e orienta os próximos passos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5"
          >
            <a
              href={WHATSAPP_DEFAULT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-4 font-ui text-[15px] font-semibold min-h-[52px] transition-all hover:-translate-y-0.5"
              style={{
                background: "hsl(194 77% 62%)",
                color: "hsl(207 72% 16%)",
                boxShadow: "0 14px 34px -10px hsl(194 77% 62% / 0.7)",
              }}
            >
              <WhatsAppIcon className="h-[19px] w-[19px]" />
              Solicitar orçamento
            </a>
            <a
              href="#contato"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contato")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 font-ui text-[15px] font-semibold min-h-[52px] text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-all"
            >
              Falar com um especialista
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.26 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5"
          >
            {trust.map((t) => (
              <div key={t} className="flex items-center gap-2">
                <Check
                  className="h-4 w-4"
                  style={{ color: "hsl(194 77% 62%)" }}
                  strokeWidth={3}
                />
                <span className="font-ui text-sm text-white/75">{t}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}