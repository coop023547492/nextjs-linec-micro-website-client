import Header from "../header/Header";
import img16 from "@/image/landing/img-16.png";
import img17 from "@/image/landing/img-17.png";
import img18 from "@/image/landing/img-18.png";
import img19 from "@/image/landing/img-19.png";
import img20 from "@/image/landing/img-20.png";
import Image from "next/image";

export default function HeroBgSub({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-w-full min-h-screen bg-gradient-to-b from-[#a4daff] to-[#e0f2fe] overflow-hidden z-0 py-[24px]">
      <Image
        src={img16}
        alt="img16"
        className="w-[1322px] h-[300px] left-[600px] top-[88px] absolute  mix-blend-screen "
      />
      <Image
        src={img17}
        alt="img17"
        className="w-80 h-[97px] right-0 top-0 absolute mix-blend-screen "
      />
      <Image
        src={img18}
        alt="img18"
        className="w-[587px] h-[276px] left-0 top-[88px] absolute mix-blend-screen "
      />
      <Image
        src={img19}
        alt="img19"
        className="w-[503px] h-[217px] right-[150px] top-[500px] absolute mix-blend-screen "
      />
      <Image
        src={img20}
        alt="img20"
        className="w-[650px] h-[277px] left-[100px] top-[500px] absolute mix-blend-screen "
      />
      <div className="custom-container-xl flex flex-col items-center gap-[52px] relative z-50">
        <Header />
        {children}
      </div>
    </div>
  );
}
