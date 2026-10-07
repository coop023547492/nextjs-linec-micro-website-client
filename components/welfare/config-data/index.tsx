import {
  MobileAccordionProps,
  TableHeaderConfig,
  TableRow,
} from "@/utils/types";

import Link from "next/link";
import TextTableRedLg from "../../ui/TextTableRedLg";
import { SUB_WELFARE_URL } from "@/utils/constants";
import {
  fireContent,
  passedAwayContent,
  passedAwaySubContent,
  scholarshipContent,
} from "../content";

export const welfareMainHeader: TableHeaderConfig[][] = [
  [
    {
      label: (
        <>
          สวัสดิการสงเคราะห์ <br />
          <small className="custom-sub-title-header-table">
            (คลิกที่ชื่อสวัสดิการ เพื่ออ่านรายละเอียดเพิ่มเติม)
          </small>
        </>
      ),
    },
    { label: "จำนวนเงิน" },
    { label: "ใครขอสวัสดิการได้บ้าง?" },
  ],
];

export const welfareMainData: TableRow[] = [
  {
    สวัสดิการสงเคราะห์: {
      value: (
        <Link href={`${SUB_WELFARE_URL}/passedaway-welfare`}>
          เงินสวัสดิการสงเคราะห์ กรณีสมาชิกถึงแก่กรรม
        </Link>
      ),
      className: "custom-link-type",
    },
    จำนวนเงิน: {
      value: "10,000-40,000",
      className: "custom-text-center-bold",
    },
    ข้าราชการ: {
      value: "สมาชิกทุกประเภท",
      className: "custom-text-center-bold",
    },
  },
  {
    สวัสดิการสงเคราะห์: {
      value: (
        <Link href={`${SUB_WELFARE_URL}/passedaway-welfare`}>
          เงินสวัสดิการสงเคราะห์ กรณีคู่สมรสถึงแก่กรรม
        </Link>
      ),
      className: "custom-link-type",
    },
    จำนวนเงิน: {
      value: "5,000-20,000",
      className: "custom-text-center-bold font-bold",
    },
    ข้าราชการ: {
      value: "สมาชิกทุกประเภท",
      className: "custom-text-center-bold",
    },
  },
  {
    สวัสดิการสงเคราะห์: {
      value: (
        <Link href={`${SUB_WELFARE_URL}/passedaway-welfare`}>
          เงินสวัสดิการสงเคราะห์ กรณีบิดา มารดา หรือบุตรถึงแก่กรรม
        </Link>
      ),
      className: "custom-link-type",
    },
    จำนวนเงิน: {
      value: "5,000",
      className: "custom-text-center-bold",
    },
    ข้าราชการ: {
      value: "สมาชิกทุกประเภท",
      className: "custom-text-center-bold",
    },
  },
  {
    สวัสดิการสงเคราะห์: {
      value: (
        <Link href={`${SUB_WELFARE_URL}/fire-welfare`}>
          เงินสวัสดิการสงเคราะห์ กรณีสมาชิกประสบอัคคีภัย
        </Link>
      ),
      className: "custom-link-type",
    },
    จำนวนเงิน: {
      value: "5,000",
      className: "custom-text-center-bold",
    },
    ข้าราชการ: {
      value: "สมาชิกทุกประเภท",
      className: "custom-text-center-bold",
    },
  },
  {
    สวัสดิการสงเคราะห์: {
      value: (
        <Link href={`${SUB_WELFARE_URL}/scholarship-welfare`}>
          ทุนการศึกษาบุตร
        </Link>
      ),
      className: "custom-link-type",
    },
    จำนวนเงิน: {
      value: "ตามประกาศ",
      className: "custom-text-center-bold",
    },
    ข้าราชการ: {
      value: "สมาชิกทุกประเภท",
      className: "custom-text-center-bold",
    },
  },
];

//ทุนการศึกษาบุตร

export const scholarshipHeader: TableHeaderConfig[][] = [
  [
    { label: "สำหรับ", className: "text-end" },
    {
      label: "สมาชิกทุกประเภท",
      className: " text-start",
    },
  ],
];

