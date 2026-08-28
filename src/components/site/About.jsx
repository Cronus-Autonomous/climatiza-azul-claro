import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import CTAButton from "./CTAButton";
import { Image } from "@/components/ui/image";

const TEAM_IMAGE =
  "https://media.base44.com/images/public/6a9205f911898f21f1326ccb/d9a6d4c71_generated_5d41f4d9.png";

const points = [
  "Equipe com experiência em climatização residencial, comercial e industrial",
  "Procedimentos técnicos padronizados em cada etapa do serviço",
  "Diagnóstico, dimensionamento e execução com responsabilidade",
  "Foco em desempenho, durabilidade e acabamento profissional",
];

export default function About() {
  return (
    <section id="sobre" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT — image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-border shadow-[0_30px_70px_-30px_rgba(16,33,43,0.3)]">
              <Image
                src={TEAM_IMAGE}
                alt="Equipe técnica de climatização em ambiente profissional"
                fittingType="fill"
                className="absolute inset-0 h-full w-full"
              />
            </div>
            {/* coordenadas técnicas */}
            <div className="absolute -bottom-3 -left-3 hidden md:block font-mono text-[10px] text-muted-foreground/60 bg-white rounded-md px-2.5 py-1.5 ring-1 ring-border">
              LAT 23.5505 · LONG 46.6333
            </div>
          </motion.div>

          {/* RIGHT — copy */}
          <div className="order-1 lg:order-2">
            <SectionHeader
              eyebrow="Sobre a empresa"
              title="Climatização feita por quem"
              highlight="entende do assunto."
            />
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Nascemos da convicção de que climatização é engenharia, não
              improviso. Atendemos residências, empresas e operações industriais
              com o mesmo compromisso: entender a necessidade, dimensionar
              corretamente e executar com padrão técnico.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Trabalhamos com clientes que valorizam um serviço bem feito —
              desde a primeira avaliação até o teste final e o
              pós-atendimento.
            </p>

            <ul className="mt-7 space-y-3">
              {points.map((p, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <span
                    className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full shrink-0"
                    style={{ background: "hsl(194 77% 62%)" }}
                  />
                  <span className="font-ui text-[15px] text-foreground leading-relaxed">
                    {p}
                  </span>
                </motion.li>
              ))}
            </ul>

            <div
              className="mt-8 rounded-xl border border-border bg-white p-5"
              style={{ borderLeft: "3px solid hsl(194 77% 62%)" }}
            >
              <p className="font-heading font-bold text-lg text-foreground">
                Técnica + transparência + responsabilidade.
              </p>
            </div>

            <div className="mt-8">
              <CTAButton
                variant="secondaryLight"
                type="link"
                href="#contato"
                arrow
                icon={false}
              >
                Conheça nossa empresa
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}