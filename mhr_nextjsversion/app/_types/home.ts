export interface HeroSlide {
  id: string;
  image: string;
  alt: string;
  tag: string;
  title: string;
  subtitle?: string;
  description: string;
  descriptionHidden?: string;
  primaryCta: { label: string; href: string; external?: boolean };
  secondaryCta: { label: string; href: string; external?: boolean };
}

export type CategoryFilter = "all" | "tech" | "language" | "music";

export interface CourseProgram {
  name: string;
  duration: string;
}

export interface CategoryCard {
  id: string;
  image: string;
  alt: string;
  badge: string;
  badgeColor: "primary" | "success" | "warning" | "danger" | "secondary";
  programCount: number;
  categoryLabel: string;
  filter: CategoryFilter;
  title: string;
  description: string;
  programs: CourseProgram[];
  href: string;
}

export interface WhyCard {
  id: string;
  icon: "graduation-cap" | "globe" | "wrench" | "book-open";
  title: string;
  description: string;
}

export interface CourseDetails {
  overview: string;
  curriculum: string[];
  requirements: string[];
  outcomes: string[];
}

export interface FeaturedCourse {
  id: string;
  image: string;
  alt: string;
  badge: string;
  badgeColor: string;
  duration: string;
  level: string;
  title: string;
  description: string;
  rating: number;
  reviewCount: number;
  enrollUrl: string;
  details: CourseDetails;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  href: string;
  alt: string;
}
