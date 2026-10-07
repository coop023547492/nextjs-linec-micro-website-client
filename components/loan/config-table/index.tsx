import {
  MobileAccordionProps,
  TableHeaderConfig,
  TableRow,
} from "@/utils/types";
import { CircleCheckBigIcon } from "lucide-react";
import Link from "next/link";
import TextTableRed from "../../ui/TextTableRed";
import TextTableRedLg from "../../ui/TextTableRedLg";
import TextTableRedXl from "../../ui/TextTableRedXl";
import { SUB_LOAN_URL } from "@/utils/constants";
import {
  carContent,
  careerInvestmentContent,
  collateralLoanContent,
  disastersLoanContent,
  educationContent,
  emergencyLoanContent,
  emergencyLoanContentForGuarantee,
  medicalLoanContent,
  ordinaryLoan2Content,
  ownShareLoanContent,
  tripContent,
} from "../content";

const corectIcon = (
  <CircleCheckBigIcon size={15} className="Main-dark-Blue mx-auto" />
);

export const emergencyLoanExampleLink = [
  "https://msd.coopmsds.com/docs/Example/%E0%B8%84%E0%B9%89%E0%B8%B3%E0%B8%82%E0%B8%AD%E0%B8%81%E0%B8%B9%E0%B9%89%E0%B8%89%E0%B8%B8%E0%B8%81%E0%B9%80%E0%B8%89%E0%B8%B4%E0%B8%99.pdf",
  "https://msd.coopmsds.com/docs/Example/%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B7%E0%B8%AD%E0%B8%84%E0%B9%89%E0%B8%B3%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B1%E0%B8%99-%E0%B8%89%E0%B8%B8%E0%B8%81%E0%B9%80%E0%B8%89%E0%B8%B4%E0%B8%99.pdf",
];

export const ownShareLoanExampleLink = [
  "https://msd.coopmsds.com/docs/Example/%E0%B8%84%E0%B8%B3%E0%B8%82%E0%B8%AD%E0%B8%81%E0%B8%B9%E0%B9%89%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99.pdf",
];

export const loanHeaderForOfficer: TableHeaderConfig[][] = [
  [
    {
      label: (
        <>
          ประเภทเงินกู้ <br />{" "}
          <small className="custom-sub-title-header-table">
            (คลิกที่ชื่อเงินกู้ เพื่ออ่านรายละเอียดเพิ่มเติม)
          </small>
        </>
      ),
      rowSpan: 2,
      className: "w-4/12",
    },
    { label: "วงเงินสูงสุด", rowSpan: 2, className: "w-1/12" },
    { label: "อัตราดอกเบี้ยต่อปี", rowSpan: 2, className: "w-1/12" },
    {
      label: (
        <>
          ส่งชำระ <br />
          ไม่เกิน
          <br />
          (งวด)
        </>
      ),
      rowSpan: 2,
      className: "w-1/12",
    },
    { label: "ใครกู้ได้บ้าง?", colSpan: 8 },
  ],
  [
    { label: "ข้าราชการ" },
    { label: "ลูกจ้างประจำ" },
    { label: "ข้าราชการบำนาญ" },
    { label: "ลูกจ้างบำเหน็จรายเดือน" },
    { label: "จนท.ประจำ สอ.พม." },
    { label: "พนง.ประจำ สธค." },
    { label: "พนักงานราชการ" },
    { label: "พนักงานกองทุน" },
  ],
];

export const loanDataForOfficer: TableRow[] = [
  {
    ประเภท: {
      value: (
        <Link href={`${SUB_LOAN_URL}/emergency-loan`}>เงินกู้ฉุกเฉิน</Link>
      ),
      className: "custom-link-type",
    },
    วงเงินสูงสุด: {
      value: "2 แสน",
      className: "custom-text-center-bold",
    },
    อัตราดอกเบี้ย: {
      value: "5.75%",
      className: "custom-text-center-bold",
    },
    ส่งชำระ: {
      value: "12",
      className: "custom-text-center-bold",
    },
    ข้าราชการ: {
      value: corectIcon,
    },
    ลูกจ้างประจำ: {
      value: corectIcon,
    },
    ข้าราชการบำนาญ: {
      value: corectIcon,
    },
    ลูกจ้างบำเหน็จ: {
      value: corectIcon,
    },
    จนท: {
      value: corectIcon,
    },
    พนักงานสธ: {
      value: corectIcon,
    },

    พนังงานราชการ: {
      value: corectIcon,
    },
    กองทุน: {
      value: corectIcon,
    },
  },
  /*  {
    ประเภท: {
      value: <Link href="#เงินกู้ฉุกเฉินผ่านแอป">เงินกู้ฉุกเฉินผ่านแอป</Link>,
      className: "custom-link-type",
    },
    วงเงินสูงสุด: {
      value: "2 แสน",
      className: "custom-text-center-bold",
    },
    อัตราดอกเบี้ย: {
      value: "5.75%",
      className: "custom-text-center-bold",
    },
    ส่งชำระ: {
      value: "12",
      className: "custom-text-center-bold",
    },
    ข้าราชการ: {
      value: corectIcon,
    },
    ลูกจ้างประจำ: {
      value: corectIcon,
    },
    ข้าราชการบำนาญ: {
      value: corectIcon,
    },
    ลูกจ้างบำเหน็จ: {
      value: corectIcon,
    },
    พนักงานสธ: {
      value: corectIcon,
    },
    พนังงานราชการ: {
      value: corectIcon,
    },
  }, */
  {
    ประเภท: {
      value: (
        <Link href={`${SUB_LOAN_URL}/ownshare-loan`}>เงินกู้หุ้นตนเอง</Link>
      ),
      className: "custom-link-type",
    },
    วงเงินสูงสุด: {
      value: "90%",
      className: "custom-text-center-bold",
    },
    อัตราดอกเบี้ย: {
      value: "5.75%",
      className: "custom-text-center-bold",
    },
    ส่งชำระ: {
      value: "240",
      className: "custom-text-center-bold",
    },
    ข้าราชการ: {
      value: corectIcon,
    },
    ลูกจ้างประจำ: {
      value: corectIcon,
    },
    ข้าราชการบำนาญ: {
      value: corectIcon,
    },
    ลูกจ้างบำเหน็จ: {
      value: corectIcon,
    },
    จนท: {
      value: corectIcon,
    },
    พนักงานสธ: {
      value: corectIcon,
    },
    พนังงานราชการ: {
      value: corectIcon,
    },
    กองทุน: {
      value: corectIcon,
    },
  },
  {
    ประเภท: {
      value: <Link href={`${SUB_LOAN_URL}/ordinary-loan`}>เงินกู้สามัญ</Link>,
      className: "custom-link-type",
    },
    วงเงินสูงสุด: {
      value: "2.5 ล้าน",
      className: "custom-text-center-bold",
    },
    อัตราดอกเบี้ย: {
      value: "6%",
      className: "custom-text-center-bold",
    },
    ส่งชำระ: {
      value: "240",
      className: "custom-text-center-bold",
    },
    ข้าราชการ: {
      value: corectIcon,
    },
    ลูกจ้างประจำ: {
      value: corectIcon,
    },
    ข้าราชการบำนาญ: {},
    ลูกจ้างบำเหน็จ: {},
    จนท: {
      value: corectIcon,
    },
    พนักงานสธ: {
      value: corectIcon,
    },
    พนังงานราชการ: {},
    กองทุน: {},
  },

  {
    ประเภท: {
      value: (
        <Link href={`${SUB_LOAN_URL}/special-loan`}>
          เงินกู้พิเศษ (ใช้หลักทรัพย์ค้ำประกัน)
        </Link>
      ),
      className: "custom-link-type",
    },
    วงเงินสูงสุด: {
      value: "2.5 ล้าน",
      className: "custom-text-center-bold",
    },
    อัตราดอกเบี้ย: {
      value: "5.5%",
      className: "custom-text-center-bold",
    },
    ส่งชำระ: {
      value: "240",
      className: "custom-text-center-bold",
    },
    ข้าราชการ: {
      value: corectIcon,
    },
    ลูกจ้างประจำ: {
      value: corectIcon,
    },
    ข้าราชการบำนาญ: { value: corectIcon },
    ลูกจ้างบำเหน็จ: { value: corectIcon },
    จนท: {
      value: corectIcon,
    },
    พนักงานสธ: {
      value: corectIcon,
    },
    พนังงานราชการ: {},
    กองทุน: {},
  },
  {
    ประเภท: {
      value: (
        <Link href={`${SUB_LOAN_URL}/investment-loan`}>
          เงินกู้สามัญเพื่อการลงทุนประกอบอาชีพ
        </Link>
      ),
      className: "custom-link-type",
    },
    วงเงินสูงสุด: {
      value: "5 แสน",
      className: "custom-text-center-bold",
    },
    อัตราดอกเบี้ย: {
      value: "3.5%",
      className: "custom-text-center-bold",
    },
    ส่งชำระ: {
      value: "24",
      className: "custom-text-center-bold",
    },
    ข้าราชการ: {
      value: corectIcon,
    },
    ลูกจ้างประจำ: {
      value: corectIcon,
    },
    ข้าราชการบำนาญ: { value: corectIcon },
    ลูกจ้างบำเหน็จ: { value: corectIcon },
    จนท: {
      value: corectIcon,
    },
    พนักงานสธ: {
      value: corectIcon,
    },
    พนังงานราชการ: {},
    กองทุน: {},
  },
  {
    ประเภท: {
      value: (
        <Link href={`${SUB_LOAN_URL}/education-loan`}>
          เงินกู้สามัญเพิ่อการศึกษา
        </Link>
      ),
      className: "custom-link-type",
    },
    วงเงินสูงสุด: {
      value: "5 แสน",
      className: "custom-text-center-bold",
    },
    อัตราดอกเบี้ย: {
      value: "3.5%",
      className: "custom-text-center-bold",
    },
    ส่งชำระ: {
      value: "24",
      className: "custom-text-center-bold",
    },
    ข้าราชการ: {
      value: corectIcon,
    },
    ลูกจ้างประจำ: {
      value: corectIcon,
    },
    ข้าราชการบำนาญ: { value: corectIcon },
    ลูกจ้างบำเหน็จ: { value: corectIcon },
    จนท: {
      value: corectIcon,
    },
    พนักงานสธ: {
      value: corectIcon,
    },
    พนังงานราชการ: {},
    กองทุน: {},
  },

  {
    ประเภท: {
      value: (
        <Link href={`${SUB_LOAN_URL}/tour-loan`}>
          เงินกู้สามัญเพิ่อการทัศนศึกษา
        </Link>
      ),
      className: "custom-link-type",
    },
    วงเงินสูงสุด: {
      value: "3 แสน",
      className: "custom-text-center-bold",
    },
    อัตราดอกเบี้ย: {
      value: "3.5%",
      className: "custom-text-center-bold",
    },
    ส่งชำระ: {
      value: "24",
      className: "custom-text-center-bold",
    },
    ข้าราชการ: {
      value: corectIcon,
    },
    ลูกจ้างประจำ: {
      value: corectIcon,
    },
    ข้าราชการบำนาญ: { value: corectIcon },
    ลูกจ้างบำเหน็จ: { value: corectIcon },
    จนท: {
      value: corectIcon,
    },
    พนักงานสธ: {
      value: corectIcon,
    },
    พนังงานราชการ: {},
    กองทุน: {},
  },
  {
    ประเภท: {
      value: (
        <Link href={`${SUB_LOAN_URL}/car-loan`}>
          เงินกู้สามัญเพิ่อการซื้อรถยนต์หรือรถจักรยานยนต์
        </Link>
      ),
      className: "custom-link-type",
    },
    วงเงินสูงสุด: {
      value: "1.5 ล้าน",
      className: "custom-text-center-bold",
    },
    อัตราดอกเบี้ย: {
      value: "3%",
      className: "custom-text-center-bold",
    },
    ส่งชำระ: {
      value: "84",
      className: "custom-text-center-bold",
    },
    ข้าราชการ: {
      value: corectIcon,
    },
    ลูกจ้างประจำ: {
      value: corectIcon,
    },
    ข้าราชการบำนาญ: { value: corectIcon },
    ลูกจ้างบำเหน็จ: { value: corectIcon },
    จนท: {
      value: corectIcon,
    },
    พนักงานสธ: {
      value: corectIcon,
    },
    พนังงานราชการ: {},
    กองทุน: {},
  },
  {
    ประเภท: {
      value: (
        <Link href={`${SUB_LOAN_URL}/medical-loan`}>
          เงินกู้สามัญเพื่อการรักษาพยาบาล
        </Link>
      ),
      className: "custom-link-type",
    },
    วงเงินสูงสุด: {
      value: "5 แสน",
      className: "custom-text-center-bold",
    },
    อัตราดอกเบี้ย: {
      value: "3.5%",
      className: "custom-text-center-bold",
    },
    ส่งชำระ: {
      value: "24",
      className: "custom-text-center-bold",
    },
    ข้าราชการ: {
      value: corectIcon,
    },
    ลูกจ้างประจำ: {
      value: corectIcon,
    },
    ข้าราชการบำนาญ: {
      value: corectIcon,
    },
    ลูกจ้างบำเหน็จ: {
      value: corectIcon,
    },
    จนท: {
      value: corectIcon,
    },
    พนักงานสธ: {
      value: corectIcon,
    },
    พนังงานราชการ: {
      value: corectIcon,
    },
    กองทุน: {
      value: corectIcon,
    },
  },
  {
    ประเภท: {
      value: (
        <Link href={`${SUB_LOAN_URL}/disasters-loan`}>
          เงินกู้สามัญเพิ่อเหตุภัยพิบัติจากภัยธรรมชาติ
        </Link>
      ),
      className: "custom-link-type",
    },
    วงเงินสูงสุด: {
      value: "5 แสน",
      className: "custom-text-center-bold",
    },
    อัตราดอกเบี้ย: {
      value: "2.5%",
      className: "custom-text-center-bold",
    },
    ส่งชำระ: {
      value: "24",
      className: "custom-text-center-bold",
    },
    ข้าราชการ: {
      value: corectIcon,
    },
    ลูกจ้างประจำ: {
      value: corectIcon,
    },
    ข้าราชการบำนาญ: {
      value: corectIcon,
    },
    ลูกจ้างบำเหน็จ: {
      value: corectIcon,
    },
    จนท: {
      value: corectIcon,
    },
    พนักงานสธ: {
      value: corectIcon,
    },
    พนังงานราชการ: {
      value: corectIcon,
    },
    กองทุน: {
      value: corectIcon,
    },
  },
];

