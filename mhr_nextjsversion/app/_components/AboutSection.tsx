import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/app/_components/SectionLabel";

const benefits = [
  "We Value Your Time.",
  "We are Here for you.",
  "Collaborate with Like-Minds.",
  "Get Valuable Skill set.",
  "Recognisable Certification.",
  "Well Organised Course Contents.",
];

export default function AboutSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Logo / image */}
          <div className="relative min-h-[300px] lg:min-h-[400px] rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.1)]">
            <Image
              src="/img/MHR LOGO.png"
              alt="About Mastery Hub of Rwanda"
              fill
              className="object-contain p-6"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Text content */}
          <div>
            <div className="flex justify-center lg:justify-start mb-4">
              <SectionLabel>About Us</SectionLabel>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#181d38] mb-6 text-center lg:text-left">
              Welcome to MHR
            </h1>
            <p className="text-gray-600 leading-relaxed mb-4">
              Mastery Hub of Rwanda was founded with a vision to bridge the gap between talent,
              technology, and opportunity. In today's fast-changing world, acquiring practical skills
              is essential for success. Recognizing this, we established Mastery Hub to provide
              accessible, high-quality training in ICT, music, literacy, and cultural arts. Our goal
              is to empower children and adults with the tools they need to thrive, whether in
              education, employment, or entrepreneurship.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              As part of our broader initiative, we also run a dedicated branch called The Semicolon,
              which focuses specifically on software programming — nurturing future developers through
              hands-on coding projects, mentorship, and tech-driven problem-solving.
            </p>

            <h6 className="font-bold text-[#181d38] mb-4">Benefits Of Learning with Us:</h6>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-2">
                  <ArrowRight className="size-4 text-primary shrink-0" />
                  <span className="text-sm text-gray-700">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
