import cl from "./page.module.scss";
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";
import { DEFAULT_SEO } from "@/util/seo.config";
import ListDooctorCards from "@/components/Cards/ListDooctorCards";

export const metadata = DEFAULT_SEO;

export default function Home() {
  return (
    <section className={cl.box}>
      <Hero />
      <ListDooctorCards />
      <Footer />
    </section>
  );
}
