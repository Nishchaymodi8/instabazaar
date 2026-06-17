import HeroSection from "./components/home/HeroSection";
import CategoriesSection from "./components/home/CategoriesSection";
import FeaturedProducts from "./components/home/FeaturedProducts";
import TopVendors from "./components/home/TopVendors";
import ReviewsSection from "./components/home/ReviewsSection";
import CTASection from "./components/home/CTASection";
import Footer from "./components/home/Footer";
import Navbar from "./components/layout/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f7fb]">
      <Navbar />

      <HeroSection />

      <CategoriesSection />

      <FeaturedProducts />

      <TopVendors />

      <ReviewsSection />

      <CTASection />

      <Footer />
    </main>
  );
}
