import Image from "next/image";
import Link from "next/link";

import { BentoCard, BentoGrid } from "@/components/bento-grid";
import { DailyToolStack } from "@/components/daily-tool-stack";
import { LiveClock } from "@/components/live-clock";
import { ThemeToggle } from "@/components/theme-toggle";

const stackSections = [
  {
    title: "Focus Areas",
    items: ["Product", "Design", "Motion"],
  },
  {
    title: "Featured",
    items: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
  },
  {
    title: "Backend",
    items: ["Node.js", "tRPC", "Prisma", "PlanetScale"],
  },
  {
    title: "DB + Services",
    items: ["Supabase", "Vercel", "Clerk", "Resend"],
  },
  {
    title: "Currently Learning",
    items: ["Three.js", "Motion Graphics"],
  },
];

const tools = [
  { name: "VS CODE", icon: "/images/vscode.png" },
  { name: "FIGMA", icon: "/images/figma_logo.svg" },
  { name: "FRAMER", icon: "/images/motion.svg" },
  { name: "JETBRAINS", icon: "/images/jetbrains.svg" },
  { name: "CHATGPT", icon: "/images/chatgpt.svg" },
  { name: "T3 STACK", icon: "/images/t3.svg" },
];

const socials = [
  { name: "GitHub", href: "https://github.com/zygyxl", icon: "/images/github.svg" },
  { name: "X", href: "https://x.com", icon: "/images/x.svg" },
  { name: "LinkedIn", href: "https://www.linkedin.com", icon: "/images/linkdin.svg" },
  { name: "Mail", href: "mailto:hello@yzy.dev", icon: "/images/gmail.svg" },
  { name: "Discord", href: "https://discord.gg", icon: "/images/discord.svg" },
  { name: "Framer", href: "https://www.framer.com", icon: "/images/motion.svg" },
];

const vibeShots = [
  { src: "/images/ye.jpg", alt: "Ye" },
  { src: "/images/image_2.jpg", alt: "Ghost Town" },
  { src: "/images/shawn.png", alt: "Shawn" },
  { src: "/images/naruto24.jpg", alt: "Naruto" },
];

