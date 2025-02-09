import Image from "next/image";
import { MapPin, Star } from "lucide-react";
const SearchCardComp = ({ data }) => {
  return (
    <div className="border rounded-lg cursor-pointer">
      <div className="p-3 flex gap-3">
        <Image
          src="/images/details/detail_image3.jpg"
          className="rounded-lg "
          width={140}
          height={140}
        />
        <div>
          <div className="border-b w-[60rem] ">
            <p className="">{data.name}</p>
          </div>
          <div className="text-sm mt-2">
            <p className=" font-semibold text-[#3F3E44ff] mb-2">{data.type}</p>
            <div className="font-thin gap-1 flex items-center text-xs text-gray-700">
              <MapPin size={14} color="#3F3E44ff" /> {data.address}
            </div>
            <div className="flex gap-2">
              <div className="flex gap-1 items-center text-xs text-gray-700">
                <Star fill="orange" strokeWidth={0} size={18} />
                <p>{data.rating} | </p>
              </div>

              <p className=" text-xs text-gray-700">
                {data.totalReviews} Reviews
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCardComp;
