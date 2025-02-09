import { Star } from "lucide-react";
import React from "react";

const ReviewCardComp = ({ data }) => {
  return (
    <div className="p-4  shadow-lg rounded-xl bg-[#F3FEFCff] ">
      <p className="text-[#347A7Aff] font-semibold mb-2">{data.userName}</p>

      <div className="flex items-center mb-2 text-gray-600">
        <div className="text-gray-600 text-xs font-semibold">{`(${data.rating})`}</div>
        <div className="flex">
          <Star fill="orange" strokeWidth={0} size={18} />
          <Star fill="orange" strokeWidth={0} size={18} />
          <Star fill="orange" strokeWidth={0} size={18} />
          <Star fill="orange" strokeWidth={0} size={18} />
          <Star fill="orange" strokeWidth={0} size={18} />
        </div>
      </div>
      <div className="w-80 text-sm text-gray-600">
        <p>{data.comment}</p>
      </div>
    </div>
  );
};

export default ReviewCardComp;
