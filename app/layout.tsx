import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0FA968",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://fidzpest.sg"),
  title: {
    default: "Fidz Pest Management | 24/7 Pest Control Singapore (NEA Registered)",
    template: "%s | Fidz Pest Management",
  },
  description:
    "Fidz Pest Management is a registered Singapore Vector Control Operator (NEA53397893M) providing 24/7 pest control services for residential, commercial, F&B, and industrial properties.",
  keywords: [
    "pest control singapore",
    "24/7 pest control singapore",
    "nea registered pest control",
    "termite control singapore",
    "bed bug treatment singapore",
    "cockroach control singapore",
    "rodent control singapore",
    "fidz pest management",
  ],
  authors: [{ name: "Fidz Pest Management" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Fidz Pest Management | 24/7 Pest Control Singapore",
    description:
      "Precision pest eradication for residential and commercial premises across Singapore. Officially licensed NEA Vector Control Operator.",
    url: "https://fidzpest.sg",
    siteName: "Fidz Pest Management",
    locale: "en_SG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans text-slate-800 antialiased selection:bg-[#DDF7EA] selection:text-[#087A4A] overflow-x-hidden w-full max-w-[100vw]">
        <Header />
        <main className="flex-1 w-full overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
