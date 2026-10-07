"use client";

import { mainNavItems } from "@/utils/menus";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainNav() {
  const pathname = usePathname();

  return (
    <ul className="flex gap-3.5 h-min px-5 py-2.5 bg-white/60 rounded-[100px] shadow-[3px_12px_18px_0px_rgba(7,48,72,0.05)]">
      {mainNavItems.map((item) => (
        <li key={item.text}>
          <Link
            className={`relative py-2 rounded-full transition-all duration-300 ${
              pathname === item.href
                ? "Main-dark-Blue text-base font-semibold bg-gradient-to-r from-blue-50 to-indigo-50"
                : "text-neutral-500 text-base font-semibold hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent"
            }`}
            href={item.href}
          >
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  );
}
