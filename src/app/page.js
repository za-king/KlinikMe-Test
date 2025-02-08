import Image from "next/image";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SearchComp from "@/components/SearchComp";
import CategoryComp from "@/components/CategoryComp";
import PromoComp from "@/components/PromoComp";
export default function Home() {
  return (
    <Layout>
      <div className="bg-[#F3FEFCff] h-[40rem]">
        <HeroSection />
        <SearchComp />
        <CategoryComp />
        <PromoComp />
      </div>
    </Layout>
  );
}
