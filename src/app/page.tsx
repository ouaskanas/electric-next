import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Service from "./components/Service";
import AvisSection from "./components/AvisSecrion";
import Zone from "./components/Zone";
import FormDevis from "./components/FormDevis";
import Footer from "./components/Footer";
import ButtonCall from "./components/CallButton";

export default function Home() {
  return (
    <>
    <Header/>
    <HeroSection />
    <Service />
    <Zone />
    <AvisSection />
    <FormDevis/>
    <ButtonCall />
    <Footer />
    </>
  );
}
