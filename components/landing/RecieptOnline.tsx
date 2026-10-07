import Image from "next/image";
import recieptOnlineBg from "@/image/landing/reciept-online-bg.png";
import CursorClick from "@/image/landing/Cursor-Click.svg";
import BorderRecipt from "@/image/landing/Border-Recipt.svg";
import img1 from "@/image/landing/Recipt-Img1.svg";
import img2 from "@/image/landing/Recipt-Img2.svg";
import Link from "next/link";

export default function RecieptOnline() {
  return (
    <Link
      href="https://coopmsds.com/report/login.php"
      target="_blank"
      rel="noopener noreferrer"
      className="group w-full h-28 md:h-full relative block overflow-hidden rounded-[20px] transition-all duration-300 hover:shadow-xl hover:shadow-blue-200/50 hover:scale-[1.02] transform"
    >
      <Image
        src={recieptOnlineBg}
        fill
        alt="reciept-bg"
        className="object-cover rounded-[20px] opacity-60 left-0 top-0 w-full h-full absolute transition-all duration-500 group-hover:opacity-80 group-hover:scale-105"
      />
      <div className="flex flex-col h-full justify-center relative gap-14 transition-all duration-300 group-hover:gap-16">
        <Title />
        <ContentPic />
      </div>
    </Link>
  );
}

const Title = () => {
  return (
    <div className="mx-2.5 px-5 py-5 bg-white rounded-[40px] shadow-[4px_6px_14px_0px_rgba(25,68,164,0.20)] relative transition-all duration-300 group-hover:shadow-[4px_6px_20px_0px_rgba(25,68,164,0.35)] group-hover:bg-blue-50 group-hover:-translate-y-1 transform">
      <h6 className="Main-dark-Blue text-lg font-bold text-center transition-all duration-300 group-hover:text-blue-700 group-hover:scale-105">
        ระบบใบเสร็จรับเงินออนไลน์
      </h6>
      <Image
        src={CursorClick}
        alt="cursor"
        className="absolute right-0 top-10 transition-all duration-300 group-hover:scale-110 group-hover:animate-bounce"
      />
    </div>
  );
};

const ContentPic = () => {
  return (
    <div className="hidden w-full h-28 md:block relative transition-all duration-500 group-hover:scale-105">
      <Image
        src={BorderRecipt}
        fill
        alt="border"
        className="object-cover transition-all duration-300 group-hover:brightness-110"
      />
      <Image
        src={img1}
        alt="img1"
        className="absolute right-9 -top-7 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 group-hover:rotate-3"
      />
      <Image
        src={img2}
        alt="img2"
        className="absolute left-5 top-2 transition-all duration-300 group-hover:scale-110 group-hover:translate-y-1 group-hover:-rotate-2"
      />
    </div>
  );
};
