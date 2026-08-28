import React from "react";
import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { siteConfig } from "@/lib/siteConfig";

// Componente arquitetado para futura integração com Google Business Profile.
// Os dados vêm de siteConfig.googleReviews — substituir por API real quando disponível.

function GoogleBadge() {
  return (
    <div className="inline-flex items-center gap-2.5">
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" />
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z" />
        <path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84z" />
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z" />
      </svg>
      <span className="font-heading font-bold text-foreground">Google</span>
    </div>
  );
}

function Stars({ rating, className = "" }) {
  return (
    <div className={["flex items-center gap-0.5", className].join(" ")}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className="h-4 w-4"
          style={{
            color: i <= Math.round(rating) ? "#FBBC05" : "hsl(204 20% 88%)",
          }}
          fill={i <= Math.round(rating) ? "#FBBC05" : "hsl(204 20% 88%)"}
        />
      ))}
    </div>
  );
}

function ReviewCard({ r }) {
  return (
    <div className="flex flex-col rounded-2xl border border-border bg-white p-6 h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span
            className="grid h-10 w-10 place-items-center rounded-full font-heading font-bold text-sm text-white"
            style={{ background: "hsl(200 69% 34%)" }}
          >
            {r.name.charAt(0)}
          </span>
          <div>
            <div className="font-ui font-semibold text-sm text-foreground">
              {r.name}
            </div>
            <div className="font-ui text-xs text-muted-foreground">{r.date}</div>
          </div>
        </div>
        <Stars rating={r.rating} />
      </div>
      <p className="font-ui text-sm text-muted-foreground leading-relaxed flex-1">
        {r.text}
      </p>
      {r.placeholder && (
        <span className="mt-4 inline-flex w-fit items-center rounded-full bg-amber-50 px-2.5 py-1 font-ui text-[11px] font-medium text-amber-700">
          Placeholder · aguarda integração com Google
        </span>
      )}
    </div>
  );
}

export default function Testimonials() {
  const gr = siteConfig.googleReviews;
  const total = gr.totalReviews || 0;

  return (
    <section id="depoimentos" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <SectionHeader
          eyebrow="Clientes reais"
          title="Nosso trabalho"
          highlight="fala por nós."
          description="Avaliações de clientes que confiaram na nossa execução. Estruturado para integração futura com o Google Meu Negócio."
          align="center"
        />

        {/* Google summary */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 mx-auto max-w-md flex items-center justify-between rounded-2xl border border-border bg-white px-6 py-5"
        >
          <div className="flex items-center gap-4">
            <GoogleBadge />
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-extrabold text-2xl text-foreground">
                  {gr.rating.toFixed(1)}
                </span>
                <Stars rating={gr.rating} />
              </div>
              <div className="font-ui text-xs text-muted-foreground mt-0.5">
                {total > 0
                  ? `Baseado em ${total} avaliações no Google`
                  : "Aguardando integração com o Google"}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Reviews grid */}
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {gr.reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <ReviewCard r={r} />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={gr.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-ui text-sm font-semibold text-[hsl(200_69%_34%)] hover:gap-3 transition-all"
          >
            Ver avaliações no Google
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}