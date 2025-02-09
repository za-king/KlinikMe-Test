import { Star, Heart } from "lucide-react";
import Image from "next/image";

const SpesialisCardComp = ({ data }) => {
  return (
    <div className=" bg-white shadow-sm border border-slate-200 rounded-lg ">
      <div className="px-2 py-3 flex gap-3">
        <div className="relative w-[7rem] h-[7rem]">
          <Image
            src="/images/details/doctor1.jpg"
            alt="detail-image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="rounded-lg"
          />
        </div>
        <div>
          <div className="flex justify-between border-b-2 w-60 pt-4 py-2">
            <p className="font-semibold">{data.name}</p>
            <Heart strokeWidth={1} size={16} />
          </div>
          <p className="mt-2 mb-1 text-sm font-semibold text-gray-700">
            {data.specialization}
          </p>
          <div className="flex gap-2 text-xs text-gray-600">
            <div className="flex">
              <Star fill="orange" strokeWidth={0} size={16} />
              <p>{data.rating} | </p>
            </div>

            <p className=""> {data.totalReviews} Reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpesialisCardComp;
