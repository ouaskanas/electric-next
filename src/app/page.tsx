import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Service from "./components/Service";
import AvisSection from "./components/AvisSecrion";
import Zone from "./components/Zone";
import FormDevis from "./components/FormDevis";
import Footer from "./components/Footer";
import ButtonCall from "./components/CallButton";


export const metadata = {
  title: "Électricien Dépanneur – Dépannage & Installation Électrique 24h/24",
  description: "Électricien en région PACA : dépannage rapide, installation, mise aux normes, disjoncteur, tableau électrique, en urgence 24h/24 à Marseille, Toulon, Nice, Aix et Avignon.",
  keywords: "électricien PACA, dépannage électricité, urgence électricien, installation tableau électrique, mise aux normes, Marseille, Toulon, Nice, Aix-en-Provence, Avignon",
  robots: "index, follow",
  alternates: {
    canonical: "https://electriciendepanneurs.fr",
  },
  openGraph: {
    title: "Électricien Dépanneur – Intervention Rapide & Efficace",
    description:
        "Besoin d’un électricien fiable et rapide en région PACA ? Nous intervenons 24h/24 pour vos pannes, installations et urgences électriques.",
    url: "https://electriciendepanneurs.fr",
    siteName: "Électricien Dépanneur",
    type: "website",
    locale: "fr_FR",
  },
};


export default function Home() {

  return (
    <>
    <Header/>
    <HeroSection />
    <Service />
    <Zone />
    <AvisSection />
    <FormDevis/>
    <ButtonCall />
    <Footer />
    </>
  );
}
