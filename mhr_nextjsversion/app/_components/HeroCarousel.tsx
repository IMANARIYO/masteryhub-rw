"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { HeroSlide } from "@/app/_types/home";
import Autoplay from "embla-carousel-autoplay";

type Props = {
  slides: HeroSlide[];
};

export default function HeroCarousel({ slides }: Props): React.JSX.Element {
  return (
    <div className="w-full mb-10">
      <Carousel
        plugins={[Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true })]}
        opts={{ loop: true }}
        className="w-full"
      >
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative min-h-[80vh] md:min-h-screen overflow-hidden">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[rgba(24,29,56,0.88)] to-[rgba(24,29,56,0.55)]" />

                <div className="relative z-10 flex items-center h-full min-h-[80vh] md:min-h-screen">
                  <div className="container mx-auto px-6 lg:px-12">
                    <div className="max-w-2xl">
                      <h5 className="text-primary uppercase font-bold tracking-widest mb-3 text-sm md:text-base">
                        {slide.tag}
                      </h5>
                      <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-2 leading-tight [text-shadow:0_2px_10px_rgba(0,0,0,0.3)]">
                        {slide.title}
                      </h1>
                      {slide.subtitle && (
                        <h3 className="text-primary text-xl md:text-2xl font-bold mb-3">
                          {slide.subtitle}
                        </h3>
                      )}
                      <p className="text-white/90 text-base md:text-lg mb-2 leading-relaxed">
                        {slide.description}
                      </p>
                      {slide.descriptionHidden && (
                        <p className="hidden md:block text-white/80 text-base mb-4 leading-relaxed">
                          {slide.descriptionHidden}
                        </p>
                      )}
                      <div className="flex flex-wrap gap-3 mt-6">
                        <Link
                          href={slide.primaryCta.href}
                          {...(slide.primaryCta.external
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          className={cn(
                            buttonVariants({ variant: "default" }),
                            "bg-primary hover:bg-[#11482a] text-white font-semibold px-6 rounded-full hover:-translate-y-0.5 transition-transform"
                          )}
                        >
                          {slide.primaryCta.label}
                          {slide.primaryCta.external && (
                            <ExternalLink className="ml-2 size-4" />
                          )}
                        </Link>
                        <Link
                          href={slide.secondaryCta.href}
                          {...(slide.secondaryCta.external
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          className={cn(
                            buttonVariants({ variant: "outline" }),
                            "bg-white/10 border-white text-white hover:bg-white hover:text-primary font-semibold px-6 rounded-full hover:-translate-y-0.5 transition-transform"
                          )}
                        >
                          {slide.secondaryCta.label}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
          <CarouselPrevious className="relative translate-x-0 translate-y-0 left-0 top-0 size-12 rounded-full bg-white/20 border-white/30 text-white hover:bg-primary hover:border-primary backdrop-blur-sm transition-all" />
          <CarouselNext className="relative translate-x-0 translate-y-0 left-0 top-0 size-12 rounded-full bg-white/20 border-white/30 text-white hover:bg-primary hover:border-primary backdrop-blur-sm transition-all" />
        </div>
      </Carousel>
    </div>
  );
}
