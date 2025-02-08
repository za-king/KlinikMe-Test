import Image from "next/image";
const WarningBookComp = () => {
  return (
    <div className="w-[58rem] shadow p-4 rounded-xl bg-[#F3FEFCff] flex items-center gap-4">
      <div>
        <Image src="/images/patterns/succes.png" width={100} height={100} />
      </div>
      <div>
        <p className="text-xl font-semibold mb-2">Pastikan Data Anda Benar</p>
        <p className="font-light text-gray-600">
          Sebelum melanjutkan proses booking, harap pastikan data diri Anda
          sudah benar
        </p>
      </div>
    </div>
  );
};

export default WarningBookComp;
