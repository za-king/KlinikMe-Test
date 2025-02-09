import Image from "next/image";
import Layout from "@/components/Layout";
import SpesialisComp from "@/components/SpesialisComp";
import FasilitasComp from "@/components/FasilitasComp";
import ReviewsComp from "@/components/ReviewsComp";
import { Star, MapPin } from "lucide-react";
import Link from "next/link";
import BreadcrumbComp from "@/components/BreadcrumbComp";
import { getDetailClinic } from "@/lib/api";

async function KlinikId({ params }) {
  const { id } = params;

  const detailData = await getDetailClinic(id);

  const imagesSmall = [
    "detail_image3.jpg",
    "detail_image.jpg",
    "detail_image3.jpg",
    "detail_image.jpg",
    "detail_image3.jpg",
    "detail_image.jpg",
  ];

  return (
    <Layout>
      <div className="bg-[#F3FEFCff] h-[51rem] rounded-b-[120px] container relative">
        <div className="w-96 h-96 bg-[#abffe4] absolute rounded-full -right-0 opacity-30"></div>
        <div className="pt-10">
          <div className="pb-6">
            <BreadcrumbComp />
          </div>
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
              {imagesSmall.map((image, index) => (
                <div className="relative w-full h-full">
                  <Image
                    src={`/images/details/${image}`}
                    alt="detail-image"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    className={`${index === 2 ? "rounded-tr-2xl" : ""} ${
                      index === 5 ? "rounded-br-2xl" : ""
                    } `}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="pl-4">
            <div className="text-sm font-medium text-center  text-gray-500 border-b-2 w-[32rem] h-full border-gray-200 mt-6 mb-4">
              <ul className="flex flex-wrap ">
                {detailData?.tabs.map((data, index) => {
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
                {detailData.name}
              </p>
            </div>
            <div className="flex justify-between pt-2">
              <div className="text-sm">
                <p className=" font-semibold text-[#3F3E44ff] mb-2">
                  {detailData.type}
                </p>
                <div className="font-thin flex">
                  <MapPin size={14} color="#3F3E44ff" /> {detailData.address}
                </div>
                <div className="flex gap-2">
                  <div className="flex">
                    <Star fill="orange" strokeWidth={0} size={18} />
                    <p>{detailData.rating} | </p>
                  </div>

                  <p className="underline">
                    {" "}
                    {detailData.totalReviews} Reviews
                  </p>
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
            <SpesialisComp
              datas={detailData?.specialists}
              key={detailData.id}
            />
            <FasilitasComp
              datas={detailData.facilities}
              key={detailData.name}
            />
            <ReviewsComp datas={detailData.reviews} key={detailData.id} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default KlinikId;