export default function Page() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-[1200px] flex-col gap-14 px-6 py-16 sm:px-10 lg:gap-16">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[#f6f6fb] opacity-100 transition-opacity duration-700 dark:opacity-0" />
        <div className="absolute inset-0 bg-[#050507] opacity-0 transition-opacity duration-700 dark:opacity-100" />
        <div className="absolute -left-32 top-24 h-[360px] w-[360px] rounded-[80px] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),transparent_75%)] opacity-40 transition-opacity duration-700 dark:opacity-70" />
        <div className="absolute -right-36 bottom-10 h-[420px] w-[420px] rounded-[120px] bg-[radial-gradient(circle_at_center,_rgba(122,110,255,0.18),transparent_70%)] opacity-40 transition-opacity duration-700 dark:opacity-70" />
      </div>

      <header className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.45em] text-zinc-500 dark:text-zinc-500">
          <span className="rounded-full border border-black/10 px-3 py-1 text-[10px] text-zinc-600 shadow-[0_20px_70px_-45px_rgba(15,23,42,0.55)] dark:border-white/10 dark:text-white/70">
            {}
          </span>
          <span>tech stack dashboard</span>
        </div>
        <div className="flex items-center gap-4">
          <LiveClock />
          <ThemeToggle />
        </div>
      </header>

      <BentoGrid className="gap-8 lg:grid-cols-[340px,minmax(0,1fr),280px]">
        <div className="flex flex-col gap-8">
          <BentoCard delay={0.05} className="min-h-[760px] px-9 py-10">
            <div className="flex h-full flex-col">
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.55em] text-zinc-500 dark:text-white/60">
                  <span className="rounded-full border border-black/10 px-3 py-1 text-[10px] text-zinc-600 shadow-[0_24px_80px_-50px_rgba(15,23,42,0.5)] dark:border-white/10 dark:text-white/70">
                    {}
                  </span>
                  <span>tech stack</span>
                </div>
                <h2 className="text-[40px] font-semibold tracking-[0.35em] text-zinc-900 dark:text-white">{`{}`} TECH STACK</h2>
                <p className="max-w-[260px] text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  Frontend, backend e serviços que utilizo diariamente para construir experiências digitais ricas em motion.
                </p>
              </div>
              <div className="mt-12 flex-1 space-y-8">
                {stackSections.map((section) => (
                  <div key={section.title} className="space-y-4">
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.55em] text-zinc-500 dark:text-white/60">
                      <span>{section.title}</span>
                      <span className="h-px w-[60px] bg-zinc-300/40 dark:bg-white/10" />
                    </div>
                    <div className="flex flex-wrap gap-2.5">
                      {section.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-black/10 bg-white/85 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-zinc-800 shadow-[0_34px_90px_-60px_rgba(15,23,42,0.55)] dark:border-white/10 dark:bg-white/5 dark:text-white"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-auto pt-10 text-[10px] uppercase tracking-[0.55em] text-zinc-500 dark:text-white/60">
                Product • Motion • Recall
              </div>
            </div>
          </BentoCard>
        </div>

        <div className="flex flex-col gap-8">
          <BentoCard delay={0.12} className="px-9 py-9">
            <div className="flex h-full flex-col gap-7">
              <div className="flex items-center gap-6">
                <div className="relative h-20 w-20 overflow-hidden rounded-[28px] border border-black/10 bg-white/80 shadow-[0_30px_90px_-60px_rgba(15,23,42,0.45)] dark:border-white/10 dark:bg-white/10">
                  <Image src="/images/profile.jpg" alt="Retrato de Zywil" fill sizes="80px" className="object-cover" priority />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] uppercase tracking-[0.45em] text-zinc-500 dark:text-white/60">@zywil</span>
                  <h3 className="text-[30px] font-semibold text-zinc-900 dark:text-white">Zywil</h3>
                  <p className="text-[11px] uppercase tracking-[0.6em] text-zinc-500 dark:text-white/40">I build webapps.</p>
                </div>
              </div>
              <div className="space-y-4 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                <p>
                  Hello, I&rsquo;m Zywil — a 21 year old developer based in São Paulo, Brasil crafting motion-first product
                  experiences with TypeScript, design systems and audiovisual storytelling.
                </p>
                <p>Product driven. Systems minded. Motion always.</p>
              </div>
              <div className="mt-auto flex items-center justify-between rounded-[28px] border border-black/10 bg-white/85 px-5 py-4 text-[11px] uppercase tracking-[0.45em] text-zinc-700 shadow-[0_38px_90px_-65px_rgba(15,23,42,0.5)] dark:border-white/10 dark:bg-white/5 dark:text-white/70">
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <span>Available for work</span>
                </div>
                <span>Based in SP</span>
              </div>
            </div>
          </BentoCard>

          <BentoCard delay={0.18} className="px-9 py-9">
            <DailyToolStack tools={tools} />
          </BentoCard>
        </div>

        <div className="flex flex-col gap-8">
          <BentoCard delay={0.16} className="px-8 py-8">
            <div className="flex h-full flex-col gap-6">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-[0.55em] text-zinc-500 dark:text-white/60">Quick access</p>
                  <h3 className="text-[36px] font-semibold leading-none tracking-[0.22em] text-zinc-900 dark:text-white">LINKS.</h3>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="flex h-7 w-7 items-center justify-center rounded-xl border border-black/10 bg-white/75 text-xs font-semibold tracking-[0.3em] text-zinc-700 shadow-[0_24px_70px_-55px_rgba(15,23,42,0.55)] dark:border-white/10 dark:bg-white/10 dark:text-white">X</span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-xl border border-black/10 bg-white/75 text-xs font-semibold tracking-[0.3em] text-zinc-700 shadow-[0_24px_70px_-55px_rgba(15,23,42,0.55)] dark:border-white/10 dark:bg-white/10 dark:text-white">O</span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-xl border border-black/10 bg-white/75 text-xs font-semibold tracking-[0.3em] text-zinc-700 shadow-[0_24px_70px_-55px_rgba(15,23,42,0.55)] dark:border-white/10 dark:bg-white/10 dark:text-white">.</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {socials.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="group flex h-[76px] w-full items-center justify-center rounded-[24px] border border-black/10 bg-white/85 p-3 shadow-[0_32px_80px_-60px_rgba(15,23,42,0.55)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_38px_90px_-55px_rgba(15,23,42,0.55)] dark:border-white/10 dark:bg-white/5"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image src={social.icon} alt={social.name} width={26} height={26} className="object-contain" />
                  </Link>
                ))}
              </div>
            </div>
          </BentoCard>

          <BentoCard
            delay={0.23}
            className="relative overflow-hidden border-none bg-[#d5c7ff] px-8 py-9 text-[#19161f] shadow-[0_70px_160px_-90px_rgba(139,115,255,0.85)] dark:bg-gradient-to-br dark:from-[#b18aff] dark:via-[#8e7eff] dark:to-[#6b9dff] dark:text-white"
          >
            <div className="pointer-events-none absolute inset-0 opacity-40">
              <Image src="/images/v0.svg" alt="Projeto" fill sizes="(min-width: 1024px) 280px, 80vw" className="object-cover" />
            </div>
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="space-y-3">
                <p className="text-[10px] uppercase tracking-[0.55em] text-black/60 dark:text-white/70">Project</p>
                <h3 className="text-[46px] font-semibold tracking-[0.3em] leading-[0.95]">
                  SSS
                  <br />
                  NZ
                </h3>
                <p className="max-w-[220px] text-sm text-black/70 dark:text-white/80">
                  Motion experiments mixing shadcn/ui components, playful UI cards and micro-interactions.
                </p>
              </div>
              <div className="flex items-center justify-between text-sm font-medium">
                <span>Prototyping now</span>
                <Image src="/images/play.svg" alt="Play" width={30} height={30} />
              </div>
            </div>
          </BentoCard>

          <BentoCard delay={0.28} className="px-8 py-8">
            <div className="flex h-full flex-col gap-6">
              <header className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-[0.55em] text-zinc-500 dark:text-white/60">Daily vibe</p>
                  <h4 className="text-[26px] font-semibold tracking-[0.18em] text-zinc-900 dark:text-white">MOOD BOARD</h4>
                </div>
                <Image src="/images/elipse.svg" alt="Ellipse" width={36} height={36} className="opacity-80 dark:opacity-70" />
              </header>
              <div className="grid grid-cols-2 gap-3">
                {vibeShots.map((shot) => (
                  <div
                    key={shot.src}
                    className="relative aspect-square overflow-hidden rounded-[24px] border border-black/10 bg-white/85 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.55)] dark:border-white/10 dark:bg-white/5"
                  >
                    <Image src={shot.src} alt={shot.alt} fill sizes="(min-width: 1024px) 120px, 40vw" className="object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-xs leading-5 text-zinc-600 dark:text-zinc-300">
                Anime, hip-hop e sci-fi alimentam a energia do estúdio diariamente.
              </p>
            </div>
          </BentoCard>
        </div>
      </BentoGrid>
    </main>
  );
}
