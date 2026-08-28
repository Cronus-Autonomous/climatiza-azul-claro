import React from "react";
import { motion } from "framer-motion";

export default function SectionHeader({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  dark = false,
  className = "",
}) {
  const isCenter = align === "center";
  return (
    <div
      className={[
        "max-w-3xl",
        isCenter ? "mx-auto text-center" : "",
        className,
      ].join(" ")}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="eyebrow flex items-center gap-2.5"
          style={{ color: dark ? "hsl(194 77% 62%)" : "hsl(200 69% 34%)" }}
        >
          <span
            className="inline-block h-px w-8"
            style={{ background: dark ? "hsl(194 77% 62%)" : "hsl(200 69% 34%)" }}
          />
          {eyebrow}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, delay: 0.05 }}
        className={[
          "mt-4 font-heading font-extrabold leading-[1.1] tracking-[-0.02em] text-balance",
          dark ? "text-white" : "text-foreground",
        ].join(" ")}
        style={{ fontSize: "clamp(1.75rem, 3.4vw, 2.75rem)" }}
      >
        {title} {highlight && <span style={{ color: "hsl(194 77% 62%)" }}>{highlight}</span>}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className={[
            "mt-5 text-base leading-relaxed",
            dark ? "text-white/70" : "text-muted-foreground",
          ].join(" ")}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}