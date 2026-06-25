import Hero from "@/components/Hero";
import PhotoStrip from "@/components/PhotoStrip";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import About from "@/components/About";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <PhotoStrip />
      <Services />
      <Gallery />
      <Reviews />
      <About />
      <CTA />
    </>
  );
}
