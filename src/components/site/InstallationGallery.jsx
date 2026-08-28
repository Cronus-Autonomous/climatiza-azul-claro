import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { Image } from "@/components/ui/image";

const IMG = (name) =>
  `https://media.base44.com/images/public/6a9205f911898f21f1326ccb/${name}`;

const items = [
  { img: IMG("492de9b45_generated_2f98fcd4.png"), label: "Instalação", span: "lg:row-span-2" },
  { img: IMG("4e7a188dc_generated_929e3b6d.png"), label: "Residencial", span: "" },
  { img: IMG("f04979847_generated_c1083d88.png"), label: "Comercial", span: "" },
  { img: IMG("68d322fbc_generated_55f45bad.png"), label: "Industrial", span: "lg:row-span-2" },
  { img: IMG("ba0f897be_generated_5b3b6e75.png"), label: "Manutenção", span: "" },
  { img: IMG("f0feddbc0_generated_3053622c.png"), label: "Industrial", span: "" },
];

export default function InstallationGallery() {
  const [active, setActive] = useState(null);

  const close = useCallback(() => setActive(null), []);
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && close();
    if (active) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close]);

  return (
    <section id="instalacoes" className="relative py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <SectionHeader
          eyebrow="Trabalho real"
          title="Instalações que mostram"
          highlight="nosso padrão."
          description="Cada execução segue um procedimento técnico. O resultado é um sistema organizado, testado e entregue com acabamento profissional."
        />

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:auto-rows-[220px]">
          {items.map((it, i) => (
            <motion.button
              key={i}
              type="button"
              onClick={() => setActive(it.img)}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
              className={[
                "group relative overflow-hidden rounded-xl ring-1 ring-border",
                it.span,
              ].join(" ")}
            >
              <Image
                src={it.img}
                alt={it.label}
                fittingType="fill"
                className="absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 30%, rgba(11,45,69,0.6) 100%)",
                }}
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-white/15 backdrop-blur-sm border border-white/30">
                  <ZoomIn className="h-5 w-5 text-white" />
                </span>
              </div>
              <span className="absolute bottom-3 left-3 font-ui text-[11px] font-semibold uppercase tracking-wider text-white bg-[hsl(207_72%_12%_/_0.6)] backdrop-blur-sm rounded-md px-2.5 py-1">
                {it.label}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[80] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute top-5 right-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 hover:bg-white/20 text-white"
              aria-label="Fechar"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.img
              src={active}
              alt="Instalação em tamanho ampliado"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-full max-h-[85vh] rounded-xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}