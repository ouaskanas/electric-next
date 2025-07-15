import Image from "next/image";
import Link from "next/link";

function HeroSection() {
  const phone = "33756888275";

  return (
    <section className="bg-white dark:bg-gray-900 pt-24">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto gap-8 lg:py-16 lg:grid-cols-12 items-center">
        <div className="lg:col-span-7">
          <h1 className="text-4xl font-extrabold tracking-tight leading-tight mb-4 md:text-5xl xl:text-6xl text-gray-900 dark:text-white">
            Électricien Urgence dans toute la région PACA – 24h/24 & 7j/7
          </h1>
          <h3 className="mb-4 text-gray-700 text-lg lg:text-xl dark:text-white">
            Panne tableau électrique ? Disjoncteur qui saute ?
          </h3>
          <p className="mb-6 text-gray-600 lg:text-xl dark:text-gray-400">
            Intervention en moins de 30 min par un artisan local certifié. Devis gratuit, intervention rapide, équipements professionnels.
          </p>
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <Link
              href="/contact"
              className="inline-flex justify-center items-center px-6 py-3 text-base font-medium text-white bg-[#ff6600] rounded-lg hover:bg-orange-600 focus:ring-4 focus:ring-orange-300"
            >
              Demander un devis
            </Link>
            <a
              href={`tel:+${phone}`}
              className="inline-flex justify-center items-center px-6 py-3 text-base font-medium text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Appeler un expert
            </a>
          </div>
        </div>
        <div className="lg:col-span-5 hidden lg:flex justify-center">
          <Image
            src="/hero.png" 
            alt="Électricien en intervention"
            width={500}
            height={500}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
