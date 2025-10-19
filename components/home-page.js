'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

const cardStyle = {
  WebkitTouchCallout: 'none',
  WebkitUserSelect: 'none',
  userSelect: 'none',
  touchAction: 'none',
};

const cardTransition = {
  duration: 0.6,
  ease: 'easeOut',
};

const techSections = [
  {
    title: 'Frontend:',
    items: ['React', 'Nextjs', 'Shadcn', 'SCSS', 'Tailwindcss', 'Framer-Motion', 'Recoil', 'Tanstack Query'],
  },
  {
    title: 'Backend:',
    items: ['Nodejs', 'Kotlin', 'Java', 'NPM'],
  },
  {
    title: 'Db & Services:',
    items: [
      'Cloudflare Workers',
      'Docker',
      'Appwrite',
      'Supabase',
      'Prisma ORM',
      'Postman',
      'Postgres',
      'MongoDB',
    ],
  },
  {
    title: 'Currently Learning:',
    items: ['Rust'],
  },
];

const toolIcons = [
  { src: '/images/chatgpt.svg', alt: 'ChatGPT logo', padding: 'p-2.5' },
  { src: '/images/v0.svg', alt: 'v0 logo', padding: 'p-1.5' },
  { src: '/images/dia.svg', alt: 'Diagrams logo', padding: 'p-2' },
  { src: '/images/motion.svg', alt: 'Framer Motion logo', padding: 'p-2' },
  { src: '/images/figma_logo.svg', alt: 'Figma logo', padding: 'p-2' },
  { src: '/images/jetbrains.svg', alt: 'JetBrains logo', padding: 'p-[5px]' },
];

const socialLinks = [
  {
    label: 'github',
    href: 'https://github.com/opzywl',
    icon: '/images/github.svg',
    iconClass: 'w-[80%] dark:invert',
  },
  {
    label: 'x.com',
    href: 'https://x.com/',
    icon: '/images/x.svg',
    iconClass: 'w-[80%] dark:invert p-1',
  },
  {
    label: 'gmail',
    href: 'mailto:lucas.user.xyz@gmail.com',
    icon: '/images/gmail.svg',
    iconClass: 'w-[80%]',
  },
  {
    label: 'discord',
    href: 'https://discord.com/invite/3XRFGeqEYD',
    icon: '/images/discord.svg',
    iconClass: 'w-[80%] dark:invert py-2',
  },
  {
    label: 'linkedIn',
    href: 'https://www.linkedin.com/in/lucsp-lima/',
    icon: '/images/linkdin.svg',
    iconClass: 'w-[80%] dark:invert',
  },
];

const rippleCircles = [
  { size: 230, opacity: 0.23, delay: 0, borderOpacity: 0.05, dashed: false },
  { size: 310, opacity: 0.2, delay: 0.06, borderOpacity: 0.1, dashed: false },
  { size: 390, opacity: 0.17, delay: 0.12, borderOpacity: 0.15, dashed: false },
  { size: 470, opacity: 0.14, delay: 0.18, borderOpacity: 0.2, dashed: false },
  { size: 550, opacity: 0.11, delay: 0.24, borderOpacity: 0.25, dashed: false },
  { size: 630, opacity: 0.08, delay: 0.3, borderOpacity: 0.3, dashed: false },
  { size: 710, opacity: 0.05, delay: 0.36, borderOpacity: 0.35, dashed: false },
  { size: 790, opacity: 0.02, delay: 0.42, borderOpacity: 0.4, dashed: true },
];

