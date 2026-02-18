import cl from "./page.module.scss";
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";
import { DEFAULT_SEO } from "@/util/seo.config";
import ListDooctorCards from "@/components/Cards/ListDooctorCards";
import AboutUs from "@/components/About/AboutUs";
import Banner from "@/components/Screening/Banner";

export const metadata = DEFAULT_SEO;

export default function Home() {
  return (
    <section className={cl.box}>
      <Hero />
      <Banner />
      <AboutUs />
      <ListDooctorCards />
      <Footer />
    </section>
  );
}
