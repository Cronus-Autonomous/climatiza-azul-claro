import React from "react";
import { motion } from "framer-motion";
import { Home, Building2, Stethoscope, UtensilsCrossed, Store, Briefcase, Factory } from "lucide-react";
import SectionHeader from "./SectionHeader";

// Categorias de clientes — placeholders elegantes que podem ser substituídos por logos reais.
const categories = [
  { icon: Home, label: "Residências" },
  { icon: Building2, label: "Condomínios" },
  { icon: Stethoscope, label: "Clínicas" },
  { icon: UtensilsCrossed, label: "Restaurantes" },
  { icon: Store, label: "Lojas" },
  { icon: Briefcase, label: "Escritórios" },
  { icon: Factory, label: "Indústrias" },
];

export default function Clients() {
  return (
    <section id="clientes" className="relative py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <SectionHeader
          eyebrow="Clientes"
          title="Quem confia no"
          highlight="nosso trabalho."
          description="Atendemos diferentes perfis com soluções adequadas a cada rotina e escala."
          align="center"
        />

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
          {categories.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group flex flex-col items-center justify-center gap-3 rounded-xl border border-border bg-card px-4 py-7 transition-colors hover:border-[hsl(200_69%_34%_/_0.4)]"
            >
              <c.icon
                className="h-7 w-7 text-muted-foreground/60 group-hover:text-[hsl(200_69%_34%)] transition-colors"
                strokeWidth={1.6}
              />
              <span className="font-ui text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                {c.label}
              </span>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center font-ui text-xs text-muted-foreground/70">
          Espaços reservados para logos de clientes — substituíveis por marcas
          reais quando disponíveis.
        </p>
      </div>
    </section>
  );
}