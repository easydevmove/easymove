import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { HeroForm } from '@/components/forms/hero-form';
import { FilePenLine } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function OrcamentoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow flex items-center justify-center py-24 md:py-32">
        <div className="w-full max-w-lg px-4">
             <div className="w-full max-w-lg">
                <h2 className="text-xl lg:text-2xl font-bold text-primary-foreground bg-accent p-3 rounded-t-lg text-center flex items-center justify-center gap-2">
                    <FilePenLine className="h-6 w-6" />
                    <span>Peça seu orçamento rapidamente</span>
                </h2>
            </div>
            <HeroForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
