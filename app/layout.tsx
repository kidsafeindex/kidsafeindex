import "./globals.css";
import Header from "./components/Header";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata = {
  title: "KidSafe Index",
  description:
    "Real-time insights into child safety risks across apps and the wider online world, explained in plain language for parents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} min-h-screen bg-gradient-to-b from-sky-50 via-white to-blue-50 text-slate-900`}>
        <Header />

        {children}

      <footer className="border-t border-slate-200 bg-white/70">
  <div className="mx-auto max-w-6xl px-6 py-10">
    <div className="grid gap-6 md:grid-cols-[auto_1fr] md:items-center">
      <div className="flex items-center">
        <img
          src="/logo.png"
          alt="KidSafe Index"
          className="h-15 w-auto"
        />
      </div>

      <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600 md:justify-end">
        <a href="/" className="transition-colors hover:text-slate-900">
          Home
        </a>
        <a href="/about" className="transition-colors hover:text-slate-900">
          About
        </a>
        <a href="/mission" className="transition-colors hover:text-slate-900">
          Mission
        </a>
        <a href="/methodology" className="transition-colors hover:text-slate-900">
          Methodology
        </a>
        <a href="/resources" className="transition-colors hover:text-slate-900">
          Resources
        </a>
        <a href="/privacy" className="transition-colors hover:text-slate-900">
          Privacy
        </a>
        <a href="/terms" className="transition-colors hover:text-slate-900">
          Terms
        </a>
        <a href="/contact" className="transition-colors hover:text-slate-900">
          Contact
        </a>
        <a href="/updates" className="transition-colors hover:text-slate-900">
          Get Weekly Updates
        </a>
      </nav>
    </div>

<div className="mt-4 flex gap-4 text-slate-500 md:justify-end">
  <a
    href="#"
    aria-label="Instagram"
    className="transition-colors hover:text-slate-900"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path d="M7.75 2h8.5A5.756 5.756 0 0 1 22 7.75v8.5A5.756 5.756 0 0 1 16.25 22h-8.5A5.756 5.756 0 0 1 2 16.25v-8.5A5.756 5.756 0 0 1 7.75 2Zm8.5 1.5h-8.5A4.255 4.255 0 0 0 3.5 7.75v8.5A4.255 4.255 0 0 0 7.75 20.5h8.5a4.255 4.255 0 0 0 4.25-4.25v-8.5a4.255 4.255 0 0 0-4.25-4.25ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5Zm5.25-2a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
    </svg>
  </a>

  <a
    href="#"
    aria-label="LinkedIn"
    className="transition-colors hover:text-slate-900"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.06 2.06 0 1 0 5.3 7.12 2.06 2.06 0 0 0 5.25 3ZM20.44 13.09c0-3.38-1.8-4.95-4.2-4.95a3.63 3.63 0 0 0-3.27 1.8V8.5H9.6c.04.95 0 11.5 0 11.5h3.37v-6.42c0-.34.03-.68.13-.92.27-.68.89-1.38 1.94-1.38 1.37 0 1.92 1.04 1.92 2.56V20h3.38v-6.91Z" />
    </svg>
  </a>
</div>

    <div className="mt-8 border-t pt-6 text-xs text-slate-500">
      © 2026 KidSafe Index. All rights reserved.
    </div>
  </div>
</footer>

    </body>
    </html>
  );
}