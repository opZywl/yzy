import Image from "next/image";
import Link from "next/link";

import { DailyToolStack } from "@/components/daily-tool-stack";
import { LiveClock } from "@/components/live-clock";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const stack = {
  frontend: ["Framer-Motion", "Recoil", "Tanstack Query"],
  backend: ["Nodejs", "Honojs", "Expressjs", "NPM"],
  services: [
    "Cloudflare Workers",
    "Docker",
    "Appwrite",
    "Supabase",
    "Prisma ORM",
    "Postman",
    "Postgres",
    "MongoDB",
  ],
  learning: ["Rust"],
};

const tools = [
  { name: "VS Code", icon: "/images/vscode.png" },
  { name: "Figma", icon: "/images/figma_logo.svg" },
  { name: "Framer", icon: "/images/motion.svg" },
  { name: "V0", icon: "/images/v0.svg" },
  { name: "Discord", icon: "/images/discord.svg" },
  { name: "ChatGPT", icon: "/images/chatgpt.svg" },
];

const links = [
  { name: "GitHub", href: "https://github.com/opzywl", icon: "/images/github.svg" },
  { name: "X", href: "https://x.com/opzywl", icon: "/images/x.svg" },
  { name: "Gmail", href: "mailto:contact@zywl.dev", icon: "/images/gmail.svg" },
  { name: "LinkedIn", href: "https://linkedin.com", icon: "/images/linkdin.svg" },
];

const techPill =
  "rounded-full border border-white/10 bg-[#111115] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/70 shadow-[0_30px_80px_-65px_rgba(0,0,0,0.65)]";
const cardBase =
  "relative rounded-[36px] border border-white/10 bg-[#0d0d11]/95 p-9 text-white shadow-[0_80px_160px_-90px_rgba(0,0,0,0.9)]";

export default function Page() {
  return (
    <main className="min-h-screen w-full bg-[#050506] px-6 py-16 sm:px-12">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-12">
        <div className="grid gap-8 lg:grid-cols-[320px,minmax(0,420px),260px]">
          <section className={cn(cardBase, "flex flex-col gap-10")}> 
            <header className="space-y-5">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-[#151519] text-sm font-semibold text-white/70">
                {"{}"}
              </span>
              <h2 className="text-[48px] font-semibold uppercase leading-none tracking-[0.28em] text-white">
                TECH
                <br />
                STACK
              </h2>
            </header>

            <div className="space-y-6 text-[12px] uppercase tracking-[0.35em] text-white/50">
              <div className="space-y-3">
                <p>Tech stack</p>
                <div className="flex flex-wrap gap-2.5">
                  {stack.frontend.map((item) => (
                    <span key={item} className={techPill}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <p>Backend</p>
                <div className="flex flex-wrap gap-2.5">
                  {stack.backend.map((item) => (
                    <span key={item} className={techPill}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <p>Db &amp; Services</p>
                <div className="flex flex-wrap gap-2.5">
                  {stack.services.map((item) => (
                    <span key={item} className={techPill}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <p>Currently learning</p>
                <div className="flex flex-wrap gap-2.5">
                  {stack.learning.map((item) => (
                    <span key={item} className={techPill}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <div className="flex flex-col gap-8">
            <section className={cn(cardBase, "flex flex-col gap-8 bg-[#0f0f13]/95")}> 
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-5">
                  <div className="relative h-20 w-20 overflow-hidden rounded-[26px] border border-white/10">
                    <Image src="/images/profile.jpg" alt="Zywl" fill sizes="80px" className="object-cover" priority />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] uppercase tracking-[0.45em] text-white/40">opzywl</span>
                    <h3 className="text-[32px] font-semibold tracking-[0.08em] text-white">Zywl</h3>
                    <p className="text-[12px] uppercase tracking-[0.6em] text-white/35">I build WebApps .</p>
                  </div>
                </div>
                <span className="text-xl text-white/40">夜</span>
              </div>

              <div className="space-y-4 text-[15px] leading-7 text-white/70">
                <p>Hello, I&rsquo;m Zywl. a 21 year old developer based in SP - Brazil.</p>
                <p>Focused on motion-first experiences inside Next.js + Typescript + React.</p>
              </div>

              <div className="space-y-4 rounded-[28px] border border-white/10 bg-[#13131a] p-5 text-[13px] leading-relaxed text-white/60">
                <p className="italic">&ldquo;How do i center a div again??&rdquo;</p>
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.4em]">
                  <div className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span>Available for work</span>
                  </div>
                  <span>28/09/2025, 15:47:24</span>
                </div>
              </div>
            </section>

            <section className={cn(cardBase, "bg-[#0f0f13]/95 p-7")}> 
              <DailyToolStack tools={tools} />
            </section>
          </div>

          <div className="flex flex-col gap-8">
            <section className={cn(cardBase, "flex flex-col gap-6 bg-[#0f0f13]/95 p-7")}> 
              <header className="flex items-start justify-between">
                <div className="space-y-1">
                  <p className="text-[11px] uppercase tracking-[0.5em] text-white/40">Quick links</p>
                  <h4 className="text-[36px] font-semibold tracking-[0.25em] text-white">LINKS.</h4>
                </div>
                <div className="flex gap-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/30">
                  <span className="flex h-8 w-8 items-center justify-center rounded-2xl border border-white/10">X</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-2xl border border-white/10">O</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-2xl border border-white/10">.</span>
                </div>
              </header>
              <div className="grid grid-cols-2 gap-3">
                {links.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-[72px] items-center justify-center rounded-[22px] border border-white/10 bg-[#14141b] transition-transform duration-200 hover:-translate-y-1"
                  >
                    <Image src={item.icon} alt={item.name} width={28} height={28} />
                  </Link>
                ))}
              </div>
            </section>

            <section className={cn(cardBase, "flex h-full flex-col justify-between overflow-hidden bg-gradient-to-br from-[#b987ff] via-[#a26bff] to-[#845cff] p-8 text-[#1d1426]")}> 
              <div className="space-y-3">
                <p className="text-[11px] uppercase tracking-[0.5em] text-black/40">Project</p>
                <div className="flex items-center gap-3 text-black/80">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-9 w-9"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  >
                    <path
                      d="M12 2v5m0 10v5m-4-4h8m-8-12h8m1-2h2a2 2 0 0 1 2 2v3m0 6v3a2 2 0 0 1-2 2h-2m-10 0H5a2 2 0 0 1-2-2v-3m0-6V7a2 2 0 0 1 2-2h2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h5 className="text-[32px] font-semibold tracking-[0.2em]">PROJECT SSS</h5>
                </div>
                <p className="max-w-[180px] text-[13px] leading-6 text-black/65">
                  工芸 — Experimentos com motion e UI frameworks.
                </p>
              </div>
              <div className="flex items-center justify-between text-[13px] font-medium text-black/70">
                <span>view case</span>
                <Image src="/images/play.svg" alt="Abrir" width={34} height={34} />
              </div>
            </section>
          </div>
        </div>

        <footer className="flex items-center justify-between rounded-[28px] border border-white/10 bg-[#08080b] px-8 py-5 text-[11px] uppercase tracking-[0.45em] text-white/40">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[#0f0f13]/90 text-xs text-white/50">
              <span className="h-1 w-8 rounded-full bg-white/20" />
            </span>
            <span>Tech Stack Dashboard</span>
          </div>
          <div className="flex items-center gap-5 text-white/50">
            <LiveClock />
            <ThemeToggle className="h-12 w-12 rounded-2xl border border-white/10 bg-[#111117] text-white" />
          </div>
        </footer>
      </div>
    </main>
  );
}
