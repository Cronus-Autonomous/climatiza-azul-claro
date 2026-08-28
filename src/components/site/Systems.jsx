import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Wind, Snowflake, Building2, Factory, Layers, ClipboardCheck, Sparkles, Wrench } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { WHATSAPP_DEFAULT_URL } from "@/lib/siteConfig";
import WhatsAppIcon from "./WhatsAppIcon";
import { Image } from "@/components/ui/image";

const IMG = (name) =>
  `https://media.base44.com/images/public/6a9205f911898f21f1326ccb/${name}`;

const services = [
  {
    n: "01",
    icon: Wind,
    title: "Instalação de Split",
    desc: "Para residências e pequenos ambientes comerciais que precisam de climatização eficiente e acabamento limpo.",
    env: "Residencial · Comercial",
    img: "https://media.base44.com/images/public/6a9205f911898f21f1326ccb/e9e8977ff_generated_e3a7ad26.png",
  },
  {
    n: "02",
    icon: Snowflake,
    title: "Split Inverter",
    desc: "Soluções orientadas a eficiência energética para uso residencial e comercial com controle preciso de temperatura.",
    env: "Residencial · Comercial",
    img: IMG("ba0f897be_generated_5b3b6e75.png"),
  },
  {
    n: "03",
    icon: Layers,
    title: "Piso Teto",
    desc: "Para ambientes maiores que exigem maior vazão de ar e distribuição eficiente do fluxo climatizado.",
    env: "Comercial · Industrial",
    img: "https://media.base44.com/images/public/6a9205f911898f21f1326ccb/7776c01b0_generated_a6badb60.png",
  },
  {
    n: "04",
    icon: Wind,
    title: "Cassete",
    desc: "Para ambientes comerciais e interiores sofisticados que demandam distribuição de ar em quatro direções.",
    env: "Comercial · Corporativo",
    img: "https://media.base44.com/images/public/6a9205f911898f21f1326ccb/aed709f59_generated_f23da5a8.png",
  },
  {
    n: "05",
    icon: Layers,
    title: "Multi Split",
    desc: "Múltiplas unidades internas conectadas a um condensador centralizado, ideal para vários ambientes independentes.",
    env: "Residencial · Comercial",
    img: "https://media.base44.com/images/public/6a9205f911898f21f1326ccb/16dc19a16_generated_66c06828.png",
  },
  {
    n: "06",
    icon: Building2,
    title: "Sistemas Comerciais",
    desc: "Escritórios, lojas, clínicas, restaurantes e condomínios com soluções adequadas a cada rotina de uso.",
    env: "Comercial",
    img: IMG("f04979847_generated_c1083d88.png"),
  },
  {
    n: "07",
    icon: Factory,
    title: "Climatização Industrial",
    desc: "Grandes ambientes, galpões, armazéns e operações que exigem desempenho contínuo e controle térmico rigoroso.",
    env: "Industrial",
    img: IMG("f0feddbc0_generated_3053622c.png"),
  },
  {
    n: "08",
    icon: ClipboardCheck,
    title: "Projetos de Climatização",
    desc: "Planejamento técnico e dimensionamento de equipamentos conforme carga térmica, layout e necessidade do ambiente.",
    env: "Todos os segmentos",
    img: IMG("68d322fbc_generated_55f45bad.png"),
  },
  {
    n: "09",
    icon: Wrench,
    title: "Manutenção Preventiva",
    desc: "Inspeções técnicas programadas que preservam desempenho, eficiência e vida útil dos equipamentos.",
    env: "Residencial · Empresarial",
    img: IMG("492de9b45_generated_2f98fcd4.png"),
  },
  {
    n: "10",
    icon: Sparkles,
    title: "Higienização",
    desc: "Limpeza e sanitização profissional que eliminam impurezas e melhoram a qualidade do ar climatizado.",
    env: "Residencial · Comercial",
    img: IMG("4e7a188dc_generated_929e3b6d.png"),
  },
];

function ServiceCard({ s, i }) {
  return (
    <motion.a
      href={WHATSAPP_DEFAULT_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col rounded-2xl overflow-hidden border border-border bg-white transition-all hover:border-[hsl(194_77%_62%_/_0.5)] hover:shadow-[0_28px_60px_-30px_rgba(16,33,43,0.35)]"
    >
      {/* image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={s.img}
          alt={s.title}
          fittingType="fill"
          className="absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, transparent 40%, rgba(11,45,69,0.55) 100%)",
          }}
        />
        <span className="absolute top-3 left-3 font-mono text-xs text-white/85 bg-[hsl(207_72%_12%_/_0.6)] backdrop-blur-sm rounded-md px-2 py-1">
          {s.n}
        </span>
        <span
          className="absolute top-3 right-3 grid h-9 w-9 place-items-center rounded-lg backdrop-blur-md"
          style={{ background: "hsl(207 72% 12% / 0.6)" }}
        >
          <s.icon
            className="h-[18px] w-[18px]"
            style={{ color: "hsl(194 77% 62%)" }}
          />
        </span>
        <span className="absolute bottom-3 left-3 font-ui text-[11px] font-semibold uppercase tracking-wider text-white/85">
          {s.env}
        </span>
      </div>

      {/* body */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-heading font-bold text-lg text-foreground group-hover:text-[hsl(200_69%_34%)] transition-colors">
          {s.title}
        </h3>
        <p className="mt-2 font-ui text-sm text-muted-foreground leading-relaxed flex-1">
          {s.desc}
        </p>
        <div className="mt-4 flex items-center gap-1.5 font-ui text-sm font-semibold text-[hsl(200_69%_34%)]">
          <WhatsAppIcon className="h-4 w-4" />
          Solicitar orçamento
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </motion.a>
  );
}

export default function Systems() {
  return (
    <section id="solucoes" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <SectionHeader
          eyebrow="Nossas soluções"
          title="Climatização para cada ambiente,"
          highlight="necessidade e escala."
          description="Da residência ao ambiente industrial, encontramos a configuração mais adequada para seu espaço, capacidade e rotina de uso."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.n} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}