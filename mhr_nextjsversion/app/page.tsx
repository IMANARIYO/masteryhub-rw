import {
  getHeroSlides,
  getCategoryCards,
  getWhyCards,
  getFeaturedCourses,
  getTestimonials,
  getPartners,
} from "./_services/homeService";
import HeroCarousel from "./_components/HeroCarousel";
import CategoriesSection from "./_components/CategoriesSection";
import WhyJoinUsSection from "./_components/WhyJoinUsSection";
import FeaturedCoursesSection from "./_components/FeaturedCoursesSection";
import AboutSection from "./_components/AboutSection";
import TestimonialsSection from "./_components/TestimonialsSection";
import PartnersSection from "./_components/PartnersSection";
import Footer from "./_components/Footer";
import FloatingEnrollButton from "./_components/FloatingEnrollButton";

export default async function HomePage() {
  const [slides, categories, whyCards, courses, testimonials, partners] =
    await Promise.all([
      getHeroSlides(),
      getCategoryCards(),
      getWhyCards(),
      getFeaturedCourses(),
      getTestimonials(),
      getPartners(),
    ]);

  return (
    <>
      <HeroCarousel slides={slides} />
      <CategoriesSection categories={categories} />
      <WhyJoinUsSection cards={whyCards} />
      <FeaturedCoursesSection courses={courses} />
      <AboutSection />
      <TestimonialsSection testimonials={testimonials} />
      <PartnersSection partners={partners} />
      <Footer />
      <FloatingEnrollButton />
    </>
  );
}
