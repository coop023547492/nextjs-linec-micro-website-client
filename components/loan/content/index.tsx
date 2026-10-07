import TextTableRed from "@/components/ui/TextTableRed";
import TextTableRedLg from "@/components/ui/TextTableRedLg";
import TextTableRedXl from "@/components/ui/TextTableRedXl";
import { ContentProps } from "@/utils/types";

export const emergencyLoanContent: ContentProps[] = [
  { title: "สำหรับ", value: "สมาชิกทุกประเภท" },
  {
    title: "ยอดกู้",
    value: (
      <>
        <TextTableRedXl>4 </TextTableRedXl>เท่า ของเงินเดือน <br />
        สูงสุดไม่เกิน <TextTableRedLg>200,000</TextTableRedLg> บาท
      </>
    ),
  },
  {
    title: "อัตราดอกเบี้ยต่อปี",
    value: <TextTableRedXl>5.75%</TextTableRedXl>,
  },
  {
    title: "การส่งชำระ",
    value: (
      <>
        ส่งชำระไม่เกิน <TextTableRedLg>12 </TextTableRedLg>งวด
        <br /> ส่งชำระแล้ว
        <TextTableRedLg>1 </TextTableRedLg>งวด กู้ใหม่ได้ <br />
        เงินเดือนคงเหลือไม่ต่ำกว่า <TextTableRedLg>2,000</TextTableRedLg> บาท
      </>
    ),
  },
  {
    title: "กู้ได้เมื่อเป็นสมาชิกเกิน",
    value: [
      <div key={0} className="custom-underline-in-accordion font-bold">
        สำหรับ ข้าราชการ, ลูกจ้างประจำ
        <br /> ข้าราชการบำนาญ, ลูกจ้างบำเหน็จรายเดือน
        <br /> จนท.ประจำ สอ.พม., พนง.ประจำ สธค.
      </div>,
      <>
        <TextTableRedLg>1 </TextTableRedLg>เดือน
      </>,
      <br key={2} />,
      <div key={3} className="custom-underline-in-accordion font-bold">
        สำหรับ พนักงานราชการ, พนักงานกองทุน
      </div>,
      <>
        <TextTableRedLg>6 </TextTableRedLg>เดือน
      </>,
    ],
  },
];

