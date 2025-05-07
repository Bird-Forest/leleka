import cl from "./page.module.scss";
import Hero from "@/components/Hero/Hero";
import DoctorGorohov from "@/components/Cards/DoctorGorohov";
import DoctorPoboynya from "@/components/Cards/DoctorPoboynya";
import DoctorUSD from "@/components/Cards/DoctorUSD";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <section className={cl.box}>
      <Hero />
      <DoctorGorohov />
      <DoctorPoboynya />
      <DoctorUSD />
      <Footer />
    </section>
  );
}
