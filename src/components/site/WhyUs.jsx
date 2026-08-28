import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  Wrench,
  Sparkles,
  Users,
  ShieldCheck,
  Headset,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

const items = [
  {
    n: "01",
    icon: Search,
    title: "Diagnóstico técnico",
    desc: "Avaliamos o ambiente, a carga térmica e a infraestrutura antes de qualquer execução.",
  },
  {
    n: "02",
    icon: Wrench,
    title: "Instalação profissional",
    desc: "Procedimentos padronizados, ferramentas adequadas e equipe treinada para cada tipo de equipamento.",
  },
  {
    n: "03",
    icon: Sparkles,
    title: "Acabamento cuidadoso",
    desc: "Tubulação organizada, fixações corretas e acabamento limpo que respeita o seu ambiente.",
  },
  {
    n: "04",
    icon: Users,
    title: "Equipe identificada",
    desc: "Técnicos uniformizados, identificados e orientados a manter o local organizado durante o serviço.",
  },
  {
    n: "05",
    icon: ShieldCheck,
    title: "Garantia",
    desc: "Garantia conforme escopo do orçamento, com respaldo técnico após a execução.",
  },
  {
    n: "06",
    icon: Headset,
    title: "Pós-atendimento",
    desc: "Orientação ao cliente e suporte técnico após a entrega para dúvidas e acompanhamento.",
  },
];

export default function WhyUs() {
  return (
    <section className="relative py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <SectionHeader
          eyebrow="Por que contratar"
          title="Por que contratar uma"
          highlight="equipe especializada?"
          description="Uma instalação pode parecer simples quando está pronta. A diferença está em quem executa — e em como cada etapa é conduzida."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl border border-border bg-card p-7 transition-all hover:border-[hsl(200_69%_34%_/_0.4)] hover:shadow-[0_20px_50px_-25px_rgba(16,33,43,0.25)]"
            >
              <div className="flex items-start justify-between mb-5">
                <span
                  className="grid h-12 w-12 place-items-center rounded-xl transition-colors"
                  style={{ background: "hsl(194 77% 62% / 0.12)" }}
                >
                  <item.icon
                    className="h-6 w-6"
                    style={{ color: "hsl(200 69% 34%)" }}
                  />
                </span>
                <span className="font-heading font-extrabold text-3xl text-muted-foreground/25 group-hover:text-[hsl(194_77%_62%)] transition-colors">
                  {item.n}
                </span>
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground">
                {item.title}
              </h3>
              <p className="mt-2.5 font-ui text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}