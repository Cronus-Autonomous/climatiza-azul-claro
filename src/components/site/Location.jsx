import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Location() {
  const c = siteConfig;
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">
          {/* LEFT — info */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <div className="eyebrow flex items-center gap-2.5" style={{ color: "hsl(200 69% 34%)" }}>
              <span className="inline-block h-px w-8 bg-[hsl(200_69%_34%)]" />
              Onde estamos
            </div>
            <h2
              className="mt-4 font-heading font-extrabold leading-[1.1] tracking-[-0.02em] text-foreground"
              style={{ fontSize: "clamp(1.75rem, 3.4vw, 2.5rem)" }}
            >
              Nossa localização
            </h2>
            <p className="mt-4 font-ui text-muted-foreground leading-relaxed">
              Atendemos {c.serviceArea}. Fale com nossa equipe para entender a
              disponibilidade para o seu caso.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-3.5">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[hsl(194_77%_62%_/_0.12)] shrink-0">
                  <MapPin className="h-5 w-5" style={{ color: "hsl(200 69% 34%)" }} />
                </span>
                <div>
                  <div className="font-ui text-xs font-semibold uppercase tracking-wider text-muted-foreground">Endereço</div>
                  <div className="font-ui text-sm text-foreground mt-0.5">{c.address.full}</div>
                </div>
              </div>
              <div className="flex items-start gap-3.5">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[hsl(194_77%_62%_/_0.12)] shrink-0">
                  <Phone className="h-5 w-5" style={{ color: "hsl(200 69% 34%)" }} />
                </span>
                <div>
                  <div className="font-ui text-xs font-semibold uppercase tracking-wider text-muted-foreground">Telefone / WhatsApp</div>
                  <div className="font-ui text-sm text-foreground mt-0.5">{c.phone}</div>
                </div>
              </div>
              <div className="flex items-start gap-3.5">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[hsl(194_77%_62%_/_0.12)] shrink-0">
                  <Clock className="h-5 w-5" style={{ color: "hsl(200 69% 34%)" }} />
                </span>
                <div>
                  <div className="font-ui text-xs font-semibold uppercase tracking-wider text-muted-foreground">Horário de atendimento</div>
                  <div className="font-ui text-sm text-foreground mt-0.5">{c.openingHours}</div>
                </div>
              </div>
            </div>

            <a
              href={c.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-2 font-ui text-sm font-semibold text-[hsl(200_69%_34%)] hover:gap-3 transition-all"
            >
              Como chegar
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          {/* RIGHT — map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative min-h-[340px] rounded-2xl overflow-hidden ring-1 ring-border shadow-[0_24px_60px_-30px_rgba(16,33,43,0.3)]"
          >
            <iframe
              title="Mapa de localização"
              src={c.googleMapsEmbed}
              className="absolute inset-0 h-full w-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}