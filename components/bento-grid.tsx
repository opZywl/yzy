"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

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

export function BentoCard({
  className,
  children,
  background,
}: {
  className?: string;
  children: React.ReactNode;
  background?: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={cn(
        "group relative flex h-full w-full overflow-hidden rounded-[30px] border border-black/10 bg-white/70 p-6 text-zinc-900 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)] backdrop-blur-xl transition-all duration-300",
        "dark:border-white/5 dark:bg-[#141416] dark:text-white",
        className
      )}
    >
      {background && (
        <div className="pointer-events-none absolute inset-0 opacity-100">
          {background}
        </div>
      )}
      <div className="relative z-10 h-full w-full">{children}</div>
    </motion.div>
  );
}
