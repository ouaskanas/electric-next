import React from "react";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { FaHome } from "react-icons/fa";

export default function NotFoundPage() {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-20">
        <h1 className="text-6xl font-extrabold text-yellow-500 mb-6">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-500 mb-4">
          Oups ! Cette page est introuvable
        </h2>
        <p className="text-gray-300 mb-6 max-w-md">
          Il semble que la page que vous cherchez n&#39;existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-yellow-500 text-white font-medium rounded-full hover:bg-sky-600 transition"
        >
          <FaHome className="mr-2" /> Retour à l&#39;accueil
        </Link>
      </main>

      <Footer />
    </div>
  );
}