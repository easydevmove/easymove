"use client";

import Image from "next/image";
import { Logo } from "@/components/icons";

export default function Cities() {
  return (
    <section id="cidades" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-3 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Atendemos para todo Brasil</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Com uma logística integrada e equipes especializadas, temos estrutura para levar sua mudança para qualquer cidade do país.
          </p>
        </div>
        <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/videos/mapa.png"
            alt="Mapa do Brasil"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          <div className="absolute top-4 left-4">
            <Logo className="h-10 w-10 text-white" />
          </div>
        </div>
        <div className="mt-8 text-center">
            <p className="font-semibold text-lg text-primary">Atendemos todo o Brasil.</p>
            <p className="text-muted-foreground">Rotas interestaduais sob consulta.</p>
        </div>
      </div>
    </section>
  );
}
