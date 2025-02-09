import Layout from "@/components/Layout";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import WarningBookComp from "@/components/WarningBookComp";
import FormComp from "@/components/FormComp";
import ProfileBookComp from "@/components/ProfileBookComp";

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
            <FormComp id={id} />
          </div>
          <div>
            <ProfileBookComp datas={datas} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Booking;
