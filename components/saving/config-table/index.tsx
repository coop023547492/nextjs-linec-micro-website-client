import {
  MobileAccordionProps,
  TableHeaderConfig,
  TableRow,
} from "@/utils/types";
import Link from "next/link";
import { SUB_SAVING_URL } from "@/utils/constants";
import {
  collateralContent,
  newYear05Content,
  newYear06Content,
  newYear07Content,
  specialSavingsContent,
} from "../content";

export const savingMainHeader: TableHeaderConfig[][] = [
  [
    {
      label: (
        <>
          ประเภทเงินฝาก <br />
          <small className="custom-sub-title-header-table">
            (คลิกที่ชื่อเงินฝาก เพื่ออ่านรายละเอียดเพิ่มเติม)
          </small>
        </>
      ),
    },
    { label: "อัตราดอกเบี้ยต่อปี" },
    { label: "ใครเปิดบัญชีได้บ้าง?" },
  ],
];

export const savingMainData: TableRow[] = [
  {
    ประเภท: {
      value: (
        <Link href={`${SUB_SAVING_URL}/special-savings`}>
          เงินฝากออมทรัพย์พิเศษ
        </Link>
      ),
      className: "custom-link-type",
    },
    อัตราดอกเบี้ย: {
      value: "1.5%",
      className: "custom-text-center-bold",
    },
    ข้าราชการ: {
      value: "สมาชิกทุกประเภท",
      className: "custom-text-center-bold",
    },
  },
  {
    ประเภท: {
      value: (
        <Link href={`${SUB_SAVING_URL}/collateral-savings`}>
          เงินฝากออมทรัพย์พิเศษ (หลักประกันเงินกู้)
        </Link>
      ),
      className: "custom-link-type",
    },
    อัตราดอกเบี้ย: {
      value: "1.5%",
      className: "custom-text-center-bold",
    },
    ข้าราชการ: {
      value: (
        <>
          สมาชิกที่ต้องมีเงินฝากเป็นหลักประกัน <br />
          สำหรับเงินกู้สามัญ
        </>
      ),
      className: "custom-text-center-bold",
    },
  },
  {
    ประเภท: {
      value: (
        <Link href={`${SUB_SAVING_URL}/newyear-05-savings`}>
          เงินฝากออมทรัพย์พิเศษปีใหม่ 60 เดือน
        </Link>
      ),
      className: "custom-link-type",
    },
    อัตราดอกเบี้ย: {
      value: "2.5%",
      className: "custom-text-center-bold",
    },
    ข้าราชการ: {
      value: "งดรับฝาก",
      className: "custom-text-center-bold",
    },
  },
  {
    ประเภท: {
      value: (
        <Link href={`${SUB_SAVING_URL}/newyear-06-savings`}>
          เงินฝากออมทรัพย์พิเศษปีใหม่ 2567 60 เดือน
        </Link>
      ),
      className: "custom-link-type",
    },
    อัตราดอกเบี้ย: {
      value: "2.5%",
      className: "custom-text-center-bold",
    },
    ข้าราชการ: {
      value: "งดรับฝาก",
      className: "custom-text-center-bold",
    },
  },
  {
    ประเภท: {
      value: (
        <Link href={`${SUB_SAVING_URL}/newyear-07-savings`}>
          เงินฝากออมทรัพย์พิเศษ 60 เดือน รุ่นสะสมทรัพย์
        </Link>
      ),
      className: "custom-link-type",
    },
    อัตราดอกเบี้ย: {
      value: "2.5%",
      className: "custom-text-center-bold",
    },
    ข้าราชการ: {
      value: "งดรับฝาก",
      className: "custom-text-center-bold",
    },
  },
];

export const specialSavingsHeader: TableHeaderConfig[][] = [
  [
    { label: "สำหรับ", className: "text-end w-4/12" },
    {
      label: "สมาชิกทุกประเภท",
      className: "text-start",
    },
  ],
];

export const specialSavingsData: TableRow[] = specialSavingsContent.map(
  (item) => {
    return {
      สำหรับ: {
        value: item.title,
        className: "custom-text-end-bold",
      },
      ข้าราชการ: {
        value: (
          <>
            {Array.isArray(item.value) ? (
              <ul className="custom-list-in-table">
                {item.value.map((v, index) => (
                  <li key={index}>{v}</li>
                ))}
              </ul>
            ) : (
              item.value
            )}
          </>
        ),
      },
    };
  }
);

export const specialSavingsCollateralHeader: TableHeaderConfig[][] = [
  [
    { label: "สำหรับ", className: "text-end w-4/12" },
    {
      label: "ข้าราชการ, ลูกจ้างประจำ, จนท.ประจำ สอ.พม., พนง.ประจำ สธค.",
      className: "text-start",
    },
  ],
];

export const specialSavingsCollateralData: TableRow[] = collateralContent.map(
  (item) => {
    return {
      สำหรับ: {
        value: item.title,
        className: "custom-text-end-bold",
      },
      ข้าราชการ: {
        value: (
          <>
            {Array.isArray(item.value) ? (
              <ul className="custom-list-in-table">
                {item.value.map((v, index) => (
                  <li key={index}>{v}</li>
                ))}
              </ul>
            ) : (
              item.value
            )}
          </>
        ),
      },
    };
  }
);

