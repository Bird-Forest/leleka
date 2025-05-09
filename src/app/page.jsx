import cl from "./page.module.scss";
import Hero from "@/components/Hero/Hero";
// import DoctorGorohov from "@/components/Cards/DoctorGorohov";
// import DoctorPoboynya from "@/components/Cards/DoctorPoboynya";
// import DoctorUSD from "@/components/Cards/DoctorUSD";
import Footer from "@/components/Footer/Footer";
import { DEFAULT_SEO } from "@/util/seo.config";
import ListDooctorCards from "@/components/Cards/ListDooctorCards";

export const metadata = DEFAULT_SEO;

export default function Home() {
  return (
    <section className={cl.box}>
      <Hero />
      <ListDooctorCards />
      {/* <DoctorGorohov />
      <DoctorPoboynya />
      <DoctorUSD /> */}
      <Footer />
    </section>
  );
}
