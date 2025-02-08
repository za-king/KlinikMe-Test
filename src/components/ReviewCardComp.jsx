import React from "react";

const ReviewCardComp = ({ data }) => {
  return (
    <div className="p-4 shadow">
      <p>{data.userName}</p>
      <div>{data.rating}</div>
      <p>{data.comment}</p>
    </div>
  );
};

export default ReviewCardComp;
