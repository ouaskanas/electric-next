import Header from "@/app/components/Header";
import Service from "@/app/components/Service"; 
import Footer from "@/app/components/Footer"

export default function MiseEnNorme()
{
    return (
        <>
        <Header/>
         <main className="pt-24 px-4 pb-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
        <h1 className="text-3xl font-bold mb-6 text-center">Mise aux normes électriques</h1>
        <div className="max-w-4xl mx-auto space-y-4 text-lg">
          <p>
            Vous disposez d’un <strong>tableau électrique vétuste ou surchargé</strong> ? Nous réalisons une mise aux normes complète pour sécuriser votre installation.
          </p>
          <p>
            Nos interventions incluent la <strong>mise à la terre obligatoire</strong>, ainsi que l’installation d’un ou plusieurs dispositifs différentiels (DDR) pour protéger les personnes.
          </p>
          <p>
            Nous rénovons selon la norme <strong>NFC 15-100</strong>, qui régit toutes les installations électriques domestiques en France.
          </p>
          <p>
            À la fin des travaux, nous pouvons délivrer un <strong>certificat de conformité</strong> attestant que votre installation est sécurisée et aux normes.
          </p>
        </div>
      </main>
        <Service/>
        <Footer/>
        </>
    );
}