export const scholarshipData: TableRow[] = scholarshipContent.map((item) => {
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
              {item.value.map((subItem, subIndex) => (
                <li key={subIndex}>{subItem}</li>
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

//เงินสวัสดิการสงเคราะห์ กรณีสมาชิกถึงแก่กรรม
export const passedAwayHeader: TableHeaderConfig[][] = [
  [
    { label: "สำหรับ", className: "text-end" },
    {
      label: "สมาชิกทุกประเภท",
      className: " text-start",
    },
  ],
];

export const passedAwayData: TableRow[] = passedAwayContent.map((item) => {
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
              {item.value.map((subItem, subIndex) => (
                <li key={subIndex}>{subItem}</li>
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

export const passedAwaySubHeader: TableHeaderConfig[][] = [
  [
    { label: "อายุการเป็นสมาชิก" },
    {
      label: (
        <>
          สมาชิก
          <br /> ถึงแก่กรรม
        </>
      ),
    },
    {
      label: (
        <>
          คู่สมรส <br />
          ถึงแก่กรรม
        </>
      ),
    },
    {
      label: (
        <>
          บิดา มารดา บุตร <br />
          ถึงแก่กรรม
        </>
      ),
    },
  ],
];

export const passedAwaySubData: TableRow[] = [
  {
    อายุ: {
      value: (
        <>
          <TextTableRedLg>1</TextTableRedLg> ปีขึ้นไป
        </>
      ),
      className: "text-center font-bold",
    },
    สมาชิก: {
      value: (
        <>
          <TextTableRedLg>10,000</TextTableRedLg> บาท
        </>
      ),
      className: "text-center",
    },
    คู่สมรส: {
      value: (
        <>
          <TextTableRedLg>5,000</TextTableRedLg> บาท
        </>
      ),
      className: "text-center",
    },
    บิดา: {
      value: (
        <>
          <TextTableRedLg>5,000</TextTableRedLg> บาท
        </>
      ),
      className: "text-center align-middle",
      rowSpan: 3,
    },
  },
  {
    อายุ: {
      value: (
        <>
          <TextTableRedLg>5</TextTableRedLg> ปีขึ้นไป
        </>
      ),
      className: "text-center font-bold",
    },
    สมาชิก: {
      value: (
        <>
          <TextTableRedLg>20,000</TextTableRedLg> บาท
        </>
      ),
      className: "text-center",
    },
    คู่สมรส: {
      value: (
        <>
          <TextTableRedLg>10,000</TextTableRedLg> บาท
        </>
      ),
      className: "text-center",
    },
  },
  {
    อายุ: {
      value: (
        <>
          <TextTableRedLg>10</TextTableRedLg> ปีขึ้นไป
        </>
      ),
      className: "text-center font-bold",
    },
    สมาชิก: {
      value: (
        <>
          <TextTableRedLg>40,000</TextTableRedLg> บาท
        </>
      ),
      className: "text-center",
    },
    คู่สมรส: {
      value: (
        <>
          <TextTableRedLg>20,000</TextTableRedLg> บาท
        </>
      ),
      className: "text-center",
    },
  },
  {
    อายุ: {
      value: "จ่ายเงินให้",
      className: "text-center font-bold",
    },
    สมาชิก: {
      value: "ผู้รับผลประโยชน์",
      className: "text-center",
    },
    คู่สมรส: {
      value: "สมาชิก",
      className: "text-center",
    },
    บิดา: {
      value: "สมาชิก",
      className: "text-center",
    },
  },
];

//เงินสวัสดิการสงเคราะห์ กรณีสมาชิกประสบอัคคีภัย
export const fireHeader: TableHeaderConfig[][] = [
  [
    { label: "สำหรับ", className: "text-end" },
    {
      label: "สมาชิกทุกประเภท",
      className: " text-start",
    },
  ],
];

export const fireData: TableRow[] = fireContent.map((item) => {
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
              {item.value.map((subItem, subIndex) => (
                <li key={subIndex}>{subItem}</li>
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

//ทุนการศึกษาบุตร
export const mobileScholarship: MobileAccordionProps[] = [
  {
    title: "สำหรับ",
    content: "สมาชิกทุกประเภท",
  },
  ...scholarshipContent.map((item) => {
    return {
      title: item.title,
      content: (
        <>
          {Array.isArray(item.value) ? (
            <ul className="custom-list-in-accordion">
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
  }),
];

//เงินสวัสดิการสงเคราะห์ กรณีสมาชิกถึงแก่กรรม
export const mobilePassedAway: MobileAccordionProps[] = [
  {
    title: "สำหรับ",
    content: "สมาชิกทุกประเภท",
  },
  ...passedAwayContent.map((item) => {
    return {
      title: item.title,
      content: (
        <>
          {Array.isArray(item.value) ? (
            <ul className="custom-list-in-accordion">
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
  }),
];

export const mobilePassedAwaySub: MobileAccordionProps[] =
  passedAwaySubContent.map((item) => {
    return {
      title: item.title,
      content: (
        <div className="flex flex-col gap-5">
          {Array.isArray(item.value) &&
            item.value.map((subItem, index) => (
              <div key={index}>
                <p className="font-bold">{subItem.subTitle}</p>
                <p>{subItem.subValue}</p>
              </div>
            ))}
        </div>
      ),
    };
  });

//เงินสวัสดิการสงเคราะห์ กรณีสมาชิกประสบอัคคีภัย
export const mobileFire: MobileAccordionProps[] = [
  {
    title: "สำหรับ",
    content: "สมาชิกทุกประเภท",
  },
  ...fireContent.map((item) => {
    return {
      title: item.title,
      content: (
        <>
          {Array.isArray(item.value) ? (
            <ul className="custom-list-in-accordion">
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
  }),
];
