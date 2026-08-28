import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, ClipboardCheck, FileBarChart, Factory, Snowflake, Activity } from "lucide-react";
import SectionHeader from "./SectionHeader";
import CTAButton from "./CTAButton";
import { Image } from "@/components/ui/image";

const INDUSTRIAL_IMAGE =
  "https://media.base44.com/images/public/6a9205f911898f21f1326ccb/f0feddbc0_generated_3053622c.png";

const risks = [
  "Perda de produtividade",
  "Desconforto de clientes",
  "Problemas em equipamentos",
  "Perda de estoque",
  "Interrupção operacional",
  "Custos de emergência",
];

const offers = [
  { icon: ClipboardCheck, label: "Manutenção preventiva" },
  { icon: FileBarChart, label: "Contratos e PMOC" },
  { icon: Factory, label: "Climatização industrial" },
  { icon: Snowflake, label: "Refrigeração" },
  { icon: Activity, label: "Monitoramento técnico" },
];

export default function BusinessSolutions() {
  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: "hsl(207 72% 16%)" }}
    >
      <div className="absolute inset-0 blueprint-grid-dark opacity-25" />
      <div className="relative mx-auto max-w-[1320px] px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT — copy */}
          <div>
            <SectionHeader
              eyebrow="Soluções empresariais"
              title="Para empresas, climatização é"
              highlight="operação."
              description="Falhas em climatização podem significar muito mais do que desconforto — podem comprometer operações, estoque e resultados."
              dark
            />

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-2.5 mb-4">
                <AlertTriangle
                  className="h-5 w-5"
                  style={{ color: "hsl(194 77% 62%)" }}
                />
                <span className="font-ui text-sm font-semibold uppercase tracking-wider text-white/70">
                  Riscos de uma climatização sem padrão
                </span>
              </div>
              <div className="grid sm:grid-cols-2 gap-x-5 gap-y-2.5">
                {risks.map((r) => (
                  <div key={r} className="flex items-center gap-2.5">
                    <span
                      className="inline-block h-1.5 w-1.5 rounded-full shrink-0"
                      style={{ background: "hsl(194 77% 62%)" }}
                    />
                    <span className="font-ui text-sm text-white/80">{r}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {offers.map((o, i) => (
                <motion.div
                  key={o.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 px-4 py-3"
                >
                  <o.icon
                    className="h-5 w-5 shrink-0"
                    style={{ color: "hsl(194 77% 62%)" }}
                  />
                  <span className="font-ui text-sm font-medium text-white/90">
                    {o.label}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <CTAButton variant="primary" type="whatsapp">
                Solicitar proposta empresarial
              </CTAButton>
            </div>
          </div>

          {/* RIGHT — image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden ring-1 ring-white/15 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
              <Image
                src={INDUSTRIAL_IMAGE}
                alt="Sistema de climatização industrial"
                fittingType="fill"
                className="absolute inset-0 h-full w-full"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 50%, rgba(11,45,69,0.5) 100%)",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}