import ReviewCardComp from "./ReviewCardComp";
const ReviewsComp = ({ datas }) => {
  return (
    <div className="my-12 py-12">
      <p className="text-3xl font-semibold mb-12">Reviews</p>
      <div className="flex gap-4 ">
        {datas.map((data) => {
          return <ReviewCardComp data={data} />;
        })}
      </div>
    </div>
  );
};

export default ReviewsComp;
