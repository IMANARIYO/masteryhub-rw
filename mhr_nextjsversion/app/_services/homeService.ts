import {
  heroSlides,
  categoryCards,
  whyCards,
  featuredCourses,
  testimonials,
  partners,
} from "../_data/homeData";
import type {
  HeroSlide,
  CategoryCard,
  WhyCard,
  FeaturedCourse,
  Testimonial,
  Partner,
} from "../_types/home";

export async function getHeroSlides(): Promise<HeroSlide[]> {
  return heroSlides;
}

export async function getCategoryCards(): Promise<CategoryCard[]> {
  return categoryCards;
}

export async function getWhyCards(): Promise<WhyCard[]> {
  return whyCards;
}

export async function getFeaturedCourses(): Promise<FeaturedCourse[]> {
  return featuredCourses;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return testimonials;
}

export async function getPartners(): Promise<Partner[]> {
  return partners;
}