export const emergencyLoanContentForGuarantee: ContentProps[] = [
  {
    title: (
      <div>
        ยอดกู้
        <TextTableRed> ไม่เกิน 90% ของเงินค่าหุ้น </TextTableRed>
        ที่มีอยู่
      </div>
    ),
    value: (
      <>
        <TextTableRedLg>ไม่ต้อง</TextTableRedLg>ใช้คนค้ำประกัน
      </>
    ),
  },
  {
    title: (
      <div>
        ยอดกู้
        <TextTableRed> เกิน 90% ของเงินค่าหุ้น </TextTableRed>
        ที่มีอยู่
      </div>
    ),
    value: [
      <div key={0} className="custom-underline-in-accordion text-xl font-bold">
        <TextTableRedXl>ไม่เกิน</TextTableRedXl> 100,000
      </div>,
      <div key={1} className="custom-underline-in-accordion font-bold">
        สำหรับ สมาชิกทุกประเภท
      </div>,
      <>
        ใช้คนค้ำประกัน <TextTableRedLg>1 </TextTableRedLg>คน <br />
        (ต้องเป็น <TextTableRed>ข้าราชการ</TextTableRed> หรือ{" "}
        <TextTableRed>ลูกจ้างประจำ</TextTableRed> หรือ{" "}
        <TextTableRed>ข้าราชการบำนาญ</TextTableRed> หรือ{" "}
        <TextTableRed>ลูกจ้างบำเหน็จรายเดือน</TextTableRed> หรือ{" "}
        <TextTableRed>จนท.ประจำ สอ.พม.</TextTableRed> หรือ{" "}
        <TextTableRed>พนง.ประจำ สธค.</TextTableRed>)
      </>,
      <br key={3} />,
      <div key={4} className="custom-underline-in-accordion text-xl font-bold">
        <TextTableRedXl>เกิน</TextTableRedXl> 100,000
      </div>,
      <div key={5} className="custom-underline-in-accordion mb-2.5 font-bold">
        สำหรับ ข้าราชการ, ลูกจ้างประจำ
        <br /> ข้าราชการบำนาญ, ลูกจ้างบำเหน็จรายเดือน
        <br /> จนท.ประจำ สอ.พม., พนง.ประจำ สธค.
      </div>,
      <div key={6} className="mb-2.5">
        ใช้คนค้ำประกัน <TextTableRedLg>1 </TextTableRedLg>คน
        <br />
        (ต้องเป็น <TextTableRed>ข้าราชการ</TextTableRed> หรือ{" "}
        <TextTableRed>ลูกจ้างประจำ</TextTableRed> หรือ{" "}
        <TextTableRed>ข้าราชการบำนาญ</TextTableRed> หรือ{" "}
        <TextTableRed>ลูกจ้างบำเหน็จรายเดือน</TextTableRed> หรือ{" "}
        <TextTableRed>จนท.ประจำ สอ.พม.</TextTableRed> หรือ{" "}
        <TextTableRed>พนง.ประจำ สธค.</TextTableRed>)
      </div>,
      <div key={7} className="custom-underline-in-accordion font-bold">
        สำหรับ พนักงานราชการ, พนักงานกองทุน
      </div>,
      <>
        ใช้คนค้ำประกัน <TextTableRedLg>2 </TextTableRedLg>คน <br />
        (คนที่ <TextTableRedLg>1</TextTableRedLg> ต้องเป็น{" "}
        <TextTableRed>ข้าราชการ</TextTableRed> หรือ{" "}
        <TextTableRed>ลูกจ้างประจำ</TextTableRed> หรือ{" "}
        <TextTableRed>ข้าราชการบำนาญ</TextTableRed> หรือ{" "}
        <TextTableRed>ลูกจ้างบำเหน็จรายเดือน</TextTableRed> หรือ{" "}
        <TextTableRed>จนท.ประจำ สอ.พม.</TextTableRed> หรือ{" "}
        <TextTableRed>พนง.ประจำ สธค.</TextTableRed> <br />
        คนที่ <TextTableRedLg>2</TextTableRedLg> เป็นสมาชิกสหกรณ์ทุกประเภท)
      </>,
    ],
  },
];

export const ownShareLoanContent: ContentProps[] = [
  { title: "สำหรับ", value: "สมาชิกทุกประเภท" },
  {
    title: "ยอดกู้",
    value: (
      <>
        <TextTableRedLg>90%</TextTableRedLg> ของเงินค่าหุ้นที่มีอยู่ หรือ
        <br />
        <TextTableRedLg>90% </TextTableRedLg>
        ของเงินค่าหุ้นรวมกับเงินฝากที่มีอยู่ (โดยมีเงินฝากเป็นหลักประกัน)
      </>
    ),
  },
  {
    title: "อัตราดอกเบี้ยต่อปี",
    value: <TextTableRedXl>5.75%</TextTableRedXl>,
  },
  {
    title: "การส่งชำระ",
    value: (
      <>
        ส่งชำระไม่เกิน <TextTableRedLg>240 </TextTableRedLg>งวด <br />
        ส่งชำระแล้ว <TextTableRedLg>3 </TextTableRedLg>งวด กู้ใหม่ได้ <br />
        เงินเดือนคงเหลือไม่ต่ำกว่า <TextTableRedLg> 2,000</TextTableRedLg> บาท
      </>
    ),
  },
  {
    title: "กู้ได้เมื่อเป็นสมาชิกเกิน",
    value: (
      <>
        <TextTableRedLg>6 </TextTableRedLg>เดือน
      </>
    ),
  },
];

export const ordinaryLoan2Content: ContentProps[] = [
  {
    title: "สำหรับ",
    value: "ข้าราชการ, ลูกจ้างประจำ, จนท.ประจำ สอ.พม., พนง.ประจำ สธค.",
  },
  {
    title: "อัตราดอกเบี้ยต่อปี",
    value: <TextTableRedXl>6%</TextTableRedXl>,
  },
  {
    title: "การส่งชำระ",
    value: (
      <>
        ส่งชำระไม่เกิน <TextTableRedLg>240</TextTableRedLg> งวด
        <br /> ส่งชำระแล้ว <TextTableRedLg>6</TextTableRedLg> งวด กู้ใหม่ได้
        <br />
        เงินเดือนคงเหลือไม่ต่ำกว่า <TextTableRedLg>2,000</TextTableRedLg> บาท
      </>
    ),
  },
  {
    title: "กู้ได้เมื่อเป็นสมาชิกเกิน",
    value: (
      <>
        <TextTableRedLg>6</TextTableRedLg> เดือน
      </>
    ),
  },
];

