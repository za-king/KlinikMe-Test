import React from "react";
import {
  Hospital,
  Eye,
  Ear,
  ShieldPlus,
  Bone,
  ClipboardCheck,
} from "lucide-react";
import { data } from "autoprefixer";
import { getCategories } from "@/lib/api";

const CategoryComp = async () => {
  const dataCategories = await getCategories();

  const categoryIcon = {
    Semua: <ClipboardCheck size={48} color="#347A7Aff" strokeWidth={1} />,
    Umum: <Hospital size={48} color="#347A7Aff" strokeWidth={1} />,
    Mata: <Eye size={48} color="#347A7Aff" strokeWidth={1} />,
    Gigi: <ShieldPlus size={48} color="#347A7Aff" strokeWidth={1} />,
    THT: <Ear size={48} color="#347A7Aff" strokeWidth={1} />,
    Fisioterapi: <Bone size={48} color="#347A7Aff" strokeWidth={1} />,
  };

  return (
    <div className="container pb-12">
      <div>
        <p className="text-5xl font-bold text-center text-[#393A3Bff] ">
          Kategori <span className="text-[#347A7Aff]"> Klinik</span>
        </p>
        <ul className="flex justify-around mt-12">
          {dataCategories.map((data) => {
            return (
              <li>
                <div className="rounded-full bg-[#D7F2F3ff] p-8 mb-4">
                  {categoryIcon[data.name]}
                </div>

                <p className="text-center text-[#2BA392ff]">{data.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CategoryComp;
