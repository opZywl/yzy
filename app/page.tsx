import Image from "next/image";
import Link from "next/link";

import { DailyToolStack } from "@/components/daily-tool-stack";
import { LiveClock } from "@/components/live-clock";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const stack = [
  {
    label: "Frontend",
    items: ["Framer-motion", "React", "Tailwind", "GSAP"],
  },
  {
    label: "Backend",
    items: ["Nodejs", "Expressjs", "NPM"],
  },
  {
    label: "Db & Services",
    items: [
      "Cloudflare Workers",
      "Docker",
      "Appwrite",
      "Supabase",
      "Prisma ORM",
      "Postman",
      "Postgres",
      "MongoDB",
    ],
  },
  {
    label: "Currently learning",
    items: ["Rust"],
  },
];

const tools = [
  { name: "VS Code", icon: "/images/vscode.png" },
  { name: "Figma", icon: "/images/figma_logo.svg" },
  { name: "Framer", icon: "/images/motion.svg" },
  { name: "JetBrains", icon: "/images/jetbrains.svg" },
  { name: "Discord", icon: "/images/discord.svg" },
  { name: "ChatGPT", icon: "/images/chatgpt.svg" },
];

const links = [
  {
    name: "GitHub",
    href: "https://github.com/opzywl",
    icon: "/images/github.svg",
    handle: "@opzywl",
  },
  {
    name: "X",
    href: "https://x.com/opzywl",
    icon: "/images/x.svg",
    handle: "@opzywl",
  },
  {
    name: "Gmail",
    href: "mailto:contact@zywl.dev",
    icon: "/images/gmail.svg",
    handle: "contact@zywl.dev",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: "/images/linkdin.svg",
    handle: "zywl",
  },
];

const cardBase =
  "relative rounded-[44px] border border-white/10 bg-[#08080b]/95 p-10 text-white shadow-[0_70px_200px_-120px_rgba(0,0,0,0.95)]";