export const careerInvestmentContent: ContentProps[] = [
  {
    title: "สำหรับ",
    value:
      "ข้าราชการ, ลูกจ้างประจำ, ข้าราชการบำนาญ, ลูกจ้างบำเหน็จรายเดือน, จนท.ประจำ สอ.พม., พนง.ประจำ สธค.",
  },
  {
    title: "ยอดกู้",
    value: [
      <div key={0} className="custom-underline-in-accordion font-bold">
        สำหรับ ข้าราชการ, ลูกจ้างประจำ, จนท.ประจำ สอ.พม., พนง.ประจำ สธค.
      </div>,
      <>
        ประเมินตามค่าใช้จ่ายที่เกิดขึ้นจริง สูงสุดไม่เกิน{" "}
        <TextTableRedLg>500,000</TextTableRedLg> บาท (หากไม่เกิน{" "}
        <TextTableRedLg>90%</TextTableRedLg> ของเงินค่าหุ้นที่มีอยู่
        ไม่ต้องใช้ผู้ค้ำประกัน)
      </>,
      <div key={2} className="custom-underline-in-accordion font-bold mt-2.5">
        สำหรับ ข้าราชการบำนาญ, ลูกจ้างบำเหน็จรายเดือน
      </div>,
      <>
        ประเมินตามค่าใช้จ่ายที่เกิดขึ้นจริง สูงสุดไม่เกิน{" "}
        <TextTableRedLg>90%</TextTableRedLg> ของเงินค่าหุ้นที่มีอยู่
      </>,
    ],
  },
  {
    title: "อัตราดอกเบี้ยต่อปี",
    value: <TextTableRedXl>3.5%</TextTableRedXl>,
  },
  {
    title: "ส่งชำระ",
    value: (
      <>
        ส่งชำระไม่เกิน <TextTableRedLg>24</TextTableRedLg> งวด
      </>
    ),
  },
  {
    title: "เงื่อนไขพิเศษ",
    value: (
      <div>
        ยื่นหลักฐานในการลงทุนประกอบอาชีพของตนเองและครอบครัว
        <br />
        <small className=" font-bold">
          (ตามที่ระบุในแบบฟอร์มแสดงหลักฐานประกอบการขอกู้สามัญเพื่อการลงทุนประกอบอาชีพ)
        </small>
      </div>
    ),
  },
  {
    title: "เงื่อนไขเพิ่มเติม",
    value: (
      <>
        เงินเดือนคงเหลือ <TextTableRedLg>2,000</TextTableRedLg> บาท
      </>
    ),
  },
  {
    title: "กู้ได้เมื่อเป็นสมาชิกเกิน",
    value: (
      <>
        <TextTableRedLg>6</TextTableRedLg> เดือน
      </>
    ),
  },
  {
    title: "ค้ำประกัน",
    value: [
      <div key={0} className="custom-underline-in-accordion font-bold">
        สำหรับ ข้าราชการ, ลูกจ้างประจำ, จนท.ประจำ สอ.พม., พนง.ประจำ สธค.
      </div>,
      <>
        ใช้คนค้ำประกัน <TextTableRedLg>2</TextTableRedLg> คน
        <br /> (ต้องเป็น
        <TextTableRed>ข้าราชการ</TextTableRed> หรือ{" "}
        <TextTableRed>ลูกจ้างประจำ</TextTableRed> หรือ{" "}
        <TextTableRed>จนท.ประจำ สอ.พม.</TextTableRed> หรือ{" "}
        <TextTableRed>พนง.ประจำ สธค.</TextTableRed>)
      </>,
      <div key={2} className="custom-underline-in-accordion font-bold mt-2.5">
        สำหรับ ข้าราชการบำนาญ, ลูกจ้างบำเหน็จรายเดือน
      </div>,
      <>ไม่ต้องใช้ผู้ค้ำประกัน</>,
    ],
  },
];