export const etcRuleHeader: TableHeaderConfig[][] = [
  [
    { label: "" },
    { label: "เจ้าหน้าที่สหกรณ์ พม." },
    { label: "พนักงานกองทุน" },
  ],
];

export const etcRuleData: TableRow[] = [
  {
    สิทธิ์กู้เหมือนกับ: {
      value: "สิทธิ์กู้เหมือนกับ",
      className: "custom-text-end-bold",
    },
    เจ้าหน้าที่สหกรณ์: {
      value: "ลูกจ้างประจำ",
      className: "text-center",
    },
    พนักงานกองทุน: {
      value: "พนักงานราชการ",
      className: "text-center",
    },
  },
];

export const etcRuleHeader2: TableHeaderConfig[][] = [
  [
    { label: "" },
    { label: "ข้าราชการ/ลูกจ้างประจำ" },
    { label: "พนง.ประจำ สธค." },
  ],
];

export const etcRuleData2: TableRow[] = [
  {
    สิทธิ์กู้เหมือนกับ: {
      value: "กู้ได้ทุกประเภทโดยไม่จำกัดสัญญาโดยยอดกู้รวมทั้งหมดต้องไม่เกิน",
      className: "text-center",
    },
    ข้าราชการ: {
      value: "ไม่เกิน 2.5 ล้าน",
      className: "text-center",
    },
    พนักงาน: {
      value: "ไม่เกิน 1.5 ล้าน",
      className: "text-center",
    },
  },
];

export const ordinaryLoan2Header: TableHeaderConfig[][] = [
  [
    { label: "สำหรับ", className: "text-end w-3/12" },
    {
      label: "ข้าราชการ, ลูกจ้างประจำ, จนท.ประจำ สอ.พม., พนง.ประจำ สธค.",
      className: "text-start",
    },
  ],
];

export const ordinaryLoan2Data: TableRow[] = [
  {
    สำหรับ: {
      value: "อัตราดอกเบี้ยต่อปี",
      className: "custom-text-end-bold",
    },
    ข้าราชการ: {
      value: <TextTableRedXl>6%</TextTableRedXl>,
    },
  },
  {
    สำหรับ: {
      value: "การส่งชำระ",
      className: "custom-text-end-bold",
    },
    ข้าราชการ: {
      value: (
        <>
          ส่งชำระไม่เกิน <TextTableRedLg>240</TextTableRedLg> งวด, ส่งชำระแล้ว{" "}
          <TextTableRedLg>6</TextTableRedLg> งวด กู้ใหม่ได้, <br />
          เงินเดือนคงเหลือไม่ต่ำกว่า <TextTableRedLg>2,000</TextTableRedLg> บาท
        </>
      ),
    },
  },
  {
    สำหรับ: {
      value: "กู้ได้เมื่อเป็นสมาชิกเกิน",
      className: "custom-text-end-bold",
    },
    ข้าราชการ: {
      value: (
        <>
          <TextTableRedLg>6</TextTableRedLg> เดือน
        </>
      ),
    },
  },
];

export const ordinaryLoanHeader: TableHeaderConfig[][] = [
  [
    { label: "ยอดกู้", colSpan: 4 },
    { label: "การค้ำประกัน", colSpan: 5 },
  ],
  [
    { label: "เป็นสมาชิก", rowSpan: 2, className: "w-2/12" },
    { label: "กู้ได้กี่เท่าของเงินได้รายเดือน", rowSpan: 2 },
    { label: "ยอดกู้ต้องไม่เกิน", colSpan: 2 },
    { label: "ต้องมีทุนเรือนหุ้นไม่น้อยกว่า", rowSpan: 2 },
    { label: "ต้องมีผู้ค้ำประกัน**", colSpan: 2 },
    { label: "ต้องเป็นสมาชิกสมาคมฌาปนกิจ", rowSpan: 2 },
    { label: "หรือใช้หลักทรัพย์ค้ำประกัน", rowSpan: 2 },
  ],
  [
    { label: "ข้าราชการ/ลูกจ้างประจำ/จนท.ประจำ สอ.พม." },
    { label: "พนง.ประจำ สธค." },
    { label: "ข้าราชการ/ลูกจ้างประจำ/จนท.ประจำ สอ.พม." },
    { label: "พนง.ประจำ สธค." },
  ],
];

