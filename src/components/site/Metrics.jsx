import React from "react";
import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import { siteConfig, WHATSAPP_DEFAULT_URL } from "@/lib/siteConfig";
import WhatsAppIcon from "./WhatsAppIcon";

function BigMetric({ value, label, prefix = "", suffix = "" }) {
  const { value: count, ref } = useCountUp(value, { duration: 2000 });
  return (
    <div ref={ref} className="text-center">
      <div
        className="font-heading font-extrabold tracking-tight text-white"
        style={{ fontSize: "clamp(2.4rem, 5vw, 3.75rem)" }}
      >
        {prefix}
        {count.toLocaleString("pt-BR")}
        {suffix}
      </div>
      <div className="mt-2 font-ui text-sm text-white/60 font-medium uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

export default function Metrics() {
  const m = siteConfig.metrics;
  const items = [
    { value: m.installations, label: "Instalações", prefix: "+" },
    { value: m.yearsExperience, label: "Anos de experiência", prefix: "+" },
    { value: m.technicalStandard, label: "Padrão técnico", suffix: "%" },
    { value: m.clientsServed, label: "Clientes atendidos", prefix: "+" },
    { value: m.rating, label: "Avaliação média", suffix: "★" },
  ];

  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: "hsl(207 72% 16%)" }}
    >
      <div className="absolute inset-0 blueprint-grid-dark opacity-30" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, hsl(200 69% 34% / 0.25), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1320px] px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="eyebrow flex items-center justify-center gap-2.5"
            style={{ color: "hsl(194 77% 62%)" }}
          >
            <span className="inline-block h-px w-8 bg-[hsl(194_77%_62%)]" />
            Números que comprovam
            <span className="inline-block h-px w-8 bg-[hsl(194_77%_62%)]" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-4 font-heading font-extrabold leading-[1.1] tracking-[-0.02em] text-white text-balance"
            style={{ fontSize: "clamp(1.75rem, 3.4vw, 2.75rem)" }}
          >
            Experiência não está apenas no tempo de mercado.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-5 text-white/70 leading-relaxed"
          >
            Está em cada instalação entregue, cada diagnóstico realizado e em cada
            cliente que volta a confiar no nosso trabalho.
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-y-10 md:gap-y-0 md:divide-x md:divide-white/10">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <BigMetric
                value={item.value}
                label={item.label}
                prefix={item.prefix}
                suffix={item.suffix}
              />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 max-w-2xl mx-auto text-center font-ui text-base text-white/75 leading-relaxed"
        >
          Nosso compromisso é transformar conhecimento técnico em conforto,
          eficiência e tranquilidade para quem contrata.
        </motion.p>

        <div className="mt-10 text-center">
          <a
            href={WHATSAPP_DEFAULT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 font-ui text-[15px] font-semibold min-h-[50px] transition-all hover:-translate-y-0.5"
            style={{
              background: "hsl(194 77% 62%)",
              color: "hsl(207 72% 16%)",
            }}
          >
            <WhatsAppIcon className="h-[18px] w-[18px]" />
            Solicitar orçamento
          </a>
        </div>
      </div>
    </section>
  );
}