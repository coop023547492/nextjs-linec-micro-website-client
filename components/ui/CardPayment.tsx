import ktb_img from "@/image/landing/ktb.png";
import Image from "next/image";

type Props = {
  title: string;
  accountNumber: string;
};

export default function CardPayment({ title, accountNumber }: Props) {
  return (
    <>
      <DestopCardPayment title={title} accountNumber={accountNumber} />
      <MobileCardPayment title={title} accountNumber={accountNumber} />
    </>
  );
}

const DestopCardPayment = ({ title, accountNumber }: Props) => {
  return (
    <section className="hidden md:flex p-2.5 px-16 py-10 bg-gradient-to-b from-sky-500 to-blue-600 rounded-[20px]">
      <div className="flex flex-col gap-5">
        <h5 className="text-white text-2xl">{title}</h5>
        <div className="flex justify-between gap-10">
          <div className="relative w-20 h-20 ">
            <Image
              fill
              src={ktb_img}
              alt="ktb"
              className="object-cover rounded-[100px]"
            />
          </div>
          <div className="flex flex-col gap-4 text-xl text-white">
            <p className="font-bold ">ธนาคารกรุงไทย สาขา สะพานขาว</p>
            <p>
              ชื่อบัญชี :{" "}
              <span className="font-bold">
                สหกรณ์ออมทรัพย์กระทรวงการพัฒนาสังคมและความมั่นคงของมนุษย์ จำกัด
              </span>
            </p>
            <p>
              เลขที่บัญชี :{" "}
              <span className="font-bold text-xl">{accountNumber}</span>
            </p>
            <p className="text-yellow-500 text-lg font-bold">
              ** เมื่อสมาชิกโอนเงินแล้ว โปรดส่งหลักฐานการโอนเงินให้สหกรณ์ด้วย **
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const MobileCardPayment = ({ title, accountNumber }: Props) => {
  return (
    <section className="md:hidden">
      <div className="px-2.5 py-5 bg-gradient-to-b from-sky-500 to-blue-600 rounded-[20px] flex flex-col justify-center gap-5">
        <h5 className="text-white text-2xl">{title}</h5>
        <div className="flex flex-col gap-5 text-white text-xl">
          <div className="flex gap-5 items-center">
            <div className="relative w-20 h-20 ">
              <Image
                fill
                src={ktb_img}
                alt="ktb"
                className="object-cover rounded-[100px]"
              />
            </div>
            <p className="flex-1 font-bold">ธนาคารกรุงไทย สาขา สะพานขาว</p>
          </div>
          <div className="flex gap-5 justify-center">
            <p>ชื่อบัญชี :</p>
            <p className="flex-1 font-bold">
              สหกรณ์ออมทรัพย์กระทรวงการพัฒนา สังคม และความมั่นคง ของมนุษย์ จำกัด
            </p>
          </div>
          <div className="flex gap-5">
            <p>เลขที่บัญชี :</p>
            <p className="flex-1 font-bold">{accountNumber}</p>
          </div>
        </div>
        <p className=" text-white text-center text-lg">
          **{" "}
          <span className="text-yellow-500 font-bold">
            เมื่อสมาชิกโอนเงินแล้ว โปรดส่งหลักฐานการโอนเงินให้สหกรณ์ด้วย
          </span>{" "}
          **
        </p>
      </div>
    </section>
  );
};