export function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center relative mx-auto max-w-5xl font-spaceGrotesk">
      <div className="flex items-center justify-center max-sm:flex-col sm:flex-row bg-transparent">
        <div className="grid gap-3 grid-cols-1 sm:grid-cols-8 sm:grid-rows-5 p-5 max-sm:p-4 sm:h-[770px] relative w-full max-sm:gap-3 max-sm:min-h-screen">
          <motion.div
            role="button"
            tabIndex={0}
            aria-label="Profile card"
            className="relative flex w-full rounded-xl border border-white/60 dark:border-dark-5 transform-gpu bg-white/70 [box-shadow:0_0px_60px_-20px_#1f1f2220_inset] dark:[box-shadow:3px_3px_40px_5px_#c6c6c635_inset] cursor-grab sm:col-start-3 sm:col-end-7 sm:row-start-1 sm:row-end-3 z-10 max-sm:h-max p-0.5 dark:p-1 dark:bg-dark-1/80"
            draggable={false}
            style={cardStyle}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...cardTransition, delay: 0.15 }}
          >
            <div className="w-full h-full">
              <div className="flex flex-col overflow-hidden size-full relative z-10 p-5 items-start justify-start gap-8 max-sm:h-[275px] max-sm:gap-4 text-dark-4 dark:text-white border border-white/70 dark:border-dark-3 rounded-xl bg-[#FDFDFD]/90 dark:bg-[#18181b]">
                <div className="w-full flex justify-between items-start">
                  <div className="flex gap-3">
                    <Image
                      alt="profile"
                      src="/images/profile.jpg"
                      width={400}
                      height={400}
                      className="size-16 rounded-3xl opacity-90 dark:opacity-100 [box-shadow:2px_2px_85px_0px_#ffffff]/90 dark:[box-shadow:0px_0px_65px_45px_#ffffff40]"
                      draggable={false}
                    />
                    <div>
                      <p className="font-bold text-lg">Zywl</p>
                      <p className="text-md font-mono text-zinc-500 dark:text-white/70">opzywl</p>
                    </div>
                  </div>
                  <ThemeToggle />
                </div>
                <div className="flex flex-col gap-1 overflow-hidden">
                  <div className="font-bold w-full flex items-center justify-start gap-1">
                    <p className="inline text-lg">I build</p>
                    <div className="min-w-[6.5rem] flex items-center">
                      <Image
                        alt="animated text saying webapps, backends and more"
                        src="/images/theL.gif"
                        width={120}
                        height={32}
                        priority
                        className="w-full h-auto object-contain select-none"
                      />
                    </div>
                    <p>.</p>
                  </div>
                  <div className="w-full">
                    <p className="text-sm">Hello, I’m Zywl! a 21 year old developer based in SP - Brazil.</p>
                  </div>
                </div>
                <div className="absolute bottom-5 right-5">
                  <div className="font-mono flex justify-end items-center gap-1 text-sm text-zinc-500 dark:text-white/60">
                    <div className="size-1.5 rounded-full bg-green" />
                    <p className="text-xs">Available for work</p>
                  </div>
                </div>
                <div className="absolute bottom-5 left-5 max-sm:hidden">
                  <div className="w-full">
                    <p className="text-xs font-mono text-zinc-500 dark:text-white/50">
                      “How do i center
                      <br /> a div again??"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            role="button"
            tabIndex={0}
            aria-label="Tech stack card"
            className="flex w-full rounded-xl border border-white/60 dark:border-dark-5 transform-gpu bg-white/70 cursor-grab sm:col-start-1 sm:col-end-3 sm:row-start-1 sm:row-end-5 z-[8] max-sm:h-max relative p-0.5 dark:p-1 [box-shadow:0_0px_60px_-25px_#1f1f2220_inset] dark:[box-shadow:0px_0px_40px_5px_#c6c6c635_inset] dark:bg-dark-1/80"
            draggable={false}
            style={cardStyle}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...cardTransition, delay: 0.2 }}
          >
            <div className="w-full h-full">
              <div className="flex flex-col h-full overflow-hidden justify-start w-full group text-dark-4 dark:text-white pb-2.5 border border-white/60 dark:border-dark-4 rounded-xl bg-[#FDFDFD]/90 dark:bg-[#18181b]">
                <div className="h-max">
                  <div className="flex pt-2.5">
                    <p className="text-4xl px-2.5 font-bold text-dark-4 dark:text-white">{'{'}</p>
                    <p className="text-4xl group-hover:px-2 transition-all duration-200 font-bold text-dark-4 dark:text-white">{'}'}</p>
                  </div>
                  <h1 className="text-5xl font-extrabold py-2 px-2.5 relative w-full">
                    TECH
                    <br />
                    STACK
                    <span className="absolute bottom-0 left-0 w-0 h-1 bg-dark-4 dark:bg-white rounded-full transition-all duration-500 group-hover:w-[80%] group-hover:mx-auto" />
                  </h1>
                </div>
                <div className="relative mt-2 w-full grid grid-cols-1 text-zinc-600 overflow-y-auto p-2 gap-5 dark:text-zinc-200/80">
                  {techSections.map((section) => (
                    <div key={section.title} className="flex flex-col transition-all duration-500 rounded-lg gap-1 p-1 text-md">
                      <p className="text-dark-4 dark:text-white text-sm">{section.title}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {section.items.map((item) => (
                          <div
                            key={item}
                            className="p-px text-xs font-normal border border-white/70 dark:border-dark-5/60 text-dark-4 dark:text-white line-clamp-1 overflow-hidden w-max rounded-lg size-max hover:border-dark-4/50 dark:hover:border-white/50 transition-all hover:text-dark-4 dark:hover:text-white bg-white/50 dark:bg-transparent backdrop-blur-xl backdrop-saturate-200"
                          >
                            <p className="px-2 rounded-md border border-white/60 dark:border-dark-2/65 mx-auto">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            role="button"
            tabIndex={0}
            aria-label="Tool stack card"
            className="relative flex w-full rounded-xl border border-white/60 dark:border-dark-5 transform-gpu cursor-grab sm:col-start-3 sm:col-end-7 sm:row-start-3 sm:row-end-6 bg-transparent dark:bg-transparent [box-shadow:0_0px_0px_-0px_#1f1f2220_inset] dark:[box-shadow:0_0px_0px_-0px_#ffffff1f_inset] z-[9] max-sm:h-max"
            draggable={false}
            style={cardStyle}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...cardTransition, delay: 0.25 }}
          >
            <div className="w-full h-full">
              <div className="h-full grid grid-cols-1 sm:grid-cols-5 sm:grid-rows-7 max-sm:py-2 max-sm:gap-2 !shadow-none">
                <div className="row-start-2 row-end-3 sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-8">
                  <div className="h-full p-px border w-max mx-auto rounded-3xl border-white/60 dark:border-dark-5/40 bg-transparent">
                    <div className="relative w-max border border-white/70 dark:border-dark-5/60 rounded-3xl flex flex-col items-center justify-center h-full gap-2.5 max-sm:px-3 px-2 py-2 mx-auto max-sm:flex-row flex-wrap max-sm:w-full bg-white/60 dark:bg-white/10 backdrop-blur-2xl">
                      {toolIcons.map((icon) => (
                        <div
                          key={icon.alt}
                          className="bg-white dark:bg-white aspect-square w-[3rem] max-sm:max-w-[2.75rem] p-0 rounded-2xl hover:scale-125 transition-all shadow-custom-all duration-300 ease-in-out hover:shadow-white/40 dark:hover:shadow-dark-1/20 opacity-90"
                        >
                          <Image
                            alt={icon.alt}
                            src={icon.src}
                            width={20}
                            height={20}
                            className={`w-full aspect-square ${icon.padding}`}
                            draggable={false}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="sm:col-start-2 sm:col-end-4 sm:row-start-1 sm:row-end-3">
                  <div className="flex flex-col items-start justify-center gap-0 text-dark-4 dark:text-white">
                    <h1 className="text-4xl max-sm:text-5xl font-extrabold font-mono">DAILY</h1>
                    <p className="text-3xl max-sm:text-4xl dark:font-bold">Tool</p>
                    <h1 className="text-[2.7rem] max-sm:text-7xl leading-[2.8rem] font-bold">STACK.</h1>
                  </div>
                </div>
                <div className="sm:col-start-4 sm:col-end-6 sm:row-start-1 sm:row-end-4 relative border border-white/70 dark:border-zinc-700/40 rounded-3xl max-sm:h-[400px] bg-white/70 dark:bg-transparent">
                  <div className="absolute p-2 size-full rounded-3xl flex items-center justify-center">
                    <p className="font-mono text-center text-dark-4 dark:text-white">Fetching from NASA...</p>
                  </div>
                </div>
                <div className="sm:col-start-4 sm:col-end-6 sm:row-start-4 sm:row-end-5" />
                <div className="row-start-7 sm:col-start-2 sm:col-end-4 sm:row-start-3 sm:row-end-4 relative max-sm:hidden">
                  <Image
                    alt="waves"
                    src="/images/waves.svg"
                    width={300}
                    height={300}
                    className="-inset-0 opacity-90 object-cover rounded-2xl size-[90%]"
                    draggable={false}
                  />
                </div>
                <div className="sm:col-start-2 sm:col-end-4 sm:row-start-4 sm:row-end-7 border border-white/70 dark:border-dark-5 rounded-3xl bg-transparent group relative">
                  <Image
                    alt="track"
                    src="/images/image_2.jpg"
                    width={300}
                    height={300}
                    className="aspect-square size-full object-cover rounded-3xl"
                    draggable={false}
                  />
                  <a
                    className="border border-dark-5/10 absolute size-10 bottom-3 right-3 translate-y-7 scale-50 opacity-0 group-hover:translate-y-0 group-hover:scale-100 translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all rounded-full flex items-center justify-center duration-300 max-sm:group-hover:scale-150 max-sm:bottom-7 max-sm:right-7 max-sm:translate-y-12 p-px bg-zinc-800/30 backdrop-blur-2xl backdrop-saturate-200"
                    href="https://open.spotify.com/playlist/5OFd7qBY4Ggu659JsCEI65?si=97f1ee423d514851"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="border p-2.5 rounded-full border-white/70 dark:border-dark-5/30 bg-white/80 dark:bg-transparent">
                      <Image alt="play" src="/images/play.svg" width={30} height={30} className="size-full aspect-square" draggable={false} />
                    </div>
                  </a>
                </div>
                <div className="sm:col-start-2 sm:col-end-4 sm:row-start-7 sm:row-end-8 p-1">
                  <a
                    className="font-bold text-lg font-glancyr leading-6 text-dark-4 dark:text-white"
                    href="https://open.spotify.com/playlist/5OFd7qBY4Ggu659JsCEI65?si=97f1ee423d514851"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ghost Town
                  </a>
                  <div className="flex justify-between text-xs text-zinc-600 dark:text-zinc-400 pointer-events-none">
                    <p>By: Kanye West</p>
                    <p className="font-mono">2016</p>
                  </div>
                </div>
                <div className="sm:col-start-4 sm:col-end-6 sm:row-start-5 sm:row-end-8 relative flex flex-col-reverse items-center bg-transparent justify-start p-1">
                  <Image
                    alt="naruto"
                    src="/images/naruto631.jpg"
                    width={631}
                    height={631}
                    className="object-cover rounded-2xl size-[80%] max-sm:size-full"
                    draggable={false}
                  />
                  <p className="text-wrap text-center text-sm max-sm:text-lg font-mono font-semibold max-sm:font-bold text-zinc-600 dark:text-zinc-300">
                    “I’m gonna be Hokage one day.”
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            role="button"
            tabIndex={0}
            aria-label="Social links"
            className="relative flex rounded-xl border border-white/60 dark:border-dark-5 transform-gpu cursor-grab row-start-2 sm:col-start-7 sm:col-end-9 sm:row-start-1 sm:row-end-2 w-full sm:h-max sm:mt-auto sm:mr-auto bg-transparent [box-shadow:0_0px_0px_-0px_#1f1f2220_inset] dark:[box-shadow:0_0px_0px_-0px_#ffffff1f_inset] z-[7] max-sm:h-max"
            draggable={false}
            style={cardStyle}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...cardTransition, delay: 0.3 }}
          >
            <div className="w-full h-full">
              <div className="relative h-full p-0.5 gap-0.5 flex flex-col max-sm:flex-row max-sm:justify-center justify-between mr-auto bg-transparent">
                <ul className="flex w-max justify-center gap-0.5 items-center h-1/2">
                  <li className="m-0 flex items-center justify-center p-2 max-lg:size-[3.4rem] lg:size-[3.8rem] max-sm:text-[1.7rem] lg:text-[2.2rem] max-lg:text-[1.7rem] font-bold leading-7 lg:leading-8 max-sm:hidden text-dark-4 dark:text-white">
                    <h2>
                      LIN
                      <br />
                      KS.
                    </h2>
                  </li>
                  {socialLinks.slice(0, 2).map((link) => (
                    <li key={link.label} className="group">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="border border-white/70 dark:border-dark-4 rounded-2xl flex items-center justify-center p-0.5 max-lg:size-[3.4rem] lg:size-[3.8rem] max-sm:size-[3.2rem] bg-white/60 dark:bg-transparent"
                        href={link.href}
                      >
                        <div className="border border-white/70 dark:border-dark-3 size-full flex items-center justify-center p-2 rounded-xl bg-white dark:bg-[#fdfdfd]">
                          <Image alt={`${link.label} logo`} src={link.icon} width={20} height={20} className={link.iconClass} draggable={false} />
                        </div>
                      </a>
                      <div className="absolute w-16 left-0 -top-6 origin-right flex max-sm:group-hover:hidden opacity-0 translate-y-5 group-hover:translate-y-0 group-hover:opacity-100 items-center justify-center bg-white text-dark-4 dark:bg-dark-4 dark:text-white transition-all duration-500 ease-in-out font-bold rounded-md text-sm whitespace-nowrap z-50">
                        {link.label}
                      </div>
                    </li>
                  ))}
                </ul>
                <ul className="flex w-max justify-center gap-0.5 items-center h-1/2">
                  {socialLinks.slice(2).map((link) => (
                    <li key={link.label} className="group">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="border border-white/70 dark:border-dark-4 rounded-2xl flex items-center justify-center p-0.5 max-lg:size-[3.4rem] lg:size-[3.8rem] max-sm:size-[3.2rem] bg-white/60 dark:bg-transparent"
                        href={link.href}
                      >
                        <div className="border border-white/70 dark:border-dark-3 size-full flex items-center justify-center p-2 rounded-xl bg-white dark:bg-[#fdfdfd]">
                          <Image alt={`${link.label} logo`} src={link.icon} width={20} height={20} className={link.iconClass} draggable={false} />
                        </div>
                      </a>
                      <div className="absolute w-16 left-0 -top-6 origin-right flex max-sm:group-hover:hidden opacity-0 translate-y-5 group-hover:translate-y-0 group-hover:opacity-100 items-center justify-center bg-white text-dark-4 dark:bg-dark-4 dark:text-white transition-all duration-500 ease-in-out font-bold rounded-md text-sm whitespace-nowrap z-50">
                        {link.label}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            role="button"
            tabIndex={0}
            aria-label="Projects CTA"
            className="flex w-full rounded-xl border border-white/70 dark:border-dark-5 transform-gpu [box-shadow:0_0px_60px_-20px_#1f1f2220_inset] dark:[box-shadow:3px_3px_40px_5px_#c6c6c635_inset] cursor-grab row-start-4 sm:col-start-7 sm:col-end-9 sm:row-start-2 sm:row-end-4 p-0 dark:p-1 bg-purple-500/90 dark:bg-white/10 relative hover:scale-125 z-[8] max-sm:h-max mx-auto overflow-hidden"
            draggable={false}
            style={cardStyle}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...cardTransition, delay: 0.35 }}
          >
            <div className="w-full h-full">
              <Link href="/projects" className="flex flex-col justify-start items-start relative group w-full h-full p-2 max-sm:p-5 max-sm:bg-transparent rounded-lg max-sm:h-[350px] overflow-hidden bg-blue-100/60 dark:bg-blue-500/70">
                <div className="absolute inset-0 bg-transparent">
                  {rippleCircles.map((circle, index) => (
                    <div
                      key={circle.size}
                      className="absolute animate-ripple rounded-full bg-white dark:bg-zinc-100/80 shadow-xl border"
                      style={{
                        '--i': index,
                        width: `${circle.size}px`,
                        height: `${circle.size}px`,
                        opacity: circle.opacity,
                        animationDelay: `${circle.delay}s`,
                        borderStyle: circle.dashed ? 'dashed' : 'solid',
                        borderWidth: '1px',
                        borderColor: `rgba(23, 23, 23, ${circle.borderOpacity})`,
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%) scale(1)',
                      }}
                    />
                  ))}
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-cog size-12 max-sm:size-20 lg:size-14 my-2 animate-spin-slow text-dark-4 stroke-[2.5]"
                >
                  <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
                  <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                  <path d="M12 2v2" />
                  <path d="M12 22v-2" />
                  <path d="m17 20.66-1-1.73" />
                  <path d="M11 10.27 7 3.34" />
                  <path d="m20.66 17-1.73-1" />
                  <path d="m3.34 7 1.73 1" />
                  <path d="M14 12h8" />
                  <path d="M2 12h2" />
                  <path d="m20.66 7-1.73 1" />
                  <path d="m3.34 17 1.73-1" />
                  <path d="m17 3.34-1 1.73" />
                  <path d="m11 13.73-4 6.93" />
                </svg>
                <h2 className="sm:text-[1.9rem] max-sm:text-6xl overflow-hidden lg:text-[2.2rem] leading-7 lg:leading-10 font-bold w-full text-wrap font-glancyr700 text-dark-4 dark:text-dark-1 z-20">
                  PROJECT
                  <br />
                  SSS
                </h2>
                <div className="flex flex-col absolute bottom-4 right-4 text-xl leading-snug text-dark-4 dark:text-dark-1">
                  <p className="font-extrabold">工</p>
                  <p className="font-extrabold">芸</p>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="sm:hidden w-full">
        <div className="border-t flex items-center justify-end w-[80%] mx-auto border-[#fdfdfd]/10 dark:border-dark-3/20 px-3 py-2 pb-3 sm:hidden">
          <p className="text-dark-4 dark:text-white font-bold">peace out.</p>
        </div>
      </div>
      <div className="absolute inset-0 size-full overflow-hidden dark:hidden">
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 sm:fill-zinc-600/30 sm:stroke-dark-1/40 stroke-black/10 dark:sm:stroke-zinc-300 dark:stroke-zinc-300 [mask-image:radial-gradient(800px_circle_at_center,white,transparent)] w-full inset-x-0 inset-y-[-0%] h-[105%] max-sm:h-[90%] skew-y-12"
        >
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse" x="-1" y="-1">
              <path d="M.5 40V.5H40" fill="none" strokeDasharray="10" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>
      <div className="h-[180dvh] lg:h-[100dvh] p-4 max-w-[1920px] mx-auto w-full items-center justify-center overflow-hidden absolute top-0 inset-0 size-full -z-10 flex dark:hidden">
        <Image
          alt="elipse"
          src="/images/elipse.svg"
          width={1080}
          height={1080}
          className="absolute inset-0 size-full object-cover opacity-90 lg:object-fill z-0"
          draggable={false}
        />
        <Image
          alt="big cloud"
          src="/images/bigCloud.png"
          width={1495}
          height={521}
          className="w-full -bottom-0 h-[350px] lg:h-[550px] lg:-bottom-[180px] absolute object-cover lg:object-contain"
          draggable={false}
        />
        <Image
          alt="cloud crop"
          src="/images/cloud688.png"
          width={688}
          height={721}
          className="w-[60%] lg:w-[687px] -left-0 top-[20%] lg:top-12 absolute object-contain"
          draggable={false}
        />
        <Image
          alt="cloud"
          src="/images/cloud.png"
          width={498}
          height={246}
          className="w-[497px] max-sm:-left-20 lg:-right-0 top-[800px] lg:top-20 absolute object-contain z-50"
          draggable={false}
        />
        <Image
          alt="cloud"
          src="/images/cloud.png"
          width={498}
          height={246}
          className="w-[497px] left-16 top-[150px] z-50 lg:top-0 absolute object-contain"
          draggable={false}
        />
        <div
          className="absolute opacity-100 top-1/2 left-[54%] -translate-x-1/2 -translate-y-1/2 z-30 w-full max-w-[1000px] h-[110px] lg:h-[700px] dark:bg-white/95"
          style={{ borderRadius: '100%', mixBlendMode: 'plus-lighter', filter: 'blur(180px)', position: 'absolute' }}
        />
      </div>
    </main>
  );
}
