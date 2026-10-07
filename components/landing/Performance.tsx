"use client";

import Image from "next/image";
import perfomBg from "@/image/landing/perfomance-bg.png";
import usePerformanceData from "./hook/usePerformanceData";
import { PerformanceDataItemProps } from "@/utils/types";
import { formatNumberWithComma } from "@/lib/utils";

const baseClassTitle =
  "Main-dark-Blue text-lg font-bold text-center md:text-start";

const baseClassValue =
  "Main-dark-Blue text-lg font-bold text-center mb-4 md:mb-0 md:text-end";

export default function Performance() {
  return (
    <div className="w-full h-full relative">
      <Image
        src={perfomBg}
        alt="performance-bg"
        fill
        className="object-cover absolute left-0 top-0 md:rounded-[20px] opacity-60"
      />
      <PerformanceData />
    </div>
  );
}

const PerformanceData = () => {
  const category = "report";
  const { data, isLoading } = usePerformanceData(category);

  if (isLoading) {
    return <PerformanceSkeleton />;
  }

  if (!data) {
    return (
      <div className="text-center text-red-500">ไม่พบข้อมูลการดำเนินงาน</div>
    );
  }

  function getValueByCode(code: string): string {
    const item = data.find(
      (item: PerformanceDataItemProps) => item.code === code
    );
    return item
      ? code !== "report_updatedate"
        ? formatNumberWithComma(item.value)
        : item.value
      : "0";
  }

  return (
    <div className=" relative grid md:grid-cols-2 md:gap-3 px-5 py-5 z-50">
      <h5 className="text-Dark-grey text-lg font-bold text-center mb-4 md:mb-0 md:text-start">
        ผลการดำเนินงาน
      </h5>
      <h5 className="text-Dark-grey text-base hidden md:block md:text-end ">
        ข้อมูล ณ วันที่ : {getValueByCode("report_updatedate")}
      </h5>
      <div className={`${baseClassTitle}`}>จำนวนสมาชิก</div>
      <div className={`${baseClassValue}`}>
        {getValueByCode("report_member_num")}
      </div>
      <div className={`${baseClassTitle}`}>ทุนเรือนหุ้น</div>
      <div className={`${baseClassValue}`}>
        {getValueByCode("report_share")}
      </div>
      <div className={`${baseClassTitle}`}>ทุนสำรอง</div>
      <div className={`${baseClassValue}`}>
        {getValueByCode("report_reserve")}
      </div>
      <div className={`${baseClassTitle}`}>เงินรับฝากออมทรัพย์พิเศษ</div>
      <div className={`${baseClassValue}`}>
        {getValueByCode("report_deposit_special")}
      </div>
      <div className={`${baseClassTitle}`}>สินทรัพย์รวม</div>
      <div className={`${baseClassValue}`}>
        {getValueByCode("report_account")}
      </div>
      <div className={`${baseClassTitle}`}>เงินให้กู้แก่สมาชิก</div>
      <div className={`${baseClassValue}`}>
        {getValueByCode("report_loans_members")}
      </div>
      <h5 className="text-Dark-grey text-center md:hidden">
        ข้อมูล ณ วันที่ : {getValueByCode("report_updatedate")}
      </h5>
    </div>
  );
};

const PerformanceSkeleton = () => {
  return (
    <div className="grid md:grid-cols-2 gap-3.5 px-5 py-5 animate-pulse">
      {/* Header */}
      <div className="h-7 bg-gray-300 rounded-md"></div>
      <div className="h-5 bg-gray-300 rounded-md hidden md:block"></div>

      {/* Data rows */}
      {Array.from({ length: 6 }, (_, index) => (
        <div key={index} className="contents">
          <div className="h-6 bg-gray-300 rounded-md"></div>
          <div className="h-6 bg-gray-300 rounded-md"></div>
        </div>
      ))}

      {/* Footer for mobile */}
      <div className="h-5 bg-gray-300 rounded-md md:hidden col-span-2"></div>
    </div>
  );
};
