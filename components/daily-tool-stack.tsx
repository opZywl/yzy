"use client";

import Image from "next/image";
import { useMemo } from "react";

import { cn } from "@/lib/utils";
import { useNasaApod } from "./nasa-card";

type Tool = {
  name: string;
  icon: string;
};

export function DailyToolStack({ tools, className }: { tools: Tool[]; className?: string }) {
  const { data, isLoading, error, imageSrc, markAsBroken } = useNasaApod();

  const creditLine = useMemo(() => {
    if (error) {
      return "from NASA: 2017-05-07 : Francesco Antonucci";
    }

    if (!data?.date) {
      return "from NASA: syncing ...";
    }

    const date = new Date(data.date).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    const author = data.copyright ? data.copyright.toUpperCase() : "NASA";
    return `from NASA: ${date} : ${author}`;
  }, [data, error]);

  const apodTitle = error ? "THE SWORD OF ORION" : data?.title?.toUpperCase() || "ASTRONOMY PICTURE OF THE DAY";

  return (
    <div
      className={cn(
        "grid gap-6 text-white md:grid-cols-[96px,1fr]",
        className
      )}
    >
      <div className="flex flex-col items-center gap-4">
        <span className="text-[11px] uppercase tracking-[0.55em] text-white/30 [writing-mode:vertical-rl] rotate-180">
          Inventory
        </span>
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="flex h-16 w-16 items-center justify-center rounded-[26px] border border-white/10 bg-[#14141b] p-3 shadow-[0_26px_80px_-60px_rgba(0,0,0,0.85)]"
          >
            <Image src={tool.icon} alt={tool.name} width={34} height={34} className="object-contain" />
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-6">
        <div className="space-y-1">
          <p className="text-[12px] uppercase tracking-[0.75em] text-white/35">Daily</p>
          <h3 className="text-[52px] font-semibold uppercase leading-[0.85] tracking-[0.1em] text-white">
            Tool
            <br />
            Stack.
          </h3>
        </div>

        <div className="relative h-[228px] overflow-hidden rounded-[34px] border border-white/10 bg-[#15151b]">
          {isLoading ? (
            <div className="flex h-full flex-col items-center justify-center gap-2 text-[11px] uppercase tracking-[0.45em] text-white/45">
              <span className="animate-pulse">Syncing</span>
              <span>Astronomy Feed</span>
            </div>
          ) : (
            <Image
              src={imageSrc}
              alt={apodTitle}
              fill
              sizes="(min-width: 1024px) 320px, 100vw"
              className="object-cover"
              onError={markAsBroken}
            />
          )}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/45 to-transparent px-6 py-5">
            <p className="text-[11px] uppercase tracking-[0.55em] text-white/65">{creditLine}</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-white/85">{apodTitle}</p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[#15151b]">
            <Image
              src="/images/image_2.jpg"
              alt="Ghost Town"
              fill
              sizes="(min-width: 1024px) 180px, 50vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/45 to-transparent px-5 py-4">
              <p className="text-[12px] uppercase tracking-[0.45em] text-white/70">Ghost Town</p>
              <p className="text-[11px] uppercase tracking-[0.4em] text-white/50">By: Kanye West</p>
              <p className="text-[11px] uppercase tracking-[0.4em] text-white/50">2016</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[#15151b]">
            <Image
              src="/images/naruto24.jpg"
              alt="Naruto"
              fill
              sizes="(min-width: 1024px) 180px, 50vw"
              className="object-cover object-top"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/40 to-transparent px-6 py-6">
              <p className="text-[11px] uppercase tracking-[0.35em] text-white/65">“I hate bipolar it&rsquo;s awesome.”</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