export const educationContent: ContentProps[] = [
  {
    title: "สำหรับ",
    value:
      "ข้าราชการ, ลูกจ้างประจำ, ข้าราชการบำนาญ, ลูกจ้างบำเหน็จรายเดือน, จนท.ประจำ สอ.พม., พนง.ประจำ สธค.",
  },
  {
    title: "ยอดกู้",
    value: [
      <div key={0} className="custom-underline-in-accordion font-bold">
        สำหรับ ข้าราชการ, ลูกจ้างประจำ, จนท.ประจำ สอ.พม., พนง.ประจำ สธค.
      </div>,
      <>
        ประเมินตามค่าใช้จ่ายที่เกิดขึ้นจริง สูงสุดไม่เกิน{" "}
        <TextTableRedLg>500,000</TextTableRedLg> บาท (หากไม่เกิน{" "}
        <TextTableRedLg>90%</TextTableRedLg> ของเงินค่าหุ้นที่มีอยู่
        ไม่ต้องใช้ผู้ค้ำประกัน)
      </>,
      <div key={2} className="custom-underline-in-accordion font-bold mt-2.5">
        สำหรับ ข้าราชการบำนาญ, ลูกจ้างบำเหน็จรายเดือน
      </div>,
      <>
        ประเมินตามค่าใช้จ่ายที่เกิดขึ้นจริง สูงสุดไม่เกิน{" "}
        <TextTableRedLg>90%</TextTableRedLg> ของเงินค่าหุ้นที่มีอยู่
      </>,
    ],
  },
  {
    title: "อัตราดอกเบี้ยต่อปี",
    value: <TextTableRedXl>3.5%</TextTableRedXl>,
  },
  {
    title: "ส่งชำระ",
    value: (
      <>
        ส่งชำระไม่เกิน <TextTableRedLg>24</TextTableRedLg> งวด
      </>
    ),
  },
  {
    title: "เงื่อนไขพิเศษ",
    value: (
      <div>
        ยื่นหลักฐานค่าใช้จ่ายสำหรับการศึกษาของตนเองหรือ คู่สมรส หรือ บุตร <br />
        <small className=" font-bold">
          (ตามที่ระบุในแบบฟอร์มแสดงหลักฐานประกอบการขอกู้สามัญเพื่อการศึกษา)
        </small>
      </div>
    ),
  },
  {
    title: "เงื่อนไขเพิ่มเติม",
    value: (
      <>
        เงินเดือนคงเหลือ <TextTableRedLg>2,000</TextTableRedLg> บาท
      </>
    ),
  },
  {
    title: "กู้ได้เมื่อเป็นสมาชิกเกิน",
    value: (
      <>
        <TextTableRedLg>6</TextTableRedLg> เดือน
      </>
    ),
  },
  {
    title: "ค้ำประกัน",
    value: [
      <div key={0} className="custom-underline-in-accordion font-bold">
        สำหรับ ข้าราชการ, ลูกจ้างประจำ, จนท.ประจำ สอ.พม., พนง.ประจำ สธค.
      </div>,
      <>
        ใช้คนค้ำประกัน <TextTableRedLg>2</TextTableRedLg> คน <br />
        (ต้องเป็น <TextTableRed>ข้าราชการ</TextTableRed> หรือ{" "}
        <TextTableRed>ลูกจ้างประจำ</TextTableRed> หรือ{" "}
        <TextTableRed>จนท.ประจำ สอ.พม.</TextTableRed> หรือ{" "}
        <TextTableRed> พนง.ประจำ สธค.</TextTableRed>)
      </>,
      <div key={2} className="custom-underline-in-accordion font-bold mt-2.5">
        สำหรับ ข้าราชการบำนาญ, ลูกจ้างบำเหน็จรายเดือน
      </div>,
      <>ไม่ต้องใช้ผู้ค้ำประกัน</>,
    ],
  },
];

