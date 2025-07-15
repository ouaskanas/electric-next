import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Électricien PACA – Dépannage & Installation Électrique 24h/24",
  description:
    "Électricien en région PACA : dépannage rapide, installation, mise aux normes, disjoncteur, tableau électrique, en urgence 24h/24 à Marseille, Toulon, Nice, Aix et Avignon.",
  keywords:
    "électricien PACA, dépannage électricité, urgence électricien, installation tableau électrique, mise aux normes, Marseille, Toulon, Nice, Aix-en-Provence, Avignon",
  robots: "index, follow",
  creator: "electricien-services.com",
  metadataBase: new URL("https://electricien-services.com"),

  openGraph: {
    title: "Électricien PACA – Intervention Rapide & Efficace",
    description:
      "Besoin d’un électricien fiable et rapide en région PACA ? Nous intervenons 24h/24 pour vos pannes, installations et urgences électriques.",
    url: "https://electricien-services.com",
    siteName: "Électricien PACA",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "https://electricien-services.com/og-image.jpg", // à adapter
        width: 1200,
        height: 630,
        alt: "Électricien urgence PACA",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Électricien PACA – Urgence Électrique 24h/24",
    description:
      "Disjoncteur HS ? Panne électrique ? Appelez un électricien certifié 24h/24 à Marseille, Toulon, Nice ou Aix.",
    images: ["https://electricien-services.com/og-image.jpg"],
    creator: "@electricienpaca",
  },

  alternates: {
    canonical: "https://electricien-services.com",
    languages: {
      fr: "https://electricien-services.com",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
