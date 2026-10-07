"use client";

import Image from "next/image";
import logo from "@/image/landing/logo-header-new.png";

export default function ReviewHeader() {
  return (
    <div className="flex flex-col items-center space-y-4 mt-4">
      <Image
        src={logo}
        alt="logo"
        width={81}
        height={86}
        className="w-[81px] h-[86px]"
      />
      <h5 className="font-bold text-base text-center">
        สหกรณ์ออมทรัพย์กระทรวงการพัฒนาสังคมและความมั่นคงของมนุษย์ จำกัด
      </h5>
      <h3 className="text-xl text-[#3a67e5] text-center font-bold sm:text-2xl">
        การยืนยันยอดหุ้น หนี้และเงินฝาก
      </h3>
    </div>
  );
}
