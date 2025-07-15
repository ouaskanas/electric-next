"use client";
import React from "react";

const fakeReviews = [
  {
    name: "Claire M.",
    message:
      "Intervention rapide et très professionnelle!",
    rating: 5,
    date: "Juin 2025",
  },
  {
    name: "Julien B.",
    message:
      "Très satisfait du service.Je recommande sans hésiter.",
    rating: 4,
    date: "Mai 2025",
  },
  {
    name: "Nadia T.",
    message:
      "Travail soigné pour remettre aux normes l'installation électrique de mon appartement",
    rating: 5,
    date: "Avril 2025",
  },
  {
    name: "Olivier D.",
    message:
      "Remise en service du tableau électrique après coupure totale,tout fonctionne parfaitement.",
    rating: 5,
    date: "Mars 2025",
  },
  {
    name: "Amel K.",
    message:
      "Bon rapport qualité/prix. Intervention propre et rapide suite à une panne extérieure. Rien à redire.",
    rating: 4,
    date: "Février 2025",
  },
];

const Star = ({ filled }: { filled: boolean }) => (
  <span className={filled ? "text-yellow-400" : "text-gray-300"}>★</span>
);

export default function AvisSection() {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          ⭐ Avis de nos clients
        </h2>

        <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-thin scrollbar-thumb-gray-400">
          {fakeReviews.map((review, index) => (
            <div
              key={index}
              className="min-w-[300px] bg-white rounded-xl shadow-md p-6 flex-shrink-0"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  {review.name}
                </h3>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} filled={i < review.rating} />
                ))}
              </div>
              <p className="text-gray-700">{review.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
