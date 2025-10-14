import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const zygyGrotesk = localFont({
  src: [
    { path: "../public/fonts/7cba1811e3c25a15-s.p.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/b7387a63dd068245-s.woff2", weight: "600", style: "normal" }
  ],
  variable: "--font-sans",
  display: "swap",
});

const jetBrains = localFont({
  src: [
    { path: "../public/fonts/e1aab0933260df4d-s.woff2", weight: "400", style: "normal" }
  ],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "yzy portfolio",
  description: "Recriacao do portfolio de Zygyl com Next.js e shadcn/ui.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${zygyGrotesk.variable} ${jetBrains.variable} font-sans bg-background text-foreground`}>
        <ThemeProvider>
          <div className="min-h-screen bg-gradient-to-br from-black via-dark-1 to-black">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
