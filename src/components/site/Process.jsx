import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, ClipboardCheck, FileText, Wrench, CheckCircle2 } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: MessageSquare,
    title: "Solicitação",
    desc: "Você envia as informações do ambiente ou do equipamento.",
  },
  {
    n: "02",
    icon: ClipboardCheck,
    title: "Avaliação",
    desc: "Analisamos necessidade, capacidade, infraestrutura e condições do local.",
  },
  {
    n: "03",
    icon: FileText,
    title: "Orçamento",
    desc: "Você recebe uma proposta clara e adequada ao serviço.",
  },
  {
    n: "04",
    icon: Wrench,
    title: "Execução",
    desc: "Nossa equipe realiza o serviço seguindo os procedimentos técnicos.",
  },
  {
    n: "05",
    icon: CheckCircle2,
    title: "Teste e entrega",
    desc: "Validamos o funcionamento e orientamos o cliente sobre o uso.",
  },
];

export default function Process() {
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
            Como funciona
            <span className="inline-block h-px w-8 bg-[hsl(200_69%_34%)]" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-4 font-heading font-extrabold leading-[1.1] tracking-[-0.02em] text-foreground text-balance"
            style={{ fontSize: "clamp(1.75rem, 3.4vw, 2.75rem)" }}
          >
            Do primeiro contato à{" "}
            <span style={{ color: "hsl(200 69% 34%)" }}>entrega.</span>
          </motion.h2>
        </div>

        {/* Desktop horizontal timeline */}
        <div className="hidden md:grid grid-cols-5 gap-4 relative">
          {/* linha conectora */}
          <div className="absolute top-7 left-[10%] right-[10%] h-px bg-border" />
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative text-center"
            >
              <span
                className="relative z-10 mx-auto grid h-14 w-14 place-items-center rounded-full bg-white border-2"
                style={{ borderColor: "hsl(194 77% 62%)" }}
              >
                <s.icon
                  className="h-6 w-6"
                  style={{ color: "hsl(200 69% 34%)" }}
                />
              </span>
              <div className="mt-4 font-mono text-xs text-muted-foreground">
                {s.n}
              </div>
              <h3 className="mt-1 font-heading font-bold text-base text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 font-ui text-sm text-muted-foreground leading-relaxed px-2">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile vertical timeline */}
        <div className="md:hidden space-y-6 relative pl-8">
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-border" />
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative flex gap-4 items-start"
            >
              <span
                className="relative z-10 grid h-14 w-14 place-items-center rounded-full bg-white border-2 shrink-0"
                style={{ borderColor: "hsl(194 77% 62%)" }}
              >
                <s.icon
                  className="h-6 w-6"
                  style={{ color: "hsl(200 69% 34%)" }}
                />
              </span>
              <div className="pt-2">
                <div className="font-mono text-xs text-muted-foreground">{s.n}</div>
                <h3 className="font-heading font-bold text-base text-foreground">
                  {s.title}
                </h3>
                <p className="mt-1 font-ui text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}