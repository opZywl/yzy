"use client";

import Image from "next/image";
import { useMemo } from "react";

import { cn } from "@/lib/utils";
import { useNasaApod } from "./nasa-card";

type Tool = {
  name: string;
  icon: string;
};

export function DailyToolStack({ tools }: { tools: Tool[] }) {
  const { data, isLoading, error, imageSrc, markAsBroken } = useNasaApod();

  const credit = useMemo(() => {
    if (error) {
      return "FROM NASA: 2017-05-07 — FRANCESCO ANTONUCCI";
    }
    if (!data) {
      return "FROM NASA: SYNCING — LOADING";
    }

    const date = data.date
      ? new Date(data.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })
      : "—";

    const author = data.copyright || "NASA";

    return `FROM NASA: ${date} — ${author.toUpperCase()}`;
  }, [data, error]);

  const apodTitle = error
    ? "The Sword of Orion"
    : data?.title || "Astronomy Picture of the Day";

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[220px,minmax(0,1fr)]">
      <div className="flex flex-col gap-5">
        <div
          className={cn(
            "relative overflow-hidden rounded-[32px] border border-black/5 bg-white px-6 py-8 text-zinc-900 shadow-[0_45px_120px_-70px_rgba(15,23,42,0.5)]",
            "dark:border-white/10 dark:bg-[#17171b] dark:text-white dark:shadow-[0_60px_160px_-85px_rgba(0,0,0,0.95)]"
          )}
        >
          <Image
            src="/images/waves.svg"
            alt="Daily gradient"
            fill
            sizes="(min-width: 1024px) 260px, 100vw"
            className="object-cover opacity-80"
            priority
          />
          <div className="relative z-10 space-y-4">
            <p className="text-[10px] uppercase tracking-[0.6em] text-zinc-500 dark:text-white/60">Daily</p>
            <div>
              <h3 className="text-[44px] font-semibold leading-[0.92] tracking-[0.04em] text-zinc-900 dark:text-white">
                Tool
                <br />
                STACK.
              </h3>
              <p className="mt-5 max-w-[180px] text-xs leading-5 text-zinc-600 dark:text-zinc-400">
                API da NASA, playlist Ghost Town e o mood Naruto pra abastecer a rotina.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className={cn(
                "flex items-center gap-3 rounded-[26px] border border-black/5 bg-white/85 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-700 shadow-[0_32px_80px_-55px_rgba(15,23,42,0.45)]",
                "dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:shadow-[0_40px_120px_-70px_rgba(0,0,0,0.9)]"
              )}
            >
              <span className="relative h-10 w-10 overflow-hidden rounded-2xl border border-black/10 bg-white/75 p-2 dark:border-white/10 dark:bg-white/10">
                <Image src={tool.icon} alt={tool.name} fill sizes="40px" className="object-contain" />
              </span>
              <span className="leading-tight">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div
          className={cn(
            "relative overflow-hidden rounded-[34px] border border-black/5 bg-zinc-900 text-white shadow-[0_45px_120px_-70px_rgba(15,23,42,0.6)]",
            "dark:border-white/10 dark:bg-[#0c0c0f]/95"
          )}
        >
          {isLoading ? (
            <div className="flex h-full min-h-[240px] flex-col items-center justify-center gap-2 text-[11px] uppercase tracking-[0.45em] text-white/60">
              <span className="animate-pulse">SYNCING</span>
              <span>ASTRONOMY PICTURE OF THE DAY</span>
            </div>
          ) : (
            <Image
              src={imageSrc}
              alt={apodTitle}
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
              onError={markAsBroken}
            />
          )}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/50 to-transparent px-6 py-6">
            <p className="text-[10px] uppercase tracking-[0.5em] text-white/70">{credit}</p>
            <p className="mt-2 text-sm font-semibold tracking-[0.02em] text-white">{apodTitle}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div
            className={cn(
              "relative overflow-hidden rounded-[32px] border border-black/5 bg-white text-zinc-900 shadow-[0_40px_120px_-75px_rgba(15,23,42,0.45)]",
              "dark:border-white/10 dark:bg-[#17171b] dark:text-white"
            )}
          >
            <Image
              src="/images/image_2.jpg"
              alt="Ghost Town"
              fill
              sizes="(min-width: 1024px) 260px, 50vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/40 to-transparent px-5 py-4">
              <p className="text-[11px] uppercase tracking-[0.4em] text-white/70">Now Playing</p>
              <p className="mt-1 text-sm font-semibold tracking-wide text-white">Ghost Town</p>
              <p className="text-[11px] uppercase tracking-[0.35em] text-white/70">Kanye West · 2018</p>
            </div>
          </div>

          <div
            className={cn(
              "relative overflow-hidden rounded-[32px] border border-black/5 bg-white text-zinc-900 shadow-[0_40px_120px_-75px_rgba(15,23,42,0.45)]",
              "dark:border-white/10 dark:bg-[#17171b] dark:text-white"
            )}
          >
            <Image
              src="/images/naruto631.jpg"
              alt="Naruto"
              fill
              sizes="(min-width: 1024px) 260px, 50vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/45 to-transparent px-5 py-5">
              <p className="text-[11px] uppercase tracking-[0.35em] text-white/70">Naruto — mood</p>
              <p className="mt-2 text-sm font-semibold leading-relaxed text-white">“That me, bipolar it&rsquo;s awesome.”</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
