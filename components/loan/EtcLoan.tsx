import SectionTitle from "../ui/SectionTitle";

/* 
export default function EtcLoan() {
  return (
    <div className="w-full p-2.5 lg:p-5 bg-white/40 rounded-[20px] shadow-[3px_12px_18px_0px_rgba(7,48,72,0.05)] border border-white/50 flex flex-col gap-10">
      <SectionTitle>เงื่อนไขเพิ่มเติ่ม</SectionTitle>
      <div className="grid grid-cols-3 w-full max-w-screen-sm text-center gap-y-2.5 mx-auto">
        <div className="border-b border-stone-300"></div>
        <div className="border-b border-stone-300 font-bold">
          เจ้าหน้าที่สหกรณ์ พม.
        </div>
        <div className=" border-b border-stone-300 font-bold">
          พนักงานกองทุน
        </div>
        <div className="font-bold">สิทธิ์กู้เหมือนกับ</div>
        <div className="font-bold">ลูกจ้างประจำ</div>
        <div className="font-bold">พนักงานราชการ</div>
      </div>
      <div className="grid grid-cols-3 w-full max-w-screen-md text-center gap-y-2.5 mx-auto">
        <div className="border-b border-stone-300"></div>
        <div className="border-b border-stone-300 font-bold">
          ข้าราชการ / ลูกจ้างประจำ
        </div>
        <div className="border-b border-stone-300 font-bold">พนง.ประจำ สธค.</div>
        <div className="font-bold">
          กู้ได้ทุกประเภทโดยไม่จำกัดสัญญา <br /> โดยยอดกู้รวมทั้งหมดต้องไม่เกิน
        </div>
        <div className="font-bold">ไม่เกิน 2.5 ล้าน</div>
        <div className="font-bold">ไม่เกิน 1.5 ล้าน</div>
      </div>
      <p className="text-center font-bold">
        การให้เงินกู้แก่สมาชิกคณะกรรมการดำเนินการจะพิจารณาวินิจฉัยให้เงินกู้{" "}
        <br /> ได้ตามข้อบังคับและตามระเบียบของสหกรณ์
      </p>
    </div>
  );
} */

export default function EtcLoan() {
  return (
    <div className="w-full max-w-screen-sm mx-auto p-2.5 lg:p-5 bg-white/40 rounded-[20px] shadow-[3px_12px_18px_0px_rgba(7,48,72,0.05)] border border-white/50 flex flex-col gap-5">
      <SectionTitle>เงื่อนไขเพิ่มเติ่ม</SectionTitle>
      <p className="text-center font-bold leading-loose">
        กู้ได้ทุกประเภทโดยไม่จำกัดสัญญา <br /> โดยยอดกู้รวมทั้งหมดต้องไม่เกิน
      </p>
      <div className="flex justify-around gap-2">
        <div className="flex flex-col items-center p-2.5  bg-white rounded-[10px] shadow-[3px_12px_18px_0px_rgba(7,48,72,0.05)] w-full max-w-60 gap-y-2.5">
          <p className="font-bold text-center">ข้าราชการ / ลูกจ้างประจำ</p>
          <p>ไม่เกิน 2.5 ล้าน</p>
        </div>
        <div className="flex flex-col items-center p-2.5  bg-white rounded-[10px] shadow-[3px_12px_18px_0px_rgba(7,48,72,0.05)] w-full max-w-60 gap-y-2.5">
          <p className="font-bold text-center">พนง.ประจำ สธค.</p>
          <p>ไม่เกิน 1.5 ล้าน</p>
        </div>
      </div>
    </div>
  );
}
