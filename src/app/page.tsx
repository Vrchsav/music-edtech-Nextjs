import dynamic from "next/dynamic";

// Lazy load the components
const HeroSection = dynamic(() => import("@/components/HeroSection"));
const FeaturedCourses = dynamic(() => import("../components/FeaturedCourses"));
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"));
const TestimonialCards = dynamic(() => import("@/components/TestimonialCards"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <TestimonialCards />
      <Footer />
    </main>
  );
}
