"use client";
import { useState, useRef } from "react";

export default function FormDevis() {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const formspreeUrl = process.env.NEXT_PUBLIC_FORMSPREE;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(formRef.current!);

    try {
      const response = await fetch(formspreeUrl as string, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const data = await response.json();
      console.log("Formspree response:", response.status, data);

      if (response.ok) {
        alert("✅ Message envoyé !");
        // Pas de reset ici
      } else {
        alert(`❌ Erreur Formspree : ${data?.message || "Erreur inconnue."}`);
      }
    } catch (err) {
      console.error("Erreur de connexion :", err);
      alert("❌ Échec de la connexion au serveur.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Demande de devis
        </h2>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-white text-gray-800 rounded-3xl shadow-lg p-8 space-y-5"
        >
          <input type="hidden" name="_subject" value="Demande de devis" />

          <input
            type="text"
            name="name"
            placeholder="Prénom / Nom"
            required
            className="w-full px-4 py-3 rounded-full border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full px-4 py-3 rounded-full border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            type="text"
            name="city"
            placeholder="Ville d’intervention"
            required
            className="w-full px-4 py-3 rounded-full border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            type="text"
            name="type"
            placeholder="Type de piscine (liner, coque, etc.)"
            className="w-full px-4 py-3 rounded-full border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <textarea
            name="details"
            placeholder="Décrivez votre problème..."
            required
            className="w-full px-4 py-3 rounded-2xl border border-gray-300 bg-gray-100 resize-none h-28 focus:outline-none focus:ring-2 focus:ring-orange-400"
          ></textarea>

          <input
            type="tel"
            name="phone"
            placeholder="Téléphone"
            required
            className="w-full px-4 py-3 rounded-full border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full mt-4 py-3 rounded-full font-bold text-white bg-[#ff6600] hover:bg-orange-600 transition ${
              loading ? "opacity-60 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Envoi..." : "Envoyer ma demande"}
          </button>
        </form>
      </div>
    </section>
  );
}
