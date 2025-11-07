import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { SuppliersSection } from './components/SuppliersSection';
import { PromotionsSection } from './components/PromotionsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SeoSchema } from './components/SeoSchema';

export default function HomePage() {
  return (
    <main className="bg-[rgb(247,249,251)]">
      <SeoSchema />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SuppliersSection />
      <PromotionsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
