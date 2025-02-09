"use client";
import useFormStore from "@/store/formStore";
import {
  CircleUserRound,
  MapPin,
  Phone,
  CalendarDays,
  Clock,
} from "lucide-react";
const ProfileBookComp = ({ datas }) => {
  const submitForm = useFormStore((state) => state.submitForm);
  return (
    <div className=" shadow rounded-[20px] bg-[url('/images/patterns/wave.svg')] bg-no-repeat bg-bottom">
      <div className="p-8">
        <div className="flex gap-4 border-b-2 pb-4 mb-6">
          <div className="rounded-full bg-[#D7F2F3ff] p-4 ">
            <CircleUserRound size={40} color="#347A7Aff" strokeWidth={2} />
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
          <button
            onClick={submitForm}
            className="w-full bg-[#347A7Aff] p-2 rounded-full text-white"
          >
            Buat Janji
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileBookComp;
