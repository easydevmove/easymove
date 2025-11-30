import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FloatingWhatsAppButton from '@/components/layout/floating-whatsapp';
import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import HowItWorks from '@/components/sections/how-it-works';
import Insurance from '@/components/sections/insurance';
import Testimonials from '@/components/sections/testimonials';
import Cities from '@/components/sections/cities';
import FAQ from '@/components/sections/faq';
import Gallery from '@/components/sections/gallery';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Insurance />
        <Gallery />
        <Services />
        <HowItWorks />
        <Cities />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}
