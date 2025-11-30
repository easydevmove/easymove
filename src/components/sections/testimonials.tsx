"use client";

import { motion } from "framer-motion";
import { testimonials as testimonialData } from "@/lib/data";
import { TestimonialsColumn } from "@/components/ui/testimonials-column";

// Add placeholder images and adapt data structure
const testimonials = testimonialData.map((t, i) => ({
  text: t.quote,
  image: `https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i + 1}.jpg`,
  name: t.name,
  role: t.location,
}));

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 5);

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-12 md:py-24 lg:py-32 relative">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">O que nossos clientes dizem</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A satisfação de quem confia na EasyMove é nossa maior recompensa.
            </p>
          </div>
        </motion.div>

        <div className="relative flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[640px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={25} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={30} />
          {/* A third column can be added if there are more testimonials */}
          {testimonials.length > 5 && <TestimonialsColumn testimonials={testimonials.slice(5)} className="hidden lg:block" duration={28} />}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
