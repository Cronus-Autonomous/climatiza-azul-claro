import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import SectionHeader from "./SectionHeader";

const faqs = [
  {
    q: "Quanto custa instalar um ar-condicionado?",
    a: "O preço depende de vários fatores: tipo e capacidade do equipamento (BTUs), distância entre unidade interna e externa, infraestrutura elétrica, dreno, acesso ao local de instalação e acabamento. Por isso a avaliação prévia é importante para um orçamento preciso.",
  },
  {
    q: "Vocês fazem instalação de Split Inverter?",
    a: "Sim. Realizamos instalação de equipamentos Split Inverter, seguindo os procedimentos técnicos recomendados, incluindo o procedimento de vácuo adequado para preservar a vida útil e a eficiência do compressor.",
  },
  {
    q: "Vocês fazem instalação de Cassete e Piso Teto?",
    a: "Sim. Atuamos com diferentes tipos de equipamentos — Split, Cassete, Piso Teto e Multi Split — em ambientes residenciais, comerciais e industriais.",
  },
  {
    q: "É necessário fazer vácuo na instalação?",
    a: "Sim. O procedimento de vácuo é fundamental para remover umidade e gases não condensáveis do sistema de tubulação. Sem ele, há risco de redução de desempenho, oxidação do cobre e falhas prematuras no compressor. Por isso ele faz parte do nosso padrão de execução.",
  },
  {
    q: "Vocês vendem o equipamento?",
    a: "Podemos orientar sobre a escolha do equipamento adequado ao seu ambiente. Consulte-nos para entender as opções disponíveis conforme o seu caso.",
  },
  {
    q: "Vocês atendem empresas?",
    a: "Sim. Atendemos escritórios, lojas, clínicas, restaurantes, condomínios e operações industriais com soluções e contratos de manutenção adequados a cada rotina.",
  },
  {
    q: "Vocês fazem manutenção preventiva?",
    a: "Sim. Oferecemos planos de manutenção preventiva com inspeções técnicas programadas para preservar desempenho, eficiência e vida útil dos equipamentos.",
  },
  {
    q: "Quanto tempo demora uma instalação?",
    a: "Varia conforme o tipo de equipamento, a complexidade da infraestrutura e as condições do local. Em uma instalação residencial padrão costuma ser concluída no mesmo dia; instalações comerciais e industriais dependem do escopo do projeto.",
  },
  {
    q: "A instalação possui garantia?",
    a: "Sim. A garantia é definida conforme o escopo do orçamento e o tipo de serviço executado. Os detalhes são apresentados de forma clara na proposta antes da execução.",
  },
];

function FAQItem({ item, open, onToggle }) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-ui text-[15px] md:text-base font-semibold text-foreground">
          {item.q}
        </span>
        <span
          className="grid h-8 w-8 place-items-center rounded-full shrink-0 transition-colors"
          style={{
            background: open ? "hsl(194 77% 62% / 0.15)" : "hsl(204 20% 93%)",
          }}
        >
          <Plus
            className="h-4 w-4 transition-transform duration-300"
            style={{
              color: open ? "hsl(200 69% 34%)" : "hsl(202 12% 45%)",
              transform: open ? "rotate(45deg)" : "rotate(0deg)",
            }}
          />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-12 font-ui text-sm md:text-[15px] text-muted-foreground leading-relaxed">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section className="relative py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16">
          <SectionHeader
            eyebrow="Dúvidas frequentes"
            title="Perguntas que"
            highlight="ajudam a decidir."
            description="Reuniões as dúvidas mais comuns sobre instalação, manutenção e climatização profissional."
          />
          <div className="mt-2 lg:mt-0">
            {faqs.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}