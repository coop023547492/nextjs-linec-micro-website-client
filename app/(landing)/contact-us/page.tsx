import ContactUsForm from "@/components/ContactUsForm";
import FacebookInfo from "@/components/landing/FacebookInfo";
import LineInfo from "@/components/landing/LineInfo";
import { MapWithMarker } from "@/components/MapWithMarker";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ติดต่อสหกรณ์",
};

export default function page() {
  return (
    <div className="wrapper flex flex-col items-center gap-10 ">
      <h1 className="text-Medium-grey text-3xl font-normal">ติดต่อสหกรณ์</h1>
      <h5 className="Main-dark-Blue text-xl font-bold">
        สหกรณ์ออมทรัพย์กระทรวงการพัฒนาสังคมและความมั่นคงของมนุษย์ จำกัด
      </h5>
      <div className="grid md:grid-cols-2 gap-5">
        <div className="address space-y-10">
          <div className="flex gap-5">
            <Image
              src="/images/about-us-location-pin.svg"
              alt="location icon"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <p className="text-stone-500 text-lg">
              ตึกอาทิตย์ทิพอาภา บริเวณสถานสงเคราะห์เด็กหญิงบ้านราชวิถี255
              ถนนราชวิถี แขวงพญาไท เขตราชเทวี กรุงเทพฯ 10400
            </p>
          </div>
          <div className="flex gap-5">
            <Image
              src="/images/about-us-mail.svg"
              alt="location icon"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <p className="text-stone-500 text-lg">coop023547492@gmail.com</p>
          </div>
          <div className="flex gap-5">
            <Image
              src="/images/about-us-phone.svg"
              alt="location icon"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <p className="text-stone-500 text-lg">02-354-7486-88 </p>
          </div>
          <div className="pl-10 space-y-2.5">
            <p className="text-stone-500 text-lg">
              ต่อ 101, 105 ฝ่ายบริหาร , (สายตรง) 02-354-7490
            </p>
            <p className="text-stone-500 text-lg">
              ต่อ 102 , 103 , 104 ฝ่ายสินเชื่อ , (สายตรง) 02-354-7491
            </p>
            <p className="text-stone-500 text-lg">
              ต่อ 106 ฝ่ายการเงิน , (สายตรง) 02-354-7489{" "}
            </p>
            <p className="text-stone-500 text-lg">ต่อ 107 ฝ่ายบัญชี </p>
            <p className="text-stone-500 text-lg">
              ต่อ 108 ฝ่ายคอมพิวเตอร์ , (สายตรง) 02-354-7492
            </p>
          </div>
        </div>
        <div className="socail grid md:grid-cols-2 my-auto gap-5">
          <LineInfo />
          <FacebookInfo />
        </div>
      </div>
      <div className="w-full  h-96 rounded-[20px] shadow-[3px_12px_18px_0px_rgba(7,48,72,0.05)]">
        <MapWithMarker />
      </div>
      <div className=" grid md:grid-cols-2 p-5 bg-neutral-100 rounded-[20px] gap-12">
        <div className="image">
          <Image
            src="/images/about-us-conntact-us.png"
            alt="contact us"
            width={500}
            height={400}
            className=" w-full h-60 md:h-full rounded-[10px]"
            h-
          />
        </div>
        <div className="form">
          <ContactUsForm />
        </div>
      </div>
    </div>
  );
}
