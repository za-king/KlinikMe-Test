import Layout from "@/components/Layout";
import MainCard from "@/components/MainCard";
const getClinics = async () => {
  const res = await fetch("http://localhost:3002/api/clinics");
  return res.json();
};
async function Klinik() {
  const datas = await getClinics();

  return (
    <Layout>
      <div className="container">
        <div className="grid grid-cols-3">
          {datas.map((data) => (
            <MainCard data={data} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Klinik;
