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
    title: "DB & Services",
    items: ["Supabase", "Vercel", "Clerk", "Resend"],
  },
  {
    title: "Currently Learning",
    items: ["Three.js", "Motion Graphics"],
  },
];

const tools = [
  { name: "VS CODE", icon: "/images/vscode32.png" },
  { name: "FIGMA", icon: "/images/figma_logo.svg" },
  { name: "FRAMER", icon: "/images/motion.svg" },
  { name: "JETBRAINS", icon: "/images/jetbrains.svg" },
  { name: "CHATGPT", icon: "/images/chatgpt.svg" },
];

const socials = [
  { name: "GitHub", href: "https://github.com/zygyxl", icon: "/images/github.svg" },
  { name: "X", href: "https://x.com", icon: "/images/x.svg" },
  { name: "LinkedIn", href: "https://www.linkedin.com", icon: "/images/linkdin.svg" },
  { name: "Mail", href: "mailto:hello@yzy.dev", icon: "/images/gmail.svg" },
  { name: "Discord", href: "https://discord.gg", icon: "/images/discord.svg" },
  { name: "Motion", href: "https://www.framer.com", icon: "/images/motion.svg" },
];

const vibeShots = [
  { src: "/images/ye.jpg", alt: "Ye" },
  { src: "/images/image_2.jpg", alt: "Ghost Town" },
  { src: "/images/shawn.png", alt: "Shawn" },
  { src: "/images/naruto24.jpg", alt: "Naruto" },
];