export const newYear05Header: TableHeaderConfig[][] = [
  [
    { label: "สำหรับ", className: "text-end w-4/12" },
    {
      label: "สมาชิกทุกประเภท",
      className: "text-start",
    },
  ],
];

export const newYear05Data: TableRow[] = newYear05Content.map((item) => {
  return {
    สำหรับ: {
      value: item.title,
      className: "custom-text-end-bold",
    },
    ข้าราชการ: {
      value: (
        <>
          {Array.isArray(item.value) ? (
            <ul className="custom-list-in-table">
              {item.value.map((v, index) => (
                <li key={index}>{v}</li>
              ))}
            </ul>
          ) : (
            item.value
          )}
        </>
      ),
    },
  };
});

export const newYear06Header: TableHeaderConfig[][] = [
  [
    { label: "สำหรับ", className: "text-end w-4/12" },
    {
      label: "สมาชิกทุกประเภท",
      className: "text-start",
    },
  ],
];

export const newYear06Data: TableRow[] = newYear06Content.map((item) => {
  return {
    สำหรับ: {
      value: item.title,
      className: "custom-text-end-bold",
    },
    ข้าราชการ: {
      value: (
        <>
          {Array.isArray(item.value) ? (
            <ul className="custom-list-in-table">
              {item.value.map((v, index) => (
                <li key={index}>{v}</li>
              ))}
            </ul>
          ) : (
            item.value
          )}
        </>
      ),
    },
  };
});

export const newYear07Header: TableHeaderConfig[][] = [
  [
    { label: "สำหรับ", className: "text-end w-4/12" },
    {
      label: "สมาชิกทุกประเภท",
      className: "text-start",
    },
  ],
];

export const newYear07Data: TableRow[] = newYear07Content.map((item) => {
  return {
    สำหรับ: {
      value: item.title,
      className: "custom-text-end-bold",
    },
    ข้าราชการ: {
      value: (
        <>
          {Array.isArray(item.value) ? (
            <ul className="custom-list-in-table">
              {item.value.map((v, index) => (
                <li key={index}>{v}</li>
              ))}
            </ul>
          ) : (
            item.value
          )}
        </>
      ),
    },
  };
});

//////////////////////////////////////////////////////////////////////////////////////////////////////

export const mobileSpecialSavings: MobileAccordionProps[] = [
  {
    title: "สำหรับ",
    content: "สมาชิกทุกประเภท",
  },
  ...specialSavingsContent.map((item) => {
    return {
      title: item.title,
      content: (
        <>
          {Array.isArray(item.value) ? (
            <ul className="custom-list-in-accordion">
              {item.value.map((v, index) => (
                <li key={index}>{v}</li>
              ))}
            </ul>
          ) : (
            item.value
          )}
        </>
      ),
    };
  }),
];

export const mobileSpecialSavingsCollateral: MobileAccordionProps[] = [
  {
    title: "สำหรับ",
    content: "ข้าราชการ, ลูกจ้างประจำ, จนท.ประจำ สอ.พม., พนง.ประจำ สธค.",
  },
  ...collateralContent.map((item) => {
    return {
      title: item.title,
      content: (
        <>
          {Array.isArray(item.value) ? (
            <ul className="custom-list-in-accordion">
              {item.value.map((v, index) => (
                <li key={index}>{v}</li>
              ))}
            </ul>
          ) : (
            item.value
          )}
        </>
      ),
    };
  }),
];

export const mobileNewYear05: MobileAccordionProps[] = [
  {
    title: "สำหรับ",
    content: "สมาชิกทุกประเภท",
  },
  ...newYear05Content.map((item) => {
    return {
      title: item.title,
      content: (
        <>
          {Array.isArray(item.value) ? (
            <ul className="custom-list-in-accordion">
              {item.value.map((v, index) => (
                <li key={index}>{v}</li>
              ))}
            </ul>
          ) : (
            item.value
          )}
        </>
      ),
    };
  }),
];

export const mobileNewYear06: MobileAccordionProps[] = [
  {
    title: "สำหรับ",
    content: "สมาชิกทุกประเภท",
  },
  ...newYear06Content.map((item) => {
    return {
      title: item.title,
      content: (
        <>
          {Array.isArray(item.value) ? (
            <ul className="custom-list-in-accordion">
              {item.value.map((v, index) => (
                <li key={index}>{v}</li>
              ))}
            </ul>
          ) : (
            item.value
          )}
        </>
      ),
    };
  }),
];

export const mobileNewYear07: MobileAccordionProps[] = [
  {
    title: "สำหรับ",
    content: "สมาชิกทุกประเภท",
  },
  ...newYear07Content.map((item) => {
    return {
      title: item.title,
      content: (
        <>
          {Array.isArray(item.value) ? (
            <ul className="custom-list-in-accordion">
              {item.value.map((v, index) => (
                <li key={index}>{v}</li>
              ))}
            </ul>
          ) : (
            item.value
          )}
        </>
      ),
    };
  }),
];
