import React from "react";
import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import { siteConfig } from "@/lib/siteConfig";

function MetricItem({ value, label, suffix = "", prefix = "" }) {
  const { value: count, ref } = useCountUp(value, { duration: 1600 });
  return (
    <div ref={ref} className="text-center px-4">
      <div
        className="font-heading font-extrabold tracking-tight"
        style={{
          fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
          color: "hsl(207 72% 16%)",
        }}
      >
        {prefix}
        {count.toLocaleString("pt-BR")}
        {suffix}
      </div>
      <div className="mt-1.5 font-ui text-xs md:text-sm text-muted-foreground font-medium">
        {label}
      </div>
    </div>
  );
}

export default function TrustBar() {
  const m = siteConfig.metrics;
  const items = [
    { value: m.installations, label: "Instalações realizadas", prefix: "+" },
    { value: m.yearsExperience, label: "Anos de experiência", prefix: "+" },
    { value: m.technicalStandard, label: "Padrão técnico", suffix: "%" },
    { value: 0, label: "Garantia nos serviços", static: "Garantia" },
    { value: 0, label: "Residencial e empresarial", static: "Atendimento" },
  ];

  return (
    <section className="relative bg-white border-b border-border">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8 py-10 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-border">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="py-2"
            >
              {item.static ? (
                <div className="text-center px-4">
                  <div
                    className="font-heading font-extrabold tracking-tight"
                    style={{
                      fontSize: "clamp(1.4rem, 2.4vw, 2rem)",
                      color: "hsl(207 72% 16%)",
                    }}
                  >
                    {item.static}
                  </div>
                  <div className="mt-1.5 font-ui text-xs md:text-sm text-muted-foreground font-medium">
                    {item.label}
                  </div>
                </div>
              ) : (
                <MetricItem
                  value={item.value}
                  label={item.label}
                  prefix={item.prefix}
                  suffix={item.suffix}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}