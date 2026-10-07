import CardPayment from "@/components/ui/CardPayment";

export default function page() {
  return (
    <div className="wrapper">
      <h1 className="text-Medium-grey text-3xl font-normal text-center mb-10">
        คู่มือสมาชิก
      </h1>
      <div className="space-y-10 ">
        <div>
          <h3 className="Main-dark-Blue text-xl font-bold mb-5">
            คุณสมบัติของสมาชิก
          </h3>
          <ul className="list-decimal leading-9 ml-5 md:ml-12 text-stone-500 text-lg">
            <li>
              <p>
                เป็น
                <span className="text-stone-500 text-lg font-bold">
                  ข้าราชการสังกัดกระทรวงการพัฒนาสังคมและความมั่นคงของมนุษย์
                </span>{" "}
                หรือ
              </p>
              <p>
                เป็น
                <span className="text-stone-500 text-lg font-bold">
                  ลูกจ้างประจำสังกัดกระทรวงการพัฒนาสังคมและความมั่นคงของมนุษย์
                </span>{" "}
                หรือ
              </p>
              <p>
                เป็น
                <span className="text-stone-500 text-lg font-bold">
                  พนักงานประจำสำนักงานธนานุเคราะห์
                </span>{" "}
                หรือ
              </p>
              <p>
                เป็น
                <span className="text-stone-500 text-lg font-bold">
                  เจ้าหน้าที่ประจำสำนักงานสหกรณ์ออมทรัพย์กระทรวงการพัฒนาสังคมและความมั่นคงของมนุษย์
                  จำกัด
                </span>{" "}
                หรือ
              </p>
              <p>
                เป็น
                <span className="text-stone-500 text-lg font-bold">
                  เจ้าหน้าที่ประจำสำนักงานฌาปนกิจสงเคราะห์
                  กรมพัฒนาสังคมและสวัสดิการ
                </span>
                หรือ
              </p>
              <p>
                เป็น
                <span className="text-stone-500 text-lg font-bold">
                  พนักงานราชการสังกัดกระทรวงการพัฒนาสังคมและความมั่นคงของมนุษย์
                </span>{" "}
                หรือ
              </p>
              <p>
                เป็น
                <span className="text-stone-500 text-lg font-bold">
                  บุคคลที่คณะกรรมการดำเนินการเห็นชอบ
                </span>
              </p>
            </li>
            <li>เป็นผู้มีความประพฤติและนิสัยดีงาม</li>
            <li>
              มิได้เป็นสมาชิกในสหกรณ์ออมทรัพย์อื่นที่มีวัตถุประสงค์ในการให้กู้ยืมเงิน
            </li>
          </ul>
        </div>
        <div>
          <h3 className="Main-dark-Blue text-xl font-bold mb-5">
            ค่าธรรมเนียมแรกเข้า
          </h3>
          <ul className="list-decimal leading-9 ml-5 md:ml-12 text-stone-500 text-lg">
            <li>
              ผู้เข้าเป็นสมาชิกจะต้อง
              <span className="text-stone-500 text-lg font-bold">
                ชำระค่าธรรมเนียมแรกเข้า
              </span>
              ให้แก่สหกรณ์ คนละ{" "}
              <span className="text-stone-500 text-lg font-bold">100</span> บาท
            </li>
          </ul>
        </div>
        <div>
          <h3 className="Main-dark-Blue text-xl font-bold mb-5">
            สิทธิของสมาชิก
          </h3>
          <ul className="list-decimal leading-9 ml-5 md:ml-12 text-stone-500 text-lg">
            <li>
              เข้าร่วมประชุมใหญ่ เพื่อเสนอความคิดเห็น หรือ ออกเสียงลงคะแนน
            </li>
            <li>เข้าชื่อเรียกประชุมใหญ่วิสามัญ</li>
            <li>
              เสนอ หรือ ได้รับเลือกเป็นกรรมการดำเนินการสหกรณ์ หรือ
              ผู้ตรวจสอบกิจการสหกรณ์
            </li>
            <li>ได้รับบริการทางธุรกิจและทางวิชาการจากสหกรณ์</li>
            <li>สิทธิอื่นๆ ที่กำหนดไว้ในข้อบังคับและระเบียบสหกรณ์</li>
          </ul>
        </div>
        <div>
          <h3 className="Main-dark-Blue text-xl font-bold mb-5">
            ผลประโยชน์ที่จะได้รับ
          </h3>
          <ul className="list-decimal leading-9 ml-5 md:ml-12 text-stone-500 text-lg">
            <li>
              <span className="text-stone-500 text-lg font-bold">
                เงินปันผล
              </span>
              ตามส่วนทุนเรือนหุ้นกับระยะเวลาในอัตราที่ไม่เกินกว่ากฎหมายกำหนด
            </li>
            <li>
              <span className="text-stone-500 text-lg font-bold">
                เงินเฉลี่ยคืน
              </span>{" "}
              เฉพาะสมาชิกที่กู้เงินและไม่เคยผิดนัดการชำระหนี้
            </li>
            <li>
              <span className="text-stone-500 text-lg font-bold">
                ดอกเบี้ยเงินฝาก
              </span>
              ประเภทออมทรัพย์พิเศษ
            </li>
            <li>
              <span className="text-stone-500 text-lg font-bold">
                เงินสวัสดิการสงเคราะห์
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="Main-dark-Blue text-xl font-bold mb-5">
            หน้าที่ของสมาชิก
          </h3>
          <ul className="list-decimal leading-9 ml-5 md:ml-12 text-stone-500 text-lg">
            <li>ปฏิบัติตามกฎหมาย ระเบียบ ข้อบังคับ มติ และคำสั่งของสหกรณ์</li>
            <li>เข้าร่วมประชุมทุกครั้งที่สหกรณ์นัดหมาย</li>
            <li>
              ส่งเสริมสนับสนุนกิจการของสหกรณ์
              เพื่อให้สหกรณ์เป็นองค์การที่เข้มแข็ง
            </li>
            <li>สอดส่องดูแลกิจการของสหกรณ์</li>
            <li>
              ร่วมมือกับคณะกรรมการดำเนินการสหกรณ์
              พัฒนาสหหกกรณ์ให้เจริญรุ่งเรืองและมั่นคง
            </li>
          </ul>
        </div>
        <div>
          <h3 className="Main-dark-Blue text-xl font-bold mb-5">
            ข้อควรปฏิบัติสำหรับสมาชิก
          </h3>
          <ul className="list-decimal leading-9 ml-5 md:ml-12 text-stone-500 text-lg">
            <li>
              การลาออกจากราชการ หรือย้ายสังกัด ย้ายอัตราเงินเดือน
              โปรดแจ้งสหกรณ์ด่วน
            </li>
            <li>
              การลาออกจากสหกรณ์ กรุณาส่งหลักฐานเปลี่ยนผู้ค้ำประกันก่อน
              (กรณีมีภาระค้ำประกัน)
            </li>
            <li>
              การส่งหลักฐานคำขอกู้เงินทุกประเภทต้องกรอกข้อความให้ครบถ้วนถูกต้อง
              เช่น ลงลายมือชื่อผู้กู้ ผู้ค้ำประกัน เงินเดือน จำนวนเงินที่ขอกู้
              <span className="text-stone-500 text-lg font-bold">
                และต้องส่งหลักฐานตัวจริงเท่านั้น
              </span>
            </li>
            <li>
              การลงลายมือชื่อผู้กู้ ผู้ค้ำประกัน การลงนามรับรองสำเนาบัตรประจำตัว
              ต้องเป็นลายมือชื่อทีเหมือนกัน และเป็นของตนเอง (บัตรต้องไม่หมดอายุ)
            </li>
            <li>
              ผู้รับรองลายมือชื่อผู้ค้ำประกัน
              ต้องดำรงตำแหน่งไม่ต่ำกว่าหัวหน้าฝ่าย หรือหัวหน้าหน่วยงาน
            </li>
            <li>
              การส่งเงินให้สหกรณ์โดยโอนบัญชีธนาคารกรุงไทย กรุณาแฟ็กซ์
              สำเนาใบโอนในวันที่ทำการโอนเงินให้สหกรณ์โดยระบุว่าเป็นเงินของใคร
              ค่าอะไร
            </li>
            <li>
              ประสงค์จะให้สหกรณ์โอนเงินกู้ หรือถอนเงินฝากทางบัญชี
              <span className="text-stone-500 text-lg font-bold">
                ต้องถ่ายเอกสารหมายเลขบัญชีธนาคารกรุงไทย
              </span>
              ซึ่งเป็นบัญชีของตัวท่านเองแนบเรื่องให้สหกรณ์ทุกครั้ง
            </li>
          </ul>
        </div>
        <div>
          <h3 className="Main-dark-Blue text-xl font-bold mb-5">
            การตั้งผู้รับโอนประโยชน์
          </h3>
          <ul className="list-decimal leading-9 ml-5 md:ml-12 text-stone-500 text-lg">
            <li>
              สมาชิกจะต้องทำหนังสือตั้งบุคคลหนึ่ง หรือ หลายคน
              เพื่อให้เป็นผู้รับโอนประโยชน์
              ซึ่งตนมีอยู่ในสหกรณ์เมื่อตนเองตายนั้น มอบให้สหกรณ์ถือไว้
              หนังสือตั้งผู้รับโอนประโยชน์ดังว่านี้ต้องทำตามลักษณะพินัยกรรม
              (มีแบบฟอร์มที่สหกรณ์)
            </li>
          </ul>
        </div>
        <div>
          <h3 className="Main-dark-Blue text-xl font-bold mb-5">
            การขาดจากสมาชิกภาพ
          </h3>
          <ul className="list-decimal leading-9 ml-5 md:ml-12 text-stone-500 text-lg">
            <li>ตาย</li>
            <li>ลาออก</li>
            <li>เป็นคนไร้ความสามารถ หรือ เสมือนไร้ความสามารถ</li>
            <li>ต้องคำพิพากษาให้ล้มละลาย</li>
            <li>ถูกออกจากราชการ หรือ งานประจำ ตามข้อ 31(3) โดยมีความผิด</li>
            <li>ถูกให้ออกจากสหกรณ์</li>
          </ul>
        </div>
        <div>
          <h3 className="Main-dark-Blue text-xl font-bold mb-5">
            ข้อควรคำนึ่งก่อนค้ำประกัน
          </h3>
          <ul className="list-decimal leading-9 ml-5 md:ml-12 text-stone-500 text-lg">
            <li>
              หากท่านเป็นผู้ค้ำประกัน และ หากผู้กู้ขาดส่งการชำระหนี้ เกิน 2
              งวดขึ้นไป ผู้ค้ำประกันต้องรับผิดชอบหนี้แทนผู้กู้
              ในฐานะผู้ค้ำประกันเสมือนเป็นผู้กู้
            </li>
          </ul>
        </div>
        <div className="space-y-5">
          <h3 className="Main-dark-Blue text-xl font-bold ">
            การโอนเงินเข้าบัญชีสหกรณ์ออมทรัพย์
          </h3>
          <CardPayment
            title="การโอนเงินเพื่อชำระหนี้เงินกู้"
            accountNumber="021-1-04169-6"
          />
          <CardPayment
            title="การโอนเงินเพื่อฝากเงินเข้าบัญชีเงินฝากออมทรัพย์พิเศษ"
            accountNumber="021-1-19052-7"
          />
        </div>
      </div>
    </div>
  );
}
