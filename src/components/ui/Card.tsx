'use client';

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type Props = React.PropsWithChildren<{
  className?: string;
  href?: string;
  title: string;
  description?: string;
}>;

export function Card({ className, href, title, description, children }: Props) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "rounded-brand bg-white/70 backdrop-blur border border-black/10 shadow-sm hover:shadow-lg hover:border-[hsl(var(--brand))]/20 transition-all duration-300",
        "p-4 sm:p-6",
        href && "hover:scale-[1.02] hover:-translate-y-1 active:scale-[0.98]"
      )}
    >
      <h3 className="text-base sm:text-lg font-semibold tracking-tight text-[color:hsl(var(--ink))]">{title}</h3>
      {description ? (
        <p className="mt-2 text-sm sm:text-base text-black/70 leading-relaxed">{description}</p>
      ) : null}
      {children}
    </motion.div>
  );
  if (href) {
    return (
      <a href={href} className={cn("block focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] rounded-brand touch-manipulation", className)}>
        {content}
      </a>
    );
  }
  return <div className={cn(className)}>{content}</div>;
}



