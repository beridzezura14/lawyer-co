import BlogSlider from "./components/BlogSlider";
import Hero from "./components/Hero";
import PartnersSection from "./components/PartnersSection";
import Image from "next/image";
import ServicesSection from "./components/ServicesSection";
import Stats from "./components/Stats";
import PracticeAreas from "./components/PracticeAreas";
import CTASection from "./components/CTASection";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="relative px-5 lg:px-20 z-30 -mt-16 md:-mt-42 2xl:-mt-100">
        <div className="relative w-full aspect-[16/9] md:aspect-[21/8] overflow-hidden shadow-2xl">
          <Image
            src="/hero2.jpeg"
            alt="Legal Expert Team"
            fill
            className="object-cover object-center grayscale-[10%] contrast-[1.1]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#3d1d1a]/20 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Partners Section და დანარჩენი კონტენტი */}
      <div className="relative z-10 pt-10 md:pt-20">
        <PartnersSection />
        <BlogSlider />
        <ServicesSection />
        <Stats />
        <PracticeAreas />
        <CTASection />
        <ContactForm />
      </div>
    </main>
  );
}
