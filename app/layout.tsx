import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomBar } from "@/components/layout/MobileBottomBar";
import { COMPANY_INFO } from "@/lib/constants";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY_INFO.websiteUrl),
  title: {
    default: "24/7 Pest Control Singapore | Fidz Pest Management",
    template: "%s | Fidz Pest Management",
  },
  description:
    "Fidz Pest Management provides 24/7 pest control services across Singapore for homes and businesses, including termite, bed bug, cockroach, ant, fly and rodent control.",
  keywords: [
    "pest control Singapore",
    "emergency pest control Singapore",
    "termite treatment Singapore",
    "bed bug treatment Singapore",
    "cockroach control Singapore",
    "ant control Singapore",
    "rodent control Singapore",
    "soil treatment Singapore",
    "NEA registered pest control",
    "Fidz Pest Management",
  ],
  authors: [{ name: "Fidz Pest Management" }],
  creator: "Fidz Pest Management",
  publisher: "Fidz Pest Management",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: COMPANY_INFO.websiteUrl,
    title: "24/7 Pest Control Singapore | Fidz Pest Management",
    description:
      "Fidz Pest Management provides 24/7 pest control services across Singapore for homes and businesses, including termite, bed bug, cockroach, ant, fly and rodent control.",
    siteName: "Fidz Pest Management",
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 Pest Control Singapore | Fidz Pest Management",
    description:
      "Fast, professional pest management for homes and businesses across Singapore.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: COMPANY_INFO.name,
    image: `${COMPANY_INFO.websiteUrl}/og-image.jpg`,
    "@id": COMPANY_INFO.websiteUrl,
    url: COMPANY_INFO.websiteUrl,
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY_INFO.address.street,
      addressLocality: "Midview City",
      postalCode: COMPANY_INFO.address.postalCode,
      addressCountry: "SG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 1.3571,
      longitude: 103.8344,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    sameAs: [
      COMPANY_INFO.whatsappUrl,
    ],
  };

  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-body bg-white text-[#10213D] selection:bg-[#C9A962] selection:text-[#071A3A]">
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
