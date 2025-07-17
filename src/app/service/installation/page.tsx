import Header from "@/app/components/Header";
import Service from "@/app/components/Service"; 
import Footer from "@/app/components/Footer"

export default function Installation()
{
    return (
        <>
        <Header/>
          <main className="pt-24 px-4 pb-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
        <h1 className="text-3xl font-bold mb-6 text-center">Installation complète – Neuf ou rénovation</h1>
        <div className="max-w-4xl mx-auto space-y-4 text-lg">
          <p>
            Nous réalisons l’installation de l’<strong>appareillage complet</strong> : prises, interrupteurs, éclairage, chauffage, volets électriques, etc.
          </p>
          <p>
            Selon vos besoins, nous posons le <strong>gainage encastré (invisible)</strong> ou apparent (goulotte discrète), selon les contraintes techniques.
          </p>
          <p>
            Le <strong>tirage de câbles et les saignées</strong> sont réalisés avec soin, en respectant les normes de sécurité et l’esthétique de votre logement.
          </p>
          <p>
            Un <strong>test global de l’installation</strong> est effectué avant la mise sous tension pour garantir une sécurité totale.
          </p>
        </div>
      </main>
        <Service/>
        <Footer/>
        </>
    );
}