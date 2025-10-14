import Image from "next/image";
import Link from "next/link";

import { BentoCard, BentoGrid } from "@/components/bento-grid";
import { LiveClock } from "@/components/live-clock";
import { NasaCard } from "@/components/nasa-card";
import { ThemeToggle } from "@/components/theme-toggle";

const stackSections = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
  },
  {
    title: "Backend",
    items: ["Node.js", "tRPC", "Prisma", "PlanetScale"],
  },
  {
    title: "DB & Services",
    items: ["Supabase", "Vercel", "Clerk", "Resend"],
  },
  {
    title: "Currently Learning",
    items: ["Three.js", "Motion Graphics"],
  },
];

const tools = [
  { name: "VS Code", icon: "/images/vscode.png" },
  { name: "Figma", icon: "/images/figma_logo.svg" },
  { name: "ChatGPT", icon: "/images/chatgpt.svg" },
  { name: "Motion", icon: "/images/motion.svg" },
  { name: "Discord", icon: "/images/discord.svg" },
  { name: "T3 Stack", icon: "/images/t3.svg" },
];

const socials = [
  { name: "GitHub", href: "https://github.com/zygyxl", icon: "/images/github.svg" },
  { name: "LinkedIn", href: "https://www.linkedin.com", icon: "/images/linkdin.svg" },
  { name: "Email", href: "mailto:hello@yzy.dev", icon: "/images/gmail.svg" },
  { name: "Discord", href: "https://discord.gg", icon: "/images/discord.svg" },
  { name: "X", href: "https://x.com", icon: "/images/x.svg" },
];

const vibeShots = [
  { src: "/images/ye.jpg", alt: "Ye" },
  { src: "/images/shawn.png", alt: "Shawn" },
  { src: "/images/naruto631.jpg", alt: "Naruto" },
  { src: "/images/image_2.jpg", alt: "Mountains" },
];

