import { Metadata } from "next";

export const metadata: Metadata = {
  title: "วิธีการยืนยันยอด หุ้น หนี้ เงินฝาก ประจำปี 2568",
};

export default function page() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 mt-10">
      <div className="content w-full pl-7">
        <h5 className="text-xl text-left font-bold mb-2.5 -ml-5">
          วิธีการยืนยันยอด หุ้น หนี้ เงินฝาก ประจำปี 2569
        </h5>
        <ul className="list-decimal leading-loose ">
          <li>
            เชื่อมต่อ LINE ของคุณกับระบบสมาชิกสหกรณ์ก่อน (ถ้ายังไม่ได้เชื่อมต่อ)
          </li>
          <li>
            แตะที่แบนเนอร์{" "}
            <span className="text-[#3a67e5] font-bold">
              &quot;ยืนยันยอด หุ้น หนี้ เงินฝาก ประจำปี 2569&quot;
            </span>{" "}
            ใน LINE 
          </li>
          <li>
            แตะที่ปุ่ม{" "}
            <span className="text-[#3a67e5] font-bold">
              &quot;เริ่มการยืนยันยอด&quot;
            </span>
          </li>
          <li>ตรวจสอบ เลขทะเบียนสมาชิก, ชื่อ-นามสกุล, สังกัด</li>
          <li>
            ตรวจสอบยอดคงเหลือ หุ้น ของคุณ ณ วันที่{" "}
            <span className="font-bold">30 กันยายน 2569</span>
          </li>
          <li>
            ตรวจสอบเลขที่สัญญาเงินกู้ และยอดคงเหลือแต่ละสัญญา ณ วันที่{" "}
            <span className="font-bold">30 กันยายน 2569</span>
          </li>
          <li>
            ตรวจสอบเลขที่บัญชีเงินฝาก และยอดคงเหลือแต่ละบัญชี ณ วันที่{" "}
            <span className="font-bold">30 กันยายน 2569</span>
          </li>
          <li className="list-none">
            <ol className="list-none -ml-4">
              <li className="flex items-start gap-1">
                <span>8.1</span>
                <span>
                  หากข้อมูลทั้งหมดถูกต้อง เลือก{" "}
                  <span className="text-[#3a67e5] font-bold">
                    &quot;ถูกต้อง&quot;
                  </span>
                </span>
              </li>

              <li className="flex items-start gap-1">
                <span>8.2</span>
                <span>
                  หากพบข้อมูลไม่ถูกต้อง เลือก{" "}
                  <span className="text-red-500 font-bold">
                    &quot;ไม่ถูกต้อง&quot;
                  </span>{" "}
                  และกรอกเหตุผลในการทักท้วง
                </span>
              </li>
            </ol>
          </li>
          <li>
            แตะที่ปุ่ม{" "}
            <span className="text-[#3a67e5] font-bold">&quot;ยืนยัน&quot;</span>
          </li>
        </ul>
        <p className="mt-2.5 font-semibold">
          &quot;เท่านี้คุณก็ส่วนหนึ่งในการช่วยให้ สอ.พม. เกิดความ
          ถูกต้องโปร่งใสในการดำเนินงาน&quot;
        </p>
      </div>
    </div>
  );
}
