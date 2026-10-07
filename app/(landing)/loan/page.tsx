import MainTitle from "@/components/ui/MainTitle";
import MainLoan from "@/components/loan/MainLoan";
import CardPayment from "@/components/ui/CardPayment";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "บริการสินเชื่อ",
};

export default function page() {
  return (
    <div className="wrapper custom-main-page-container">
      <MainTitle>บริการด้านสินเชื่อ</MainTitle>
      <MainLoan />
      <CardPayment
        title="การโอนเงินเพื่อชำระหนี้เงินกู้"
        accountNumber="021-1-04169-6"
      />
    </div>
  );
}
