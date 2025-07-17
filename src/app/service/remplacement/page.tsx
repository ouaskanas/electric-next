import Header from "@/app/components/Header";
import Service from "@/app/components/Service"; 
import Footer from "@/app/components/Footer"

export default function Remplacement()
{
    return (
        <>
        <Header/>
         <main className="pt-24 px-4 pb-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
        <h1 className="text-3xl font-bold mb-6 text-center">Remplacement du tableau électrique</h1>
        <div className="max-w-4xl mx-auto space-y-4 text-lg">
          <p>
            Nous commençons par la <strong>dépose en sécurité de votre ancien tableau</strong>, qu’il soit encastré ou en saillie.
          </p>
          <p>
            Nous installons ensuite un nouveau tableau <strong>modulaire</strong> : disjoncteurs, interrupteurs différentiels, parafoudre si besoin.
          </p>
          <p>
            Chaque circuit est <strong>clairement étiqueté</strong> et un <strong>schéma électrique</strong> est fourni pour faciliter la maintenance future.
          </p>
          <p>
            Une <strong>mise en sécurité immédiate</strong> est assurée, avec contrôle final de tension, continuité, et disjonction.
          </p>
        </div>
      </main>
        <Service/>
        <Footer/>
        </>
    );
} 