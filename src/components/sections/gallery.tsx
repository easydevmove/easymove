import Image from "next/image";
import { galleryImages } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Gallery() {
  const extendedImages = [...galleryImages, ...galleryImages];

  return (
    <section id="fotos" className="w-full py-12 md:py-24 lg:py-32 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Galeria</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Um pouco do nosso trabalho para você conhecer a qualidade EasyMove.
            </p>
          </div>
        </div>
      </div>
      <div
        className="w-max flex gap-4 animate-scroll [animation-duration:40s]"
        aria-hidden="true"
      >
        {extendedImages.map((image, index) => (
          <div key={`${image.id}-${index}`} className="relative w-[400px] h-[300px] flex-shrink-0">
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover rounded-lg"
                data-ai-hint={image.imageHint}
              />
          </div>
        ))}
      </div>
    </section>
  );
}
