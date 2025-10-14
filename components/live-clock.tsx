"use client";

import { useEffect, useState } from "react";

export function LiveClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    setNow(new Date());
    return () => clearInterval(interval);
  }, []);

  if (!now) return null;

  const formatted = `${now.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  })}, ${now.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    hourCycle: "h23",
  })}`;

  return (
    <time className="font-mono text-[10px] font-light tracking-widest text-zinc-400">
      {formatted}
    </time>
  );
}
