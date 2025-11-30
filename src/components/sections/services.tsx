import { services } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";

export default function Services() {
  return (
    <section id="servicos" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Nossos Serviços</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Soluções completas para sua mudança</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Oferecemos tudo que você precisa para uma mudança tranquila, do início ao fim.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 mt-12">
          {services.map((service) => (
            <Card key={service.title} className="text-center h-full flex flex-col">
              <CardHeader className="items-center">
                <div className="rounded-full bg-primary text-primary-foreground p-3 mb-4 flex items-center justify-center h-16 w-16">
                  {service.imageUrl ? (
                    <Image src={service.imageUrl} alt={service.title} width={40} height={40} className="object-contain" />
                  ) : service.icon ? (
                     <service.icon className="h-8 w-8" />
                  ) : null}
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardDescription className="p-4 pt-0">
                {service.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}