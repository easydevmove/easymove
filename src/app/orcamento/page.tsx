import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function OrcamentoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="relative flex-grow flex items-center justify-center py-20 sm:py-24 md:py-32">
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
        <div className="relative z-10 w-full max-w-lg px-4 sm:px-6">
          <div className="w-full max-w-lg">
            <div className="rounded-xl overflow-hidden shadow-lg shadow-black/10">
              <div className="bg-accent px-4 py-3">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary-foreground text-center">
                  Faça seu orçamento abaixo:
                </h2>
              </div>
              <iframe
                src="https://typebot.co/my-typebot-56svpgh"
                style={{ border: 'none', width: '100%', height: 600, borderRadius: 0, display: 'block' }}
                title="Peça orçamento"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
