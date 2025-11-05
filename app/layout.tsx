import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Wings 1 T9 MCQ Library",
  description:
    "Browse Wings 1 T9 MCQ PDFs with explanations for Terraform, Ansible, Chef, Puppet, Linux, Git, CI/CD, Docker, and Kubernetes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetBrainsMono.variable} antialiased bg-slate-950 text-slate-100`}
      >
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
              <Link
                href="/"
                className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300"
              >
                Wings 1 T9
              </Link>
              <nav>
                <ul className="flex items-center gap-4 text-sm text-slate-300">
                  <li>
                    <Link
                      className="rounded-full px-3 py-1 transition hover:bg-slate-800/60 hover:text-sky-200"
                      href="/"
                    >
                      Home
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          <main className="flex-1">
            <div className="mx-auto w-full max-w-6xl px-6 py-10">{children}</div>
          </main>
          <footer className="border-t border-slate-800/80 bg-slate-950/80 py-6 text-center text-sm text-slate-400">
            Practice smarter for TCS Wings 1 T9 &mdash; MCQ PDFs with explanations, accessible
            anywhere via Vercel.
          </footer>
        </div>
      </body>
    </html>
  );
}
