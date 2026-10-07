import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  INTEREST_LOAN_DATA,
  INTEREST_LOAN_FOR_DATA,
  INTEREST_SAVINH_DATA,
} from "@/utils/constants";

export default function InterestInfo() {
  return (
    <section className="wrapper flex flex-col items-center gap-5 z-10 relative">
      <h3 className="text-white text-2xl font-bold">อัตราดอกเบี้ย</h3>
      <div className="grid md:grid-cols-2 gap-5 w-full">
        <CardIntesrest
          icon="/images/interest-credit-card-2.svg"
          title="อัตราดอกเบี้ยเงินฝาก"
          content={INTEREST_SAVINH_DATA}
        />
        <CardIntesrest
          icon="/images/interest-arrow-reload-vertical-1.svg"
          title="อัตราดอกเบี้ยเงินกู้"
          content={INTEREST_LOAN_DATA}
        />
        <div className=" md:col-span-2">
          <CardIntesrestFor
            icon="/images/interest-arrow-reload-vertical-1.svg"
            title="อัตราดอกเบี้ยเงินกู้สามัญ"
            content={INTEREST_LOAN_FOR_DATA}
          />
        </div>
      </div>
    </section>
  );
}

const CardIntesrest = ({
  icon,
  title,
  content,
}: {
  icon: string;
  title: string;
  content: { contentTitle: string; contentValue: string }[];
}) => {
  return (
    <Card className="w-full">
      <CardHeader className="px-2.5 py-[5px] bg-gradient-to-l from-[#A4DAFF] to-[#3A68E5] rounded-tl-[10px] rounded-tr-[10px]">
        <CardTitle className="flex items-center gap-2">
          <Image
            src={icon}
            alt="credit-card"
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <h5 className="text-white text-lg font-bold">{title}</h5>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2">
          {content.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center md:items-start gap-1 mt-5"
            >
              <p className="text-zinc-800 text-base">{item.contentTitle}</p>
              <p className="Main-dark-Blue text-xl font-bold">
                {item.contentValue}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const CardIntesrestFor = ({
  icon,
  title,
  content,
}: {
  icon: string;
  title: string;
  content: { contentTitle: string; contentValue: string }[];
}) => {
  return (
    <Card className="w-full">
      <CardHeader className="px-2.5 py-[5px] bg-gradient-to-l from-[#A4DAFF] to-[#3A68E5] rounded-tl-[10px] rounded-tr-[10px]">
        <CardTitle className="flex items-center gap-2">
          <Image
            src={icon}
            alt="credit-card"
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <h5 className="text-white text-lg font-bold">{title}</h5>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-4">
          {content.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-1 md:items-start mt-5"
            >
              <p className="text-zinc-800 text-base">{item.contentTitle}</p>
              <p className="Main-dark-Blue text-xl font-bold">
                {item.contentValue}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
