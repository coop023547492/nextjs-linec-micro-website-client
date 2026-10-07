"use client";

import Image from "next/image";
import img_credit_card from "@/image/landing/Credit-Card-2.svg";
import img_loan from "@/image/landing/Arrow-Reload-Vertical-1.svg";
import img_star from "@/image/landing/Streamline-Mynaui.svg";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const featureData = [
  {
    logo: img_credit_card,
    title: "บริการด้าน ฝาก/ถอน",
    detail:
      "ทางสหกรณ์ออมทรัพย์ฯ มีบริการรับฝากเงิน และถอนเงินสำหรับสมาชิก โดยมีการคิดดอกเบี้ย สำหรับเงินฝากเป็นรายปี",
    href: "/saving",
  },
  {
    logo: img_loan,
    title: "บริการด้าน เงินกู้",
    detail:
      "มีบริการด้านเงินกู้สำหรับสมาชิกฯ หลากหลายประเภท เช่น เงินกู้สามัญ เงินกู้ฉุกเฉิน เงินกู้เพื่อที่อยู่อาศัย, การลงทุนประกอบอาชีพ, รักษาพยาบาล, การศึกษา, ซื้อรถยนต์ ฯ",
    href: "/loan",
  },
  {
    logo: img_star,
    title: "สวัสดิการ สําหรับสมาชิก",
    detail:
      "ทางสหกรณ์ออมทรัพย์ฯ มีสวัสดิการสงเคราะห์สำหรับสมาชิก เช่น เงินสวัสดิการกรณีสมาชิก คู่สมรส บิดามารดา บุตร ถึงแก่กรรม, เกิดอัคคีภัย",
    href: "/welfare",
  },
];

export default function Features() {
  const router = useRouter();
  return (
    <section className="wrapper grid md:grid-cols-3 gap-5">
      {featureData.map((item, index) => (
        <Card
          key={index}
          className="flex flex-col group hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-gray-100 hover:border-blue-300 hover:bg-gradient-to-br hover:from-blue-50 hover:to-white cursor-pointer"
          onClick={() => router.push(item.href)}
        >
          <CardHeader>
            <CardTitle className="flex flex-col gap-4">
              <div className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Image
                  src={item.logo}
                  alt={`icon-${index}`}
                  width={40}
                  height={40}
                  className="w-10 h-10 transition-all duration-300 group-hover:drop-shadow-lg"
                />
              </div>
              <h4 className="text-xl font-bold Main-dark-Blue transition-colors duration-300 group-hover:text-blue-600">
                {item.title}
              </h4>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-stone-500 transition-colors duration-300 group-hover:text-gray-700">
              {item.detail}
            </p>
          </CardContent>
          <CardFooter className="mt-auto">
            <Button
              size="figma"
              variant="figma"
              className="text-white text-xs font-semibold group-hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 group"
            >
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                รายละเอียด
              </span>
              <Image
                src="/images/buton-arrow-next.svg"
                alt="icon btn"
                width={20}
                height={20}
                className="w-4 h-2 transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110"
              />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
}
