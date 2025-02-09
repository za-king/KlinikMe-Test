"use client";
import React, { useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import useFormStore from "@/store/formStore";
import { useRouter } from "next/navigation";
const FormComp = ({ id }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formRef = useRef(null);
  const setFormRef = useFormStore((state) => state.setFormRef);

  useEffect(() => {
    setFormRef(formRef.current);
  }, [setFormRef]);

  const onSubmit = async (data) => {
    console.log(data);

    try {
      const response = await fetch("http://localhost:3002/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        router.push(`/klinik/${id}/booking/succes`);
      } else {
        console.error("Failed to book.");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const isDateValid = (value) => {
    const selectedDate = new Date(value);
    const today = new Date();

    today.setHours(0, 0, 0, 0);
    return (
      selectedDate < today || "Tanggal lahir tidak boleh hari ini atau lebih"
    );
  };
  return (
    <form className="mt-6" ref={formRef} onSubmit={handleSubmit(onSubmit)}>
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
            {...register("NamaLengkap", {
              required: "Nama tidak boleh kosong",
            })}
            id="first_name"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
          />
          <p className="text-red-500 text-sm">{errors.NamaLengkap?.message}</p>
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
            {...register("NoHp", {
              required: "No HP tidak boleh kosong",
              maxLength: { value: 13, message: "No HP maksimal 13 karakter" },
            })}
            id="first_name"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700   "
          />
          <p className="text-red-500 text-sm">{errors.NoHp?.message}</p>
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
            {...register("JenisKelamin")}
          >
            <option value="Perempuan">Perempuan</option>
            <option value="Laki-Laki">Laki-Laki</option>
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
            {...register("TanggalLahir", {
              required: "Tanggal lahir wajib diisi",
              validate: isDateValid,
            })}
            id="first_name"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
          />
          <p className="text-red-500 text-sm">{errors.TanggalLahir?.message}</p>
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
            {...register("AlamatLengkap")}
            id="first_name"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>
    </form>
  );
};

export default FormComp;
