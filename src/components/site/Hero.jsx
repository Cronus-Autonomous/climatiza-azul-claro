import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Wind, Thermometer, Gauge } from "lucide-react";
import { WHATSAPP_DEFAULT_URL } from "@/lib/siteConfig";
import WhatsAppIcon from "./WhatsAppIcon";
import { Image } from "@/components/ui/image";

const HERO_IMAGE =
  "https://media.base44.com/images/public/6a9205f911898f21f1326ccb/c828184f7_generated_507cae72.png";

const trustPoints = [
  "Equipe especializada",
  "Instalação profissional",
  "Garantia",
  "Atendimento residencial e empresarial",
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const overlayRef = useRef(null);

  useEffect(() => setMounted(true), []);

  // Sutil inclinação dos vetores de fluxo seguindo o cursor (desktop)
  const handleMouse = (e) => {
    const node = overlayRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    node.style.setProperty("--tilt", `${x * 12}deg`);
    node.style.setProperty("--tilt-y", `${y * 8}deg`);
  };

  return (
    <section
      id="inicio"
      className="relative overflow-hidden"
      style={{ background: "hsl(207 72% 16%)" }}
    >
      {/* grid blueprint de fundo */}
      <div className="absolute inset-0 blueprint-grid-dark opacity-40" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 60% at 75% 30%, hsl(200 69% 34% / 0.35), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-[1320px] px-5 md:px-8 pt-28 md:pt-32 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* LEFT — copy */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="eyebrow flex items-center gap-2.5"
              style={{ color: "hsl(194 77% 62%)" }}
            >
              <span className="inline-block h-px w-8 bg-[hsl(194_77%_62%)]" />
              Climatização • Instalação • Manutenção
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-5 font-heading font-extrabold leading-[1.05] tracking-[-0.02em] text-white text-balance"
              style={{ fontSize: "clamp(2.1rem, 4.6vw, 3.6rem)" }}
            >
              Conforto térmico com{" "}
              <span style={{ color: "hsl(194 77% 62%)" }}>padrão técnico.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-6 max-w-xl text-base md:text-[17px] leading-relaxed text-white/75"
            >
              Projetamos, instalamos e cuidamos de sistemas de climatização para
              residências, empresas e operações que precisam de desempenho,
              segurança e acabamento profissional.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-8 flex flex-col sm:flex-row gap-3.5"
            >
              <a
                href={WHATSAPP_DEFAULT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-4 font-ui text-[15px] font-semibold min-h-[52px] transition-all hover:-translate-y-0.5"
                style={{
                  background: "hsl(194 77% 62%)",
                  color: "hsl(207 72% 16%)",
                  boxShadow: "0 12px 30px -10px hsl(194 77% 62% / 0.7)",
                }}
              >
                <WhatsAppIcon className="h-[19px] w-[19px]" />
                Solicitar orçamento
              </a>
              <a
                href="#solucoes"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#solucoes")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 font-ui text-[15px] font-semibold min-h-[52px] text-white border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/40 transition-all"
              >
                Conhecer nossas soluções
                <ArrowRight className="h-[18px] w-[18px]" />
              </a>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.34 }}
              className="mt-9 grid grid-cols-2 gap-x-6 gap-y-3 max-w-lg"
            >
              {trustPoints.map((p) => (
                <li
                  key={p}
                  className="flex items-center gap-2.5 text-sm text-white/80 font-ui"
                >
                  <span
                    className="grid h-5 w-5 place-items-center rounded-full shrink-0"
                    style={{ background: "hsl(194 77% 62% / 0.18)" }}
                  >
                    <Check
                      className="h-3 w-3"
                      style={{ color: "hsl(194 77% 62%)" }}
                      strokeWidth={3}
                    />
                  </span>
                  {p}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* RIGHT — technical viewport */}
          <motion.div
            ref={overlayRef}
            onMouseMove={handleMouse}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={mounted ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative z-10"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-white/15 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
              <Image
                src={HERO_IMAGE}
                alt="Técnico realizando medição com manifold digital em condensador comercial"
                fittingType="fill"
                className="absolute inset-0 h-full w-full"
              />
              {/* leve gradiente para legibilidade dos HUDs */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(11,45,69,0.15) 0%, transparent 35%, rgba(11,45,69,0.55) 100%)",
                }}
              />

              {/* HUD — superior esquerdo: BTU */}
              <div className="absolute top-4 left-4 rounded-xl bg-[hsl(207_72%_12%_/_0.7)] backdrop-blur-md border border-white/10 px-3.5 py-2.5">
                <div className="flex items-center gap-2">
                  <Gauge
                    className="h-4 w-4"
                    style={{ color: "hsl(194 77% 62%)" }}
                    aria-label="Capacidade Térmica"
                  />
                  <div>
                    <div className="font-ui text-[10px] uppercase tracking-wider text-white/55">
                      Capacidade
                    </div>
                    <div className="font-heading font-bold text-white text-sm">
                      24.000 BTU/h
                    </div>
                  </div>
                </div>
              </div>

              {/* HUD — superior direito: temperatura */}
              <div className="absolute top-4 right-4 rounded-xl bg-[hsl(207_72%_12%_/_0.7)] backdrop-blur-md border border-white/10 px-3.5 py-2.5">
                <div className="flex items-center gap-2">
                  <Thermometer
                    className="h-4 w-4"
                    style={{ color: "hsl(194 77% 62%)" }}
                  />
                  <div>
                    <div className="font-ui text-[10px] uppercase tracking-wider text-white/55">
                      Setpoint
                    </div>
                    <div className="font-heading font-bold text-white text-sm">
                      22°C
                    </div>
                  </div>
                </div>
              </div>

              {/* HUD — inferior: fluxo de ar (vetores) */}
              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-[hsl(207_72%_12%_/_0.7)] backdrop-blur-md border border-white/10 px-4 py-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Wind
                      className="h-4 w-4"
                      style={{ color: "hsl(194 77% 62%)" }}
                    />
                    <span className="font-ui text-[10px] uppercase tracking-wider text-white/55">
                      Fluxo de ar · Laminar
                    </span>
                  </div>
                  <span className="font-heading font-bold text-white text-xs">
                    1.180 m³/h
                  </span>
                </div>
                <div className="flex items-end gap-1 h-6">
                  {[0.4, 0.7, 0.5, 0.9, 0.6, 0.8, 0.45, 0.7, 0.55].map(
                    (h, i) => (
                      <motion.span
                        key={i}
                        className="flex-1 rounded-sm"
                        style={{ background: "hsl(194 77% 62%)" }}
                        initial={{ height: "20%" }}
                        animate={{ height: [`${h * 40}%`, `${h * 100}%`, `${h * 40}%`] }}
                        transition={{
                          duration: 2.4,
                          repeat: Infinity,
                          delay: i * 0.12,
                          ease: "easeInOut",
                        }}
                      />
                    )
                  )}
                </div>
              </div>

              {/* coordenadas técnicas de canto */}
              <div className="absolute top-1/2 right-3 -translate-y-1/2 hidden md:block">
                <div className="font-mono text-[9px] text-white/30 leading-tight text-right">
                  LAT 23.5505
                  <br />
                  LONG 46.6333
                </div>
              </div>
            </div>

            {/* legenda técnica abaixo */}
            <div className="mt-4 flex items-center gap-3 font-ui text-xs text-white/55">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[hsl(194_77%_62%)] animate-pulse" />
              Instalação em tempo real · Procedimento técnico padronizado
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}