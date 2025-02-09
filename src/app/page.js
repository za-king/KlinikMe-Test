import Image from "next/image";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SearchComp from "@/components/SearchComp";
import CategoryComp from "@/components/CategoryComp";
import PromoComp from "@/components/PromoComp";
export default function Home() {
  return (
    <Layout>
      <div className="bg-[#F3FEFCff] h-[40rem] relative">
        <div className="w-96 h-96 bg-[#abffe4] absolute rounded-full -right-0 opacity-40"></div>
        <div className="z-100">
          <HeroSection />
          <SearchComp />
          <CategoryComp />
          <PromoComp />
        </div>
      </div>
    </Layout>
  );
}
