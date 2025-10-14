"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

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

  return (
    <Button
      size="icon"
      variant="ghost"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative overflow-hidden rounded-full border border-white/10 bg-transparent text-white transition-all",
        "hover:shadow-[0_0_25px_0_rgba(255,255,255,0.2)]",
        className
      )}
    >
      <span
        className={cn(
          "flex h-full w-full items-center justify-center text-xs font-bold text-white transition-all duration-200",
          isDark ? "scale-0" : "scale-100"
        )}
      >
        夜
      </span>
      <span
        className={cn(
          "absolute inset-0 flex items-center justify-center text-xs font-bold text-zinc-800 transition-all duration-200",
          isDark ? "scale-100" : "scale-0"
        )}
      >
        朝
      </span>
    </Button>
  );
}
