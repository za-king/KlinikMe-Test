import Image from "next/image";

Image;
function Succes() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center text-center justify-items-center text-gray-700">
      <Image src="/images/patterns/succes1.png" width={200} height={200} />
      <p className="text-2xl font-semibold mt-2">Sukses !</p>
      <p className="text-2xl font-semibold mb-2">
        Anda berhasil buat janji di Klinik Umum dr.Nurbania
      </p>
      <p className="text-lg ">
        Pihak klinik akan mengirimkan konfirmasi booking ke nomor handphone Anda
      </p>
    </div>
  );
}

export default Succes;
