import HeroSection from "@/components/home/hero_section/HeroSection";
import styles from "../page.module.css";
import About from "@/components/home/about";
import Services from "@/components/home/services";
import India from "@/components/home/india";
import Footer from "@/components/home/footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <About />
      <Services />
      <India />
      <Footer />
    </main>
  );
}