export const ordinaryLoanData: TableRow[] = [
  {
    เป็นสมาชิก: {
      value: (
        <>
          <TextTableRedLg>6</TextTableRedLg> เดือน แต่ไม่ถึง{" "}
          <TextTableRedLg>2</TextTableRedLg> ปี
        </>
      ),
      className: "text-center",
    },
    กู้ได้กี่เท่าของเงินได้รายเดือน: {
      value: (
        <>
          <TextTableRedLg>20</TextTableRedLg> เท่า
        </>
      ),
      className: "text-center",
    },
    ข้าราชการ: {
      value: <TextTableRedLg>500,000</TextTableRedLg>,
      className: "text-center",
    },
    สธ: {
      value: <TextTableRedLg>500,000</TextTableRedLg>,
      className: "text-center",
    },
    ต้องมีทุนเรือนหุ้นไม่น้อยกว่า: {
      value: <TextTableRedLg>6%</TextTableRedLg>,
      className: "text-center",
    },
    ข้าราชการ2: {
      value: (
        <>
          <TextTableRedLg>2</TextTableRedLg> คน
        </>
      ),
      className: "text-center",
      colSpan: 2,
      rowSpan: 2,
    },
    ต้องเป็นสมาชิกสมาคมฌาปนกิจ: {
      value: "-",
      className: "text-center",
      rowSpan: 2,
    },
    หรือใช้หลักทรัพย์ค้ำประกัน: {
      value: (
        <>
          <TextTableRedLg>75%</TextTableRedLg> ของราคาประเมินที่ดินจากกรมที่ดิน
          ต้องมีมูลค่ามากกว่ายอดกู้ <br /> (ไม่รวมสิ่งปลูกสร้าง)
        </>
      ),
      className: "text-center w-2/12",
      rowSpan: 9,
    },
  },
  {
    เป็นสมาชิก: {
      value: (
        <>
          <TextTableRedLg>2</TextTableRedLg> ปี แต่ไม่ถึง{" "}
          <TextTableRedLg>4</TextTableRedLg> ปี
        </>
      ),
      className: "text-center",
    },
    กู้ได้กี่เท่าของเงินได้รายเดือน: {
      value: (
        <>
          <TextTableRedLg>30</TextTableRedLg> เท่า
        </>
      ),
      className: "text-center",
    },
    ข้าราชการ: {
      value: <TextTableRedLg>700,000</TextTableRedLg>,
      className: "text-center",
    },
    สธ: {
      value: <TextTableRedLg>700,000</TextTableRedLg>,
      className: "text-center",
    },
    ต้องมีทุนเรือนหุ้นไม่น้อยกว่า: {
      value: <TextTableRedLg>8%</TextTableRedLg>,
      className: "text-center",
    },
  },

  {
    เป็นสมาชิก: {
      value: (
        <>
          <TextTableRedLg>4</TextTableRedLg> ปี แต่ไม่ถึง{" "}
          <TextTableRedLg>6</TextTableRedLg> ปี
        </>
      ),
      className: "text-center",
    },
    กู้ได้กี่เท่าของเงินได้รายเดือน: {
      value: (
        <>
          <TextTableRedLg>40</TextTableRedLg> เท่า
        </>
      ),
      className: "text-center",
    },
    ข้าราชการ: {
      value: <TextTableRedLg>900,000</TextTableRedLg>,
      className: "text-center",
    },
    สธ: {
      value: <TextTableRedLg>900,000</TextTableRedLg>,
      className: "text-center",
    },
    ต้องมีทุนเรือนหุ้นไม่น้อยกว่า: {
      value: <TextTableRedLg>12%</TextTableRedLg>,
      className: "text-center",
    },
    ข้าราชการ2: {
      value: (
        <>
          <TextTableRedLg>3</TextTableRedLg> คน
        </>
      ),
      className: "text-center",
      colSpan: 2,
      rowSpan: 2,
    },
    ต้องเป็นสมาชิกสมาคมฌาปนกิจ: {
      value: (
        <>
          <TextTableRedLg>1</TextTableRedLg> สมาคม
        </>
      ),
      className: "text-center",
      rowSpan: 2,
    },
  },
  {
    เป็นสมาชิก: {
      value: (
        <>
          <TextTableRedLg>6</TextTableRedLg> ปี แต่ไม่ถึง{" "}
          <TextTableRedLg>8</TextTableRedLg> ปี
        </>
      ),
      className: "text-center",
    },
    กู้ได้กี่เท่าของเงินได้รายเดือน: {
      value: (
        <>
          <TextTableRedLg>50</TextTableRedLg> เท่า
        </>
      ),
      className: "text-center",
    },
    ข้าราชการ: {
      value: <TextTableRedLg>1,100,000</TextTableRedLg>,
      className: "text-center",
    },
    สธ: {
      value: <TextTableRedLg>1,100,000</TextTableRedLg>,
      className: "text-center",
    },
    ต้องมีทุนเรือนหุ้นไม่น้อยกว่า: {
      value: <TextTableRedLg>15%</TextTableRedLg>,
      className: "text-center",
    },
  },
  {
    เป็นสมาชิก: {
      value: (
        <>
          <TextTableRedLg>8</TextTableRedLg> ปี แต่ไม่ถึง{" "}
          <TextTableRedLg>10</TextTableRedLg> ปี
        </>
      ),
      className: "text-center",
    },
    กู้ได้กี่เท่าของเงินได้รายเดือน: {
      value: (
        <>
          <TextTableRedLg>55</TextTableRedLg> เท่า
        </>
      ),
      className: "text-center",
    },
    ข้าราชการ: {
      value: <TextTableRedLg>1,300,000</TextTableRedLg>,
      className: "text-center",
    },
    สธ: {
      value: <TextTableRedLg>1,300,000</TextTableRedLg>,
      className: "text-center",
    },
    ต้องมีทุนเรือนหุ้นไม่น้อยกว่า: {
      value: <TextTableRedLg>20%</TextTableRedLg>,
      className: "text-center",
      rowSpan: 5,
    },
    ข้าราชการ2: {
      value: (
        <>
          <TextTableRedLg>4</TextTableRedLg> คน
        </>
      ),
      className: "text-center",
      rowSpan: 4,
    },
    สธ2: {
      value: (
        <>
          <TextTableRedLg>4</TextTableRedLg> คน
        </>
      ),
      className: "text-center",
    },
    ต้องเป็นสมาชิกสมาคมฌาปนกิจ: {
      value: (
        <>
          <TextTableRedLg>2</TextTableRedLg> สมาคม
        </>
      ),
      className: "text-center",
      rowSpan: 5,
    },
  },
  {
    เป็นสมาชิก: {
      value: (
        <>
          <TextTableRedLg>10</TextTableRedLg> ปี แต่ไม่ถึง{" "}
          <TextTableRedLg>11</TextTableRedLg> ปี
        </>
      ),
      className: "text-center",
    },
    กู้ได้กี่เท่าของเงินได้รายเดือน: {
      value: (
        <>
          <TextTableRedLg>58</TextTableRedLg> เท่า
        </>
      ),
      className: "text-center",
    },
    ข้าราชการ: {
      value: <TextTableRedLg>1,500,000</TextTableRedLg>,
      className: "text-center",
    },
    สธ: {
      value: <TextTableRedLg>1,500,000</TextTableRedLg>,
      className: "text-center",
      rowSpan: 4,
    },
    สธ2: {
      value: (
        <>
          <TextTableRedLg>5</TextTableRedLg> คน
        </>
      ),
      className: "text-center",
      rowSpan: 4,
    },
  },
  {
    เป็นสมาชิก: {
      value: (
        <>
          <TextTableRedLg>11</TextTableRedLg> ปี แต่ไม่ถึง{" "}
          <TextTableRedLg>12</TextTableRedLg> ปี
        </>
      ),
      className: "text-center",
    },
    กู้ได้กี่เท่าของเงินได้รายเดือน: {
      value: (
        <>
          <TextTableRedLg>60</TextTableRedLg> เท่า
        </>
      ),
      className: "text-center",
    },
    ข้าราชการ: {
      value: <TextTableRedLg>1,800,000</TextTableRedLg>,
      className: "text-center",
    },
  },
  {
    เป็นสมาชิก: {
      value: (
        <>
          <TextTableRedLg>12</TextTableRedLg> ปี แต่ไม่ถึง{" "}
          <TextTableRedLg>14</TextTableRedLg> ปี
        </>
      ),
      className: "text-center",
    },
    กู้ได้กี่เท่าของเงินได้รายเดือน: {
      value: (
        <>
          <TextTableRedLg>63</TextTableRedLg> เท่า
        </>
      ),
      className: "text-center",
    },
    ข้าราชการ: {
      value: <TextTableRedLg>2,000,000</TextTableRedLg>,
      className: "text-center",
    },
  },
  {
    เป็นสมาชิก: {
      value: (
        <>
          <TextTableRedLg>14</TextTableRedLg> ปีขึ้นไป
        </>
      ),
      className: "text-center",
    },
    กู้ได้กี่เท่าของเงินได้รายเดือน: {
      value: (
        <>
          <TextTableRedLg>65</TextTableRedLg> เท่า
        </>
      ),
      className: "text-center",
    },
    ข้าราชการ: {
      value: <TextTableRedLg>2,500,000</TextTableRedLg>,
      className: "text-center",
    },
    ข้าราชการ2: {
      value: (
        <>
          <TextTableRedLg>5 </TextTableRedLg> คน
        </>
      ),
      className: "text-center",
    },
  },
];

export const emergencyLoanHeader: TableHeaderConfig[][] = [
  [
    { label: "สำหรับ", colSpan: 3, className: "text-end" },
    {
      label: (
        <>
          ข้าราชการ, ลูกจ้างประจำ
          <br /> ข้าราชการบำนาญ, ลูกจ้างบำเหน็จรายเดือน
          <br /> จนท.ประจำ สอ.พม., พนง.ประจำ สธค.
        </>
      ),
      rowSpan: 2,
      className: " w-7/12",
    },
    {
      label: (
        <>
          พนักงานราชการ <br /> พนักงานกองทุน
        </>
      ),
      rowSpan: 2,
      className: "w-5/12",
    },
  ],
];

