"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
const BreadcrumbComp = () => {
  const pathname = usePathname();
  console.log(pathname);

  const pathSegments = pathname.split("/").filter((segment) => segment);
  console.log(pathSegments);
  return (
    <div>
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link href="/" className="text-gray-500 hover:underline">
            Beranda
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          const href = "/" + pathSegments.slice(0, index + 1).join("/");
          const isLast = index === pathSegments.length - 1;

          return (
            <li key={href} className="flex items-center">
              <span className="mx-1">-</span>
              {isLast ? (
                <span className="text-[#347A7Aff]">{segment}</span>
              ) : (
                <Link
                  href={href}
                  className="text-gray-500 hover:underline capitalize"
                >
                  {segment}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default BreadcrumbComp;
