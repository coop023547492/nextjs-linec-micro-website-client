"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { mainNavItemsMobile } from "@/utils/menus";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";

export default function MobileToggle() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <nav>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <HambergerButton />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="bg-gradient-to-b from-sky-200 0% via-white 20% to-white 100%"
        >
          <Menu setOpen={setOpen} pathname={pathname} />
          <SheetDescription></SheetDescription>
        </SheetContent>
      </Sheet>
    </nav>
  );
}

const HambergerButton = () => {
  return (
    <div className="w-10 h-10 py-[5px] bg-white bg-opacity-60 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-[#2563eb] flex justify-center items-center gap-2.5">
      <div className="w-5 h-2.5 inline-flex flex-col justify-start items-start gap-[5px]">
        <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-[#2563eb]" />
        <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-[#2563eb]" />
        <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-[#2563eb]" />
      </div>
    </div>
  );
};

type PropsMenu = {
  setOpen: Dispatch<SetStateAction<boolean>>;
  pathname: string;
};
const Menu = ({ setOpen, pathname }: PropsMenu) => {
  return (
    <ul className="flex flex-col gap-3.5 mt-4">
      {mainNavItemsMobile.map((item, index) => (
        <li key={index}>
          <Link
            onClick={() => setOpen(false)}
            className={`text-xl font-bold ${
              pathname === item.href ? "text-[#3a67e5]" : "text-stone-500"
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