export const tripContent: ContentProps[] = [
  {
    title: "สำหรับ",
    value:
      "ข้าราชการ, ลูกจ้างประจำ, ข้าราชการบำนาญ, ลูกจ้างบำเหน็จรายเดือน, จนท.ประจำ สอ.พม., พนง.ประจำ สธค.",
  },
  {
    title: "ยอดกู้",
    value: [
      <div key={0} className="custom-underline-in-accordion font-bold">
        สำหรับ ข้าราชการ, ลูกจ้างประจำ, จนท.ประจำ สอ.พม., พนง.ประจำ สธค.
      </div>,
      <>
        ประเมินตามค่าใช้จ่ายที่เกิดขึ้นจริง สูงสุดไม่เกิน{" "}
        <TextTableRedLg>300,000</TextTableRedLg> บาท (หากไม่เกิน{" "}
        <TextTableRedLg>90%</TextTableRedLg> ของเงินค่าหุ้นที่มีอยู่
        ไม่ต้องใช้ผู้ค้ำประกัน)
      </>,
      <div key={2} className="custom-underline-in-accordion font-bold mt-2.5">
        สำหรับ ข้าราชการบำนาญ, ลูกจ้างบำเหน็จรายเดือน
      </div>,
      <>
        ประเมินตามค่าใช้จ่ายที่เกิดขึ้นจริง สูงสุดไม่เกิน{" "}
        <TextTableRedLg>90%</TextTableRedLg> ของเงินค่าหุ้นที่มีอยู่
      </>,
    ],
  },
  {
    title: "อัตราดอกเบี้ยต่อปี",
    value: <TextTableRedXl>3.5%</TextTableRedXl>,
  },
  {
    title: "ส่งชำระ",
    value: (
      <>
        ส่งชำระไม่เกิน <TextTableRedLg>24</TextTableRedLg> งวด
      </>
    ),
  },
  {
    title: "เงื่อนไขพิเศษ",
    value: (
      <div>
        ยื่นหลักฐานค่าใช้จ่ายสำหรับการทัศนศึกษาของตนเองหรือ คู่สมรส หรือ บุตร{" "}
        <br />
        <small className=" font-bold">
          (ตามที่ระบุในแบบฟอร์มแสดงหลักฐานประกอบการขอกู้สามัญเพื่อการทัศนศึกษา)
        </small>
      </div>
    ),
  },
  {
    title: "เงื่อนไขเพิ่มเติม",
    value: (
      <>
        เงินเดือนคงเหลือ <TextTableRedLg>2,000</TextTableRedLg> บาท
      </>
    ),
  },
  {
    title: "กู้ได้เมื่อเป็นสมาชิกเกิน",
    value: (
      <>
        <TextTableRedLg>6</TextTableRedLg> เดือน
      </>
    ),
  },
  {
    title: "ค้ำประกัน",
    value: [
      <div key={0} className="custom-underline-in-accordion font-bold">
        สำหรับ ข้าราชการ, ลูกจ้างประจำ, จนท.ประจำ สอ.พม., พนง.ประจำ สธค.
      </div>,
      <>
        ใช้คนค้ำประกัน <TextTableRedLg>2</TextTableRedLg> คน <br />
        (ต้องเป็น <TextTableRed>ข้าราชการ</TextTableRed> หรือ{" "}
        <TextTableRed>ลูกจ้างประจำ</TextTableRed> หรือ{" "}
        <TextTableRed>จนท.ประจำ สอ.พม.</TextTableRed> หรือ{" "}
        <TextTableRed> พนง.ประจำ สธค.</TextTableRed>)
      </>,
      <div key={2} className="custom-underline-in-accordion font-bold mt-2.5">
        สำหรับ ข้าราชการบำนาญ, ลูกจ้างบำเหน็จรายเดือน
      </div>,
      <>ไม่ต้องใช้ผู้ค้ำประกัน</>,
    ],
  },
];

