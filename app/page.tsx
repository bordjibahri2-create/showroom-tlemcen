import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { CarsSection } from "@/components/cars-section";
import { Steps } from "@/components/steps";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <CarsSection />
      <Steps />
      <ContactForm />
      <Footer />
    </main>
  );
}
