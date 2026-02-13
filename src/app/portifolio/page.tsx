 "use client";

import Image from "next/image";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Instagram, Star, Play } from "lucide-react";
import { Logo } from "@/components/icons";
import { useRef, useState } from "react";

const photos = [
  {
    src: "/portfolio/1.jpeg",
    alt: "Caixas organizadas durante a mudança.",
  },
  {
    src: "/portfolio/2.png",
    alt: "Equipe descarregando caminhão de mudança.",
  },
  {
    src: "/portfolio/3.png",
    alt: "Ambiente com caixas prontas para transporte.",
  },
  {
    src: "/portfolio/4.jpeg",
    alt: "Itens embalados e protegidos.",
  },
  {
    src: "/portfolio/5.webp",
    alt: "Equipe organizando carga no caminhão.",
  },
  {
    src: "/portfolio/6.png",
    alt: "Carga protegida e pronta para transporte.",
  },
];

const videos = [
  {
    src: "/videos/EASY_1.mp4",
    title: "Mudança residencial completa",
    description: "Equipe organizada, embalagem e transporte seguro.",
    poster: "/videos/c1.png",
  },
  {
    src: "/videos/EASY_2.mp4",
    title: "Operação comercial",
    description: "Logística eficiente para escritórios e empresas.",
    poster: "/videos/c5.png",
  },
  {
    src: "/videos/EASY_3.mp4",
    title: "Equipe em ação",
    description: "Movimentação cuidadosa e transporte seguro no dia a dia.",
    poster: "/videos/c5.png",
  },
];

const steps = [
  {
    title: "Planejamento",
    description: "Entendemos o volume, o acesso do local e o prazo para garantir uma operação sem surpresas.",
  },
  {
    title: "Embalagem",
    description: "Protegemos cada item com materiais adequados e etiquetamos tudo para facilitar a entrega.",
  },
  {
    title: "Transporte",
    description: "Veículos preparados e equipe experiente para levar sua mudança com segurança.",
  },
  {
    title: "Entrega",
    description: "Chegada pontual, organização no destino e suporte para montagem quando necessário.",
  },
];