export const emergencyLoanData: TableRow[] = [
  {
    สำหรับ: {
      value: "ยอดกู้",
      className: "custom-text-end-bold",
      colSpan: 3,
    },
    ข้าราชการ: {
      value: (
        <>
          <TextTableRedXl>4 </TextTableRedXl>เท่า ของเงินเดือน สูงสุดไม่เกิน{" "}
          <TextTableRedLg>200,000</TextTableRedLg> บาท
        </>
      ),
      className: "text-start",
      colSpan: 2,
    },
  },
  {
    สำหรับ: {
      value: "อัตราดอกเบี้ยต่อปี",
      className: "custom-text-end-bold",
      colSpan: 3,
    },
    ข้าราชการ: {
      value: <TextTableRedXl>5.75%</TextTableRedXl>,
      className: "text-start",
      colSpan: 2,
    },
  },
  {
    สำหรับ: {
      value: "การส่งชำระ",
      className: "custom-text-end-bold",
      colSpan: 3,
    },
    ข้าราชการ: {
      value: (
        <>
          ส่งชำระไม่เกิน <TextTableRedLg>12 </TextTableRedLg>งวด, ส่งชำระแล้ว{" "}
          <TextTableRedLg>1 </TextTableRedLg>งวด กู้ใหม่ได้ <br />{" "}
          เงินเดือนคงเหลือไม่ต่ำกว่า <TextTableRedLg>2,000</TextTableRedLg> บาท
        </>
      ),
      className: "text-start",
      colSpan: 2,
    },
  },
  {
    สำหรับ: {
      value: "กู้ได้เมื่อเป็นสมาชิกเกิน",
      className: "custom-text-end-bold",
      colSpan: 3,
    },
    ข้าราชการ: {
      value: (
        <>
          <TextTableRedLg>1 </TextTableRedLg>เดือน
        </>
      ),
      className: "text-center",
    },
    พนักงานราชการ: {
      value: (
        <>
          <TextTableRedLg>6 </TextTableRedLg>เดือน
        </>
      ),
      className: "text-center",
    },
  },
  {
    ค้ำประกัน: {
      value: "ค้ำประกัน",
      className: "custom-text-center-bold",
      rowSpan: 3,
    },
    สำหรับ: {
      value: (
        <>
          ยอดกู้
          <TextTableRed> ไม่เกิน 90% ของเงินค่าหุ้น </TextTableRed>
          ที่มีอยู่
        </>
      ),
      className: "custom-text-center-bold",
      colSpan: 2,
    },
    ข้าราชการ: {
      value: (
        <>
          <TextTableRedLg>ไม่ต้อง</TextTableRedLg>ใช้คนค้ำประกัน
        </>
      ),
      className: "text-center !align-middle",
      colSpan: 2,
    },
  },
  {
    สำหรับ: {
      value: (
        <>
          ยอดกู้
          <TextTableRed> เกิน 90% ของเงินค่าหุ้น </TextTableRed>
          ที่มีอยู่
        </>
      ),
      className: "custom-text-center-bold w-1/12",
      rowSpan: 2,
    },
    สำหรับ2: {
      value: (
        <>
          <TextTableRed>ไม่เกิน</TextTableRed> 100,000
        </>
      ),
      className: "custom-text-center-bold",
    },
    ข้าราชการ: {
      value: (
        <>
          ใช้คนค้ำประกัน <TextTableRedLg>1 </TextTableRedLg>คน <br />
          (ต้องเป็น <TextTableRed>ข้าราชการ</TextTableRed> หรือ{" "}
          <TextTableRed>ลูกจ้างประจำ</TextTableRed> หรือ <br />
          <TextTableRed>ข้าราชการบำนาญ</TextTableRed> หรือ{" "}
          <TextTableRed>ลูกจ้างบำเหน็จรายเดือน</TextTableRed> หรือ <br />
          <TextTableRed>จนท.ประจำ สอ.พม.</TextTableRed> หรือ{" "}
          <TextTableRed>พนง.ประจำ สธค.</TextTableRed>)
        </>
      ),
      className: "text-center !align-middle",
      colSpan: 2,
    },
  },
  {
    สำหรับ2: {
      value: (
        <>
          <TextTableRed>เกิน</TextTableRed> 100,000
        </>
      ),
      className: "custom-text-center-bold",
    },
    ข้าราชการ: {
      value: (
        <>
          ใช้คนค้ำประกัน <TextTableRedLg>1 </TextTableRedLg>คน
          <br />
          (ต้องเป็น <TextTableRed>ข้าราชการ</TextTableRed> หรือ{" "}
          <TextTableRed>ลูกจ้างประจำ</TextTableRed> หรือ <br />
          <TextTableRed>ข้าราชการบำนาญ</TextTableRed> หรือ{" "}
          <TextTableRed>ลูกจ้างบำเหน็จรายเดือน</TextTableRed> หรือ <br />
          <TextTableRed>จนท.ประจำ สอ.พม.</TextTableRed> หรือ{" "}
          <TextTableRed>พนง.ประจำ สธค.</TextTableRed>)
        </>
      ),
      className: "text-center !align-middle",
    },
    พนักงานราชการ: {
      value: (
        <>
          ใช้คนค้ำประกัน <TextTableRedLg>2 </TextTableRedLg>คน <br />
          (คนที่ <TextTableRedLg>1</TextTableRedLg> ต้องเป็น{" "}
          <TextTableRed>ข้าราชการ</TextTableRed> หรือ{" "}
          <TextTableRed>ลูกจ้างประจำ</TextTableRed> หรือ{" "}
          <TextTableRed>ข้าราชการบำนาญ</TextTableRed> หรือ{" "}
          <TextTableRed>ลูกจ้างบำเหน็จรายเดือน</TextTableRed> หรือ{" "}
          <TextTableRed>จนท.ประจำ สอ.พม.</TextTableRed> หรือ{" "}
          <TextTableRed>พนง.ประจำ สธค.</TextTableRed>, <br />
          คนที่ <TextTableRedLg>2</TextTableRedLg> เป็นสมาชิกสหกรณ์ทุกประเภท)
        </>
      ),
      className: "text-center !align-middle",
    },
  },
];

export const emergencyLoanAppHeader: TableHeaderConfig[][] = [
  [
    { label: "สำหรับ", colSpan: 3 },
    {
      label:
        "ข้าราชการ, ลูกจ้างประจำ, ข้าราชการบำนาญ, ลูกจ้างบำเหน็จ, พนง.ประจำ สธค.",
      rowSpan: 2,
    },
    { label: "พนักงานราชการ", rowSpan: 2 },
  ],
];

export const emergencyLoanAppData: TableRow[] = [
  {
    สำหรับ: {
      value: "อายุการเป็นสมาชิกมากกว่า",
      className: "custom-text-end-bold",
      colSpan: 3,
    },
    ข้าราชการ: {
      value: "1 เดือน",
      className: "text-center",
    },
    พนักงานราชการ: {
      value: "6 เดือน",
      className: "text-center",
    },
  },
  {
    สำหรับ: {
      value: "ยอดกู้",
      className: "custom-text-end-bold",
      colSpan: 3,
    },
    ข้าราชการ: {
      value: "4 เท่าของเงินเดือน สูงสุดไม่เกิน 200,000 บาท",
      className: "text-center",
      colSpan: 2,
    },
  },
  {
    สำหรับ: {
      value: "อัตราดอกเบี้ยต่อปี",
      className: "custom-text-end-bold",
      colSpan: 3,
    },
    ข้าราชการ: {
      value: "5.75%",
      className: "text-center",
      colSpan: 2,
    },
  },
  {
    สำหรับ: {
      value: "เงื่อนไขพิเศษ",
      className: "custom-text-end-bold",
      colSpan: 3,
    },
    ข้าราชการ: {
      value: (
        <div>
          <ul className="list-disc ps-10">
            <li>ทำสัญญาเพื่อเปิดวงเงิน โดยสัญญามีอายุ 1 ปี</li>
            <li>คิดดอกเบี้ย เมื่อกดรับเงินจากแอป</li>
          </ul>
        </div>
      ),
      className: "text-red-500",
      colSpan: 2,
    },
  },
  {
    สำหรับ: {
      value: "เงื่อนไขเพิ่มเติม",
      className: "custom-text-end-bold",
      colSpan: 3,
    },
    ข้าราชการ: {
      value:
        "ไม่เกิน 12 งวด, เงินเดือนคงเหลือ 2,000 บาท, กู้ใหม่ได้หลังจากชำระไปแล้ว 1 งวด",
      className: "text-center",
      colSpan: 2,
    },
  },
  {
    ค้ำประกัน: {
      value: "ค้ำประกัน",
      className: "text-center",
      rowSpan: 3,
    },
    สำหรับ: {
      value: (
        <div>
          ยอดกู้
          <span className=" text-red-500">ไม่เกิน 90% ของเงินค่าหุ้น</span>
          ที่มีอยู่
        </div>
      ),
      className: "text-center",
      colSpan: 2,
    },
    ข้าราชการ: {
      value: "ไม่ต้องใช้คนค้ำประกัน",
      className: "text-center",
      colSpan: 2,
    },
  },
  {
    สำหรับ: {
      value: (
        <div>
          ยอดกู้
          <span className=" text-red-500">เกิน 90% ของเงินค่าหุ้น</span>
          ที่มีอยู่
        </div>
      ),
      className: "text-center",
      rowSpan: 2,
    },
    สำหรับ2: {
      value: "ไม่เกิน 100,000",
      className: "text-center",
    },
    ข้าราชการ: {
      value: (
        <div>
          ใช้คนค้ำประกัน 1 คน (ต้องเป็น
          <span className=" text-green-600">ข้าราชการ/ลูกจ้างประจำ</span>)
        </div>
      ),
      className: "text-center",
      colSpan: 2,
    },
  },
  {
    สำหรับ2: {
      value: "เกิน 100,000",
      className: "text-center",
    },
    ข้าราชการ: {
      value: (
        <div>
          ใช้คนค้ำประกัน 1 คน (ต้องเป็น
          <span className=" text-green-600">ข้าราชการ/ลูกจ้างประจำ</span>)
        </div>
      ),
      className: "text-center",
    },
    พนักงานราชการ: {
      value: (
        <div>
          ใช้คนค้ำประกัน 2 คน (คนที่ 1 ต้องเป็น
          <span className=" text-green-600">ข้าราชการ/ลูกจ้างประจำ</span>, คนที่
          2 เป็นสมาชิกสหกรณ์ทุกประเภท)
        </div>
      ),
      className: "text-center",
    },
  },
];

export const ownShareLoanHeader: TableHeaderConfig[][] = [
  [
    { label: "สำหรับ", className: "text-end" },
    {
      label: "สมาชิกทุกประเภท",
      className: "text-start",
    },
  ],
];

export const ownShareLoanData: TableRow[] = [
  {
    สำหรับ: {
      value: "ยอดกู้",
      className: "custom-text-end-bold",
    },
    ข้าราชการ: {
      value: (
        <>
          <TextTableRedLg>90%</TextTableRedLg> ของเงินค่าหุ้นที่มีอยู่ หรือ
          <br />
          <TextTableRedLg>90% </TextTableRedLg>
          ของเงินค่าหุ้นรวมกับเงินฝากที่มีอยู่ (โดยมีเงินฝากเป็นหลักประกัน)
        </>
      ),
    },
  },
  {
    สำหรับ: {
      value: "อัตราดอกเบี้ยต่อปี",
      className: "custom-text-end-bold",
    },
    ข้าราชการ: {
      value: <TextTableRedXl>5.75%</TextTableRedXl>,
      className: "text-start",
    },
  },
  {
    สำหรับ: {
      value: "การส่งชำระ",
      className: "custom-text-end-bold",
    },
    ข้าราชการ: {
      value: (
        <>
          ส่งชำระไม่เกิน <TextTableRedLg>240 </TextTableRedLg>งวด, ส่งชำระแล้ว{" "}
          <TextTableRedLg>3 </TextTableRedLg>งวด กู้ใหม่ได้ <br />
          เงินเดือนคงเหลือไม่ต่ำกว่า <TextTableRedLg> 2,000</TextTableRedLg> บาท
        </>
      ),
      className: "text-start",
    },
  },
  {
    สำหรับ: {
      value: "กู้ได้เมื่อเป็นสมาชิกเกิน",
      className: "custom-text-end-bold",
    },
    ข้าราชการ: {
      value: (
        <>
          <TextTableRedLg>6 </TextTableRedLg>เดือน
        </>
      ),
    },
  },
];