export const carContent: ContentProps[] = [
  {
    title: "สำหรับ",
    value:
      "ข้าราชการ, ลูกจ้างประจำ, ข้าราชการบำนาญ, ลูกจ้างบำเหน็จรายเดือน, จนท.ประจำ สอ.พม., พนง.ประจำ สธค.",
  },
  {
    title: "ยอดกู้",
    value: [
      <div key={0} className="custom-underline-in-accordion font-bold">
        สำหรับ ข้าราชการ, ลูกจ้างประจำ, จนท.ประจำ สอ.พม., พนง.ประจำ สธค.
      </div>,
      <>
        ประเมินตามค่าใช้จ่ายที่เกิดขึ้นจริง สูงสุดไม่เกิน{" "}
        <TextTableRedLg>1,500,000</TextTableRedLg> บาท (หากไม่เกิน{" "}
        <TextTableRedLg>90%</TextTableRedLg> ของเงินค่าหุ้นที่มีอยู่
        ไม่ต้องใช้ผู้ค้ำประกัน)
      </>,
      <div key={2} className="custom-underline-in-accordion font-bold mt-2.5">
        สำหรับ ข้าราชการบำนาญ, ลูกจ้างบำเหน็จรายเดือน
      </div>,
      <>
        ประเมินตามค่าใช้จ่ายที่เกิดขึ้นจริง สูงสุดไม่เกิน{" "}
        <TextTableRedLg>90%</TextTableRedLg> ของเงินค่าหุ้นที่มีอยู่
      </>,
    ],
  },
  {
    title: "อัตราดอกเบี้ยต่อปี",
    value: <TextTableRedXl>3%</TextTableRedXl>,
  },
  {
    title: "ส่งชำระ",
    value: (
      <>
        ส่งชำระไม่เกิน <TextTableRedLg>84</TextTableRedLg> งวด
      </>
    ),
  },
  {
    title: "เงื่อนไขพิเศษ",
    value: (
      <div>
        ยื่นหลักฐานเกี่ยวกับรถที่จะซื้อของตนเองและครอบครัว <br />
        <small className=" font-bold">
          (ตามที่ระบุในแบบฟอร์มแสดงหลักฐานประกอบการขอกู้สามัญเพื่อการซื้อรถยนต์หรือรถจักรยานยนต์)
        </small>
      </div>
    ),
  },
  {
    title: "เงื่อนไขเพิ่มเติม",
    value: (
      <>
        เงินเดือนคงเหลือ <TextTableRedLg>2,000</TextTableRedLg> บาท
      </>
    ),
  },
  {
    title: "กู้ได้เมื่อเป็นสมาชิกเกิน",
    value: (
      <>
        <TextTableRedLg>6</TextTableRedLg> เดือน
      </>
    ),
  },
  {
    title: "ค้ำประกัน",
    value: [
      <div key={0} className="custom-underline-in-accordion font-bold">
        สำหรับ ข้าราชการ, ลูกจ้างประจำ, จนท.ประจำ สอ.พม., พนง.ประจำ สธค.
      </div>,
      <>ใช้หลักเกณฑ์เดียวกันกับเงินกู้สามัญ</>,
      <div key={2} className="custom-underline-in-accordion font-bold mt-2.5">
        สำหรับ ข้าราชการบำนาญ, ลูกจ้างบำเหน็จรายเดือน
      </div>,
      <>ไม่ต้องใช้ผู้ค้ำประกัน</>,
    ],
  },
];

