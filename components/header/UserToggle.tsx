"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { mainNavItems } from "@/utils/menus";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";

export default function UserToggle() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return <HambergerButton />;

  return (
    <nav>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <HambergerButton />
        </SheetTrigger>
        <SheetContent side="right">
          <Menu setOpen={setOpen} pathname={pathname} />
          <SheetDescription></SheetDescription>
        </SheetContent>
      </Sheet>
    </nav>
  );
}

const HambergerButton = () => {
  return (
    <div className="w-10 h-10 py-[5px] bg-white/60 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-[#2563eb] inline-flex justify-center items-center gap-2.5">
      <Image
        src="/images/header-user-menu.svg"
        alt="user menu"
        width={0}
        height={0}
        className="w-5 h-5"
      />
    </div>
  );
};

type PropsMenu = {
  setOpen: Dispatch<SetStateAction<boolean>>;
  pathname: string;
};
const Menu = ({ setOpen, pathname }: PropsMenu) => {
  return (
    <ul className="leading-loose">
      {mainNavItems.map((item, index) => (
        <li key={index}>
          <Link
            onClick={() => setOpen(false)}
            className={`${
              pathname === item.href ? "text-[#3a67e5]" : "text-[#777777]"
            }`}
            href={item.href}
          >
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};