export const collateralLoanHeader: TableHeaderConfig[][] = [
  [
    { label: "สำหรับ", className: "text-end w-3/12" },
    {
      label: (
        <>
          ข้าราชการ, ลูกจ้างประจำ
          <br /> ข้าราชการบำนาญ, ลูกจ้างบำเหน็จรายเดือน
          <br /> จนท.ประจำ สอ.พม.
        </>
      ),
    },
    {
      label: "พนง.ประจำ สธค.",
    },
  ],
];

export const collateralLoanData: TableRow[] = [
  {
    สำหรับ: {
      value: "ยอดกู้",
      className: "custom-text-end-bold",
    },
    ข้าราชการ: {
      value: (
        <>
          ไม่เกิน <TextTableRedLg>75%</TextTableRedLg>{" "}
          ของราคาประเมินจากกรมที่ดิน <br /> สูงสุดไม่เกิน{" "}
          <TextTableRedLg>2,500,000</TextTableRedLg> บาท
        </>
      ),
      className: "text-center",
    },
    พนักงาน: {
      value: (
        <>
          ไม่เกิน <TextTableRedLg>75%</TextTableRedLg>{" "}
          ของราคาประเมินจากกรมที่ดิน <br /> สูงสุดไม่เกิน{" "}
          <TextTableRedLg>1,500,000</TextTableRedLg> บาท
        </>
      ),
      className: "text-center",
    },
  },
  {
    สำหรับ: {
      value: "อัตราดอกเบี้ยต่อปี",
      className: "custom-text-end-bold",
    },
    ข้าราชการ: {
      value: <TextTableRedXl>5.5%</TextTableRedXl>,
      colSpan: 2,
    },
  },
  {
    สำหรับ: {
      value: "เงื่อนไขพิเศษ",
      className: "custom-text-end-bold",
    },
    ข้าราชการ: {
      value: (
        <>
          สำหรับการสร้างบ้านเท่านั้น
          <br /> โดยต้องยื่นแบบแปลนการสร้างบ้าน
          บนที่ดินที่ใช้เป็นหลักทรัพย์ค้ำประกัน
        </>
      ),
      colSpan: 2,
    },
  },
  {
    สำหรับ: {
      value: "การส่งชำระ",
      className: "custom-text-end-bold",
    },
    ข้าราชการ: {
      value: (
        <>
          ส่งชำระไม่เกิน <TextTableRedLg>240</TextTableRedLg> งวด
        </>
      ),
      colSpan: 2,
    },
  },
  {
    สำหรับ: {
      value: "กู้ได้เมื่อเป็นสมาชิกเกิน",
      className: "custom-text-end-bold",
    },
    ข้าราชการ: {
      value: (
        <>
          <TextTableRedLg>3 </TextTableRedLg>ปี
        </>
      ),
      colSpan: 2,
    },
  },
  {
    สำหรับ: {
      value: "ค้ำประกัน",
      className: "custom-text-end-bold",
    },
    ข้าราชการ: {
      value: "ใช้โฉนดที่ดิน (ปลอดภาระ) เป็นหลักทรัพย์ค้ำประกัน",
      colSpan: 2,
    },
  },
];

export const generalLoansForHeader: TableHeaderConfig[][] = [
  [
    { label: "" },
    { label: "เงินกู้สามัญเพื่อการลงทุนประกอบอาชีพ" },
    { label: "เงินกู้สามัญเพื่อการศึกษา" },
    { label: "เงินกู้สามัญเพื่อการทัศนศึกษา" },
    { label: "เงินกู้สามัญเพื่อการซื้อรถยนต์หรือรถจักรยานยนต์" },
  ],
];

export const generalLoansForData: TableRow[] = [
  {
    ช่องแรก: { value: "สำหรับ", className: "text-center" },
    การลงทุน: {
      value: "ข้าราชการ, ลูกจ้างประจำ, พนง.ประจำ สธค.",
      className: "text-center",
      colSpan: 4,
    },
  },
  {
    ช่องแรก: { value: "อายุการเป็นสมาชิกมากกว่า", className: "text-center" },
    การลงทุน: {
      value: "6 เดือน",
      className: "text-center",
      colSpan: 4,
    },
  },
  {
    ช่องแรก: { value: "ยอดกู้", className: "text-center" },
    การลงทุน: {
      value: "ประเมินตามค่าใช้จ่ายที่เกิดขึ้นจริง สูงสุดไม่เกิน 500,000 บาท",
      className: "text-center",
      colSpan: 2,
    },
    ทัศนศึกษา: {
      value: "ประเมินตามค่าใช้จ่ายที่เกิดขึ้นจริง สูงสุดไม่เกิน 300,000 บาท",
      className: "text-center",
    },
    รถยนต์: {
      value: "ประเมินตามค่าใช้จ่ายที่เกิดขึ้นจริง สูงสุดไม่เกิน 1,500,000 บาท",
      className: "text-center",
    },
  },
  {
    ช่องแรก: { value: "อัตราดอกเบี้ยต่อปี", className: "text-center" },
    การลงทุน: {
      value: "3.5%",
      className: "text-center",
      colSpan: 3,
    },
    รถยนต์: {
      value: "3%",
      className: "text-center",
    },
  },
  {
    ช่องแรก: { value: "ส่งชำระ", className: "text-center" },
    การลงทุน: {
      value: "ไม่เกิน 24 งวด",
      className: "text-center",
      colSpan: 3,
    },
    รถยนต์: {
      value: "ไม่เกิน 84 งวด",
      className: "text-center",
    },
  },
  {
    ช่องแรก: { value: "เงื่อนไขพิเศษ", className: "text-center" },
    การลงทุน: {
      value: (
        <div>
          ยื่นหลักฐานในการลงทุนประกอบอาชีพ{" "}
          <small>
            (ตามที่ระบุในแบบฟอร์มแสดงหลักฐานประกอบการขอกู้สามัญเพื่อการลงทุนประกอบอาชีพ)
          </small>
        </div>
      ),
      className: "text-center",
    },
    การศึกษา: {
      value: (
        <div>
          ยื่นหลักฐานค่าใช้จ่ายสำหรับการศึกษา{" "}
          <small>
            (ตามที่ระบุในแบบฟอร์มแสดงหลักฐานประกอบการขอกู้สามัญเพื่อการศึกษา)
          </small>
        </div>
      ),
      className: "text-center",
    },
    การทัศนศึกษา: {
      value: (
        <div>
          ยื่นหลักฐานค่าใช้จ่ายสำหรับการทัศนศึกษา{" "}
          <small>
            (ตามที่ระบุในแบบฟอร์มแสดงหลักฐานประกอบการขอกู้สามัญเพื่อการลงทัศนศึกษา)
          </small>
        </div>
      ),
      className: "text-center",
    },
    รถยนต์: {
      value: (
        <div>
          ยื่นหลักฐานเกี่ยวกับรถที่จะซื้อ{" "}
          <small>
            (ตามที่ระบุในแบบฟอร์มแสดงหลักฐานประกอบการขอกู้สามัญเพื่อการซื้อรถยนต์หรือรถจักรยานยนต์)
          </small>
        </div>
      ),
      className: "text-center",
    },
  },
  {
    ช่องแรก: { value: "เงื่อนไขเพิ่มเติม", className: "text-center" },
    การลงทุน: {
      value: "เงินเดือนคงเหลือ 2,000 บาท",
      className: "text-center",
      colSpan: 4,
    },
  },
  {
    ช่องแรก: { value: "ค้ำประกัน", className: "text-center" },
    การลงทุน: {
      value:
        "ใช้คนค้ำประกัน 2 คน (ต้องเป็น ข้าราชการ หรือ ลูกจ้างประจำ หรือ พนง.ประจำ สธค.)",
      className: "text-center",
      colSpan: 3,
    },
    รถยนต์: {
      value: "การค้ำประกันเหมือนเงินกู้สามัญ ดูในตารางเงินกู้สามัญ",
      className: "text-center",
    },
  },
];

export const generalLoansFor2Header: TableHeaderConfig[][] = [
  [
    { label: "สำหรับ", colSpan: 2 },
    { label: "ข้าราชการ, ลูกจ้างประจำ, พนง.ประจำ สธค." },
    { label: "พนักงานราชการ, ลูกจ้างชั่วคราว" },
  ],
];

export const generalLoansFor2Data: TableRow[] = [
  {
    สำหรับ: {
      value: "อายุการเป็นสมาชิกมากกว่า",
      colSpan: 2,
      className: "text-center",
    },
    ข้าราชการ: {
      value: "6 เดือน",
      colSpan: 2,
      className: "text-center",
    },
  },
  {
    สำหรับ: { value: "ยอดกู้", colSpan: 2, className: "text-center" },
    ข้าราชการ: {
      value: "ประเมินตามค่าใช้จ่ายที่เกิดขึ้นจริง สูงสุดไม่เกิน 500,000 บาท",
      className: "text-center",
    },
    พนักงานราชการ: {
      value:
        "ประเมินตามค่าใช้จ่ายที่เกิดขึ้นจริง สูงสุดไม่เกิน 90% ของเงินค่าหุ้นที่มีอยู่",
      className: "text-center",
    },
  },
  {
    ช่องแรก: {
      value: "อัตราดอกเบี้ยต่อปี",
      className: "text-center",
      rowSpan: 2,
    },
    สำหรับ: {
      value: "เงินกู้สามัญเพื่อการรักษาพยาบาล",
      className: "text-center",
    },
    ข้าราชการ: {
      value: "3.5%",
      className: "text-center",
      colSpan: 2,
    },
  },
  {
    สำหรับ: {
      value: "เงินกู้สามัญเพื่อเหตุภัยพิบัติจากภัยธรรมชาติ",
      className: "text-center",
    },
    ข้าราชการ: {
      value: "2.5%",
      className: "text-center",
      colSpan: 2,
    },
  },
  {
    ช่องแรก: {
      value: "เงื่อนไขพิเศษ",
      className: "text-center",
      rowSpan: 2,
    },
    สำหรับ: {
      value: "เงินกู้สามัญเพื่อการรักษาพยาบาล",
      className: "text-center",
    },
    ข้าราชการ: {
      value: (
        <div>
          ยื่นหลักฐานในการรักษาพยาบาล ไม่เกิน 45 วัน{" "}
          <span>
            (ตามที่ระบุในแบบฟอร์มแสดงหลักฐานประกอบการขอกู้สามัญเพื่อการรักษาพยาบาล)
          </span>
        </div>
      ),
      className: "text-center",
      colSpan: 2,
    },
  },
  {
    สำหรับ: {
      value: "เงินกู้สามัญเพื่อเหตุภัยพิบัติจากภัยธรรมชาติ",
      className: "text-center",
    },
    ข้าราชการ: {
      value: (
        <div>
          ยื่นหลักฐานเพื่อแสดงความเสียหายและประเมินค่าความเสียหาย ไม่เกิน 00 วัน{" "}
          <span>
            (ตามที่ระบุในแบบฟอร์มแสดงหลักฐานประกอบการขอกู้สามัญเพื่อเหตุภัยพิบัติจากภัยธรรมชาติ)
          </span>
        </div>
      ),
      className: "text-center",
      colSpan: 2,
    },
  },

  {
    สำหรับ: {
      value: "เงื่อนไขเพิ่มเติม",
      colSpan: 2,
      className: "text-center",
    },
    ข้าราชการ: {
      value: "ไม่เกิน 24 งวด, เงินเดือนคงเหลือ 2,000 บาท",
      className: "text-center",
      colSpan: 2,
    },
  },
  {
    ช่องแรก: { value: "ค้ำประกัน", colSpan: 2, className: "text-center" },
    การลงทุน: {
      value:
        "ใช้คนค้ำประกัน 2 คน (ต้องเป็น ข้าราชการ หรือ ลูกจ้างประจำ หรือ พนง.ประจำ สธค.)",
      className: "text-center",
      colSpan: 2,
    },
  },
];

