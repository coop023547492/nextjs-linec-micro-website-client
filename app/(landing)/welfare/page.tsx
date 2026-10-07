import MainTitle from "@/components/ui/MainTitle";
import MianWelfare from "@/components/welfare/MianWelfare";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "สวัสดิการสงเคราะห์",
};

export default function page() {
  return (
    <div className="wrapper custom-main-page-container">
      <MainTitle>สวัสดิการสงเคราะห์สำหรับสมาชิกและครอบครัว</MainTitle>
      <MianWelfare />
    </div>
  );
}