export default function Page() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-[1180px] flex-col gap-12 px-6 py-14 sm:px-10 lg:gap-14">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[#f4f5fa] opacity-100 transition-opacity duration-700 dark:opacity-0" />
        <div className="absolute inset-0 bg-[#050507] opacity-0 transition-opacity duration-700 dark:opacity-100" />
        <div className="absolute left-[-140px] top-[18%] hidden h-[280px] w-[280px] rounded-[60px] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),transparent_75%)] opacity-0 transition-opacity duration-700 dark:opacity-60 lg:block" />
        <div className="absolute right-[-160px] bottom-[6%] hidden rotate-[14deg] grid grid-cols-4 gap-4 opacity-30 transition-opacity duration-700 dark:opacity-60 lg:grid">
          {Array.from({ length: 16 }).map((_, index) => (
            <span
              key={index}
              className="h-10 w-10 rounded-3xl border border-black/10 bg-white/80 shadow-[0_18px_60px_-48px_rgba(15,23,42,0.65)] dark:border-white/10 dark:bg-white/5"
            />
          ))}
        </div>
      </div>

      <header className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.45em] text-zinc-500 dark:text-zinc-500">
          <span className="rounded-full border border-black/10 px-3 py-1 text-[10px] text-zinc-600 shadow-[0_20px_70px_-45px_rgba(15,23,42,0.55)] dark:border-white/10 dark:text-white/70">
            {}
          </span>
          <span>tech stack dashboard</span>
        </div>
        <div className="flex items-center gap-3">
          <LiveClock />
          <ThemeToggle />
        </div>
      </header>

      <BentoGrid className="gap-7 lg:grid-cols-[320px,minmax(0,1fr),260px]">
        <div className="flex flex-col gap-7">
          <BentoCard className="min-h-[720px] px-8 py-9">
            <div className="flex h-full flex-col">
              <div className="space-y-5">
                <p className="text-[11px] uppercase tracking-[0.55em] text-zinc-500 dark:text-white/60">Tech Stack</p>
                <h2 className="text-[38px] font-semibold tracking-[0.35em] text-zinc-900 dark:text-white">{`{}`} TECH STACK</h2>
                <p className="max-w-[240px] text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  Frontend, backend and services that power the studio every single day.
                </p>
              </div>
              <div className="mt-10 flex-1 space-y-7">
                {stackSections.map((section) => (
                  <div key={section.title} className="space-y-3">
                    <p className="text-[10px] uppercase tracking-[0.55em] text-zinc-500 dark:text-white/60">{section.title}</p>
                    <div className="flex flex-wrap gap-2.5">
                      {section.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-black/10 bg-white/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-zinc-800 shadow-[0_32px_90px_-65px_rgba(15,23,42,0.55)] dark:border-white/10 dark:bg-white/5 dark:text-white"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-10 text-[10px] uppercase tracking-[0.55em] text-zinc-500 dark:text-white/60">
                Motion • Design • Recall
              </div>
            </div>
          </BentoCard>
        </div>

        <div className="flex flex-col gap-7">
          <BentoCard className="px-8 py-8">
            <div className="flex h-full flex-col gap-7">
              <div className="flex items-center gap-5">
                <div className="relative h-20 w-20 overflow-hidden rounded-[28px] border border-black/10 bg-white/80 dark:border-white/10 dark:bg-white/10">
                  <Image src="/images/profile.jpg" alt="Perfil" fill sizes="80px" className="object-cover" priority />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] uppercase tracking-[0.4em] text-zinc-500 dark:text-white/60">@zywil</span>
                  <h3 className="text-[28px] font-semibold text-zinc-900 dark:text-white">Zywil</h3>
                  <p className="text-xs uppercase tracking-[0.55em] text-zinc-500 dark:text-white/40">I build backends.</p>
                </div>
              </div>
              <div className="space-y-4 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                <p>
                  Hello, I'm Zywil — a 21 year old developer from São Paulo, Brazil crafting motion-first web experiences with
                  TypeScript and cloud native stacks.
                </p>
                <p>Design forward. Systems minded. Motion always.</p>
              </div>
              <div className="mt-auto flex items-center justify-between rounded-[26px] border border-black/10 bg-white/80 px-5 py-4 text-[11px] uppercase tracking-[0.4em] text-zinc-700 shadow-[0_36px_90px_-65px_rgba(15,23,42,0.55)] dark:border-white/10 dark:bg-white/5 dark:text-white/70">
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <span>Available for work</span>
                </div>
                <span>Based in SP</span>
              </div>
            </div>
          </BentoCard>

          <BentoCard className="px-8 py-8">
            <DailyToolStack tools={tools} />
          </BentoCard>
        </div>

        <div className="flex flex-col gap-7">
          <BentoCard className="px-7 py-7">
            <div className="flex h-full flex-col gap-6">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-[0.55em] text-zinc-500 dark:text-white/60">Quick access</p>
                  <h3 className="text-[34px] font-semibold leading-none tracking-[0.2em] text-zinc-900 dark:text-white">LINKS.</h3>
                </div>
                <div className="flex items-center gap-2">
                  {socials.slice(0, 3).map((social) => (
                    <Link
                      key={`mini-${social.name}`}
                      href={social.href}
                      className="flex h-10 w-10 items-center justify-center rounded-[18px] border border-black/10 bg-white/80 p-2 text-white shadow-[0_24px_70px_-55px_rgba(15,23,42,0.55)] transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/10"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={social.icon} alt={social.name} width={20} height={20} className="object-contain" />
                    </Link>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {socials.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="flex h-[70px] w-full items-center justify-center rounded-[22px] border border-black/10 bg-white/80 p-3 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.55)] transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/5"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image src={social.icon} alt={social.name} width={26} height={26} className="object-contain" />
                  </Link>
                ))}
              </div>
            </div>
          </BentoCard>

          <BentoCard className="relative overflow-hidden border-none bg-[#d3c0ff] px-7 py-8 text-[#141118] shadow-[0_60px_140px_-80px_rgba(132,108,255,0.85)] transition-colors duration-500 dark:bg-gradient-to-br dark:from-[#b18aff] dark:via-[#8e7eff] dark:to-[#6b9dff] dark:text-white">
            <div className="pointer-events-none absolute inset-0 opacity-40">
              <Image src="/images/v0.svg" alt="Project swirl" fill sizes="(min-width: 1024px) 260px, 80vw" className="object-cover" />
            </div>
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="space-y-3">
                <p className="text-[10px] uppercase tracking-[0.55em] text-black/60 dark:text-white/70">Project</p>
                <h3 className="text-[44px] font-semibold tracking-[0.25em]">SSS</h3>
                <p className="max-w-[200px] text-sm text-black/70 dark:text-white/80">
                  Motion experiments mixing shadcn/ui components with playful micro-interactions.
                </p>
              </div>
              <div className="flex items-center justify-between text-sm font-medium">
                <span>Prototype ready</span>
                <Image src="/images/play.svg" alt="Play" width={30} height={30} />
              </div>
            </div>
          </BentoCard>

          <BentoCard className="px-7 py-7">
            <div className="flex h-full flex-col gap-5">
              <header className="flex items-center justify-between">
                <p className="text-[10px] uppercase tracking-[0.55em] text-zinc-500 dark:text-white/60">Daily vibe</p>
                <Image src="/images/elipse.svg" alt="Ellipse" width={36} height={36} className="opacity-80 dark:opacity-70" />
              </header>
              <div className="grid grid-cols-2 gap-3">
                {vibeShots.map((shot) => (
                  <div
                    key={shot.src}
                    className="relative aspect-square overflow-hidden rounded-[24px] border border-black/10 bg-white/80 shadow-[0_28px_80px_-60px_rgba(15,23,42,0.55)] dark:border-white/10 dark:bg-white/5"
                  >
                    <Image src={shot.src} alt={shot.alt} fill sizes="(min-width: 1024px) 120px, 40vw" className="object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-xs leading-5 text-zinc-600 dark:text-zinc-300">
                Anime, hip-hop and sci-fi stories feed the studio vibe on repeat.
              </p>
            </div>
          </BentoCard>
        </div>
      </BentoGrid>
    </main>
  );
}
