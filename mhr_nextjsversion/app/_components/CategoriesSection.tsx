"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import SectionLabel from "@/app/_components/SectionLabel";
import type { CategoryCard, CategoryFilter } from "@/app/_types/home";

const FILTERS: { label: string; value: CategoryFilter }[] = [
  { label: "All Categories", value: "all" },
  { label: "Tech", value: "tech" },
  { label: "Languages", value: "language" },
  { label: "Music", value: "music" },
];

const badgeColorMap: Record<string, string> = {
  primary: "bg-primary",
  success: "bg-green-500",
  warning: "bg-yellow-500",
  danger: "bg-red-500",
  secondary: "bg-[#11482a]",
};

interface Props {
  categories: CategoryCard[];
}

export default function CategoriesSection({ categories }: Props) {
  const [active, setActive] = useState<CategoryFilter>("all");

  const visible = active === "all" ? categories : categories.filter((c) => c.filter === active);

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <SectionLabel>Browse Categories</SectionLabel>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#181d38] mb-6">
            Explore Our Courses
          </h1>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={cn(
                  "px-5 py-2 rounded-full border-2 font-semibold text-sm transition-all duration-300",
                  active === f.value
                    ? "bg-primary border-[#0e4a20] text-white"
                    : "border-[#0e4a20] text-[#0e4a20] hover:bg-primary hover:text-white hover:border-primary"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((cat) => (
            <div
              key={cat.id}
              className="glass-card flex flex-col h-full transition-all duration-400 hover:-translate-y-2.5 hover:shadow-[0_15px_40px_rgba(6,187,204,0.2)]"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <Image
                  src={cat.image}
                  alt={cat.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <span
                  className={cn(
                    "absolute top-4 right-4 px-4 py-1 rounded-full text-xs font-semibold text-white",
                    badgeColorMap[cat.badgeColor]
                  )}
                >
                  {cat.badge}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <div className="flex justify-between items-center mb-3">
                  <Badge variant="secondary" className="bg-[#F0FBFC] text-[#181d38] font-medium">
                    {cat.programCount} Programs
                  </Badge>
                  <span className="text-primary text-sm font-semibold">{cat.categoryLabel}</span>
                </div>

                <h4 className="text-lg font-bold text-[#181d38] mb-2">{cat.title}</h4>
                <p className="text-sm text-gray-600 mb-4">{cat.description}</p>

                {/* Programs list */}
                <div className="border-y border-black/5 my-2 flex-1">
                  {cat.programs.map((prog, i) => (
                    <div
                      key={i}
                      className={cn(
                        "flex justify-between py-2 text-sm",
                        i < cat.programs.length - 1 && "border-b border-dashed border-black/10"
                      )}
                    >
                      <span className="text-[#181d38]">{prog.name}</span>
                      <span className="text-primary font-semibold">{prog.duration}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={cat.href}
                  className={cn(buttonVariants({ variant: "default" }), "mt-4 w-full bg-primary hover:bg-[#11482a] text-white rounded-full justify-center")}
                >
                  Explore Programs
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
