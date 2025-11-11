import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { NuestraFilosofia } from "@/components/landing/NuestraFilosofia";
import { Menu } from "@/components/landing/Menu";
import { ElChef } from "@/components/landing/ElChef";
import { Reconocimientos } from "@/components/landing/Reconocimientos";
import { Reservations } from "@/components/landing/Reservations";
import { Gallery } from "@/components/landing/Gallery";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <NuestraFilosofia />
        <Menu />
        <ElChef />
        <Reconocimientos />
        <Reservations />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;