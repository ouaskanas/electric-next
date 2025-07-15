"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const url = process.env.NEXT_PUBLIC_URL;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-300 dark:border-gray-600 shadow-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href={url} className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src="/logo.png" alt="Electricien Logo" width={40} height={40} />
          <span className="self-center text-xl font-bold whitespace-nowrap text-gray-900 dark:text-white">
            Électricien PACA
          </span>
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-600 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
          aria-controls="navbar-sticky"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Ouvrir le menu</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-200 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link href="/" className="block py-2 px-3 text-white bg-[#ff6600] rounded md:bg-transparent md:text-[#ff6600] md:p-0 md:dark:text-orange-400">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/about" className="block py-2 px-3 text-gray-800 hover:text-[#ff6600] md:p-0 dark:text-white dark:hover:text-orange-400">
                À propos
              </Link>
            </li>
            <li>
              <Link href="/service" className="block py-2 px-3 text-gray-800 hover:text-[#ff6600] md:p-0 dark:text-white dark:hover:text-orange-400">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block py-2 px-3 text-gray-800 hover:text-[#ff6600] md:p-0 dark:text-white dark:hover:text-orange-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
