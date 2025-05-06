import cl from "./page.module.scss";
import Hero from "@/components/Hero/Hero";
import DoctorGorohov from "@/components/Cards/DoctorGorohov";

export default function Home() {
  return (
    <section className={cl.box}>
      <Hero />
      <DoctorGorohov />
      <DoctorGorohov />
      <DoctorGorohov />
    </section>
  );
}
