import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";

const pillars = [
  {
    icon: Target,
    label: "Missão",
    text: "Entregar soluções de climatização eficientes, seguras e bem executadas, proporcionando conforto e confiança em cada ambiente.",
  },
  {
    icon: Eye,
    label: "Visão",
    text: "Ser referência regional em climatização profissional, reconhecida pela excelência técnica, atendimento e qualidade de execução.",
  },
  {
    icon: Heart,
    label: "Valores",
    text: "Integridade, excelência técnica, compromisso, transparência, segurança, respeito ao cliente e responsabilidade em cada serviço.",
  },
];

export default function MissionVisionValues() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="eyebrow flex items-center justify-center gap-2.5"
            style={{ color: "hsl(200 69% 34%)" }}
          >
            <span className="inline-block h-px w-8 bg-[hsl(200_69%_34%)]" />
            O que nos move
            <span className="inline-block h-px w-8 bg-[hsl(200_69%_34%)]" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl bg-white border border-border p-8 text-center"
            >
              <span
                className="mx-auto grid h-16 w-16 place-items-center rounded-2xl mb-6"
                style={{ background: "hsl(207 72% 16%)" }}
              >
                <p.icon
                  className="h-7 w-7"
                  style={{ color: "hsl(194 77% 62%)" }}
                />
              </span>
              <h3 className="font-heading font-extrabold text-xl text-foreground uppercase tracking-tight">
                {p.label}
              </h3>
              <p className="mt-4 font-ui text-[15px] text-muted-foreground leading-relaxed">
                {p.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}