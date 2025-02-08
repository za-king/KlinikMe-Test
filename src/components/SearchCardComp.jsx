import Image from "next/image";

const SearchCardComp = ({ data }) => {
  return (
    <div className="border rounded-lg">
      <div className="p-3 flex gap-3">
        <Image
          src="/images/details/detail_image3.jpg"
          className="rounded-lg "
          width={140}
          height={140}
        />
        <div>
          <div className="border-b-2">
            <p className="">{data.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCardComp;
