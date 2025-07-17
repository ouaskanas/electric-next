import Header from "@/app/components/Header";
import Service from "@/app/components/Service"; 
import Footer from "@/app/components/Footer"

export default function Panne()
{
    return (
        <>
        <Header/>
              <Header />
      <main className="pt-24 px-4 pb-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
        <h1 className="text-3xl font-bold mb-6 text-center">Recherche de panne électrique</h1>
        <div className="max-w-4xl mx-auto space-y-4 text-lg">
          <p>
            En cas de <strong>coupure générale ou partielle</strong> dans votre logement ou local professionnel, notre équipe intervient rapidement pour localiser la panne.
          </p>
          <p>
            Grâce à un <strong>diagnostic différentiel précis</strong>, nous identifions l’origine du problème : disjoncteur défectueux, surcharge, fuite de courant ou court-circuit.
          </p>
          <p>
            Nous utilisons des <strong>testeurs de continuité et de résistance</strong> pour contrôler l’état de votre installation et garantir un dépannage fiable.
          </p>
          <p>
            Un <strong>rapport d’intervention clair et structuré</strong> peut être fourni sur demande, utile pour votre assurance ou pour répondre aux exigences de votre bailleur.
          </p>
        </div>
      </main>
        <Service/>
        <Footer/>
        </>
    );
}