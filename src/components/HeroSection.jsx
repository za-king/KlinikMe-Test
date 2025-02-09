import { ChevronRight, Star, StarHalf } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className=" container pt-12">
      <div className="grid grid-cols-2">
        <div>
          <div className="text-5xl font-bold">
            <p className="text-[#347A7Aff] mb-1 ">Partner Kepercayan</p>
            <p className="text-[#393A3Bff] mb-1">Anda dalam Mencari </p>
            <p className="text-[#393A3Bff]">Klinik Kesehatan</p>
          </div>
          <div className="pt-8">
            <p className="text-[#393A3Bff] w-[90%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div className="pt-8">
            <button className="flex items-center py-4 px-10 bg-gradient-to-r from-[#2BA392ff] to-[#357A7Aff] rounded-[12px] text-white text-xl font-semibold">
              Book an appointment
              <ChevronRight size={24} strokeWidth={3} />
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="relative w-full h-[30rem]">
            <Image
              src="/images/hero1.jpg"
              alt="detail-image"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-2xl"
            />
            <div className="bg-white rounded-xl  absolute p-2 w-72 -left-6 inset-x-0 bottom-10">
              <div className="flex">
                <Star
                  fill="#347A7Aff"
                  strokeWidth={0}
                  size={24}
                  className="mx-4 bg-[#deffff] rounded-md"
                />
                <p className="text-[#347A7Aff] font-semibold">
                  mudah untuk buat janji
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg  absolute p-4  bottom-40 -right-8 border-2 border-[#acf5f5] ">
              <div className="flex items-center gap-4">
                <div className="flex items-center -space-x-4">
                  <Image
                    alt="user 1"
                    width={400}
                    height={400}
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                    class="relative inline-block h-10 w-10 !rounded-full  border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                  />
                  <Image
                    alt="user 2"
                    width={400}
                    height={400}
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                    class="relative inline-block h-10 w-10 !rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                  />
                  <Image
                    alt="user 3"
                    width={400}
                    height={400}
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1288&amp;q=80"
                    class="relative inline-block h-10 w-10 !rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                  />
                  <Image
                    alt="user 4"
                    width={400}
                    height={400}
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1287&amp;q=80"
                    class="relative inline-block h-10 w-10 !rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                  />
                </div>
                <p className="text-2xl text-gray-700 font-semibold">
                  1400 <span className="text-[#347A7Aff]">+</span>
                </p>
              </div>
              <p className="text-[#347A7Aff] font-semibold my-2">
                Happy Customers
              </p>
              <div className="flex items-center">
                <div className="flex">
                  <Star fill="orange" strokeWidth={0} size={18} />
                  <Star fill="orange" strokeWidth={0} size={18} />
                  <Star fill="orange" strokeWidth={0} size={18} />
                  <Star fill="orange" strokeWidth={0} size={18} />
                  <StarHalf fill="orange" strokeWidth={0} size={18} />
                </div>
                <div className="text-gray-600 text-xs font-semibold">{`(4.7 Starts)`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
