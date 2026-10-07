import {
  loanDataForOfficer,
  loanHeaderForOfficer,
} from "@/components/loan/config-table";
import BorderContent from "../ui/BorderContent";
import TableDataNoBorder from "../ui/TableDataNoBorder";
import SectionTitle from "../ui/SectionTitle";

export default function MainLoan() {
  return (
    <BorderContent>
      <TableDataNoBorder
        headers={loanHeaderForOfficer}
        data={loanDataForOfficer}
      />
      <Etc />
      <EtcLoan />
    </BorderContent>
  );
}

/* const Etc = () => {
  return (
    <div className="w-full max-w-screen-md mx-auto flex flex-col gap-2.5 items-center">
      <SectionTitle className=" text-center">หมายเหตุ</SectionTitle>
      <p className=" text-center leading-relaxed font-bold">
        การให้เงินกู้แก่สมาชิกคณะกรรมการดำเนินการจะพิจารณาวินิจฉัยให้เงินกู้
        <br />
        ได้ตามข้อบังคับและตามระเบียบของสหกรณ์
      </p>
      <div className="flex flex-col justify-center items-center gap-2.5 p-2.5  bg-white rounded-[10px] shadow-[3px_12px_18px_0px_rgba(7,48,72,0.05)] lg:w-7/12">
        <div className="flex justify-center items-center gap-2 w-full">
          <div className="font-bold">จนท.ประจำ สอ.พม.</div>
          <ArrowBigRightIcon color="#3a67e5" />
          <div>สิทธิ์กู้เหมือนกับ</div>
          <ArrowBigRightIcon color="#3a67e5" />
          <div className="font-bold">ลูกจ้างประจำ</div>
        </div>
        <div className="flex justify-center items-center gap-2 w-full">
          <div className="font-bold">พนักงานกองทุน</div>
          <ArrowBigRightIcon color="#3a67e5" />
          <div>สิทธิ์กู้เหมือนกับ</div>
          <ArrowBigRightIcon color="#3a67e5" />
          <div className="font-bold">พนักงานราชการ</div>
        </div>
      </div>
    </div>
  );
}; */

const Etc = () => {
  return (
    <p className="text-center leading-relaxed font-bold lg:text-xl">
      การให้เงินกู้แก่สมาชิกคณะกรรมการดำเนินการจะพิจารณาวินิจฉัยให้เงินกู้
      <br />
      ได้ตามข้อบังคับและตามระเบียบของสหกรณ์
    </p>
  );
};

/* function EtcRule() {
  return (
    <div className=" flex flex-col gap-5">
      <SectionTitle>เงื่อนไขเพิ่มเติม</SectionTitle>
      <TableDataNoBorder headers={etcRuleHeader} data={etcRuleData} />
      <TableDataNoBorder headers={etcRuleHeader2} data={etcRuleData2} />
      <div className=" text-center text-stone-500 text-lg">
        การให้เงินกู้แก่สมาชิกคณะกรรมการดำเนินการจะพิจารณาวินิจฉัยให้เงินกู้ได้ตามข้อบังคับและตามระเบียบของสหกรณ์
      </div>
    </div>
  );
} */

const EtcLoan = () => {
  return (
    <div className="w-full max-w-screen-sm mx-auto p-2.5 lg:p-5  flex flex-col gap-2.5">
      <SectionTitle className=" text-center">เงื่อนไขเพิ่มเติ่ม</SectionTitle>
      <p className="text-center leading-loose text-xl">
        กู้ได้ทุกประเภทโดยไม่จำกัดสัญญา โดยยอดกู้รวมทั้งหมดต้องไม่เกิน
      </p>
      <div className="flex justify-around gap-2">
        <div className="flex flex-col items-center justify-between p-2.5  bg-white rounded-[10px] shadow-[3px_12px_18px_0px_rgba(7,48,72,0.05)] w-full  max-w-xs  gap-y-2.5">
          <p className="font-bold text-center">
            ข้าราชการ / ลูกจ้างประจำ / <br /> จนท.ประจำ สอ.พม.
          </p>
          <p className="text-xl text-[#3a67e5] font-bold text-center">
            ไม่เกิน 2.5 ล้าน
          </p>
        </div>
        <div className="flex flex-col items-center justify-between p-2.5  bg-white rounded-[10px] shadow-[3px_12px_18px_0px_rgba(7,48,72,0.05)] w-full max-w-xs gap-y-2.5">
          <p className="font-bold text-center">พนง.ประจำ สธค.</p>
          <p className="text-xl text-[#3a67e5] font-bold text-center">
            ไม่เกิน 1.5 ล้าน
          </p>
        </div>
      </div>
    </div>
  );
};
