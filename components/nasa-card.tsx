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

export function NasaCard({ className }: { className?: string }) {
  const [data, setData] = useState<NasaApod | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

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

  const fallbackImage = "/images/solaranalemma2024.jpg";
  const imageSrc = error
    ? fallbackImage
    : data?.media_type === "image"
    ? data?.hdurl || data?.url || fallbackImage
    : fallbackImage;

  return (
    <div className={cn("flex h-full flex-col gap-3", className)}>
      <div className="relative h-60 w-full overflow-hidden rounded-3xl border border-white/10 bg-black/40">
        {isLoading ? (
          <div className="flex h-full items-center justify-center text-xs font-mono text-zinc-400">
            Buscando dados da NASA...
          </div>
        ) : (
          <Image
            src={imageSrc}
            alt={data?.title ?? "Imagem da NASA"}
            fill
            className="object-cover"
            onError={() => setError(true)}
          />
        )}
      </div>
      <div className="flex flex-col items-end text-right text-xs font-mono text-zinc-400">
        <span className="text-zinc-500">
          from NASA: {error ? "2006-08-15" : data?.date ?? "--"}
        </span>
        <span className="line-clamp-1 text-[0.65rem] text-zinc-300">
          {error
            ? "The Sword of Orion"
            : data?.copyright || data?.title || "NASA Astronomy Picture"}
        </span>
      </div>
    </div>
  );
}
