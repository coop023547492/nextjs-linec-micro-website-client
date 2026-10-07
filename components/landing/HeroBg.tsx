import Header from "../header/Header";
import img16 from "@/image/landing/img-16.png";
import img17 from "@/image/landing/img-17.png";
import img18 from "@/image/landing/img-18.png";
import img19 from "@/image/landing/img-19.png";
import img20 from "@/image/landing/img-20.png";
import Image from "next/image";
import CarouselGroup from "./CarouselGroup";

export default function HeroBg() {
  return (
    <div className="relative min-w-full h-[821px] bg-[#a4daff] overflow-hidden z-0 pt-[24px]">
      <Image
        src={img16}
        alt="img16"
        className="w-[1322px] h-[300px] left-[150px] top-[88px] absolute  mix-blend-screen "
      />
      <Image
        src={img17}
        alt="img17"
        className="w-80 h-[97px] right-0 top-0 absolute mix-blend-screen "
      />
      <Image
        src={img18}
        alt="img18"
        className="w-[587px] h-[276px] -left-[150px] top-[88px] absolute mix-blend-screen "
      />
      <Image
        src={img19}
        alt="img19"
        className="w-[503px] h-[217px] -right-[150px] -bottom-[20px] absolute mix-blend-screen "
      />
      <Image
        src={img20}
        alt="img20"
        className="w-[650px] h-[277px] -left-[100px]  -bottom-[50px] absolute mix-blend-screen "
      />
      <div className="custom-container flex flex-col items-center gap-[52px] relative z-10">
        <Header />
        <CarouselGroup />
      </div>
    </div>
  );
}