export default function Page() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-[1120px] flex-col gap-10 px-6 py-12 sm:px-10 lg:gap-12 lg:py-16">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[#070709] opacity-0 transition-opacity duration-700 dark:opacity-100" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(103,76,255,0.28),transparent_60%)] opacity-0 transition-opacity duration-700 dark:opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f111a] to-[#040408] opacity-0 transition-opacity duration-700 dark:opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#f4f7ff] via-[#dfe9ff] to-[#f4f7ff] opacity-100 transition-opacity duration-700 dark:opacity-0" />
        <Image
          src="/images/cloud688.png"
          alt="Clouds"
          width={900}
          height={600}
          className="absolute left-1/2 top-[10%] w-[900px] -translate-x-1/2 opacity-100 transition-opacity duration-700 dark:opacity-0"
          priority
        />
        <Image
          src="/images/cloud.png"
          alt="Cloud"
          width={300}
          height={180}
          className="absolute left-0 top-[25%] opacity-100 transition-opacity duration-700 dark:opacity-0"
          priority
        />
        <Image
          src="/images/bigCloud.png"
          alt="Big cloud"
          width={420}
          height={320}
          className="absolute right-[-60px] bottom-[8%] opacity-100 transition-opacity duration-700 dark:opacity-0"
          priority
        />
      </div>

      <header className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-zinc-500 dark:text-zinc-500">
          <span className="rounded-full border border-black/10 px-3 py-1 text-[10px] text-zinc-600 shadow-[0_10px_25px_-20px_rgba(15,23,42,0.35)] dark:border-white/10 dark:text-zinc-300">
            {}
          </span>
          <span>tech stack dashboard</span>
        </div>
        <div className="flex items-center gap-4">
          <LiveClock />
          <ThemeToggle />
        </div>
      </header>

      <BentoGrid className="lg:grid-cols-[280px,1fr,240px]">
        <div className="flex flex-col gap-6">
          <BentoCard className="min-h-[620px]">
            <div className="flex h-full flex-col">
              <div className="space-y-4">
                <p className="text-[11px] font-mono uppercase tracking-[0.45em] text-zinc-500 dark:text-zinc-400">
                  Tech Stack
                </p>
                <h2 className="text-3xl font-semibold tracking-[0.35em] text-zinc-900 dark:text-white">
                  {"{}"} TECH STACK
                </h2>
                <p className="max-w-[220px] text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  Frontend, backend and services that make my daily toolkit.
                </p>
              </div>
              <div className="mt-10 space-y-6">
                {stackSections.map((section) => (
                  <div key={section.title} className="space-y-3">
                    <p className="text-[11px] uppercase tracking-[0.4em] text-zinc-500 dark:text-zinc-400">
                      {section.title}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {section.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-zinc-800 shadow-[0_14px_30px_-22px_rgba(15,23,42,0.45)] dark:border-white/10 dark:bg-white/10 dark:text-white"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-auto pt-8 text-xs font-mono uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-400">
                Motion • Design • Recall
              </div>
            </div>
          </BentoCard>
        </div>

        <div className="flex flex-col gap-6">
          <BentoCard className="min-h-[260px]">
            <div className="flex h-full flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-3xl border border-black/10 dark:border-white/10">
                  <Image src="/images/profile.jpg" alt="Perfil" fill sizes="64px" className="object-cover" priority />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-400">@zywil</span>
                  <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white">Zywil</h3>
                </div>
              </div>
              <div className="space-y-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                <p className="text-base font-semibold text-zinc-900 dark:text-white">I build Backends.</p>
                <p>
                  Hello, I'm Zywil a 21 year old developer based in SP - Brazil. I craft webapps with motion,
                  TypeScript and cloud native tooling.
                </p>
                <p>Design first. Motion always.</p>
              </div>
              <div className="mt-auto flex items-center justify-between rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-xs text-zinc-700 shadow-[0_12px_35px_-20px_rgba(15,23,42,0.45)] dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <span>Available for work</span>
                </div>
                <span className="font-mono uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-400">Based in SP</span>
              </div>
            </div>
          </BentoCard>

          <BentoCard>
            <div className="flex h-full flex-col gap-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.4em] text-zinc-500 dark:text-zinc-400">Daily</p>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Tool Stack.</h3>
                </div>
                <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-black/10 bg-white/70 dark:border-white/10 dark:bg-white/10">
                  <Image src="/images/motion.svg" alt="motion" fill sizes="48px" className="object-contain p-2" />
                </div>
              </div>
              <div className="grid flex-1 grid-cols-3 gap-3">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex flex-col items-center gap-2 rounded-2xl border border-black/10 bg-white/80 p-3 text-center text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-700 shadow-[0_12px_28px_-22px_rgba(15,23,42,0.45)] dark:border-white/10 dark:bg-white/10 dark:text-zinc-200"
                  >
                    <div className="relative h-10 w-10">
                      <Image
                        src={tool.icon}
                        alt={tool.name}
                        fill
                        sizes="40px"
                        className="object-contain"
                      />
                    </div>
                    <span>{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </BentoCard>

          <BentoCard className="p-6">
            <NasaCard />
          </BentoCard>
        </div>

        <div className="flex flex-col gap-6">
          <BentoCard>
            <div className="flex h-full flex-col gap-5">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold uppercase tracking-[0.4em] text-zinc-900 dark:text-white">Links.</h3>
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-black/10 bg-white/70 text-sm font-mono uppercase tracking-[0.35em] text-zinc-500 dark:border-white/10 dark:bg-white/10 dark:text-zinc-400">
                  L
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {socials.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-white/70 p-2 transition-transform duration-200 hover:-translate-y-1 hover:border-black/20 dark:border-white/10 dark:bg-white/5"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image src={social.icon} alt={social.name} width={24} height={24} className="object-contain" />
                  </Link>
                ))}
              </div>
            </div>
          </BentoCard>

          <BentoCard className="relative overflow-hidden border-none bg-gradient-to-br from-[#b18aff] via-[#8e7eff] to-[#6b9dff] p-6 text-white shadow-[0_40px_90px_-45px_rgba(109,117,255,0.7)]">
            <div className="pointer-events-none absolute inset-0 opacity-50">
              <Image src="/images/v0.svg" alt="Project swirl" fill sizes="(min-width: 1024px) 260px, 80vw" className="object-cover" />
            </div>
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="space-y-3">
                <p className="text-[11px] uppercase tracking-[0.45em] text-white/70">Project</p>
                <h3 className="text-3xl font-semibold tracking-[0.25em]">SSS</h3>
                <p className="max-w-[180px] text-sm text-white/80">
                  Framer Motion experiments with shadcn/ui components and micro interactions.
                </p>
              </div>
              <div className="flex items-center justify-between text-sm text-white/80">
                <span>Prototype ready</span>
                <Image src="/images/play.svg" alt="Play" width={28} height={28} />
              </div>
            </div>
          </BentoCard>

          <BentoCard>
            <div className="flex h-full flex-col gap-4">
              <header className="flex items-center justify-between">
                <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-400">Daily vibe</p>
                <Image src="/images/elipse.svg" alt="Ellipse" width={36} height={36} className="opacity-80 dark:opacity-70" />
              </header>
              <div className="grid grid-cols-2 gap-3">
                {vibeShots.map((shot) => (
                  <div
                    key={shot.src}
                    className="relative aspect-square overflow-hidden rounded-2xl border border-black/10 bg-white/70 dark:border-white/10 dark:bg-white/5"
                  >
                    <Image src={shot.src} alt={shot.alt} fill sizes="(min-width: 1024px) 120px, 40vw" className="object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-xs leading-5 text-zinc-600 dark:text-zinc-300">
                Inspired by anime, lo-fi and sci-fi storytelling. Studio yzy keeps the vibe alive.
              </p>
            </div>
          </BentoCard>
        </div>
      </BentoGrid>
    </main>
  );
}
