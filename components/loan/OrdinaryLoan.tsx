import DownloadSub from "../downlaod/sub/DownloadSub";
import BorderContent from "../ui/BorderContent";
import MobileAccordion from "../ui/MobileAccordion";
import SectionTitle from "../ui/SectionTitle";
import TableData from "../ui/TableData";
import TableDataForOrdinaryLoan from "../ui/TableDataForOrdinaryLoan";
import TextTableRed from "../ui/TextTableRed";
import TextTableRedXl from "../ui/TextTableRedXl";
import {
  mobileOrdinaryLoan2,
  ordinaryLoan2Data,
  ordinaryLoan2Header,
  ordinaryLoanData,
  ordinaryLoanHeader,
} from "./config-table";

export default function OrdinaryLoan() {
  return (
    <section id="เงินกู้สามัญ">
      <BorderContent>
        <SectionTitle>เงินกู้สามัญ</SectionTitle>
        <FeatureOrLoan />
        <TableOrLoan />
        <StepPayment />
        <DownloadSub subId="3" />
      </BorderContent>
    </section>
  );
}

function FeatureOrLoan() {
  return (
    <>
      <MobileAccordion data={mobileOrdinaryLoan2} className="lg:hidden" />
      <TableData
        headers={ordinaryLoan2Header}
        data={ordinaryLoan2Data}
        className="hidden lg:block max-w-screen-sm mx-auto"
      />
    </>
  );
}

function TableOrLoan() {
  return (
    <>
      <TableDataForOrdinaryLoan
        headers={ordinaryLoanHeader}
        data={ordinaryLoanData}
      />
      <small className="lg:text-end">
        **ผู้คํ้าประกันต้องเป็น <TextTableRed>ข้าราชการ</TextTableRed> หรือ{" "}
        <TextTableRed>ลูกจ้างประจำ</TextTableRed> หรือ{" "}
        <TextTableRed>จนท.ประจำ สอ.พม.</TextTableRed> หรือ{" "}
        <TextTableRed>พนง.ประจำ สธค.</TextTableRed> เท่านั้น
      </small>
    </>
  );
}

function StepPayment() {
  return (
    <div className=" flex flex-col gap-5">
      <h5 className="text-blue-600 font-bold">หมายเหตุ</h5>
      <ul className="list-disc ps-8 lg:ps-[75px] leading-loose">
        <li>
          ยื่นคำขอกู้สามัญ ก่อนวันที่ <TextTableRedXl>10</TextTableRedXl>{" "}
          ของทุกเดือน
        </li>
        <li>
          คณะกรรมการกู้เงินพิจารณา ทุกวันที่ <TextTableRedXl>10</TextTableRedXl>{" "}
          ของเดือน
        </li>
        <li>
          การกู้เงินสามัญต้องมีหนังสือแสดงความยินยอมให้หักเงินบำเหน็จตกทอดของทายาท
          เงินฌาปนกิจสงเคราะห์ หรือเงินอื่นใด เพื่อชำระหนี้ กรณีสมาชิกถึงแก่กรรม
        </li>
      </ul>
    </div>
  );
}
