import React from "react";
import Footer from "@/app/components/Footer";
import Service from "@/app/components/Service";
import Header from "@/app/components/Header";
import ButtonCall from "@/app/components/CallButton";

export const metadata = {
  title: "Électricien Dépanneur – Dépannage & Installation Électrique 24h/24",
  description: "Électricien en région PACA : dépannage rapide, installation, mise aux normes, disjoncteur, tableau électrique, en urgence 24h/24 à Marseille, Toulon, Nice, Aix et Avignon.",
  keywords: "électricien PACA, dépannage électricité, urgence électricien, installation tableau électrique, mise aux normes, Marseille, Toulon, Nice, Aix-en-Provence, Avignon",
  robots: "index, follow",
  alternates: {
    canonical: "https://electriciendepanneurs.fr/service",
  },
  openGraph: {
    title: "Électricien Dépanneur – Intervention Rapide & Efficace",
    description:
        "Besoin d’un électricien fiable et rapide en région PACA ? Nous intervenons 24h/24 pour vos pannes, installations et urgences électriques.",
    url: "https://electriciendepanneurs.fr/service",
    siteName: "Électricien Dépanneur",
    type: "website",
    locale: "fr_FR",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main className="bg-white dark:bg-gray-900 pt-28 pb-20 px-4">
        <section className="max-w-5xl mx-auto text-gray-800 dark:text-gray-100">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Nos services électriques
          </h1>
          <p className="text-lg text-center max-w-3xl mx-auto mb-10">
            Que ce soit pour une panne soudaine, une mise en conformité ou une
            nouvelle installation, notre équipe vous accompagne avec réactivité
            et professionnalisme, partout en région PACA.
          </p>

          <div className="text-base leading-7 space-y-6 max-w-3xl mx-auto">
            <p>Voici un aperçu de nos principales interventions :</p>

            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Dépannage électrique 24h/24 :</strong> intervention rapide en cas de coupure, court-circuit ou panne d’un appareil électrique.
              </li>
              <li>
                <strong>Installation électrique :</strong> pose de tableaux, luminaires, prises, chauffe-eau, interrupteurs connectés, etc.
              </li>
              <li>
                <strong>Mise aux normes :</strong> mise en conformité des installations selon la norme NF C 15-100.
              </li>
              <li>
                <strong>Remplacement de tableau électrique :</strong> remplacement des anciens tableaux par des systèmes modernes et sécurisés.
              </li>
              <li>
                <strong>Diagnostic de sécurité :</strong> analyse de votre installation pour prévenir les risques électriques (surcharge, défauts d’isolement…).
              </li>
            </ul>

            <p>
              Tous nos travaux sont réalisés avec du matériel certifié, dans le
              respect des délais et de la sécurité. Nos électriciens sont
              agréés et interviennent dans les Bouches-du-Rhône, le Var, le
              Vaucluse et les Alpes-Maritimes.
            </p>

            <p>
              En choisissant <strong>Électricien PACA</strong>, vous faites appel à une entreprise locale de
              confiance, disponible 7j/7, avec devis gratuit et transparence
              garantie.
            </p>
          </div>
        </section>

        <div className="mt-20">
          <Service />
        </div>
      </main>

      <ButtonCall />
      <Footer />
    </>
  );
}
