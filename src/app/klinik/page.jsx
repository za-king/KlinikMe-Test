import Layout from "@/components/Layout";
import MainCard from "@/components/MainCard";
import { getClinics } from "@/lib/api";
async function Klinik() {
  const clinics = await getClinics();

  return (
    <Layout>
      <div className="container">
        <div className="grid grid-cols-3">
          {clinics.map((clinic) => (
            <MainCard data={clinic} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Klinik;
