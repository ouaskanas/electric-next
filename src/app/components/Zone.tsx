"use client";
import { useState } from "react";

const zones = [
  { title: "Bouches-du-Rhône", cities: "Marseille, Aix-en-Provence, Cassis" },
  { title: "Var", cities: "Toulon, Hyères, Fréjus, Saint-Tropez" },
  { title: "Alpes-Maritimes", cities: "Cannes, Antibes, Nice" },
  { title: "Vaucluse", cities: "Avignon, Carpentras" },
  { title: "Alpes-de-Haute-Provence / Hautes-Alpes", cities: "Digne-les-Bains, Manosque, Gap" },
];

export default function ZonesSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section id="zones" className="bg-gray-900 py-16 px-4 text-white">
      <h2 className="text-3xl font-bold text-center mb-12">
        Zones d’intervention en région PACA
      </h2>

      <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-10">
        <div className="flex flex-wrap justify-center gap-6">
          {zones.map((zone, index) => (
            <div
              key={index}
              onClick={() => {
                setActiveCard(index);
                setTimeout(() => setActiveCard(null), 500);
              }}
              className={`bg-white text-gray-900 px-6 py-6 rounded-xl shadow-md w-[280px] max-w-[90vw] text-center transform transition-transform duration-200 cursor-pointer ${
                activeCard === index ? "scale-105" : ""
              }`}
            >
              <h3 className="text-yellow-600 font-semibold text-lg mb-2">
                {zone.title}
              </h3>
              <p>{zone.cities}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
