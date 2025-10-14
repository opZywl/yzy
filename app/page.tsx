import Image from "next/image";
import Link from "next/link";

import { BentoCard, BentoGrid } from "@/components/bento-grid";
import { LiveClock } from "@/components/live-clock";
import { NasaCard } from "@/components/nasa-card";
import { TextMorph } from "@/components/text-morph";
import { ThemeToggle } from "@/components/theme-toggle";

const heroTexts = [
  "I build WebApps.",
  "Hello, I'm a full-stack developer based on TypeScript stack.",
  "Design first. Motion always.",
];

const techStack = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind", "Shadcn UI"],
  backend: ["Node.js", "tRPC", "Prisma", "PlanetScale"],
  services: ["Supabase", "Vercel", "Clerk", "Resend"],
  learning: ["Three.js", "Motion Graphics"],
};

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

const featuredProjects = [
  {
    title: "Project SSS",
    description: "Framer Motion experiments and shadcn/ui components.",
    cover: "/images/v0.svg",
    badge: "/images/play.svg",
  },
  {
    title: "V0 playground",
    description: "Rapid prototyping with V0 and Tailwind CSS.",
    cover: "/images/favicon.png",
    badge: "/images/favicon.ico",
  },
];

const vibeBoard = [
  { src: "/images/ye.jpg", alt: "Kanye" },
  { src: "/images/shawn.png", alt: "Shawn" },
  { src: "/images/image_2.jpg", alt: "Mountains" },
  { src: "/images/naruto631.jpg", alt: "Naruto" },
  { src: "/images/naruto24.jpg", alt: "Naruto 24" },
  { src: "/images/theL.gif", alt: "L" },
];

