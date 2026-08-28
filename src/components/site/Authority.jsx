import React from "react";
import { motion } from "framer-motion";
import {
  Check,
  Ruler,
  Zap,
  Droplets,
  Wind,
  Gauge,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import SectionHeader from "./SectionHeader";
import CTAButton from "./CTAButton";
import { Image } from "@/components/ui/image";

const AUTHORITY_IMAGE =
  "https://media.base44.com/images/public/6a9205f911898f21f1326ccb/492de9b45_generated_2f98fcd4.png";

const technicalSteps = [
  { icon: Ruler, label: "Dimensionamento correto" },
  { icon: Gauge, label: "Análise de BTU" },
  { icon: Zap, label: "Infraestrutura elétrica" },
  { icon: Droplets, label: "Drenagem" },
  { icon: Wind, label: "Tubulação de cobre" },
  { icon: Gauge, label: "Vácuo e teste de pressão" },
  { icon: Wind, label: "Posicionamento do condensador" },
  { icon: Wrench, label: "Comissionamento do equipamento" },
];

const credibility = [
  "Técnicos identificados",
  "Ferramentas profissionais",
  "Procedimentos técnicos",
  "Diagnóstico antes do serviço",
  "Acabamento organizado",
  "Testes antes da entrega",
  "Garantia conforme orçamento",
];

export default function Authority() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT — image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-border shadow-[0_30px_70px_-30px_rgba(16,33,43,0.3)]">
              <Image
                src={AUTHORITY_IMAGE}
                alt="Técnico instalando unidade interna de ar-condicionado com precisão"
                fittingType="fill"
                className="absolute inset-0 h-full w-full"
              />
            </div>
            {/* card flutuante */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute -bottom-6 -right-2 md:-right-6 bg-white rounded-xl shadow-xl ring-1 ring-border px-5 py-4 max-w-[220px]"
            >
              <div className="flex items-center gap-2.5 mb-1.5">
                <ShieldCheck
                  className="h-5 w-5"
                  style={{ color: "hsl(152 60% 42%)" }}
                />
                <span className="font-ui text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Padrão técnico
                </span>
              </div>
              <p className="font-ui text-sm text-foreground leading-snug">
                Cada etapa segue um procedimento padronizado de execução.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT — copy */}
          <div>
            <SectionHeader
              eyebrow="Experiência que entrega"
              title="Não é apenas instalar um ar-condicionado."
              highlight="É entregar um sistema que funciona como deveria."
            />

            <p className="mt-5 text-muted-foreground leading-relaxed">
              Climatização profissional envolve muito mais do que fixar um
              equipamento na parede. Envolve engenharia, precisão e
              procedimentos que garantem desempenho, durabilidade e segurança.
            </p>

            {/* grid de etapas técnicas */}
            <div className="mt-7 grid sm:grid-cols-2 gap-x-5 gap-y-3.5">
              {technicalSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <span
                    className="grid h-9 w-9 place-items-center rounded-lg shrink-0"
                    style={{ background: "hsl(194 77% 62% / 0.12)" }}
                  >
                    <step.icon
                      className="h-[18px] w-[18px]"
                      style={{ color: "hsl(200 69% 34%)" }}
                    />
                  </span>
                  <span className="font-ui text-sm font-medium text-foreground">
                    {step.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* lista de credibilidade */}
            <div className="mt-8 pt-6 border-t border-border">
              <div className="grid sm:grid-cols-2 gap-x-5 gap-y-2.5">
                {credibility.map((c) => (
                  <div key={c} className="flex items-center gap-2.5">
                    <Check
                      className="h-4 w-4 shrink-0"
                      style={{ color: "hsl(152 60% 42%)" }}
                      strokeWidth={3}
                    />
                    <span className="font-ui text-sm text-foreground">{c}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <CTAButton variant="secondaryLight" type="link" href="#solucoes" arrow>
                Conhecer nossas soluções
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}