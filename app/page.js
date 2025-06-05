import Hero from "@/components/Sections/Hero";
import Features from "@/components/Sections/Features";
import Testimonials from "@/components/Sections/Testimonials";
import Services from "@/components/Sections/Services";
import Support from "@/components/Sections/Support";
import Blog from "@/components/Sections/Blog";
import Faq from "@/components/Sections/Faq";
import Cta from "@/components/Sections/Cta";
import Tabs from "@/components/Sections/Tabs";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Tabs />
      <Testimonials />
      <Services />
      <Support/>
      <Blog />
      <Faq />
      <Cta />
    </>
  );
}
