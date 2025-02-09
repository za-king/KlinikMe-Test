"use client";
import SpesialisCardComp from "./SpesialisCardComp";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
const SpesialisComp = ({ datas }) => {
  return (
    <div className="pt-24 pb-20">
      <p className="text-3xl font-semibold mb-4">
        Spesialis{" "}
        <span className="text-[#357A7Aff]">{`(${datas.length})`}</span>
      </p>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {datas.map((data) => {
          return (
            <SwiperSlide>
              <SpesialisCardComp data={data} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SpesialisComp;
