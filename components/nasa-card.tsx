"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type NasaApod = {
  title?: string;
  url?: string;
  hdurl?: string;
  date?: string;
  media_type?: string;
  copyright?: string;
};

const FALLBACK_IMAGE = "/images/solaranalemma2024.jpg";

export function useNasaApod() {
  const [data, setData] = useState<NasaApod | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [broken, setBroken] = useState(false);

  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        const response = await fetch(
          "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=1"
        );
        if (!response.ok) throw new Error("Failed to fetch");
        const [item] = (await response.json()) as NasaApod[];
        if (!ignore) setData(item);
      } catch (err) {
        console.error("Failed to fetch NASA APOD", err);
        if (!ignore) setError(true);
      } finally {
        if (!ignore) setIsLoading(false);
      }
    }

    load();

    return () => {
      ignore = true;
    };
  }, []);

  const imageSrc = error || broken
    ? FALLBACK_IMAGE
    : data?.media_type === "image"
    ? data?.hdurl || data?.url || FALLBACK_IMAGE
    : FALLBACK_IMAGE;

  const markAsBroken = () => setBroken(true);

  return { data, isLoading, error: error || broken, imageSrc, markAsBroken };
}

export function NasaCard({ className }: { className?: string }) {
  const { data, isLoading, error, imageSrc, markAsBroken } = useNasaApod();

  return (
    <div
      className={cn(
        "flex h-full flex-col gap-5",
        className
      )}
    >
      <header className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.4em] text-zinc-500 dark:text-zinc-400">
        <span>Fetching from NASA...</span>
        <span className="flex items-center gap-2 text-xs text-emerald-500">
          <span
            className={cn(
              "h-2.5 w-2.5 rounded-full",
              isLoading ? "animate-pulse bg-emerald-400/70" : "bg-emerald-400"
            )}
          />
          {isLoading ? "loading" : "synced"}
        </span>
      </header>
      <div className="relative flex-1 overflow-hidden rounded-[28px] border border-black/10 bg-zinc-900/20 dark:border-white/10 dark:bg-white/5">
        {isLoading ? (
          <div className="flex h-full flex-col items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
            <span>carregando</span>
            <span className="font-semibold">imagem astronômica do dia</span>
          </div>
        ) : (
          <Image
            src={imageSrc}
            alt={data?.title ?? "Imagem da NASA"}
            fill
            sizes="(min-width: 1024px) 360px, 90vw"
            className="object-cover"
            onError={markAsBroken}
            priority={false}
          />
        )}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-5 text-white">
          <p className="text-[11px] uppercase tracking-[0.35em] text-white/70">Ghost Town</p>
          <p className="mt-1 text-sm font-medium text-white">
            {error
              ? "The Sword of Orion"
              : data?.title || "Astronomy Picture of the Day"}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between rounded-2xl border border-black/10 bg-white/80 px-4 py-4 text-xs text-zinc-700 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.35)] dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
        <div className="space-y-1">
          <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-400">Playlist</p>
          <p className="text-sm font-semibold text-zinc-800 dark:text-white">&ldquo;The game be bleak one day&rdquo;</p>
        </div>
        <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-black/10 dark:border-white/10">
          <Image src="/images/naruto24.jpg" alt="Naruto" fill sizes="56px" className="object-cover" />
        </div>
      </div>
    </div>
  );
}