export const careerInvestmentHeader: TableHeaderConfig[][] = [
  [
    { label: "สำหรับ", className: "text-end" },
    {
      label: (
        <>
          ข้าราชการ, ลูกจ้างประจำ
          <br />
          จนท.ประจำ สอ.พม., พนง.ประจำ สธค.
        </>
      ),
    },
    {
      label: <>ข้าราชการบำนาญ, ลูกจ้างบำเหน็จรายเดือน</>,
      className: "w-5/12",
    },
  ],
];

export const careerInvestmentData: TableRow[] = [
  {
    สำหรับ: { value: "ยอดกู้", className: "custom-text-end-bold" },
    ข้าราชการ: {
      value: (
        <>
          ประเมินตามค่าใช้จ่ายที่เกิดขึ้นจริง <br /> สูงสุดไม่เกิน{" "}
          <TextTableRedLg>500,000</TextTableRedLg> บาท <br />
          (หากไม่เกิน <TextTableRedLg>90%</TextTableRedLg>{" "}
          ของเงินค่าหุ้นที่มีอยู่ ไม่ต้องใช้ผู้ค้ำประกัน)
        </>
      ),
      className: "text-center",
    },
    พนักงานราชการ: {
      value: (
        <>
          ประเมินตามค่าใช้จ่ายที่เกิดขึ้นจริง <br /> สูงสุดไม่เกิน{" "}
          <TextTableRedLg>90%</TextTableRedLg> ของเงินค่าหุ้นที่มีอยู่
        </>
      ),
      className: "text-center",
    },
  },
  {
    สำหรับ: { value: "อัตราดอกเบี้ยต่อปี", className: "custom-text-end-bold" },
    ข้าราชการ: {
      value: <TextTableRedXl>3.5%</TextTableRedXl>,
      colSpan: 2,
    },
  },
  {
    สำหรับ: { value: "ส่งชำระ", className: "custom-text-end-bold" },
    ข้าราชการ: {
      value: (
        <>
          ส่งชำระไม่เกิน <TextTableRedLg>24</TextTableRedLg> งวด
        </>
      ),
      colSpan: 2,
    },
  },
  {
    สำหรับ: { value: "เงื่อนไขพิเศษ", className: "custom-text-end-bold" },
    ข้าราชการ: {
      value: (
        <div>
          ยื่นหลักฐานในการลงทุนประกอบอาชีพของตนเองและครอบครัว <br />
          <small className=" font-bold">
            (ตามที่ระบุในแบบฟอร์มแสดงหลักฐานประกอบการขอกู้สามัญเพื่อการลงทุนประกอบอาชีพ)
          </small>
        </div>
      ),
      className: "text-start",
      colSpan: 2,
    },
  },
  {
    สำหรับ: { value: "เงื่อนไขเพิ่มเติม", className: "custom-text-end-bold" },
    ข้าราชการ: {
      value: (
        <>
          เงินเดือนคงเหลือ <TextTableRedLg>2,000</TextTableRedLg> บาท
        </>
      ),
      colSpan: 2,
    },
  },
  {
    สำหรับ: {
      value: "กู้ได้เมื่อเป็นสมาชิกเกิน",
      className: "custom-text-end-bold",
    },
    ข้าราชการ: {
      value: (
        <>
          <TextTableRedLg>6</TextTableRedLg> เดือน
        </>
      ),
      colSpan: 2,
    },
  },

  {
    สำหรับ: { value: "ค้ำประกัน", className: "custom-text-end-bold" },
    ข้าราชการ: {
      value: (
        <>
          ใช้คนค้ำประกัน <TextTableRedLg>2</TextTableRedLg> คน <br />
          (ต้องเป็น <TextTableRed>ข้าราชการ</TextTableRed> หรือ{" "}
          <TextTableRed>ลูกจ้างประจำ</TextTableRed> หรือ{" "}
          <TextTableRed>จนท.ประจำ สอ.พม.</TextTableRed> หรือ{" "}
          <TextTableRed> พนง.ประจำ สธค.</TextTableRed>)
        </>
      ),
      className: "text-center align-middle",
    },
    พนักงานราชการ: {
      value: <>ไม่ต้องใช้ผู้ค้ำประกัน</>,
      className: "text-center align-middle",
    },
  },
];

export const educationHeader: TableHeaderConfig[][] = [
  [
    { label: "สำหรับ", className: "text-end" },
    {
      label: (
        <>
          ข้าราชการ, ลูกจ้างประจำ
          <br />
          จนท.ประจำ สอ.พม., พนง.ประจำ สธค.
        </>
      ),
    },
    {
      label: <>ข้าราชการบำนาญ, ลูกจ้างบำเหน็จรายเดือน</>,
      className: "w-5/12",
    },
  ],
];

export const educationData: TableRow[] = [
  {
    สำหรับ: { value: "ยอดกู้", className: "custom-text-end-bold" },
    ข้าราชการ: {
      value: (
        <>
          ประเมินตามค่าใช้จ่ายที่เกิดขึ้นจริง <br /> สูงสุดไม่เกิน{" "}
          <TextTableRedLg>500,000</TextTableRedLg> บาท
          <br />
          (หากไม่เกิน <TextTableRedLg>90%</TextTableRedLg>{" "}
          ของเงินค่าหุ้นที่มีอยู่ ไม่ต้องใช้ผู้ค้ำประกัน)
        </>
      ),
      className: "text-center",
    },
    พนักงานราชการ: {
      value: (
        <>
          ประเมินตามค่าใช้จ่ายที่เกิดขึ้นจริง <br /> สูงสุดไม่เกิน{" "}
          <TextTableRedLg>90%</TextTableRedLg> ของเงินค่าหุ้นที่มีอยู่
        </>
      ),
      className: "text-center",
    },
  },
  {
    สำหรับ: { value: "อัตราดอกเบี้ยต่อปี", className: "custom-text-end-bold" },
    ข้าราชการ: {
      value: <TextTableRedXl>3.5%</TextTableRedXl>,
      colSpan: 2,
    },
  },
  {
    สำหรับ: { value: "ส่งชำระ", className: "custom-text-end-bold" },
    ข้าราชการ: {
      value: (
        <>
          ส่งชำระไม่เกิน <TextTableRedLg>24</TextTableRedLg> งวด
        </>
      ),
      colSpan: 2,
    },
  },
  {
    สำหรับ: { value: "เงื่อนไขพิเศษ", className: "custom-text-end-bold" },
    ข้าราชการ: {
      value: (
        <div>
          ยื่นหลักฐานค่าใช้จ่ายสำหรับการศึกษาของตนเองหรือ คู่สมรส หรือ บุตร{" "}
          <br />
          <small className=" font-bold">
            (ตามที่ระบุในแบบฟอร์มแสดงหลักฐานประกอบการขอกู้สามัญเพื่อการศึกษา)
          </small>
        </div>
      ),
      className: "text-start",
      colSpan: 2,
    },
  },
  {
    สำหรับ: { value: "เงื่อนไขเพิ่มเติม", className: "custom-text-end-bold" },
    ข้าราชการ: {
      value: (
        <>
          เงินเดือนคงเหลือ <TextTableRedLg>2,000</TextTableRedLg> บาท
        </>
      ),
      colSpan: 2,
    },
  },
  {
    สำหรับ: {
      value: "กู้ได้เมื่อเป็นสมาชิกเกิน",
      className: "custom-text-end-bold",
    },
    ข้าราชการ: {
      value: (
        <>
          <TextTableRedLg>6</TextTableRedLg> เดือน
        </>
      ),
      colSpan: 2,
    },
  },

  {
    สำหรับ: { value: "ค้ำประกัน", className: "custom-text-end-bold" },
    ข้าราชการ: {
      value: (
        <>
          ใช้คนค้ำประกัน <TextTableRedLg>2</TextTableRedLg> คน <br />
          (ต้องเป็น <TextTableRed>ข้าราชการ</TextTableRed> หรือ{" "}
          <TextTableRed>ลูกจ้างประจำ</TextTableRed> หรือ{" "}
          <TextTableRed>จนท.ประจำ สอ.พม.</TextTableRed> หรือ{" "}
          <TextTableRed> พนง.ประจำ สธค.</TextTableRed>)
        </>
      ),
      className: "text-center align-middle",
    },
    พนักงานราชการ: {
      value: <>ไม่ต้องใช้ผู้ค้ำประกัน</>,
      className: "text-center align-middle",
    },
  },
];

export const tripHeader: TableHeaderConfig[][] = [
  [
    { label: "สำหรับ", className: "text-end" },
    {
      label: (
        <>
          ข้าราชการ, ลูกจ้างประจำ
          <br />
          จนท.ประจำ สอ.พม., พนง.ประจำ สธค.
        </>
      ),
    },
    {
      label: <>ข้าราชการบำนาญ, ลูกจ้างบำเหน็จรายเดือน</>,
      className: "w-5/12",
    },
  ],
];

