"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import { cn } from "@/lib/utils";

export function BentoGrid({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("grid w-full grid-cols-3 gap-3 max-md:grid-cols-1", className)}>
      {children}
    </div>
  );
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return isMobile;
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
  const isMobile = useIsMobile();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 900, damping: 80, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 900, damping: 80, mass: 0.5 });
  const scale = useTransform([springX, springY], ([latestX, latestY]) => {
    const distance = Math.sqrt(latestX ** 2 + latestY ** 2);
    return 1 - Math.min(distance / 3500, 0.08);
  });

  useEffect(() => {
    if (isMobile) {
      x.set(0);
      y.set(0);
    }
  }, [isMobile, x, y]);

  return (
    <motion.div
      drag={!isMobile}
      dragConstraints={{ left: -24, right: 24, top: -24, bottom: 24 }}
      dragElastic={0.2}
      dragMomentum={false}
      onDrag={(_, info) => {
        if (isMobile) return;
        x.set(info.offset.x);
        y.set(info.offset.y);
      }}
      onDragEnd={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x: springX, y: springY, scale }}
      whileHover={{ scale: isMobile ? 1 : 1.03 }}
      className={cn(
        "group relative flex h-full w-full overflow-hidden rounded-3xl border border-white/5 bg-dark-2/80 p-5 text-white shadow-[0_0_60px_-20px_rgba(255,255,255,0.2)_inset] backdrop-blur-lg transition-all hover:border-white/10",
        "dark:bg-dark-2/80",
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
