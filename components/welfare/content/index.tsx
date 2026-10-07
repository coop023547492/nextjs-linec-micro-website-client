import TextTableRedLg from "@/components/ui/TextTableRedLg";
import { ContentProps, ContentSubProps } from "@/utils/types";

export const scholarshipContent: ContentProps[] = [
  {
    title: "เงื่อนไข",
    value: [
      <>
        เป็นนักเรียนชั้นมัธยมศึกษาปีที่ <TextTableRedLg>1-3</TextTableRedLg>
      </>,
      "มีความประพฤติดี ผลการเรียนดี",
      <>
        รายได้ครัวเรือนไม่เกิน <TextTableRedLg>500,000</TextTableRedLg> บาท/ปี
      </>,
    ],
  },
  {
    title: "ขอได้เมื่อเป็นสมาชิกเกิน",
    value: "ติดตามจากประกาศจากทางสหกรณ์",
  },

  {
    title: "เงื่อนไขเพิ่มเติม",
    value: "ติดตามจากประกาศจากทางสหกรณ์",
  },
  { title: "จำนวนเงิน", value: "ติดตามจากประกาศจากทางสหกรณ์" },
  { title: "ช่วงเวลาเปิดรับ", value: "ติดตามจากประกาศจากทางสหกรณ์" },
];

export const passedAwayContent: ContentProps[] = [
  {
    title: "เงื่อนไข",
    value: [
      <>
        ยื่นเรื่องภายใน <TextTableRedLg>90</TextTableRedLg> วัน
        นับจากวันที่ถึงแก่กรรม
      </>,
     
    ],
  },
  {
    title: "ขอได้เมื่อเป็นสมาชิกเกิน",
    value: (
      <>
        <TextTableRedLg>1</TextTableRedLg> ปี
      </>
    ),
  },
];

export const passedAwaySubContent: ContentSubProps[] = [
  {
    title: (
      <div>
        <TextTableRedLg>1</TextTableRedLg> ปีขึ้นไป
      </div>
    ),
    value: [
      {
        subTitle: (
          <span className="underline underline-offset-4">สมาชิกถึงแก่กรรม</span>
        ),
        subValue: (
          <>
            <TextTableRedLg>10,000</TextTableRedLg> บาท <br />
            <span className=" font-bold">จ่ายเงินให้</span> ผู้รับผลประโยชน์
          </>
        ),
      },
      {
        subTitle: (
          <span className="underline underline-offset-4">
            คู่สมรสถึงแก่กรรม
          </span>
        ),
        subValue: (
          <>
            <TextTableRedLg>5,000</TextTableRedLg> บาท
            <br />
            <span className=" font-bold">จ่ายเงินให้</span> สมาชิก
          </>
        ),
      },
      {
        subTitle: (
          <span className="underline underline-offset-4">
            บิดา มารดา บุตรถึงแก่กรรม
          </span>
        ),
        subValue: (
          <>
            <TextTableRedLg>5,000</TextTableRedLg> บาท
            <br />
            <span className=" font-bold">จ่ายเงินให้</span> สมาชิก
          </>
        ),
      },
    ],
  },
  {
    title: (
      <div>
        <TextTableRedLg>5</TextTableRedLg> ปีขึ้นไป
      </div>
    ),
    value: [
      {
        subTitle: (
          <span className="underline underline-offset-4">สมาชิกถึงแก่กรรม</span>
        ),
        subValue: (
          <>
            <TextTableRedLg>20,000</TextTableRedLg> บาท
            <br />
            <span className=" font-bold">จ่ายเงินให้</span> ผู้รับผลประโยชน์
          </>
        ),
      },
      {
        subTitle: (
          <span className="underline underline-offset-4">
            คู่สมรสถึงแก่กรรม
          </span>
        ),
        subValue: (
          <>
            <TextTableRedLg>10,000</TextTableRedLg> บาท
            <br />
            <span className=" font-bold">จ่ายเงินให้</span> สมาชิก
          </>
        ),
      },
      {
        subTitle: (
          <span className="underline underline-offset-4">
            บิดา มารดา บุตรถึงแก่กรรม
          </span>
        ),
        subValue: (
          <>
            <TextTableRedLg>5,000</TextTableRedLg> บาท
            <br />
            <span className=" font-bold">จ่ายเงินให้</span> สมาชิก
          </>
        ),
      },
    ],
  },
  {
    title: (
      <div>
        <TextTableRedLg>10</TextTableRedLg> ปีขึ้นไป
      </div>
    ),
    value: [
      {
        subTitle: (
          <span className="underline underline-offset-4">สมาชิกถึงแก่กรรม</span>
        ),
        subValue: (
          <>
            <TextTableRedLg>40,000</TextTableRedLg> บาท
            <br />
            <span className=" font-bold">จ่ายเงินให้</span> ผู้รับผลประโยชน์
          </>
        ),
      },
      {
        subTitle: (
          <span className="underline underline-offset-4">
            คู่สมรสถึงแก่กรรม
          </span>
        ),
        subValue: (
          <>
            <TextTableRedLg>20,000</TextTableRedLg> บาท
            <br />
            <span className=" font-bold">จ่ายเงินให้</span> สมาชิก
          </>
        ),
      },
      {
        subTitle: (
          <span className="underline underline-offset-4">
            บิดา มารดา บุตรถึงแก่กรรม
          </span>
        ),
        subValue: (
          <>
            <TextTableRedLg>5,000</TextTableRedLg> บาท
            <br />
            <span className=" font-bold">จ่ายเงินให้</span> สมาชิก
          </>
        ),
      },
    ],
  },
];

export const fireContent: ContentProps[] = [
  {
    title: "เงื่อนไข",
    value: [
      <>
        ยื่นเรื่องภายใน <TextTableRedLg>90</TextTableRedLg> วัน
        นับจากวันที่เกิดเหตุ
      </>,
      "มีหนังสือรับรองจากเขต/อำเภอ",
      "มีภาพถ่ายที่ประสบอัคคีภัย",
    ],
  },
  {
    title: "จำนวนเงิน",
    value: (
      <>
        <TextTableRedLg>5,000</TextTableRedLg> บาท
      </>
    ),
  },
  {
    title: "ขอได้เมื่อเป็นสมาชิกเกิน",
    value: (
      <>
        <TextTableRedLg>1</TextTableRedLg> ปี
      </>
    ),
  },
];
