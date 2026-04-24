import { GraduationCap, Globe, Wrench, BookOpen } from "lucide-react";
import type { WhyCard } from "@/app/_types/home";

const iconMap = {
  "graduation-cap": GraduationCap,
  globe: Globe,
  wrench: Wrench,
  "book-open": BookOpen,
};

interface Props {
  cards: WhyCard[];
}

export default function WhyJoinUsSection({ cards }: Props) {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-center text-2xl md:text-3xl font-extrabold text-[#181d38] mb-10">
          Why Joining Us!?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            const Icon = iconMap[card.icon];
            return (
              <div
                key={card.id}
                className="group relative overflow-hidden bg-white rounded-xl shadow-lg p-8 text-center transition-all duration-500 hover:-translate-y-2.5 hover:shadow-xl border border-black/3 cursor-default"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-[#11482a] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

                <div className="relative z-10">
                  <Icon className="mx-auto mb-5 size-12 text-primary group-hover:text-white transition-colors duration-500" />
                  <h5 className="text-base font-bold text-[#181d38] group-hover:text-white mb-3 transition-colors duration-500">
                    {card.title}
                  </h5>
                  <p className="text-sm text-gray-600 group-hover:text-white/90 transition-colors duration-500 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