export default function Page() {
  return (
    <main className="min-h-screen w-full bg-[#050506] px-6 py-14 sm:px-12">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-12">
        <div className="grid gap-8 lg:grid-cols-[340px,minmax(0,460px),280px] xl:gap-10">
          <section className={cn(cardBase, "flex h-full flex-col gap-10 bg-[#09090d]/95")}> 
            <header className="space-y-6">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl border border-white/10 bg-[#111118] text-base font-semibold tracking-[0.4em] text-white/70">
                {"{}"}
              </span>
              <h2 className="text-[56px] font-semibold uppercase leading-[0.9] tracking-[0.32em] text-white">
                TECH
                <br />
                STACK
              </h2>
            </header>

            <div className="flex flex-col gap-6 text-white/50">
              {stack.map((section, index) => (
                <div
                  key={section.label}
                  className={cn(
                    "space-y-4",
                    index !== 0 && "border-t border-white/10 pt-6"
                  )}
                >
                  <p className="text-[12px] uppercase tracking-[0.5em] text-white/35">{section.label}</p>
                  <ul className="grid gap-2 text-[16px] font-medium tracking-[0.08em] text-white/85">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
                        <span className="uppercase tracking-[0.22em] text-white/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <div className="flex flex-col gap-8">
            <section className={cn(cardBase, "flex flex-col gap-8 bg-[#0b0b11]/95")}> 
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-6">
                  <div className="relative h-24 w-24 overflow-hidden rounded-[32px] border border-white/10">
                    <Image src="/images/profile.jpg" alt="Zywl" fill sizes="96px" className="object-cover" priority />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[11px] uppercase tracking-[0.55em] text-white/35">@opzywl</span>
                    <h3 className="text-[38px] font-semibold tracking-[0.18em] text-white">Zywl</h3>
                    <p className="text-[11px] uppercase tracking-[0.5em] text-white/30">I build Webapps.</p>
                  </div>
                </div>
                <ThemeToggle className="h-12 w-12 rounded-3xl border border-white/10 bg-[#111118]/90 text-white" />
              </div>

              <div className="space-y-4 text-[15px] leading-7 text-white/70">
                <p>Hello, I&rsquo;m Zywl. a 21 year old developer based in SP - Brazil.</p>
                <p>Focused on motion-first experiences inside Next.js + Typescript + React.</p>
              </div>

              <div className="space-y-5 rounded-[32px] border border-white/10 bg-[#101017] p-6 text-[13px] leading-relaxed text-white/65">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.5em] text-white/40">
                  <span>Focus</span>
                  <span>Remote</span>
                </div>
                <p>Motion-first interfaces with immersive detail and precise micro interactions.</p>
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.4em] text-white/40">
                  <div className="flex items-center gap-3 text-white/50">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span>Available for work</span>
                  </div>
                  <span>São Paulo — BR</span>
                </div>
              </div>
            </section>

            <section className={cn(cardBase, "bg-[#0b0b11]/95 p-8")}> 
              <DailyToolStack tools={tools} />
            </section>
          </div>

          <div className="flex flex-col gap-8">
            <section className={cn(cardBase, "flex flex-col gap-6 bg-[#0b0b11]/95 p-8")}> 
              <header className="flex items-start justify-between">
                <div className="space-y-1">
                  <p className="text-[11px] uppercase tracking-[0.5em] text-white/35">Quick links</p>
                  <h4 className="text-[40px] font-semibold uppercase tracking-[0.26em] text-white">LINKS.</h4>
                </div>
                <div className="flex gap-2 text-xs font-semibold uppercase tracking-[0.5em] text-white/30">
                  <span className="flex h-8 w-8 items-center justify-center rounded-2xl border border-white/10">X</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-2xl border border-white/10">O</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-2xl border border-white/10">.</span>
                </div>
              </header>
              <ul className="space-y-3">
                {links.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-[26px] border border-white/10 bg-[#12121a] px-4 py-4 transition duration-200 hover:border-white/20"
                    >
                      <div className="flex items-center gap-4">
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#14141c]">
                          <Image src={item.icon} alt={item.name} width={28} height={28} />
                        </span>
                        <div className="space-y-1 text-left">
                          <p className="text-[13px] uppercase tracking-[0.35em] text-white/40">{item.name}</p>
                          <p className="text-[15px] font-medium uppercase tracking-[0.18em] text-white/80">{item.handle}</p>
                        </div>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="h-6 w-6 text-white/30"
                      >
                        <path d="M7 17 17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section
              className={cn(
                cardBase,
                "flex h-full flex-col justify-between overflow-hidden bg-[#cdaaff] p-9 text-[#1b1027]"
              )}
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/20 blur-3xl" />
              <Image
                src="/images/elipse.svg"
                alt=""
                width={260}
                height={260}
                className="pointer-events-none absolute -right-6 top-16 opacity-60"
              />
              <div className="space-y-4">
                <p className="text-[11px] uppercase tracking-[0.5em] text-black/40">Project</p>
                <div className="flex items-center gap-3 text-black/70">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-10 w-10"
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
                  <h5 className="text-[36px] font-semibold tracking-[0.22em]">PROJECT SSS</h5>
                </div>
                <p className="max-w-[200px] text-[14px] leading-6 text-black/60">
                  工芸 — Experimentos com motion e UI frameworks.
                </p>
              </div>
              <div className="flex items-center justify-between text-[13px] font-semibold uppercase tracking-[0.4em] text-black/70">
                <span>View case</span>
                <Image src="/images/play.svg" alt="Abrir" width={38} height={38} />
              </div>
            </section>
          </div>
        </div>

        <footer className="flex items-center justify-between rounded-[32px] border border-white/10 bg-[#07070b] px-9 py-6 text-[11px] uppercase tracking-[0.45em] text-white/45">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-16 items-center justify-center rounded-2xl border border-white/10 bg-[#0f0f14]/90 text-xs text-white/50">
              <span className="h-1 w-8 rounded-full bg-white/20" />
            </span>
            <span>Tech Stack Dashboard</span>
          </div>
          <LiveClock />
        </footer>
      </div>
    </main>
  );
}