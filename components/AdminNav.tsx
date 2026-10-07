"use client";

import Link from "next/link";
import LogoutBtn from "./auth/LogoutBtn";

export default function AdminNav() {
  return (
    <nav className="bg-white/60 rounded-[100px] shadow-[3px_12px_18px_0px_rgba(7,48,72,0.05)] px-5 flex py-2.5 border items-center text-[#777777] ">
      <ul className="flex gap-3 me-auto ">
        <li className="hover:text-[#3a67e5] ">
          <Link href="/admin">Dashboard</Link>
        </li>
        <li className="hover:text-[#3a67e5] ">
          <Link href="/admin/post">Post</Link>
        </li>
      </ul>
      <LogoutBtn />
    </nav>
  );
}
