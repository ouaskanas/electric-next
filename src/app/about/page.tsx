"use client";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import ButtonCall from "@/app/components/CallButton";

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="bg-white dark:bg-gray-900 pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
            À propos de nous
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
            Chez <strong>Électricien PACA</strong>, nous sommes spécialisés dans le dépannage, l’installation et la mise aux normes électriques partout en région PACA. 
            Forts de plus de 10 ans d’expérience, nous assurons des interventions rapides, fiables et certifiées.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <div>
            <Image
              src="/electricien.png"
              alt="Technicien Électricien"
              width={500}
              height={500}
              className="mx-auto rounded-lg"
            />
          </div>
          <div className="text-gray-700 dark:text-gray-200 text-lg space-y-4">
            <h2 className="text-2xl font-semibold text-[#ff6600] dark:text-orange-400">Notre mission</h2>
            <p>
              Notre objectif est simple : garantir votre sécurité électrique en toute circonstance. Que ce soit pour un dépannage urgent, 
              une installation neuve ou une rénovation, notre équipe est là pour vous accompagner avec sérieux et efficacité.
            </p>
            <p>
              Nous intervenons sous 24 à 48h à Marseille, Toulon, Nice, Aix-en-Provence et dans toute la région PACA.
            </p>
          </div>
        </div>

        <div className="mt-20 max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Nos engagements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left text-gray-700 dark:text-gray-300">
            <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-xl shadow-sm">
              <h3 className="font-semibold text-[#ff6600] dark:text-orange-400 mb-2">Sécurité</h3>
              <p>Des interventions conformes aux normes en vigueur pour une sécurité totale.</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-xl shadow-sm">
              <h3 className="font-semibold text-[#ff6600] dark:text-orange-400 mb-2">Disponibilité</h3>
              <p>Dépannage 7j/7, même les jours fériés en cas d’urgence électrique.</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-xl shadow-sm">
              <h3 className="font-semibold text-[#ff6600] dark:text-orange-400 mb-2">Professionnalisme</h3>
              <p>Techniciens qualifiés, ponctuels et à l’écoute de vos besoins.</p>
            </div>
          </div>
        </div>
      </main>

      <ButtonCall />
      <Footer />
    </>
  );
}
