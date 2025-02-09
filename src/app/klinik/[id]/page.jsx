import Image from "next/image";
import Layout from "@/components/Layout";
import SpesialisComp from "@/components/SpesialisComp";
import FasilitasComp from "@/components/FasilitasComp";
import ReviewsComp from "@/components/ReviewsComp";
import { Star, MapPin } from "lucide-react";
import Link from "next/link";
const getDetail = async (id) => {
  const res = await fetch(`http://localhost:3002/api/clinics/${id}`);
  return res.json();
};

async function KlinikId({ params }) {
  const { id } = params;

  const datas = await getDetail(id);
  console.log(datas);
  return (
    <Layout>
      <div className="bg-[#F3FEFCff] h-[51rem] rounded-b-[120px] container relative">
        <div className="w-96 h-96 bg-[#abffe4] absolute rounded-full -right-0 opacity-30"></div>
        <div className="pt-10">
          <div className="pb-6">Beranda - Klinik</div>
          <div className="grid grid-cols-2 gap-2">
            <div className="relative w-full h-[27.5rem]">
              <Image
                src="/images/details/detail_image3.jpg"
                alt="detail-image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="rounded-tl-2xl rounded-bl-2xl "
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="relative w-full h-full">
                <Image
                  src="/images/details/detail_image3.jpg"
                  alt="detail-image"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className=" "
                />
              </div>
              <div className="relative w-full h-full">
                <Image
                  src="/images/details/detail_image.jpg"
                  alt="detail-image"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className=" "
                />
              </div>
              <div className="relative w-full h-full">
                <Image
                  src="/images/details/detail_image3.jpg"
                  alt="detail-image"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className=" rounded-tr-2xl "
                />
              </div>
              <div className="relative w-full h-full">
                <Image
                  src="/images/details/detail_image.jpg"
                  alt="detail-image"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className=" "
                />
              </div>
              <div className="relative w-full h-full">
                <Image
                  src="/images/details/detail_image3.jpg"
                  alt="detail-image"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className=" "
                />
              </div>
              <div className="relative w-full h-full">
                <Image
                  src="/images/details/detail_image.jpg"
                  alt="detail-image"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className="  rounded-br-2xl"
                />
              </div>
            </div>
          </div>

          <div className="pl-4">
            <div className="text-sm font-medium text-center  text-gray-500 border-b-2 w-[32rem] h-full border-gray-200 mt-6 mb-4">
              <ul className="flex flex-wrap ">
                {datas?.tabs.map((data, index) => {
                  return (
                    <li className="me-2">
                      <a
                        href="#"
                        className={
                          index === 0
                            ? "inline-block p-4 text-[#357A7Aff] border-b-4 border-[#357A7Aff] rounded-t-lg active  "
                            : `inline-block p-4 border-b-4 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300`
                        }
                      >
                        {data}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <p className="text-4xl font-semibold text-[#1F2B36ff] pt-6 pb-4">
                {datas.name}
              </p>
            </div>
            <div className="flex justify-between pt-2">
              <div className="text-sm">
                <p className=" font-semibold text-[#3F3E44ff] mb-2">
                  {datas.type}
                </p>
                <div className="font-thin flex">
                  <MapPin size={14} color="#3F3E44ff" /> {datas.address}
                </div>
                <div className="flex gap-2">
                  <div className="flex">
                    <Star fill="orange" strokeWidth={0} size={18} />
                    <p>{datas.rating} | </p>
                  </div>

                  <p className="underline"> {datas.totalReviews} Reviews</p>
                </div>
              </div>
              <div>
                <Link
                  href={`/klinik/${id}/booking`}
                  className="flex py-4 px-6 bg-gradient-to-r  bg-[#357A7Aff] rounded-[12px] text-white  "
                >
                  Book Appointment
                </Link>
              </div>
            </div>
            <SpesialisComp datas={datas?.specialists} key={datas.id} />
            <FasilitasComp datas={datas.facilities} key={datas.name} />
            <ReviewsComp datas={datas.reviews} key={datas.id} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default KlinikId;
