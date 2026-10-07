import Header from "@/components/header/Header";
import Image from "next/image";
import img16 from "@/image/landing/img-16.png";
import img17 from "@/image/landing/img-17.png";
import img18 from "@/image/landing/img-18.png";
import img19 from "@/image/landing/img-19.png";
import img20 from "@/image/landing/img-20.png";
import ContactToggle from "@/components/ContactToggle";
import FooterContainre from "@/components/footer/FooterContainre";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    //from-[#a4daff] to-[#e0f2fe]
    <div className="relative flex flex-col w-full min-h-screen bg-gradient-to-b from-sky-200 0% via-white 20% to-white 100% z-0 overflow-hidden">
      {/* <div className="absolute inset-0 bg-gray-900/50 z-[999] pointer-events-none"></div> */}
      <Image src={img16} alt="img16" className="absolute mix-blend-screen " />
      <Image
        src={img17}
        alt="img17"
        className="hidden absolute mix-blend-screen "
      />
      <Image
        src={img18}
        alt="img18"
        className="hidden md:block  top-5 right-0 absolute mix-blend-screen "
      />
      <Image
        src={img19}
        alt="img19"
        className="hidden md:block top-72 left-60 absolute mix-blend-screen "
      />
      <Image
        src={img20}
        alt="img20"
        className="hidden md:block top-72 right-60 absolute mix-blend-screen "
      />
      <Header />
      <main className="flex-1 z-50">{children}</main>
      <FooterContainre />
      <ContactToggle />
    </div>
  );
}