export const tripData: TableRow[] = [
  {
    สำหรับ: { value: "ยอดกู้", className: "custom-text-end-bold" },
    ข้าราชการ: {
      value: (
        <>
          ประเมินตามค่าใช้จ่ายที่เกิดขึ้นจริง <br /> สูงสุดไม่เกิน{" "}
          <TextTableRedLg>300,000</TextTableRedLg> บาท
          <br />
          (หากไม่เกิน <TextTableRedLg>90%</TextTableRedLg>{" "}
          ของเงินค่าหุ้นที่มีอยู่ ไม่ต้องใช้ผู้ค้ำประกัน)
        </>
      ),
      className: "text-center",
    },
    พนักงานราชการ: {
      value: (
        <>
          ประเมินตามค่าใช้จ่ายที่เกิดขึ้นจริง <br /> สูงสุดไม่เกิน{" "}
          <TextTableRedLg>90%</TextTableRedLg> ของเงินค่าหุ้นที่มีอยู่
        </>
      ),
      className: "text-center",
    },
  },
  {
    สำหรับ: { value: "อัตราดอกเบี้ยต่อปี", className: "custom-text-end-bold" },
    ข้าราชการ: {
      value: <TextTableRedXl>3.5%</TextTableRedXl>,
      colSpan: 2,
    },
  },
  {
    สำหรับ: { value: "ส่งชำระ", className: "custom-text-end-bold" },
    ข้าราชการ: {
      value: (
        <>
          ส่งชำระไม่เกิน <TextTableRedLg>24</TextTableRedLg> งวด
        </>
      ),
      colSpan: 2,
    },
  },
  {
    สำหรับ: { value: "เงื่อนไขพิเศษ", className: "custom-text-end-bold" },
    ข้าราชการ: {
      value: (
        <div>
          ยื่นหลักฐานค่าใช้จ่ายสำหรับการทัศนศึกษาของตนเองหรือ คู่สมรส หรือ บุตร{" "}
          <br />
          <small className=" font-bold">
            (ตามที่ระบุในแบบฟอร์มแสดงหลักฐานประกอบการขอกู้สามัญเพื่อการทัศนศึกษา)
          </small>
        </div>
      ),
      className: "text-start",
      colSpan: 2,
    },
  },
  {
    สำหรับ: { value: "เงื่อนไขเพิ่มเติม", className: "custom-text-end-bold" },
    ข้าราชการ: {
      value: (
        <>
          เงินเดือนคงเหลือ <TextTableRedLg>2,000</TextTableRedLg> บาท
        </>
      ),
      colSpan: 2,
    },
  },
  {
    สำหรับ: {
      value: "กู้ได้เมื่อเป็นสมาชิกเกิน",
      className: "custom-text-end-bold",
    },
    ข้าราชการ: {
      value: (
        <>
          <TextTableRedLg>6</TextTableRedLg> เดือน
        </>
      ),
      colSpan: 2,
    },
  },

  {
    สำหรับ: { value: "ค้ำประกัน", className: "custom-text-end-bold" },
    ข้าราชการ: {
      value: (
        <>
          ใช้คนค้ำประกัน <TextTableRedLg>2</TextTableRedLg> คน <br />
          (ต้องเป็น <TextTableRed>ข้าราชการ</TextTableRed> หรือ{" "}
          <TextTableRed>ลูกจ้างประจำ</TextTableRed> หรือ{" "}
          <TextTableRed>จนท.ประจำ สอ.พม.</TextTableRed> หรือ{" "}
          <TextTableRed> พนง.ประจำ สธค.</TextTableRed>)
        </>
      ),
      className: "text-center align-middle",
    },
    พนักงานราชการ: {
      value: <>ไม่ต้องใช้ผู้ค้ำประกัน</>,
      className: "text-center align-middle",
    },
  },
];

export const carHeader: TableHeaderConfig[][] = [
  [
    { label: "สำหรับ", className: "text-end" },
    {
      label: (
        <>
          ข้าราชการ, ลูกจ้างประจำ
          <br />
          จนท.ประจำ สอ.พม., พนง.ประจำ สธค.
        </>
      ),
    },
    {
      label: <>ข้าราชการบำนาญ, ลูกจ้างบำเหน็จรายเดือน</>,
      className: "w-5/12",
    },
  ],
];

export const carData: TableRow[] = [
  {
    สำหรับ: { value: "ยอดกู้", className: "custom-text-end-bold" },
    ข้าราชการ: {
      value: (
        <>
          ประเมินตามค่าใช้จ่ายที่เกิดขึ้นจริง <br /> สูงสุดไม่เกิน{" "}
          <TextTableRedLg>1,500,000</TextTableRedLg> บาท<br />
          (หากไม่เกิน <TextTableRedLg>90%</TextTableRedLg>{" "}
          ของเงินค่าหุ้นที่มีอยู่ ไม่ต้องใช้ผู้ค้ำประกัน)
        </>
      ),
      className: "text-center",
    },
    พนักงานราชการ: {
      value: (
        <>
          ประเมินตามค่าใช้จ่ายที่เกิดขึ้นจริง <br /> สูงสุดไม่เกิน{" "}
          <TextTableRedLg>90%</TextTableRedLg> ของเงินค่าหุ้นที่มีอยู่
        </>
      ),
      className: "text-center",
    },
  },
  {
    สำหรับ: { value: "อัตราดอกเบี้ยต่อปี", className: "custom-text-end-bold" },
    ข้าราชการ: {
      value: <TextTableRedXl>3%</TextTableRedXl>,
      colSpan: 2,
    },
  },
  {
    สำหรับ: { value: "ส่งชำระ", className: "custom-text-end-bold" },
    ข้าราชการ: {
      value: (
        <>
          ส่งชำระไม่เกิน <TextTableRedLg>84</TextTableRedLg> งวด
        </>
      ),
      colSpan: 2,
    },
  },
  {
    สำหรับ: { value: "เงื่อนไขพิเศษ", className: "custom-text-end-bold" },
    ข้าราชการ: {
      value: (
        <div>
          ยื่นหลักฐานเกี่ยวกับรถที่จะซื้อของตนเองและครอบครัว <br />
          <small className=" font-bold">
            (ตามที่ระบุในแบบฟอร์มแสดงหลักฐานประกอบการขอกู้สามัญเพื่อการซื้อรถยนต์หรือรถจักรยานยนต์)
          </small>
        </div>
      ),
      className: "text-start",
      colSpan: 2,
    },
  },
  {
    สำหรับ: { value: "เงื่อนไขเพิ่มเติม", className: "custom-text-end-bold" },
    ข้าราชการ: {
      value: (
        <>
          เงินเดือนคงเหลือ <TextTableRedLg>2,000</TextTableRedLg> บาท
        </>
      ),
      colSpan: 2,
    },
  },
  {
    สำหรับ: {
      value: "กู้ได้เมื่อเป็นสมาชิกเกิน",
      className: "custom-text-end-bold",
    },
    ข้าราชการ: {
      value: (
        <>
          <TextTableRedLg>6</TextTableRedLg> เดือน
        </>
      ),
      colSpan: 2,
    },
  },

  {
    สำหรับ: { value: "ค้ำประกัน", className: "custom-text-end-bold" },
    ข้าราชการ: {
      value: <>ใช้หลักเกณฑ์เดียวกันกับเงินกู้สามัญ</>,
      className: "text-center align-middle",
    },
    พนักงานราชการ: {
      value: <>ไม่ต้องใช้ผู้ค้ำประกัน</>,
      className: "text-center align-middle",
    },
  },
];

export const medicalHeader: TableHeaderConfig[][] = [
  [
    { label: "สำหรับ", className: "text-end" },
    {
      label: (
        <>
          ข้าราชการ, ลูกจ้างประจำ
          <br />
          จนท.ประจำ สอ.พม., พนง.ประจำ สธค.
        </>
      ),
    },
    {
      label: (
        <>
          ข้าราชการบำนาญ, ลูกจ้างบำเหน็จรายเดือน <br />
          พนักงานราชการ, พนักงานกองทุน
        </>
      ),
      className: "w-5/12",
    },
  ],
];

export const medicalData: TableRow[] = [
  {
    สำหรับ: { value: "ยอดกู้", className: "custom-text-end-bold" },
    ข้าราชการ: {
      value: (
        <>
          ประเมินตามค่าใช้จ่ายที่เกิดขึ้นจริง <br /> สูงสุดไม่เกิน{" "}
          <TextTableRedLg>500,000</TextTableRedLg> บาท <br />
          (หากไม่เกิน <TextTableRedLg>90%</TextTableRedLg>{" "}
          ของเงินค่าหุ้นที่มีอยู่ ไม่ต้องใช้ผู้ค้ำประกัน)
        </>
      ),
      className: "text-center",
    },
    พนักงานราชการ: {
      value: (
        <>
          ประเมินตามค่าใช้จ่ายที่เกิดขึ้นจริง <br /> สูงสุดไม่เกิน{" "}
          <TextTableRedLg>90%</TextTableRedLg> ของเงินค่าหุ้นที่มีอยู่
        </>
      ),
      className: "text-center",
    },
  },
  {
    สำหรับ: {
      value: "อัตราดอกเบี้ยต่อปี",
      className: "custom-text-end-bold",
    },
    ข้าราชการ: {
      value: <TextTableRedXl>3.5%</TextTableRedXl>,
      colSpan: 2,
    },
  },
  {
    สำหรับ: {
      value: "เงื่อนไขพิเศษ",
      className: "custom-text-end-bold",
    },
    ข้าราชการ: {
      value: (
        <div>
          ยื่นหลักฐานในการรักษาพยาบาลของตนเอง หรือ บิดามารดา หรือ คู่สมรส หรือ
          บุตร ไม่เกิน <TextTableRedLg>45</TextTableRedLg> วัน
          <br />
          <small className=" font-bold">
            (ตามที่ระบุในแบบฟอร์มแสดงหลักฐานประกอบการขอกู้สามัญเพื่อการรักษาพยาบาล)
          </small>
        </div>
      ),
      colSpan: 2,
    },
  },
  {
    สำหรับ: {
      value: "การส่งชำระ",
      className: "custom-text-end-bold",
    },
    ข้าราชการ: {
      value: (
        <>
          ส่งชำระไม่เกิน <TextTableRedLg>24</TextTableRedLg> งวด,
          เงินเดือนคงเหลือไม่ต่ำกว่า <TextTableRedLg>2,000</TextTableRedLg> บาท
        </>
      ),
      colSpan: 2,
    },
  },
  {
    สำหรับ: {
      value: "กู้ได้เมื่อเป็นสมาชิกเกิน",
      className: "custom-text-end-bold",
    },
    ข้าราชการ: {
      value: (
        <>
          <TextTableRedLg>6</TextTableRedLg> เดือน
        </>
      ),
      colSpan: 2,
    },
  },

  {
    สำหรับ: { value: "ค้ำประกัน", className: "custom-text-end-bold" },
    ข้าราชการ: {
      value: (
        <>
          ใช้คนค้ำประกัน <TextTableRedLg>2</TextTableRedLg> คน
          <br /> (ต้องเป็น
          <TextTableRed>ข้าราชการ</TextTableRed> หรือ{" "}
          <TextTableRed>ลูกจ้างประจำ</TextTableRed> หรือ
          <br />
          <TextTableRed>จนท.ประจำ สอ.พม.</TextTableRed> หรือ{" "}
          <TextTableRed>พนง.ประจำ สธค.</TextTableRed>)
        </>
      ),
      className: "text-center align-middle",
    },
    พนักงานราชการ: {
      value: <>ไม่ต้องใช้ผู้ค้ำประกัน</>,
      className: "text-center align-middle",
    },
  },
];

