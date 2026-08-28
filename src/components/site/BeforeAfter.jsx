import React, { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { MoveHorizontal, Check, X } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { Image } from "@/components/ui/image";

const BEFORE = "https://media.base44.com/images/public/6a9205f911898f21f1326ccb/db92c7560_generated_d6d3931b.png";
const AFTER =
  "https://media.base44.com/images/public/6a9205f911898f21f1326ccb/ba0f897be_generated_5b3b6e75.png";

const beforePoints = [
  "Fiação exposta",
  "Drenagem mal feita",
  "Tubulação desorganizada",
  "Acabamento incorreto",
  "Posicionamento inadequado",
];
const afterPoints = [
  "Infraestrutura organizada",
  "Drenagem correta",
  "Tubulação limpa",
  "Acabamento profissional",
  "Posicionamento técnico",
];

export default function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef(null);
  const dragging = useRef(false);

  const update = useCallback((clientX) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  }, []);

  const onDown = (e) => {
    dragging.current = true;
    update(e.clientX ?? e.touches?.[0]?.clientX);
  };
  const onMove = (e) => {
    if (!dragging.current) return;
    update(e.clientX ?? e.touches?.[0]?.clientX);
  };
  const onUp = () => (dragging.current = false);

  return (
    <section className="relative py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <SectionHeader
          eyebrow="Qualidade técnica"
          title="Detalhes que fazem"
          highlight="diferença."
          description="O que separa uma instalação improvisada de uma execução profissional está nos detalhes que garantem desempenho, segurança e durabilidade."
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Slider */}
          <div
            ref={ref}
            onMouseDown={onDown}
            onMouseMove={onMove}
            onMouseUp={onUp}
            onMouseLeave={onUp}
            onTouchStart={onDown}
            onTouchMove={onMove}
            onTouchEnd={onUp}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-border select-none cursor-ew-resize touch-none"
          >
            {/* After (full) */}
            <Image
              src={AFTER}
              alt="Instalação profissional organizada"
              fittingType="fill"
              className="absolute inset-0 h-full w-full"
            />
            {/* Before (clipped via clip-path) */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              <Image
                src={BEFORE}
                alt="Instalação improvisada"
                fittingType="fill"
                className="absolute inset-0 h-full w-full"
              />
            </div>

            {/* labels */}
            <span className="absolute top-3 left-3 font-ui text-[11px] font-semibold uppercase tracking-wider text-white bg-[hsl(207_72%_12%_/_0.7)] backdrop-blur-sm rounded-md px-2.5 py-1">
              Antes
            </span>
            <span className="absolute top-3 right-3 font-ui text-[11px] font-semibold uppercase tracking-wider text-white bg-[hsl(152_60%_42%_/_0.8)] backdrop-blur-sm rounded-md px-2.5 py-1">
              Depois
            </span>

            {/* handle */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg pointer-events-none"
              style={{ left: `${pos}%` }}
            >
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white shadow-lg ring-1 ring-border">
                <MoveHorizontal className="h-5 w-5 text-[hsl(207_72%_16%)]" />
              </span>
            </div>
          </div>

          {/* Lists */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-border bg-muted/40 p-6">
              <h3 className="font-ui text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Serviço convencional
              </h3>
              <ul className="space-y-3">
                {beforePoints.map((p) => (
                  <li key={p} className="flex items-center gap-2.5">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-muted shrink-0">
                      <X className="h-3 w-3 text-muted-foreground/60" strokeWidth={3} />
                    </span>
                    <span className="font-ui text-sm text-foreground/70">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="rounded-2xl border p-6"
              style={{
                borderColor: "hsl(152 60% 42% / 0.3)",
                background: "hsl(152 60% 42% / 0.05)",
              }}
            >
              <h3
                className="font-ui text-sm font-semibold uppercase tracking-wider mb-4"
                style={{ color: "hsl(152 60% 32%)" }}
              >
                Nosso padrão
              </h3>
              <ul className="space-y-3">
                {afterPoints.map((p) => (
                  <li key={p} className="flex items-center gap-2.5">
                    <span
                      className="grid h-5 w-5 place-items-center rounded-full shrink-0"
                      style={{ background: "hsl(152 60% 42% / 0.15)" }}
                    >
                      <Check className="h-3 w-3" style={{ color: "hsl(152 60% 42%)" }} strokeWidth={3} />
                    </span>
                    <span className="font-ui text-sm text-foreground">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}