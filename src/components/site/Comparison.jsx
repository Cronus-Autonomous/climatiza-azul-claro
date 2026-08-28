import React from "react";
import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";
import SectionHeader from "./SectionHeader";

const criteria = [
  "Diagnóstico técnico",
  "Equipe identificada",
  "Dimensionamento correto",
  "Ferramentas profissionais",
  "Procedimento de vácuo",
  "Teste de funcionamento",
  "Acabamento técnico",
  "Garantia formal",
  "Orientação ao cliente",
  "Pós-atendimento",
  "Manutenção preventiva",
  "Orçamento claro e documentado",
];

export default function Comparison() {
  return (
    <section className="relative py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <SectionHeader
          eyebrow="A diferença técnica"
          title="A diferença está no que"
          highlight="você não vê."
          description="Uma instalação pode parecer simples quando está pronta. A diferença entre um serviço comum e uma execução profissional está nos detalhes que garantem desempenho, segurança e durabilidade."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-14 rounded-2xl border border-border overflow-hidden"
        >
          {/* header */}
          <div className="grid grid-cols-[1.6fr_1fr_1fr] bg-[hsl(207_72%_16%)] text-white">
            <div className="px-5 md:px-8 py-5 font-ui text-xs md:text-sm font-semibold uppercase tracking-wider text-white/70">
              Critério
            </div>
            <div className="px-3 md:px-6 py-5 font-ui text-xs md:text-sm font-semibold uppercase tracking-wider text-center border-l border-white/10">
              <span className="text-[hsl(194_77%_62%)]">Nossa empresa</span>
            </div>
            <div className="px-3 md:px-6 py-5 font-ui text-xs md:text-sm font-semibold uppercase tracking-wider text-center text-white/50 border-l border-white/10">
              Serviço convencional
            </div>
          </div>

          {/* rows */}
          <div className="bg-card">
            {criteria.map((c, i) => (
              <motion.div
                key={c}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className={[
                  "grid grid-cols-[1.6fr_1fr_1fr] items-center",
                  i !== criteria.length - 1 ? "border-b border-border" : "",
                ].join(" ")}
              >
                <div className="px-5 md:px-8 py-4 md:py-5 font-ui text-sm md:text-[15px] font-medium text-foreground">
                  {c}
                </div>
                <div className="px-3 md:px-6 py-4 md:py-5 flex justify-center border-l border-border">
                  <span
                    className="grid h-7 w-7 place-items-center rounded-full"
                    style={{ background: "hsl(152 60% 42% / 0.12)" }}
                  >
                    <Check
                      className="h-4 w-4"
                      style={{ color: "hsl(152 60% 42%)" }}
                      strokeWidth={3}
                    />
                  </span>
                </div>
                <div className="px-3 md:px-6 py-4 md:py-5 flex justify-center border-l border-border">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-muted">
                    <Minus
                      className="h-4 w-4 text-muted-foreground/50"
                      strokeWidth={2.5}
                    />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <p className="mt-5 font-ui text-xs text-muted-foreground/80 max-w-2xl">
          Comparação entre o nosso padrão de execução e uma instalação sem
          padrão técnico. Não se refere a empresas nomeadas especificamente.
        </p>
      </div>
    </section>
  );
}