import MainSaving from "@/components/saving/MainSaving";
import CardPayment from "@/components/ui/CardPayment";
import MainTitle from "@/components/ui/MainTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "บริการเงินฝาก",
};

export default function page() {
  return (
    <div className="wrapper custom-main-page-container">
      <MainTitle>บริการด้านเงินฝาก</MainTitle>
      <MainSaving />
      <CardPayment
        title="การโอนเงินเพื่อฝากเงินเข้าบัญชีเงินฝากออมทรัพย์พิเศษ"
        accountNumber="021-1-19052-7"
      />
    </div>
  );
}
