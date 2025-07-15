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

export const metadata: Metadata = {
  title: "Électricien Dépanneur – Dépannage & Installation Électrique 24h/24",
  description:
    "Électricien en région PACA : dépannage rapide, installation, mise aux normes, disjoncteur, tableau électrique, en urgence 24h/24 à Marseille, Toulon, Nice, Aix et Avignon.",
  keywords:
    "électricien PACA, dépannage électricité, urgence électricien, installation tableau électrique, mise aux normes, Marseille, Toulon, Nice, Aix-en-Provence, Avignon",
  robots: "index, follow",
  creator: "electriciendepanneurs.fr",
  metadataBase: new URL("https://electriciendepanneurs.fr"),

  openGraph: {
    title: "Électricien Dépanneur – Intervention Rapide & Efficace",
    description:
      "Besoin d’un électricien fiable et rapide en région PACA ? Nous intervenons 24h/24 pour vos pannes, installations et urgences électriques.",
    url: "https://electriciendepanneurs.fr",
    siteName: "Électricien Dépanneur",
    type: "website",
    locale: "fr_FR",
  },

  alternates: {
    canonical: "https://electriciendepanneurs.fr",
    languages: {
      fr: "https://electriciendepanneurs.fr",
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
