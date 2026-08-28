// ============================================================
// CENTRAL CONFIGURATION — Edite aqui todas as informações.
// ============================================================

export const siteConfig = {
  company: {
    name: "ThermalPro",
    fullName: "ThermalPro Climatização",
    tagline: "Climatização profissional para quem não pode depender de improvisos.",
    shortDescription:
      "Projetamos, instalamos e cuidamos de sistemas de climatização para residências, empresas e operações que precisam de desempenho, segurança e acabamento profissional.",
  },

  // Contato
  whatsapp: "5511999999999", // formato: 55 + DDD + número (somente dígitos)
  phone: "+55 (11) 99999-9999",
  phoneHref: "+5511999999999",
  email: "contato@thermalpro.com.br",
  address: {
    street: "Av. Paulista, 1000 — Sala 120",
    city: "São Paulo",
    state: "SP",
    zip: "01310-100",
    full: "Av. Paulista, 1000 — Sala 120, São Paulo — SP",
  },
  serviceArea: "São Paulo e região metropolitana",
  openingHours: "Seg–Sex: 08h às 18h · Sáb: 08h às 12h",

  // Redes sociais
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    google: "https://google.com",
  },

  // Google Maps embed (substitua pelo embed da empresa)
  googleMapsEmbed:
    "https://www.google.com/maps?q=São+Paulo&output=embed",
  googleMapsLink: "https://www.google.com/maps?q=São+Paulo",

  // Google Reviews (estruturado para integração futura com Google Business Profile)
  googleReviews: {
    rating: 5.0,
    totalReviews: 0, // 0 = placeholder, substituir por valor real
    reviewsUrl: "https://google.com",
    // Quando integrar com Google, substituir este array por dados reais da API
    reviews: [
      {
        name: "Cliente verificado",
        rating: 5,
        text: "Avaliação real será exibida aqui após integração com o Google Meu Negócio.",
        date: "—",
        placeholder: true,
      },
    ],
  },

  // Métricas — use apenas números reais. Deixe como null para ocultar.
  metrics: {
    installations: 1000, // exibido como "+1.000"
    yearsExperience: 12,
    technicalStandard: 100, // exibido como "100%"
    clientsServed: 850,
    rating: 5,
  },

  // Navegação (âncoras)
  nav: [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Soluções", href: "#solucoes" },
    { label: "Instalações", href: "#instalacoes" },
    { label: "Clientes", href: "#clientes" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ],
};

// Mensagem padrão do WhatsApp
export const buildWhatsAppUrl = (message) => {
  const text = encodeURIComponent(
    message || "Olá! Gostaria de solicitar um orçamento de climatização."
  );
  return `https://wa.me/${siteConfig.whatsapp}?text=${text}`;
};

export const WHATSAPP_DEFAULT_URL = buildWhatsAppUrl(
  "Olá! Gostaria de solicitar um orçamento de climatização."
);

export default siteConfig;