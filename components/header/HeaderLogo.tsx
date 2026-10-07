import Image from "next/image";
import logo from "@/image/landing/logo-header-new.png";
export default function HeaderLogo() {
  return (
    <div className="flex flex-col items-center gap-2">
      <Image
        src={logo}
        alt="logo"
        width={86}
        height={86}
        className="w-12 h-12 lg:w-20 lg:h-20"
      />
      <h3 className="text-[#3a67e5] text-xs font-semibold">
        สหกรณ์ออมทรัพย์ พม.
      </h3>
    </div>
  );
}
