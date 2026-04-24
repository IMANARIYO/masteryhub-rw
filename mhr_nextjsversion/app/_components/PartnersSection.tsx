import Image from "next/image";
import Link from "next/link";
import type { Partner } from "@/app/_types/home";
import SectionLabel from "@/app/_components/SectionLabel";

interface Props {
  partners: Partner[];
}

export default function PartnersSection({ partners }: Props) {
  const doubled = [...partners, ...partners];

  return (
    <section className="py-14 px-4 bg-[#F0FBFC]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-3">
            <SectionLabel>Our Partners</SectionLabel>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#181d38]">
            Trusted By Industry Leaders
          </h2>
        </div>

        {/* Ticker */}
        <div className="overflow-hidden relative">
          {/* Fade masks */}
          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#F0FBFC] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#F0FBFC] to-transparent z-10 pointer-events-none" />

          <div className="partner-track">
            {doubled.map((partner, i) => (
              <div key={`${partner.id}-${i}`} className="shrink-0 mx-6 flex items-center justify-center">
                <Link href={partner.href} target="_blank" rel="noopener noreferrer" className="block">
                  <Image
                    src={partner.logo}
                    alt={partner.alt}
                    width={140}
                    height={70}
                    className="object-contain max-h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
