"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Clock, GraduationCap, Info, UserPlus, Search, Laptop, BookOpen } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import SectionLabel from "@/app/_components/SectionLabel";
import type { FeaturedCourse } from "@/app/_types/home";

const levelIconMap: Record<string, React.ElementType> = {
  Beginner: GraduationCap,
  "All Levels": Laptop,
  Intermediate: BookOpen,
};

function StarRating({ rating, max = 5 }: { rating: number; max?: number }): React.JSX.Element {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "size-3.5",
            i < rating ? "fill-yellow-400 text-yellow-400" : "text-yellow-400"
          )}
        />
      ))}
    </div>
  );
}

type Props = {
  courses: FeaturedCourse[];
};

export default function FeaturedCoursesSection({ courses }: Props): React.JSX.Element {
  const [selected, setSelected] = useState<FeaturedCourse | null>(null);

  return (
    <section className="py-16 px-4 bg-linear-to-r from-gray-50 to-white">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <SectionLabel>Featured Courses</SectionLabel>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#181d38] mb-3">
            Popular Programs
          </h1>
          <p className="text-muted-foreground text-lg">
            Hands-on learning with industry experts to boost your career
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => {
            const LevelIcon = levelIconMap[course.level] ?? GraduationCap;
            return (
              <div
                key={course.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-400 hover:-translate-y-2.5 hover:shadow-[0_15px_40px_rgba(6,187,204,0.2)] flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <Image
                    src={course.image}
                    alt={course.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <span
                    className={cn(
                      "absolute top-3 right-3 text-white text-xs font-semibold uppercase tracking-wide py-1 px-3 rounded-full",
                      course.badgeColor
                    )}
                  >
                    {course.badge}
                  </span>
                </div>

                {/* Body */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex justify-between items-center mb-3">
                    <Badge variant="secondary" className="bg-gray-100 text-primary gap-1">
                      <Clock className="size-3" /> {course.duration}
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-100 text-green-600 gap-1">
                      <LevelIcon className="size-3" /> {course.level}
                    </Badge>
                  </div>

                  <h4 className="text-lg font-bold text-[#181d38] mb-2">{course.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{course.description}</p>

                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <StarRating rating={course.rating} />
                      <span className="text-xs text-muted-foreground">({course.reviewCount})</span>
                    </div>
                    <Badge className="bg-green-500 hover:bg-green-600 text-white gap-1">
                      <GraduationCap className="size-3" /> Scholarship Available
                    </Badge>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-white"
                      onClick={() => setSelected(course)}
                    >
                      <Info className="size-3.5 mr-1" /> Details
                    </Button>
                    <Link
                      href={course.enrollUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ size: "sm" }),
                        "flex-1 bg-primary hover:bg-[#11482a] text-white whitespace-nowrap justify-center"
                      )}
                    >
                      <UserPlus className="size-3.5 mr-1" /> Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Browse all */}
        <div className="text-center mt-10">
          <Link
            href="/courses"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-primary hover:bg-[#11482a] text-white px-8 rounded-full shadow-lg justify-center"
            )}
          >
            <Search className="size-4 mr-2" /> Browse All Courses
          </Link>
        </div>
      </div>

      {/* Course details dialog */}
      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        {selected && (
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>{selected.title}</DialogTitle>
            </DialogHeader>

            <div className="space-y-4 text-sm">
              <p className="text-muted-foreground">{selected.details.overview}</p>

              <div>
                <h6 className="font-bold text-[#181d38] mb-2">Curriculum</h6>
                <ul className="space-y-1 list-disc list-inside text-muted-foreground">
                  {selected.details.curriculum.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h6 className="font-bold text-[#181d38] mb-2">Requirements</h6>
                <ul className="space-y-1 list-disc list-inside text-muted-foreground">
                  {selected.details.requirements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h6 className="font-bold text-[#181d38] mb-2">What you&apos;ll gain</h6>
                <ul className="space-y-1 list-disc list-inside text-muted-foreground">
                  {selected.details.outcomes.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <DialogFooter className="gap-2 sm:gap-0">
              <Button variant="outline" onClick={() => setSelected(null)}>Close</Button>
              <Link
                href={selected.enrollUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants(), "bg-primary hover:bg-[#11482a] text-white justify-center")}
              >
                Enroll Now
              </Link>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
