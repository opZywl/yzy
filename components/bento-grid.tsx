"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const CARD_VARIANTS = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function BentoGrid({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
}

type BentoCardProps = {
  className?: string;
  children: React.ReactNode;
  background?: React.ReactNode;
  delay?: number;
};

export function BentoCard({
  className,
  children,
  background,
  delay = 0,
}: BentoCardProps) {
  return (
    <motion.article
      initial="hidden"
      animate="visible"
      variants={CARD_VARIANTS}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay }}
      whileHover={{ y: -6, rotateX: 0, rotateY: 0 }}
      className={cn(
        "group relative flex h-full w-full overflow-hidden rounded-[34px] border border-black/5 bg-white/80 px-7 py-7 text-zinc-900 shadow-[0_45px_120px_-65px_rgba(15,23,42,0.55)] backdrop-blur-[22px] transition-colors duration-500",
        "dark:border-white/10 dark:bg-[#111113]/85 dark:text-white dark:shadow-[0_70px_160px_-90px_rgba(0,0,0,0.95)]",
        className
      )}
    >
      {background && (
        <div className="pointer-events-none absolute inset-0 opacity-100">
          {background}
        </div>
      )}
      <div className="relative z-10 h-full w-full">{children}</div>
    </motion.article>
  );
}
