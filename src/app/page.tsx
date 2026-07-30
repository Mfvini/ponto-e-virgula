import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Servicos } from "@/components/sections/Servicos";
import { ComoFunciona } from "@/components/sections/ComoFunciona";
import { Portfolio } from "@/components/sections/Portfolio";
import { Sobre } from "@/components/sections/Sobre";
import { FAQ } from "@/components/sections/FAQ";
import { Contato } from "@/components/sections/Contato";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Header />
      <Hero />
      <Servicos />
      <ComoFunciona />
      <Portfolio />
      <Sobre />
      <FAQ />
      <Contato />
      <Footer />
    </main>
  );
}
