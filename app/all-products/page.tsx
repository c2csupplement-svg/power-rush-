import AllProductsHero from "@/components/AllProducts/AllProductsHero";
import ProductDescription from "@/components/AllProducts/ProductDescription";
import ProductRoutine from "@/components/AllProducts/ProductRoutine";
import DisciplineSection from "@/components/AllProducts/DisciplineSection";
import AllProductsFooter from "@/components/AllProducts/AllProductsFooter";
import BrandMarquee from "@/components/AllProducts/BrandMarquee";
import ProductProgress from "@/components/AllProducts/ProductProgress";

export default function AllProductsPage() {
  return (
    <main className="min-h-screen w-full bg-black">
      <AllProductsHero />
      <ProductDescription />
      <ProductRoutine />
      <DisciplineSection />
      <BrandMarquee/>
      <ProductProgress/>
      <AllProductsFooter />
    </main>
  );
}
