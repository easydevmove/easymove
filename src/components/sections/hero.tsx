import { HeroForm } from '@/components/forms/hero-form';
import { FilePenLine } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WHATSAPP_MESSAGE_BASE } from '@/lib/constants';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="inicio" className="relative w-full min-h-screen pt-20 md:pt-32 pb-8 md:pb-24 flex items-center">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
          src="/videos/1.mp4"
        />
        <div className="absolute inset-0 bg-primary/70"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-16 items-center">
          <div className="text-primary-foreground space-y-4 md:space-y-6 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Mudança sem dor de cabeça? <span className="text-accent">EasyMove.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90">
              Especialistas em mudanças residenciais com embalagem profissional e{' '}
              <a href="#orcamento-rapido" className="font-semibold underline hover:text-accent">orçamento rápido</a>.
            </p>
            <p className="font-semibold text-accent text-base sm:text-lg">Atendemos para todo Brasil!</p>
            <div className="flex justify-center md:justify-start">
              <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-lg px-8 sm:px-12 md:px-16 py-6 font-bold uppercase text-sm sm:text-base">
                <a href={`${WHATSAPP_MESSAGE_BASE}Olá! Gostaria de mais informações sobre os serviços de mudança.`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
                  <Image src="/videos/w1.png" alt="WhatsApp icon" width={24} height={24} />
                  Fale conosco
                </a>
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center mt-4 md:mt-0">
            <div className="w-full max-w-lg">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary-foreground bg-accent p-3 rounded-t-lg text-center flex items-center justify-center gap-2">
                <FilePenLine className="h-5 w-5 sm:h-6 sm:w-6" />
                <span>Peça seu orçamento rapidamente</span>
              </h2>
            </div>
            <HeroForm />
          </div>
        </div>
      </div>
    </section>
  );
}
