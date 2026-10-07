import Image from "next/image";
import logoFooter from "@/image/landing/logo-footer.png";
import lineIcon from "@/image/landing/footer-Line.svg";
import mailIcon from "@/image/landing/footer-Mail.svg";
import phoneIcon from "@/image/landing/footer-Phone.svg";
import Link from "next/link";

export default function FooterMenu() {
  return (
    <div className="bg-blue-600 w-full pt-5 text-white">
      <div className="wrapper grid lg:grid-cols-5 gap-10 lg:gap-20">
        <div className="lg:col-span-2">
          <div className="flex gap-5">
            <Image
              src={logoFooter}
              alt="logo-footer"
              width={80}
              height={80}
              className="w-20 h-20"
            />
            <div className="flex flex-col gap-2.5 ">
              <div className="flex flex-col">
                <p className="text-base font-bold">
                  สหกรณ์ออมทรัพย์กระทรวงการพัฒนาสังคมและความมั่นคงของมนุษย์
                  จำกัด
                </p>
                <p className="text-sm">
                  ตึกอาทิตย์ทิพอาภา บริเวณสถานสงเคราะห์เด็กหญิงบ้านราชวิถี255
                  ถนนราชวิถี แขวงพญาไท เขตราชเทวี กรุงเทพฯ 10400
                </p>
              </div>
              <nav>
                <ul className="leading-loose">
                  <li className="flex items-center gap-2.5">
                    <Image
                      src={phoneIcon}
                      alt="phone"
                      width={15}
                      height={15}
                      className="w-3 h-3"
                    />
                    <small>02-354-7486-88</small>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Image
                      src={mailIcon}
                      alt="mail"
                      width={15}
                      height={15}
                      className="w-3 h-3"
                    />
                    <small>coop023547492@gmail.com</small>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Image
                      src={lineIcon}
                      alt="line"
                      width={15}
                      height={15}
                      className="w-3 h-3"
                    />
                    <small>@coopmsds</small>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <nav>
            <ul className=" leading-loose text-sm">
              <li>
                <Link href="/">หน้าแรก</Link>
              </li>
              <li>
                <Link href="/about-us">เกี่ยวกับสหกรณ์</Link>
              </li>
              <li>
                <Link href="/announcement">ข่าวสารสหกรณ์</Link>
              </li>
              <li>
                <Link href="/gallery">ภาพข่าวสหกรณ์</Link>
              </li>
              <li>
                <Link href="/member-manual">คู่มือสมาชิก</Link>
              </li>
              <li>
                <Link href="/regulations">ระเบียบข้อบังคับ</Link>
              </li>
              <li>
                <Link href="/contact-us">ติดต่อสหกรณ์</Link>
              </li>
            </ul>
          </nav>
          <nav>
            <ul className="lg:hidden leading-loose text-sm">
              <li>
                <Link href="/saving">บริการด้านเงินฝาก</Link>
              </li>
              <li>
                <Link href="/loan">บริการด้านสินเชื่อ</Link>
              </li>
              <li>
                <Link href="/welfare">สวัสดิการสงเคราะห์</Link>
              </li>
              <li>
                <Link href="/download">ดาวน์โหลดเอกสาร</Link>
              </li>
              <li>
                <Link href="/performance">ผลการดำเนินงาน</Link>
              </li>

              <li>
                <Link
                  href="https://coopmsds.com/report/login.php"
                  target="_blank"
                >
                  ดาวน์โหลดใบเสร็จ
                </Link>
              </li>
              <li>
                <Link href="https://election.coopmsds.com/" target="_blank">
                  ลงทะเบียนเลือกตั้ง
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="hidden lg:block">
          <nav>
            <ul className=" leading-loose text-sm">
              <li>
                <Link href="/saving">บริการด้านเงินฝาก</Link>
              </li>
              <li>
                <Link href="/loan">บริการด้านสินเชื่อ</Link>
              </li>
              <li>
                <Link href="/welfare">สวัสดิการสงเคราะห์</Link>
              </li>
              <li>
                <Link href="/download">ดาวน์โหลดเอกสาร</Link>
              </li>
              <li>
                <Link href="/performance">ผลการดำเนินงาน</Link>
              </li>
              <li>
                <Link
                  href="https://coopmsds.com/report/login.php"
                  target="_blank"
                >
                  ดาวน์โหลดใบเสร็จ
                </Link>
              </li>
              <li>
                <Link href="https://election.coopmsds.com/" target="_blank">
                  ลงทะเบียนเลือกตั้ง
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <nav>
            <ul className=" leading-loose text-sm">
              <li>
                <Link href="/committee/1">คณะกรรมการดำเนินการ</Link>
              </li>
              <li>
                <Link href="/committee/2">คณะกรรมการเงินกู้</Link>
              </li>
              <li>
                <Link href="/committee/3">คณะกรรมการศึกษาและประชาสัมพันธ์</Link>
              </li>
              <li>
                <Link href="/committee/4">
                  คณะอนุกรรมการช่วยเหลือสมาชิกผู้ค้ำประกันเงินกู้
                </Link>
              </li>
              <li>
                <Link href="/committee/6">คณะอนุกรรมการวิเคราะห์การลงทุน</Link>
              </li>
              <li>
                <Link href="/committee/7">
                  คณะอนุกรรมการทุนการศึกษาบุตรสมาชิก
                </Link>
              </li>
              <li>
                <Link href="/personnel">เจ้าหน้าที่สหกรณ์</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
