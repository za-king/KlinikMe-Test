import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className=" container pt-12">
      <div className="grid grid-cols-2">
        <div>
          <div className="text-5xl font-bold">
            <p className="text-[#347A7Aff] ">Partner Kepercayan</p>
            <p className="text-[#393A3Bff]">Anda dalam Mencari </p>
            <p className="text-[#393A3Bff]">Klinik Kesehatan</p>
          </div>
          <div className="pt-8">
            <p className="text-[#393A3Bff] w-[80%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div className="pt-8">
            <button className="flex py-4 px-10 bg-gradient-to-r from-[#2BA392ff] to-[#357A7Aff] rounded-[12px] text-white text-xl font-semibold">
              Book an appointment
              <ChevronRight />
            </button>
          </div>
        </div>
        <div>kanan</div>
      </div>
    </div>
  );
};

export default HeroSection;
