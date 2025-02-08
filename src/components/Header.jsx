import Link from "next/link";
import Image from "next/image";
const Header = () => {
  return (
    <nav className="container border-b-2 border-zinc-300">
      <div className="flex justify-between my-10">
        <div className="flex text-[#347A7Aff] text-3xl font-bold items-center">
          <p>0 CliniCare</p>
        </div>

        <ul className="flex gap-10 text-slate-600 items-center justify-items-center ">
          <li className="text-[#347A7Aff] font-semibold">
            <Link href={"/"}>Beranda</Link>
          </li>
          <li>
            <Link href={"/layanan"}>Layanan</Link>
          </li>
          <li>
            <Link href={"/klinik"}>Cari Klinik</Link>
          </li>
          <li>
            <Link href={"/"}>Tentang Kami</Link>
          </li>
          <li>
            <Link href={"/"}>Blog</Link>
          </li>
          <li>
            <Link href={"/"}>Hubungi kami</Link>
          </li>
        </ul>

        <div className="w-12 ">
          <Image
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
