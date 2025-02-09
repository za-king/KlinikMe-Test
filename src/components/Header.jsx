"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Stethoscope } from "lucide-react";

const Header = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Beranda", href: "/" },
    { name: "Layanan", href: "/layanan" },
    { name: "Cari Klinik", href: "/klinik" },
    { name: "Tentang Kami", href: "/tentangkami" },
    { name: "Blog", href: "/blog" },
    { name: "Hubungi Kami", href: "/hubungikami" },
  ];
  return (
    <nav className="container border-b-2 border-zinc-300">
      <div className="flex justify-between my-10">
        <div className="flex text-[#347A7Aff] text-3xl font-bold items-center">
          <p className="flex items-center gap-1">
            <Stethoscope
              strokeWidth={4}
              size={28}
              className="border-2 rounded-lg border-[#347A7Aff]"
            />
            CliniCare
          </p>
        </div>

        <ul className="flex gap-10 text-slate-600 items-center justify-items-center ">
          {navItems.map((item) => (
            <li
              className={
                pathname === item.href
                  ? `text-[#347A7Aff] font-semibold`
                  : `hover:text-[#67c2c2] `
              }
            >
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>

        <div className="w-12 cursor-pointer ">
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
