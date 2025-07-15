"use client";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white text-center pt-8 border-t-4 border-[#ff6600]">
      <div className="max-w-4xl mx-auto px-4 pb-6 space-y-4">
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-12 space-y-3 md:space-y-0">
          <div className="flex flex-col items-center">
            <FaPhoneAlt className="text-[#ff6600] mb-1" />
            <a href="tel:+33756888275" className="hover:underline text-lg">
              07 56 88 82 75
            </a>
            <a
              href="mailto:contact@electriciendepanneurs.fr"
              className="hover:underline text-sm"
            >
              contact@electriciendepanneurs.fr
            </a>
          </div>
          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="text-[#ff6600] mb-1" />
            <p className="text-sm">
              Marseille – Toulon – Aix – Avignon – Nice
            </p>
          </div>
        </div>
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} electriciendepanneurs.fr – Dépannage & Urgence 24h/24. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
