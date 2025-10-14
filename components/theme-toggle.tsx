"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const DANCE_DURATION = 4200;

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isDancing, setIsDancing] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  if (!mounted) {
    return (
      <Button
        size="icon"
        variant="ghost"
        aria-label="Toggle theme"
        className={cn("rounded-full bg-transparent", className)}
      >
        <span className="text-xs font-bold text-white">夜</span>
      </Button>
    );
  }

  const isDark = theme === "dark";

  const overlay = useMemo(() => {
    if (!mounted || !isDancing) return null;

    return createPortal(
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <div className="relative h-[80vh] w-[80vw] max-w-[720px]">
          <Image
            src="/images/theL.gif"
            alt="L dançando"
            fill
            sizes="(min-width: 1024px) 720px, 90vw"
            priority
            className="object-contain brightness-110 contrast-125"
          />
        </div>
      </div>,
      document.body
    );
  }, [isDancing, mounted]);

  const handleToggle = () => {
    if (!mounted) return;

    if (isDark) {
      setIsDancing(true);
      const id = setTimeout(() => {
        setTheme("light");
        setIsDancing(false);
        setTimeoutId(null);
      }, DANCE_DURATION);
      setTimeoutId(id);
      return;
    }

    setTheme("dark");
  };

  return (
    <>
      <Button
        size="icon"
        variant="ghost"
        aria-label="Alternar tema"
        onClick={handleToggle}
        className={cn(
          "relative h-12 w-12 overflow-hidden rounded-2xl border border-black/10 bg-white/70 text-zinc-900 shadow-[0_10px_40px_-20px_rgba(15,23,42,0.45)] transition",
          "hover:border-black/20 dark:border-white/10 dark:bg-[#1c1c1f] dark:text-white",
          className
        )}
      >
        {mounted && (
          isDark ? (
            <Image
              src="/images/dia.svg"
              alt="Modo claro"
              width={26}
              height={26}
              className="object-contain"
              priority
            />
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 text-zinc-900 dark:text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                d="M21 12.79A9 9 0 0 1 11.21 3 7 7 0 1 0 21 12.79Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )
        )}
      </Button>
      {overlay}
    </>
  );
}
