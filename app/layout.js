import './globals.css';
import localFont from 'next/font/local';
import clsx from 'clsx';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeScript } from '@/components/theme-script';

const glancyr = localFont({
  src: [
    {
      path: '../public/fonts/7c24ce527c29dc4f-s.p.ttf',
      weight: '100 900',
      style: 'normal',
    },
  ],
  variable: '--font-glancyr',
  display: 'swap',
});

const glancyr700 = localFont({
  src: [
    {
      path: '../public/fonts/64bc8e5a2090c960-s.p.ttf',
      weight: '100 900',
      style: 'normal',
    },
  ],
  variable: '--font-glancyr700',
  display: 'swap',
});

const spaceGrotesk = localFont({
  src: [
    { path: '../public/fonts/e1aab0933260df4d-s.woff2', weight: '300', style: 'normal' },
    { path: '../public/fonts/b7387a63dd068245-s.woff2', weight: '500', style: 'normal' },
    { path: '../public/fonts/7cba1811e3c25a15-s.p.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-spaceGrotesk',
  display: 'swap',
});

export const metadata = {
  title: 'Zywl',
  description: 'I dont even know man',
  authors: [{ name: 'Zywl' }],
  creator: 'Zywl',
  publisher: 'Zywl',
  keywords: [
    'portfolio',
    'portfolio website',
    'minimal portfolio',
    'animated portfolio',
    'sexy portfolio design',
    'Framer Motion portfolio',
    'minimalist web portfolio',
    'animated portfolio website',
    'modern web design portfolio',
    'clean and minimal portfolio',
    'smooth animations portfolio',
    'portfolio with animations',
    'minimal design portfolio',
    'modern portfolio website',
    'Framer Motion animations',
    'elegant portfolio design',
    'interactive portfolio website',
    'minimal interactive portfolio',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  category: 'Creative Portfolio',
  alternates: {
    canonical: 'https://lucas-lima.vercel-app',
  },
  openGraph: {
    type: 'website',
    title: 'Zywl',
    description: 'I dont even know man',
    url: 'https://lucas-lima.vercel-app',
    locale: 'en_US',
    images: [
      {
        url: '/images/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Zywl',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@lucsp.lima',
    creator: '@lucsp.lima',
    title: 'Zywl',
    description: 'I dont even know man',
    images: ['/images/x.svg'],
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/images/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/images/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body
        className={clsx(
          spaceGrotesk.variable,
          glancyr.variable,
          glancyr700.variable,
          'bg-dark-1 dark:bg-white font-spaceGrotesk'
        )}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
