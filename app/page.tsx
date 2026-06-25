import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Gallery />
      <Reviews />
      <About />
      <CTA />
    </>
  );
}
