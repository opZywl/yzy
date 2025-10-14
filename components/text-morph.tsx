"use client";

import { useEffect, useMemo, useState } from "react";

export function TextMorph({
  texts,
  interval = 3200,
}: {
  texts: string[];
  interval?: number;
}) {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const current = useMemo(() => texts[index % texts.length], [texts, index]);

  useEffect(() => {
    const id = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % texts.length);
        setFade(true);
      }, 320);
    }, interval);
    return () => clearInterval(id);
  }, [interval, texts.length]);

  return (
    <span
      className={`block text-balance text-center text-lg font-semibold tracking-tight transition-all duration-300 ${
        fade ? "opacity-100 blur-0" : "opacity-0 blur-sm"
      }`}
    >
      {current}
    </span>
  );
}
