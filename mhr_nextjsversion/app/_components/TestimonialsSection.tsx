"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { Testimonial } from "@/app/_types/home";
import Autoplay from "embla-carousel-autoplay";
import SectionLabel from "@/app/_components/SectionLabel";

type Props = {
  testimonials: Testimonial[];
};

export default function TestimonialsSection({ testimonials }: Props): React.JSX.Element {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <SectionLabel>Our Inspirations</SectionLabel>
          </div>
        </div>

        <Carousel
          plugins={[Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })]}
          opts={{ loop: true }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((t) => (
              <CarouselItem key={t.id}>
                <div className="text-center px-4 py-4">
                  <div className="relative size-20 mx-auto mb-4">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="rounded-full object-cover border-2 border-white shadow-lg"
                      sizes="80px"
                    />
                  </div>
                  <h5 className="font-bold text-[#181d38] mb-0.5">{t.name}</h5>
                  <p className="text-sm text-muted-foreground italic mb-5">{t.role}</p>

                  <div className="relative bg-white rounded-xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] text-left">
                    <div className="absolute -top-3 left-12 size-5 bg-white rotate-45 shadow-[-3px_-3px_5px_rgba(0,0,0,0.04)]" />
                    <p className="text-gray-600 italic leading-relaxed">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-center gap-4 mt-6">
            <CarouselPrevious className="relative translate-x-0 translate-y-0 left-0 top-0 border-primary text-primary hover:bg-primary hover:text-white" />
            <CarouselNext className="relative translate-x-0 translate-y-0 left-0 top-0 border-primary text-primary hover:bg-primary hover:text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
