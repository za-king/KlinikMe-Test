"use client";
import ReviewCardComp from "./ReviewCardComp";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
const ReviewsComp = ({ datas }) => {
  return (
    <div className="my-12 py-12">
      <p className="text-3xl font-semibold mb-12">Reviews</p>
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
              <ReviewCardComp data={data} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ReviewsComp;
