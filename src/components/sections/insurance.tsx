import { RainbowButton } from "../ui/rainbow-button";
import Link from "next/link";
import BudgetCard3D from "./budget-card-3d";

export default function Insurance() {
  return (
    <section id="orcamento-rapido" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="flex justify-center">
            <BudgetCard3D />
          </div>
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Orçamento rápido, justo e sem surpresas</h2>
            <p className="text-muted-foreground md:text-lg">
              Na EasyMove, valorizamos seu tempo. Preencha o formulário e receba uma proposta detalhada rapidamente. Nosso processo é transparente, garantindo um preço justo e de alta qualidade.
            </p>
            <p className="text-sm text-muted-foreground">
              Analisamos sua necessidade para oferecer a melhor solução com o melhor custo-benefício.
            </p>
            <RainbowButton asChild>
              <Link href="/orcamento">Receber meu orçamento rápido</Link>
            </RainbowButton>
          </div>
        </div>
      </div>
    </section>
  );
}
