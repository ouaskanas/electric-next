"use client";

import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import FormDevis from "@/app/components/FormDevis";

export default function ContactPage() {
  const phone = "33756888275";
  const email = "pacapicine@gmail.com";

  return (
    <>
      <Header />

      <main className="bg-gray-100 pt-28 pb-16 min-h-screen px-4">
        <section className="max-w-5xl mx-auto text-center text-gray-800">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Contactez-nous</h1>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Une question, un devis ou une urgence ? Remplissez le formulaire ci-dessous ou contactez-nous directement.
          </p>

          <div className="flex justify-center gap-4 mb-10 flex-wrap">
            <a
              href={`mailto:${email}`}
              className="px-5 py-3 rounded-full bg-[#1e293b] text-white hover:bg-[#334155] transition text-sm font-medium"
            >
              📧 Envoyer un email
            </a>
            <a
              href={`tel:+${phone}`}
              className="px-5 py-3 rounded-full bg-[#1e293b] text-white hover:bg-[#334155] transition text-sm font-medium"
            >
              📞 Appeler un expert
            </a>
          </div>

          <FormDevis />
        </section>
      </main>

      <Footer />
    </>
  );
}
