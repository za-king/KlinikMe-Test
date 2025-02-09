import Image from "next/image";
const PromoComp = () => {
  return (
    <div className="container pb-12">
      <div>
        <p className="text-5xl font-bold text-center text-[#393A3Bff] ">
          Promo <span className="text-[#347A7Aff]"> Menarik</span>
        </p>
        <div className="my-12 flex gap-4">
          <div className="relative w-[50%] h-[20rem]">
            <Image
              src="/images/promo1.jpg"
              alt="detail-image"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-2xl brightness-50"
            />
            <div className=" rounded-xl  absolute p-2 w-96 left-10 inset-x-0 top-10 text-white">
              <p className=" text-4xl font-semibold mb-4">
                Looking for spesialist Doctor?
              </p>
              <p className="font-[50]">
                Shedule an appoinment with our doctors
              </p>
            </div>
          </div>
          <div className="relative w-[50%] h-[20rem]">
            <Image
              src="/images/promo2.jpg"
              alt="detail-image"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-2xl brightness-50"
            />
            <div className=" rounded-xl  absolute p-2 w-96 left-10 inset-x-0 top-10 text-white">
              <p className=" text-4xl font-semibold mb-4 ">
                Looking for spesialist Doctor?
              </p>
              <p className="font-[50]">
                Shedule an appoinment with our doctors
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoComp;
