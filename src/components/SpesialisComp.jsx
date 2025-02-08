import SpesialisCardComp from "./SpesialisCardComp";

const SpesialisComp = ({ datas }) => {
  return (
    <div className="pt-24 pb-20">
      <p className="text-3xl font-semibold">
        Spesialis <span className="text-[#357A7Aff]">(3)</span>
      </p>
      <div className="flex gap-2 my-4">
        {datas.map((data) => {
          return <SpesialisCardComp data={data} />;
        })}
      </div>
    </div>
  );
};

export default SpesialisComp;
