"use client";
import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import Link from "next/link";
import SearchCardComp from "./SearchCardComp";
const SearchComp = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [debouncedSearch] = useDebounce(search, 500);

  useEffect(() => {
    const fetchData = async () => {
      if (debouncedSearch) {
        setLoading(true);
        try {
          const response = await fetch(`/api/clinics?name=${debouncedSearch}`, {
            mode: "no-cors",
          });
          const data = await response.json();
          console.log(data);
          setResults(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
        setLoading(false);
      } else {
        setResults([]);
      }
    };

    fetchData();
  }, [debouncedSearch]);
  console.log(debouncedSearch);
  return (
    <div className="container py-12">
      <div className="border-2 border-[#2BA392ff] rounded-[26px] py-12 px-10 bg-white relative">
        <p className="text-3xl pb-8 font-semibold text-[#347A7Aff]">
          Cari Klinik Pilihan Anda
        </p>
        <div className="w-full  min-w-[200px] ">
          <div className="relative flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="absolute w-6 h-6 top-3.5 left-2.5 text-slate-600"
            >
              <path
                fill-rule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clip-rule="evenodd"
              />
            </svg>

            <input
              className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-300 rounded-[14px] pl-10 pr-3 py-4  transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Cari Klinik"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div>
          {results.length > 0 && (
            <div className="absolute left-0 mx-12 right-0 mt-2 bg-white border border-gray-200 rounded-[15px] shadow-xl z-10">
              <div className=" px-12 py-4">
                <div>
                  <p>Hasil untuk "{search}"</p>
                </div>

                <ul>
                  {results.map((result, index) => (
                    <li key={index} className="mb-2">
                      <SearchCardComp data={result} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchComp;
