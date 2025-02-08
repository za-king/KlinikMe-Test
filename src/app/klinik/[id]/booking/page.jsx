import Layout from "@/components/Layout";
import Link from "next/link";
import {
  ChevronLeft,
  CircleUserRound,
  MapPin,
  Phone,
  CalendarDays,
  Clock,
} from "lucide-react";
import WarningBookComp from "@/components/WarningBookComp";
const getDetailBooking = async (id) => {
  const res = await fetch(`http://localhost:3002/api/clinics/${id}`);
  return res.json();
};
async function Booking({ params }) {
  const { id } = params;
  const datas = await getDetailBooking(id);

  return (
    <Layout>
      <div className="container">
        <div className="py-12  border-b-2">
          <Link href={`/klinik/${id}`} className=" flex gap-4 items-center">
            <ChevronLeft size={28} />
            <p className="text-2xl ">Form Booking</p>
          </Link>
        </div>
        <div className="py-6 flex gap-8">
          <div>
            <WarningBookComp />
            <form className="mt-6">
              <div class="grid gap-6 mb-6 md:grid-cols-3">
                <div className="col-span-2">
                  <label
                    for="first_name"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Name Lengkap <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
                    required
                  />
                </div>
                <div>
                  <label
                    for="first_name"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    No HP <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700   "
                    required
                  />
                </div>
                <div>
                  <label
                    for="gender"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Jenis Kelamin
                  </label>
                  <select
                    id="gender"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
                  >
                    <option value="US">Perempuan</option>
                    <option value="CA">Laki-Laki</option>
                  </select>
                </div>
                <div>
                  <label
                    for="first_name"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Tanggal Lahir
                  </label>
                  <input
                    type="date"
                    id="first_name"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
                    required
                  />
                </div>
                <div>
                  <label
                    for="first_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Alamat Lengkap
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
              </div>
            </form>
          </div>
          <div>
            <div className=" shadow rounded-[20px] bg-[url('/images/patterns/wave.svg')] bg-no-repeat bg-bottom">
              <div className="p-8">
                <div className="flex gap-4 border-b-2 pb-4 mb-6">
                  <div className="rounded-full bg-[#D7F2F3ff] p-4 ">
                    <CircleUserRound
                      size={40}
                      color="#347A7Aff"
                      strokeWidth={2}
                    />
                  </div>
                  <div>
                    <p>dr. Nurbania Rizky</p>
                    <p>Pelayanan Dokter Umum</p>
                  </div>
                </div>

                <div className="border-b-2 pb-4 mb-6">
                  <p className="mb-2 text-lg">{datas.name}</p>
                  <div className="font-thin flex items-center gap-4 mb-2 text-gray-700">
                    <MapPin size={18} color="#3F3E44ff" /> {datas.address}
                  </div>
                  <div className="flex items-center gap-4 text-gray-700">
                    <Phone size={18} color="#3F3E44ff" />
                    {`(021) 8765659`}
                  </div>
                </div>

                <div className="mb-28">
                  <p className="mb-2 text-lg">Jadwal Booking</p>
                  <div className="flex items-center gap-4 text-gray-700">
                    <CalendarDays size={18} color="#3F3E44ff" />
                    <p>{`Senin , 21 Juni 2024`}</p>
                  </div>
                  <div className="flex items-center gap-4 text-gray-700">
                    <Clock size={18} color="#3F3E44ff" />
                    <p>{`07:00 WIB`}</p>
                  </div>
                </div>
                <div>
                  <Link href={`/klinik/${id}/booking/succes`}>
                    <button className="w-full bg-[#347A7Aff] p-2 rounded-full text-white">
                      Buat Janji
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Booking;