export const disastersHeader: TableHeaderConfig[][] = [
  [
    { label: "สำหรับ", className: "text-end" },
    {
      label: (
        <>
          ข้าราชการ, ลูกจ้างประจำ
          <br />
          จนท.ประจำ สอ.พม., พนง.ประจำ สธค.
        </>
      ),
    },
    {
      label: (
        <>
          ข้าราชการบำนาญ, ลูกจ้างบำเหน็จรายเดือน <br />
          พนักงานราชการ, พนักงานกองทุน
        </>
      ),
      className: "w-5/12",
    },
  ],
];

export const disastersData: TableRow[] = [
  {
    สำหรับ: { value: "ยอดกู้", className: "custom-text-end-bold" },
    ข้าราชการ: {
      value: (
        <>
          ประเมินตามค่าใช้จ่ายที่เกิดขึ้นจริง <br /> สูงสุดไม่เกิน{" "}
          <TextTableRedLg>500,000</TextTableRedLg> บาท <br />
          (หากไม่เกิน <TextTableRedLg>90%</TextTableRedLg>{" "}
          ของเงินค่าหุ้นที่มีอยู่ ไม่ต้องใช้ผู้ค้ำประกัน)
        </>
      ),
      className: "text-center",
    },
    พนักงานราชการ: {
      value: (
        <>
          ประเมินตามค่าใช้จ่ายที่เกิดขึ้นจริง <br /> สูงสุดไม่เกิน{" "}
          <TextTableRedLg>90%</TextTableRedLg> ของเงินค่าหุ้นที่มีอยู่
        </>
      ),
      className: "text-center",
    },
  },
  {
    สำหรับ: {
      value: "อัตราดอกเบี้ยต่อปี",
      className: "custom-text-end-bold",
    },
    ข้าราชการ: {
      value: <TextTableRedXl>2.5%</TextTableRedXl>,
      colSpan: 2,
    },
  },
  {
    สำหรับ: {
      value: "เงื่อนไขพิเศษ",
      className: "custom-text-end-bold",
    },
    ข้าราชการ: {
      value: (
        <div>
          ยื่นหลักฐานเพื่อแสดงความเสียหายและประเมินค่าความเสียหายของตนเองและครอบครัว
          <br />
          <small className=" font-bold">
            (ตามที่ระบุในแบบฟอร์มแสดงหลักฐานประกอบการขอกู้สามัญเพื่อเหตุภัยพิบัติจากภัยธรรมชาติ)
          </small>
        </div>
      ),
      colSpan: 2,
    },
  },
  {
    สำหรับ: {
      value: "การส่งชำระ",
      className: "custom-text-end-bold",
    },
    ข้าราชการ: {
      value: (
        <>
          ส่งชำระไม่เกิน <TextTableRedLg>24</TextTableRedLg> งวด,
          เงินเดือนคงเหลือไม่ต่ำกว่า <TextTableRedLg>2,000</TextTableRedLg> บาท
        </>
      ),
      colSpan: 2,
    },
  },
  {
    สำหรับ: {
      value: "กู้ได้เมื่อเป็นสมาชิกเกิน",
      className: "custom-text-end-bold",
    },
    ข้าราชการ: {
      value: (
        <>
          <TextTableRedLg>6</TextTableRedLg> เดือน
        </>
      ),
      colSpan: 2,
    },
  },

  {
    สำหรับ: { value: "ค้ำประกัน", className: "custom-text-end-bold" },
    ข้าราชการ: {
      value: (
        <>
          ใช้คนค้ำประกัน <TextTableRedLg>2</TextTableRedLg> คน
          <br /> (ต้องเป็น
          <TextTableRed>ข้าราชการ</TextTableRed> หรือ{" "}
          <TextTableRed>ลูกจ้างประจำ</TextTableRed> หรือ
          <br />
          <TextTableRed>จนท.ประจำ สอ.พม.</TextTableRed> หรือ{" "}
          <TextTableRed>พนง.ประจำ สธค.</TextTableRed>)
        </>
      ),
      className: "text-center align-middle",
    },
    พนักงานราชการ: {
      value: <>ไม่ต้องใช้ผู้ค้ำประกัน</>,
      className: "text-center align-middle",
    },
  },
];

export const mobileEmergencyLoan: MobileAccordionProps[] =
  emergencyLoanContent.map((item) => {
    return {
      title: item.title,
      content: (
        <>
          {Array.isArray(item.value) ? (
            <ul className="custom-no-list-in-accordion">
              {item.value.map((subItem, index) => (
                <li key={index}>{subItem}</li>
              ))}
            </ul>
          ) : (
            item.value
          )}
        </>
      ),
    };
  });

export const mobileEmergencyLoanForGuarantee: MobileAccordionProps[] =
  emergencyLoanContentForGuarantee.map((item) => {
    return {
      title: item.title,
      content: (
        <>
          {Array.isArray(item.value) ? (
            <ul className="custom-no-list-in-accordion">
              {item.value.map((subItem, index) => (
                <li key={index}>{subItem}</li>
              ))}
            </ul>
          ) : (
            item.value
          )}
        </>
      ),
    };
  });

export const mobileOwnShareLoan: MobileAccordionProps[] =
  ownShareLoanContent.map((item) => {
    return {
      title: item.title,
      content: (
        <>
          {Array.isArray(item.value) ? (
            <ul className="custom-no-list-in-accordion">
              {item.value.map((subItem, index) => (
                <li key={index}>{subItem}</li>
              ))}
            </ul>
          ) : (
            item.value
          )}
        </>
      ),
    };
  });

export const mobileOrdinaryLoan2: MobileAccordionProps[] =
  ordinaryLoan2Content.map((item) => {
    return {
      title: item.title,
      content: (
        <>
          {Array.isArray(item.value) ? (
            <ul className="custom-no-list-in-accordion">
              {item.value.map((subItem, index) => (
                <li key={index}>{subItem}</li>
              ))}
            </ul>
          ) : (
            item.value
          )}
        </>
      ),
    };
  });

export const mobileCareerInvestmentLoan: MobileAccordionProps[] =
  careerInvestmentContent.map((item) => {
    return {
      title: item.title,
      content: (
        <>
          {Array.isArray(item.value) ? (
            <ul className="custom-no-list-in-accordion">
              {item.value.map((subItem, index) => (
                <li key={index}>{subItem}</li>
              ))}
            </ul>
          ) : (
            item.value
          )}
        </>
      ),
    };
  });

export const mobileEducationLoan: MobileAccordionProps[] = educationContent.map(
  (item) => {
    return {
      title: item.title,
      content: (
        <>
          {Array.isArray(item.value) ? (
            <ul className="custom-no-list-in-accordion">
              {item.value.map((subItem, index) => (
                <li key={index}>{subItem}</li>
              ))}
            </ul>
          ) : (
            item.value
          )}
        </>
      ),
    };
  }
);

export const mobileTripLoan: MobileAccordionProps[] = tripContent.map(
  (item) => {
    return {
      title: item.title,
      content: (
        <>
          {Array.isArray(item.value) ? (
            <ul className="custom-no-list-in-accordion">
              {item.value.map((subItem, index) => (
                <li key={index}>{subItem}</li>
              ))}
            </ul>
          ) : (
            item.value
          )}
        </>
      ),
    };
  }
);

export const mobileCarLoan: MobileAccordionProps[] = carContent.map((item) => {
  return {
    title: item.title,
    content: (
      <>
        {Array.isArray(item.value) ? (
          <ul className="custom-no-list-in-accordion">
            {item.value.map((subItem, index) => (
              <li key={index}>{subItem}</li>
            ))}
          </ul>
        ) : (
          item.value
        )}
      </>
    ),
  };
});

export const mobileCollateralLoan: MobileAccordionProps[] =
  collateralLoanContent.map((item) => {
    return {
      title: item.title,
      content: (
        <>
          {Array.isArray(item.value) ? (
            <ul className="custom-no-list-in-accordion">
              {item.value.map((subItem, index) => (
                <li key={index}>{subItem}</li>
              ))}
            </ul>
          ) : (
            item.value
          )}
        </>
      ),
    };
  });

export const mobileMedicalLoan: MobileAccordionProps[] = medicalLoanContent.map(
  (item) => {
    return {
      title: item.title,
      content: (
        <>
          {Array.isArray(item.value) ? (
            <ul className="custom-no-list-in-accordion">
              {item.value.map((subItem, index) => (
                <li key={index}>{subItem}</li>
              ))}
            </ul>
          ) : (
            item.value
          )}
        </>
      ),
    };
  }
);

export const mobileDisastersLoan: MobileAccordionProps[] =
  disastersLoanContent.map((item) => {
    return {
      title: item.title,
      content: (
        <>
          {Array.isArray(item.value) ? (
            <ul className="custom-no-list-in-accordion">
              {item.value.map((subItem, index) => (
                <li key={index}>{subItem}</li>
              ))}
            </ul>
          ) : (
            item.value
          )}
        </>
      ),
    };
  });
