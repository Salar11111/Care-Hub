import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CareHub Plus — Where healing feels like home",
    template: "%s · CareHub Plus",
  },
  description:
    "A hospital built around people — connected records, kind clinicians and care that feels like home. Book appointments, explore departments and meet our specialists.",
  keywords: [
    "hospital",
    "healthcare",
    "medical portal",
    "appointments",
    "doctors",
    "carehub",
  ],
  metadataBase: new URL("https://carehub-plus.example.com"),
  openGraph: {
    title: "CareHub Plus — Where healing feels like home",
    description:
      "Connected records, kind clinicians and care that feels like home. Book your visit today.",
    type: "website",
  },
};

const themeInit = `try{if(localStorage.getItem('carehub-theme')==='dark'||(!localStorage.getItem('carehub-theme')&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-teal-600 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}