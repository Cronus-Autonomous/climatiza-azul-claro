import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionHeader from "./SectionHeader";
import WhatsAppIcon from "./WhatsAppIcon";
import { siteConfig, buildWhatsAppUrl } from "@/lib/siteConfig";

const serviceOptions = [
  "Instalação",
  "Manutenção",
  "Higienização",
  "Projeto de climatização",
  "Climatização comercial",
  "Climatização industrial",
  "Outro",
];

const envOptions = [
  "Residencial",
  "Comercial",
  "Corporativo",
  "Industrial",
];

const fieldClass =
  "w-full rounded-xl border border-border bg-white px-4 py-3 font-ui text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-[hsl(194_77%_62%)] focus:ring-2 focus:ring-[hsl(194_77%_62%_/_0.2)] outline-none transition-all min-h-[48px]";

const labelClass =
  "block font-ui text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5";

export default function QuoteForm() {
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    whatsapp: "",
    email: "",
    regiao: "",
    ambiente: envOptions[0],
    servico: serviceOptions[0],
    quantidade: "",
    mensagem: "",
  });

  const set = (k) => (e) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Olá! Gostaria de solicitar um orçamento.

Nome: ${form.nome}
Empresa: ${form.empresa || "—"}
Região: ${form.regiao || "—"}
Tipo de ambiente: ${form.ambiente}
Serviço: ${form.servico}
Quantidade de equipamentos: ${form.quantidade || "—"}
Mensagem: ${form.mensagem || "—"}`;
    window.open(buildWhatsAppUrl(msg), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contato" className="relative py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeader
              eyebrow="Orçamento"
              title="Solicite seu"
              highlight="orçamento."
              description="Envie algumas informações e nossa equipe entrará em contato para entender sua necessidade e orientar os próximos passos."
            />
            <div className="mt-7 space-y-3">
              {[
                "Resposta ágil via WhatsApp",
                "Proposta clara e adequada ao serviço",
                "Atendimento residencial e empresarial",
              ].map((t) => (
                <div key={t} className="flex items-center gap-2.5">
                  <span
                    className="grid h-5 w-5 place-items-center rounded-full shrink-0"
                    style={{ background: "hsl(152 60% 42% / 0.15)" }}
                  >
                    <Check
                      className="h-3 w-3"
                      style={{ color: "hsl(152 60% 42%)" }}
                      strokeWidth={3}
                    />
                  </span>
                  <span className="font-ui text-sm text-foreground">{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-[hsl(204_29%_97%)] p-6 md:p-8"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass} htmlFor="nome">Nome *</label>
                <input
                  id="nome" required value={form.nome} onChange={set("nome")}
                  className={fieldClass} placeholder="Seu nome"
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="empresa">Empresa</label>
                <input
                  id="empresa" value={form.empresa} onChange={set("empresa")}
                  className={fieldClass} placeholder="Opcional"
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="whatsapp">WhatsApp *</label>
                <input
                  id="whatsapp" required value={form.whatsapp} onChange={set("whatsapp")}
                  className={fieldClass} placeholder="(11) 99999-9999"
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="email">E-mail</label>
                <input
                  id="email" type="email" value={form.email} onChange={set("email")}
                  className={fieldClass} placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="regiao">Cidade / Região</label>
                <input
                  id="regiao" value={form.regiao} onChange={set("regiao")}
                  className={fieldClass} placeholder="Sua cidade"
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="quantidade">Qtd. de equipamentos</label>
                <input
                  id="quantidade" value={form.quantidade} onChange={set("quantidade")}
                  className={fieldClass} placeholder="Ex: 2"
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="ambiente">Tipo de ambiente</label>
                <select
                  id="ambiente" value={form.ambiente} onChange={set("ambiente")}
                  className={fieldClass}
                >
                  {envOptions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelClass} htmlFor="servico">Tipo de serviço</label>
                <select
                  id="servico" value={form.servico} onChange={set("servico")}
                  className={fieldClass}
                >
                  {serviceOptions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-4">
              <label className={labelClass} htmlFor="mensagem">Mensagem</label>
              <textarea
                id="mensagem" value={form.mensagem} onChange={set("mensagem")}
                rows={4}
                className={[fieldClass, "min-h-[110px] resize-y"].join(" ")}
                placeholder="Descreva sua necessidade, ambiente, equipamento..."
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-4 font-ui text-[15px] font-semibold min-h-[52px] transition-all hover:-translate-y-0.5"
              style={{
                background: "hsl(194 77% 62%)",
                color: "hsl(207 72% 16%)",
                boxShadow: "0 12px 30px -10px hsl(194 77% 62% / 0.6)",
              }}
            >
              <WhatsAppIcon className="h-[19px] w-[19px]" />
              Solicitar orçamento pelo WhatsApp
            </button>
            <p className="mt-3 text-center font-ui text-xs text-muted-foreground">
              Ao enviar, você será redirecionado ao WhatsApp com a mensagem
              preenchida automaticamente.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}