import React from "react";
import { Wind, Instagram, Facebook, Youtube, MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteConfig, WHATSAPP_DEFAULT_URL } from "@/lib/siteConfig";
import WhatsAppIcon from "./WhatsAppIcon";

const social = [
  { icon: Instagram, href: "instagram", label: "Instagram" },
  { icon: Facebook, href: "facebook", label: "Facebook" },
  { icon: Youtube, href: "youtube", label: "YouTube" },
];

export default function Footer() {
  const c = siteConfig;
  const year = new Date().getFullYear();

  const handleNav = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "hsl(207 72% 12%)" }} className="text-white">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/10">
                <Wind className="h-5 w-5" style={{ color: "hsl(194 77% 62%)" }} strokeWidth={2.4} />
              </span>
              <span className="font-heading font-extrabold text-lg">
                Thermal<span style={{ color: "hsl(194 77% 62%)" }}>Pro</span>
              </span>
            </div>
            <p className="font-ui text-sm text-white/60 leading-relaxed max-w-xs">
              {c.company.shortDescription}
            </p>
            <div className="mt-5 flex items-center gap-3">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={c.social[s.href]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-lg bg-white/8 hover:bg-white/15 transition-colors"
                >
                  <s.icon className="h-[18px] w-[18px] text-white/80" />
                </a>
              ))}
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="font-ui text-xs font-semibold uppercase tracking-wider text-white/50 mb-4">
              Navegação
            </h3>
            <ul className="space-y-2.5">
              {c.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNav(e, item.href)}
                    className="font-ui text-sm text-white/70 hover:text-[hsl(194_77%_62%)] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Soluções */}
          <div>
            <h3 className="font-ui text-xs font-semibold uppercase tracking-wider text-white/50 mb-4">
              Soluções
            </h3>
            <ul className="space-y-2.5">
              {["Instalação", "Manutenção", "Higienização", "Climatização Comercial", "Climatização Industrial", "Projetos"].map((s) => (
                <li key={s}>
                  <a
                    href="#solucoes"
                    onClick={(e) => handleNav(e, "#solucoes")}
                    className="font-ui text-sm text-white/70 hover:text-[hsl(194_77%_62%)] transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-ui text-xs font-semibold uppercase tracking-wider text-white/50 mb-4">
              Contato
            </h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 text-[hsl(194_77%_62%)] shrink-0" />
                <span className="font-ui text-sm text-white/70">{c.address.full}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 mt-0.5 text-[hsl(194_77%_62%)] shrink-0" />
                <span className="font-ui text-sm text-white/70">{c.phone}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 mt-0.5 text-[hsl(194_77%_62%)] shrink-0" />
                <span className="font-ui text-sm text-white/70">{c.email}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 mt-0.5 text-[hsl(194_77%_62%)] shrink-0" />
                <span className="font-ui text-sm text-white/70">{c.openingHours}</span>
              </li>
            </ul>
            <a
              href={WHATSAPP_DEFAULT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full px-4 py-2.5 font-ui text-sm font-semibold"
              style={{ background: "hsl(194 77% 62%)", color: "hsl(207 72% 16%)" }}
            >
              <WhatsAppIcon className="h-4 w-4" />
              Solicitar orçamento
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-ui text-xs text-white/50">
            © {year} {c.company.fullName}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="font-ui text-xs text-white/50 hover:text-white/80 transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="font-ui text-xs text-white/50 hover:text-white/80 transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}