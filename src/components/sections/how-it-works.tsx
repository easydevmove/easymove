'use client';

import { howItWorksSteps } from "@/lib/data";

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src="/videos/2.mp4"
        />
        <div className="absolute inset-0 bg-accent/70" />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-background/20 px-3 py-1 text-sm text-primary-foreground">Nosso Processo</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Sua mudança em 4 passos simples</h2>
            <p className="max-w-[900px] text-primary-foreground/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Simplificamos cada etapa para garantir uma experiência sem estresse.
            </p>
          </div>
        </div>
        <div className="relative">
          {/* SVG path for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-full" >
             <svg width="100%" height="100%" viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute top-[-30px] left-0">
                <path 
                    d="M 125 60 
                       C 225 60, 250 100, 350 100 
                       S 450 20, 550 20 
                       S 650 100, 750 100
                       S 850 60, 975 60"
                    stroke="hsla(var(--primary-foreground), 0.3)"
                    strokeWidth="2" 
                    strokeDasharray="8 8"
                    fill="none" 
                />
            </svg>
          </div>
          
          <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorksSteps.map((step) => (
              <div key={step.step} className="flex flex-col items-center text-center gap-4 p-4">
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground border-4 border-accent text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-primary">{step.title}</h3>
                <p className="text-primary-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