export const collateralLoanContent: ContentProps[] = [
  {
    title: "สำหรับ",
    value:
      "ข้าราชการ, ลูกจ้างประจำ, ข้าราชการบำนาญ, ลูกจ้างบำเหน็จรายเดือน, จนท.ประจำ สอ.พม., พนง.ประจำ สธค.",
  },
  {
    title: "ยอดกู้",
    value: [
      <div key={0} className="custom-underline-in-accordion font-bold">
        สำหรับ ข้าราชการ, ลูกจ้างประจำ, ข้าราชการบำนาญ, ลูกจ้างบำเหน็จรายเดือน,
        จนท.ประจำ สอ.พม.
      </div>,
      <>
        ไม่เกิน <TextTableRedLg>75%</TextTableRedLg> ของราคาประเมินจากกรมที่ดิน{" "}
        <br /> สูงสุดไม่เกิน <TextTableRedLg>2,500,000</TextTableRedLg> บาท
      </>,
      <div key={2} className="custom-underline-in-accordion font-bold mt-2.5">
        สำหรับ พนง.ประจำ สธค.
      </div>,
      <>
        ไม่เกิน <TextTableRedLg>75%</TextTableRedLg> ของราคาประเมินจากกรมที่ดิน{" "}
        <br /> สูงสุดไม่เกิน <TextTableRedLg>1,500,000</TextTableRedLg> บาท
      </>,
    ],
  },
  {
    title: "อัตราดอกเบี้ยต่อปี",
    value: <TextTableRedXl>5.5%</TextTableRedXl>,
  },
  {
    title: "เงื่อนไขพิเศษ",
    value: (
      <>
        สำหรับการสร้างบ้านเท่านั้น โดยต้องยื่นแบบแปลนการสร้างบ้าน
        บนที่ดินที่ใช้เป็นหลักทรัพย์ค้ำประกัน
      </>
    ),
  },
  {
    title: "การส่งชำระ",
    value: (
      <>
        ส่งชำระไม่เกิน <TextTableRedLg>240</TextTableRedLg> งวด
      </>
    ),
  },
  {
    title: "กู้ได้เมื่อเป็นสมาชิกเกิน",
    value: (
      <>
        <TextTableRedLg>3 </TextTableRedLg>ปี
      </>
    ),
  },
  {
    title: "ค้ำประกัน",
    value: "ใช้โฉนดที่ดิน (ปลอดภาระ) เป็นหลักทรัพย์ค้ำประกัน",
  },
];

export const medicalLoanContent: ContentProps[] = [
  {
    title: "สำหรับ",
    value: "สมาชิกทุกประเภท",
  },
  {
    title: "ยอดกู้",
    value: [
      <div key={0} className="custom-underline-in-accordion font-bold">
        สำหรับ ข้าราชการ, ลูกจ้างประจำ, จนท.ประจำ สอ.พม., พนง.ประจำ สธค.
      </div>,
      <>
        ประเมินตามค่าใช้จ่ายที่เกิดขึ้นจริง <br /> สูงสุดไม่เกิน{" "}
        <TextTableRedLg>500,000</TextTableRedLg> บาท <br />
        (หากไม่เกิน <TextTableRedLg>90%</TextTableRedLg> ของเงินค่าหุ้นที่มีอยู่
        ไม่ต้องใช้ผู้ค้ำประกัน)
      </>,
      <div key={2} className="custom-underline-in-accordion font-bold mt-2.5">
        สำหรับ ข้าราชการบำนาญ, ลูกจ้างบำเหน็จรายเดือน, พนักงานราชการ,
        พนักงานกองทุน
      </div>,
      <>
        ประเมินตามค่าใช้จ่ายที่เกิดขึ้นจริง <br /> สูงสุดไม่เกิน{" "}
        <TextTableRedLg>90%</TextTableRedLg> ของเงินค่าหุ้นที่มีอยู่
      </>,
    ],
  },
  {
    title: "อัตราดอกเบี้ยต่อปี",
    value: <TextTableRedXl>3.5%</TextTableRedXl>,
  },
  {
    title: "เงื่อนไขพิเศษ",
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
  },
  {
    title: "การส่งชำระ",
    value: (
      <>
        ส่งชำระไม่เกิน <TextTableRedLg>24</TextTableRedLg> งวด <br />
        เงินเดือนคงเหลือไม่ต่ำกว่า <TextTableRedLg>2,000</TextTableRedLg> บาท
      </>
    ),
  },
  {
    title: "กู้ได้เมื่อเป็นสมาชิกเกิน",
    value: (
      <>
        <TextTableRedLg>6</TextTableRedLg> เดือน
      </>
    ),
  },
  {
    title: "ค้ำประกัน",
    value: [
      <div key={0} className="custom-underline-in-accordion font-bold">
        สำหรับ ข้าราชการ, ลูกจ้างประจำ, จนท.ประจำ สอ.พม., พนง.ประจำ สธค.
      </div>,
      <>
        ใช้คนค้ำประกัน <TextTableRedLg>2</TextTableRedLg> คน
        <br /> (ต้องเป็น
        <TextTableRed>ข้าราชการ</TextTableRed> หรือ{" "}
        <TextTableRed>ลูกจ้างประจำ</TextTableRed> หรือ{" "}
        <TextTableRed>จนท.ประจำ สอ.พม.</TextTableRed> หรือ{" "}
        <TextTableRed>พนง.ประจำ สธค.</TextTableRed>)
      </>,
      <div key={2} className="custom-underline-in-accordion font-bold mt-2.5">
        สำหรับ ข้าราชการบำนาญ, ลูกจ้างบำเหน็จรายเดือน, พนักงานราชการ,
        พนักงานกองทุน
      </div>,
      <>ไม่ต้องใช้ผู้ค้ำประกัน</>,
    ],
  },
];

