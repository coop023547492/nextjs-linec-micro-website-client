"use client";

import { cn } from "@/lib/utils";
import { committeeMenuItems } from "@/utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CategoryMenu() {
  const pathname = usePathname();

  return (
    <div className="flex w-full px-2.5 py-5 flex-wrap gap-2.5 justify-center">
      {committeeMenuItems.map((item) => (
        <Link
          key={item.text}
          href={item.href}
          className={cn(
            "px-7 py-3 rounded-[100px] text-base text-center",
            pathname === item.href
              ? "bg-gradient-to-r from-[#3A68E5] to-[#A4DAFF] text-white "
              : "bg-white/20 outline outline-1 outline-offset-[-1px] outline-[#3A68E5] Main-dark-Blue "
          )}
        >
          <h5>{item.text}</h5>
        </Link>
      ))}
    </div>
  );
}
