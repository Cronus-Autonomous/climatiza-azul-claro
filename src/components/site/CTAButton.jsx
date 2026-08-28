import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { WHATSAPP_DEFAULT_URL } from "@/lib/siteConfig";

// Variant: "primary" (cyan) | "secondary" (outline) | "ghost"
// type: "whatsapp" | "link"
export default function CTAButton({
  children = "Solicitar orçamento",
  href,
  variant = "primary",
  type = "whatsapp",
  icon = true,
  arrow = false,
  className = "",
  ...rest
}) {
  const url = href || (type === "whatsapp" ? WHATSAPP_DEFAULT_URL : "#");

  const base =
    "inline-flex items-center justify-center gap-2.5 font-ui font-semibold rounded-full transition-all duration-200 select-none";
  const sizes = "px-6 py-3.5 text-sm md:text-[15px] min-h-[48px]";

  const variants = {
    primary:
      "text-[hsl(207_72%_16%)] bg-[hsl(194_77%_62%)] hover:bg-[hsl(194_77%_55%)] shadow-[0_8px_24px_-8px_hsl(194_77%_62%_/_0.6)] hover:shadow-[0_12px_28px_-8px_hsl(194_77%_62%_/_0.7)]",
    secondary:
      "text-white border border-white/25 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/40",
    secondaryLight:
      "text-foreground border border-border bg-white hover:border-[hsl(200_69%_34%)] hover:text-[hsl(200_69%_34%)]",
    ghost:
      "text-foreground hover:text-[hsl(200_69%_34%)]",
  };

  return (
    <motion.a
      href={url}
      target={type === "whatsapp" ? "_blank" : undefined}
      rel={type === "whatsapp" ? "noopener noreferrer" : undefined}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={[base, sizes, variants[variant], className].join(" ")}
      {...rest}
    >
      {icon && type === "whatsapp" && (
        <MessageCircle className="h-[18px] w-[18px]" strokeWidth={2.2} />
      )}
      <span>{children}</span>
      {arrow && <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2.2} />}
    </motion.a>
  );
}