export const disastersLoanContent: ContentProps[] = [
  {
    title: "สำหรับ",
    value: "สมาชิกทุกประเภท",
  },
  {
    title: "ยอดกู้",
    value: [
      <div key={0} className="custom-underline-in-accordion font-bold">
        สำหรับ ข้าราชการ, ลูกจ้างประจำ, จนท.ประจำ สอ.พม., พนง.ประจำ สธค.
      </div>,
      <>
        ประเมินตามค่าใช้จ่ายที่เกิดขึ้นจริง <br /> สูงสุดไม่เกิน{" "}
        <TextTableRedLg>500,000</TextTableRedLg> บาท <br />
        (หากไม่เกิน <TextTableRedLg>90%</TextTableRedLg> ของเงินค่าหุ้นที่มีอยู่
        ไม่ต้องใช้ผู้ค้ำประกัน)
      </>,
      <div key={2} className="custom-underline-in-accordion font-bold mt-2.5">
        สำหรับ ข้าราชการบำนาญ, ลูกจ้างบำเหน็จรายเดือน, พนักงานราชการ,
        พนักงานกองทุน
      </div>,
      <>
        ประเมินตามค่าใช้จ่ายที่เกิดขึ้นจริง <br /> สูงสุดไม่เกิน{" "}
        <TextTableRedLg>90%</TextTableRedLg> ของเงินค่าหุ้นที่มีอยู่
      </>,
    ],
  },
  {
    title: "อัตราดอกเบี้ยต่อปี",
    value: <TextTableRedXl>2.5%</TextTableRedXl>,
  },
  {
    title: "เงื่อนไขพิเศษ",
    value: (
      <div>
        ยื่นหลักฐานเพื่อแสดงความเสียหายและประเมินค่าความเสียหายของตนเองและครอบครัว
        <br />
        <small className=" font-bold">
          (ตามที่ระบุในแบบฟอร์มแสดงหลักฐานประกอบการขอกู้สามัญเพื่อเหตุภัยพิบัติจากภัยธรรมชาติ)
        </small>
      </div>
    ),
  },
  {
    title: "การส่งชำระ",
    value: (
      <>
        ส่งชำระไม่เกิน <TextTableRedLg>24</TextTableRedLg> งวด <br />
        เงินเดือนคงเหลือไม่ต่ำกว่า <TextTableRedLg>2,000</TextTableRedLg> บาท
      </>
    ),
  },
  {
    title: "กู้ได้เมื่อเป็นสมาชิกเกิน",
    value: (
      <>
        <TextTableRedLg>6</TextTableRedLg> เดือน
      </>
    ),
  },
  {
    title: "ค้ำประกัน",
    value: [
      <div key={0} className="custom-underline-in-accordion font-bold">
        สำหรับ ข้าราชการ, ลูกจ้างประจำ, จนท.ประจำ สอ.พม., พนง.ประจำ สธค.
      </div>,
      <>
        ใช้คนค้ำประกัน <TextTableRedLg>2</TextTableRedLg> คน
        <br /> (ต้องเป็น
        <TextTableRed>ข้าราชการ</TextTableRed> หรือ{" "}
        <TextTableRed>ลูกจ้างประจำ</TextTableRed> หรือ{" "}
        <TextTableRed>จนท.ประจำ สอ.พม.</TextTableRed> หรือ{" "}
        <TextTableRed>พนง.ประจำ สธค.</TextTableRed>)
      </>,
      <div key={2} className="custom-underline-in-accordion font-bold mt-2.5">
        สำหรับ ข้าราชการบำนาญ, ลูกจ้างบำเหน็จรายเดือน, พนักงานราชการ,
        พนักงานกองทุน
      </div>,
      <>ไม่ต้องใช้ผู้ค้ำประกัน</>,
    ],
  },
];