export default function PortifolioPage() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playing, setPlaying] = useState<Record<string, boolean>>({});

  const handlePlay = (src: string, index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;
    video.play();
    setPlaying((prev) => ({ ...prev, [src]: true }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20">
        <section className="relative overflow-hidden bg-secondary py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full border border-accent/60 bg-accent px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground shadow-sm">
                  Portifólio EasyMove
                </div>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  Nosso trabalho em fotos e vídeos
                </h1>
                <p className="text-muted-foreground text-base sm:text-lg">
                  Veja como cuidamos de cada etapa da mudança, da desmontagem ao transporte. Aqui estão registros reais de
                  operações residenciais e comerciais que mostram nossa organização, segurança e pontualidade.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="https://www.instagram.com/easy.movebr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background px-4 py-2 text-sm font-semibold text-primary transition hover:border-primary hover:text-primary"
                  >
                    <Instagram className="h-4 w-4" />
                    Instagram
                  </a>
                  <a
                    href="https://g.page/r/CUjhPUNZ6_8YEBM/review"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background px-4 py-2 text-sm font-semibold text-primary transition hover:border-primary hover:text-primary"
                  >
                    <Star className="h-4 w-4" />
                    Avaliações no Google
                  </a>
                  <Button
                    asChild
                    className="rounded-full bg-accent text-primary-foreground hover:bg-accent/90"
                  >
                    <a href="https://g.page/r/CUjhPUNZ6_8YEBM/review" target="_blank" rel="noopener noreferrer">
                      Nos avalie
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative h-[320px] w-full overflow-hidden rounded-2xl shadow-lg shadow-black/10 sm:h-[360px]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                  poster="/videos/c2.png"
                  src="/videos/1.mp4"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/70 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-10 flex flex-col gap-3">
              <h2 className="text-2xl font-bold sm:text-3xl">Vídeos das operações</h2>
              <p className="text-muted-foreground">
                Acompanhe a movimentação da nossa equipe em mudanças residenciais e comerciais.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {videos.map((video, index) => (
                <div key={video.src} className="overflow-hidden rounded-2xl bg-background shadow-lg shadow-black/5">
                  <div className="relative aspect-[9/16] bg-black">
                    {!playing[video.src] && (
                      <button
                        type="button"
                        onClick={() => handlePlay(video.src, index)}
                        className="absolute inset-0 z-10 flex items-center justify-center"
                        aria-label={`Assistir ${video.title}`}
                      >
                        <span className="flex items-center gap-3 rounded-xl bg-white/95 px-5 py-3 text-sm font-semibold text-primary shadow-md">
                          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                            <Play className="h-4 w-4" />
                          </span>
                          Clique e assista
                        </span>
                      </button>
                    )}
                    <video
                      controls
                      preload="metadata"
                      className="h-full w-full object-contain"
                      src={video.src}
                      ref={(el) => {
                        videoRefs.current[index] = el;
                      }}
                      onPlay={() => setPlaying((prev) => ({ ...prev, [video.src]: true }))}
                      onPause={() => setPlaying((prev) => ({ ...prev, [video.src]: false }))}
                    />
                  </div>
                  <div className="space-y-2 px-5 py-4">
                    <h3 className="text-lg font-semibold">{video.title}</h3>
                    <p className="text-sm text-muted-foreground">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-10 flex flex-col gap-3">
              <h2 className="text-2xl font-bold sm:text-3xl">Fotos do dia a dia</h2>
              <p className="text-muted-foreground">
                Registros das nossas equipes em ação: organização, cuidado com os bens e logística eficiente.
              </p>
            </div>
            <div className="grid gap-4 lg:grid-cols-12">
              <div className="group relative h-64 overflow-hidden rounded-2xl shadow-md shadow-black/5 sm:h-72 lg:col-span-7 lg:h-[420px]">
                <Image
                  src={photos[0].src}
                  alt={photos[0].alt}
                  fill
                  className="object-cover transition-transform duration-500 scale-105 group-hover:scale-100"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white/30">
                  <Logo className="h-16 w-16 text-primary/45 opacity-60" />
                </div>
              </div>
              <div className="group relative h-64 overflow-hidden rounded-2xl shadow-md shadow-black/5 sm:h-72 lg:col-span-5 lg:h-[420px]">
                <Image
                  src={photos[1].src}
                  alt={photos[1].alt}
                  fill
                  className="object-cover transition-transform duration-500 scale-105 group-hover:scale-100"
                />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white/30">
                  <Logo className="h-16 w-16 text-primary/45 opacity-60" />
                </div>
              </div>
              <div className="group relative h-52 overflow-hidden rounded-2xl shadow-md shadow-black/5 sm:h-60 lg:col-span-4 lg:h-72">
                <Image
                  src={photos[2].src}
                  alt={photos[2].alt}
                  fill
                  className="object-cover transition-transform duration-500 scale-105 group-hover:scale-100"
                />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white/30">
                  <Logo className="h-16 w-16 text-primary/45 opacity-60" />
                </div>
              </div>
              <div className="group relative h-52 overflow-hidden rounded-2xl shadow-md shadow-black/5 sm:h-60 lg:col-span-4 lg:h-72">
                <Image
                  src={photos[3].src}
                  alt={photos[3].alt}
                  fill
                  className="object-cover transition-transform duration-500 scale-105 group-hover:scale-100"
                />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white/30">
                  <Logo className="h-16 w-16 text-primary/45 opacity-60" />
                </div>
              </div>
              <div className="group relative h-52 overflow-hidden rounded-2xl shadow-md shadow-black/5 sm:h-60 lg:col-span-4 lg:h-72">
                <Image
                  src={photos[4].src}
                  alt={photos[4].alt}
                  fill
                  className="object-cover transition-transform duration-500 scale-105 group-hover:scale-100"
                />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white/30">
                  <Logo className="h-16 w-16 text-primary/45 opacity-60" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-10 flex flex-col gap-3">
              <h2 className="text-2xl font-bold sm:text-3xl">Mais registros em sequência</h2>
              <p className="text-muted-foreground">
                Um passeio horizontal para acompanhar a rotina das mudanças.
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Arraste para o lado
              </p>
            </div>
            <div className="relative">
              <div className="flex gap-4 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory">
                {[...photos, ...photos].map((photo, index) => (
                  <div
                    key={`${photo.src}-${index}`}
                    className="group relative h-60 w-[280px] flex-shrink-0 snap-start overflow-hidden rounded-xl shadow-md shadow-black/5 sm:h-64 sm:w-[360px] lg:h-72 lg:w-[420px]"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform duration-500 scale-105 group-hover:scale-100"
                    />
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white/30">
                      <Logo className="h-[52px] w-[52px] text-primary/45 opacity-60" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-10 flex flex-col gap-3">
              <h2 className="text-2xl font-bold sm:text-3xl">Como entregamos qualidade</h2>
              <p className="text-muted-foreground">
                Nossa metodologia garante uma mudança segura, transparente e sem estresse.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {steps.map((step) => (
                <div
                  key={step.title}
                  className="rounded-xl border border-border bg-background p-6 shadow-sm shadow-black/5"
                >
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