export default function Page() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-6 px-6 py-10">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-zinc-500">
          <span>{"{}"}</span>
          <span>Portfolio Bento</span>
        </div>
        <div className="flex items-center gap-4">
          <LiveClock />
          <ThemeToggle />
        </div>
      </header>

      <BentoGrid className="auto-rows-[14rem]">
        <BentoCard className="col-span-1 row-span-2 bg-dark-2/60">
          <div className="flex h-full flex-col justify-between">
            <div className="flex items-center gap-3">
              <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-white/10">
                <Image src="/images/profile.jpg" alt="profile" fill className="object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-light text-zinc-400">@zygyxl</span>
                <span className="text-lg font-semibold text-white">Zygyl</span>
              </div>
            </div>
            <TextMorph texts={heroTexts} />
            <div className="flex flex-wrap gap-2 text-[11px] text-zinc-400">
              <span className="rounded-full border border-white/10 px-3 py-1 font-mono uppercase tracking-wide">
                based in SP
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1 font-mono uppercase tracking-wide">
                available for freelance
              </span>
            </div>
          </div>
        </BentoCard>

        <BentoCard className="col-span-1 row-span-3 bg-dark-2/70">
          <div className="flex h-full flex-col gap-4">
            <h2 className="font-mono text-sm uppercase tracking-[0.4em] text-zinc-400">Tech Stack</h2>
            <section className="flex flex-1 flex-col justify-between gap-4">
              <div>
                <p className="text-xs uppercase text-zinc-500">Frontend</p>
                <ul className="mt-2 space-y-1 text-sm text-white/90">
                  {techStack.frontend.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Image src="/images/vscode32.png" alt="item" width={16} height={16} className="opacity-60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase text-zinc-500">Backend</p>
                <ul className="mt-2 space-y-1 text-sm text-white/90">
                  {techStack.backend.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Image src="/images/jetbrains.svg" alt="item" width={18} height={18} className="opacity-60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase text-zinc-500">DB & Services</p>
                <ul className="mt-2 space-y-1 text-sm text-white/90">
                  {techStack.services.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Image src="/images/chatgpt.svg" alt="item" width={16} height={16} className="opacity-60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase text-zinc-500">Currently Learning</p>
                <ul className="mt-2 space-y-1 text-sm text-white/90">
                  {techStack.learning.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Image src="/images/motion.svg" alt="item" width={16} height={16} className="opacity-60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </BentoCard>

        <BentoCard className="col-span-1 row-span-2 bg-dark-2/70">
          <div className="flex h-full flex-col gap-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.4em] text-zinc-400">
              Daily Tool Stack
            </h2>
            <div className="grid flex-1 grid-cols-3 gap-3">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-3 text-center text-xs backdrop-blur"
                >
                  <div className="relative h-10 w-10">
                    <Image src={tool.icon} alt={tool.name} fill className="object-contain" />
                  </div>
                  <span className="text-[11px] text-zinc-300">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </BentoCard>

        <BentoCard className="col-span-1 row-span-3 bg-dark-2/70">
          <NasaCard />
        </BentoCard>

        <BentoCard className="col-span-1 row-span-1 bg-gradient-to-br from-purple-600/60 via-purple-400/40 to-pink-400/40">
          <div className="flex h-full flex-col justify-between">
            <header className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-white/70">
              <span>Links</span>
              <Image src="/images/dia.svg" alt="dia" width={28} height={28} />
            </header>
            <div className="flex flex-wrap gap-3">
              {socials.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-black/40 p-2 transition hover:border-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={social.icon} alt={social.name} width={28} height={28} className="object-contain" />
                </Link>
              ))}
            </div>
          </div>
        </BentoCard>

        <BentoCard className="col-span-1 row-span-2 bg-dark-2/80">
          <div className="flex h-full flex-col gap-6">
            <header className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-zinc-400">
              <span>Projects</span>
              <Image src="/images/v0.svg" alt="v0" width={32} height={32} />
            </header>
            <div className="space-y-4">
              {featuredProjects.map((project) => {
                const isIcon = project.badge.endsWith(".ico");

                return (
                  <div key={project.title} className="flex items-center gap-3">
                    <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-white/10">
                      <Image src={project.cover} alt={project.title} fill className="object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col text-sm">
                      <span className="font-semibold text-white">{project.title}</span>
                      <span className="text-xs text-zinc-400">{project.description}</span>
                    </div>
                    <Image
                      src={project.badge}
                      alt="badge"
                      width={18}
                      height={18}
                      className="opacity-80"
                      unoptimized={isIcon}
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <div className="text-xs text-zinc-300">Explore prototypes crafted with Vercel & Vite.</div>
              <Image src="/images/play.svg" alt="play" width={24} height={24} />
            </div>
          </div>
        </BentoCard>

        <BentoCard className="col-span-1 row-span-2 bg-black/50">
          <div className="flex h-full flex-col gap-3">
            <h2 className="text-sm font-semibold uppercase tracking-[0.4em] text-zinc-400">Visual Vibes</h2>
            <div className="grid flex-1 grid-cols-3 gap-2">
              {vibeBoard.map((item) => (
                <div key={item.src} className="relative h-20 w-full overflow-hidden rounded-xl">
                  <Image src={item.src} alt={item.alt} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </BentoCard>

        <BentoCard className="col-span-1 row-span-1 bg-gradient-to-br from-cyan-500/30 via-sky-500/10 to-blue-600/30">
          <div className="relative flex h-full items-center justify-between overflow-hidden">
            <div className="flex flex-col gap-2">
              <p className="text-xs uppercase tracking-[0.4em] text-white/70">Cloud sketches</p>
              <p className="text-sm text-white/90">Motion studies &amp; weather moods.</p>
            </div>
            <div className="relative flex h-full w-32 items-center justify-center">
              <Image src="/images/cloud688.png" alt="cloud" fill className="object-contain opacity-70" />
            </div>
            <Image src="/images/cloud.png" alt="cloud" width={64} height={64} className="absolute -left-6 top-6 opacity-60" />
            <Image src="/images/bigCloud.png" alt="cloud" width={120} height={120} className="absolute -bottom-6 right-4 opacity-50" />
            <Image src="/images/waves.svg" alt="waves" width={180} height={80} className="absolute inset-x-0 bottom-1 opacity-30" />
          </div>
        </BentoCard>

        <BentoCard className="col-span-1 row-span-1 bg-dark-2/70">
          <div className="flex h-full items-center justify-between">
            <div className="space-y-1 text-xs text-zinc-300">
              <p>Inspired by anime, lo-fi, and sci-fi storytelling.</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-zinc-500">studio yzy</p>
            </div>
            <div className="relative h-16 w-16">
              <Image src="/images/elipse.svg" alt="ellipse" fill className="object-contain" />
              <Image src="/images/favicon.png" alt="fav" width={24} height={24} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>
        </BentoCard>
      </BentoGrid>
    </main>
  );
}
