export const SUB_LOAN_URL = "/loan";
export const SUB_SAVING_URL = "/saving";
export const SUB_WELFARE_URL = "/welfare";
export const APP_NAME = "สหกรณ์ออมทรัพย์ฯ พม.";
export const APP_DESCRIPTION = "Landing Page สหกรณ์ออมทรัพย์ฯ พม.";

export const COOP_DOMAIN = process.env.NEXT_PUBLIC_COOP_DOMAIN;
export const COOP_DOMAIN_API = `${COOP_DOMAIN}/line/api`;
export const COOP_DOMAIN_AUDITOR_API = `${COOP_DOMAIN}/auditor/api`;
export const COOP_DOMAIN_LANDING_API = `${COOP_DOMAIN}/api`;
export const COOP_DOMAIN_DOWNLOAD_DOCUMENT_URL = `${COOP_DOMAIN}/downloaddocuments`;
export const COOP_DOMAIN_GALLERY_URL = `${COOP_DOMAIN}/activityimages`;
export const COOP_DOMAIN_ANNOUNCEMENT_URL = `${COOP_DOMAIN}/uploadfiles`;
export const COOP_DOMAIN_BANNER_URL = `${COOP_DOMAIN}/bannerimages`;
export const COOP_DOMAIN_COMMITTEE_URL = `${COOP_DOMAIN}/personnelimages`;
export const COOP_DOMAIN_REGULATION_URL = `${COOP_DOMAIN}/regulations`;
export const COOP_DOMAIN_PERFORMANCE_URL = `${COOP_DOMAIN}/performance`;

export const LINE_TARGET_REACH = 7227;

export const MEMBER_STATUS = [
  { key: "correct", name: "ถูกต้อง" },
  { key: "incorrect", name: "ไม่ถูกต้อง โดยมีการทักท้วง ดังนี้" },
];

export const LOANTYPE = ["21", "11", "12"];

export const INTEREST_SAVINH_DATA = [
  {
    contentTitle: "เงินฝากออมทรัพย์พิเศษ",
    contentValue: "ร้อยละ 1.50 ต่อปี",
  },
  {
    contentTitle: "เงินฝากประจำ",
    contentValue: "ร้อยละ 1.50 ต่อปี",
  },
];

export const INTEREST_LOAN_DATA = [
  {
    contentTitle: "เงินกู้ฉุกเฉิน",
    contentValue: "ร้อยละ 5.75 ต่อปี",
  },
  {
    contentTitle: "เงินกู้พิเศษ (ใช้หลักทรัพย์ค้ำประกัน)",
    contentValue: "ร้อยละ 5.5 ต่อปี",
  },
];

export const INTEREST_LOAN_FOR_DATA = [
  {
    contentTitle: "สามัญทั่วไป",
    contentValue: "ร้อยละ 6 ต่อปี",
  },
  {
    contentTitle: "เพื่อการลงทุนประกอบอาชีพ",
    contentValue: "ร้อยละ 3.5 ต่อปี",
  },

  {
    contentTitle: "เพื่อการรักษาพยาบาล",
    contentValue: "ร้อยละ 3.5 ต่อปี",
  },
  {
    contentTitle: "เพื่อการศึกษา",
    contentValue: "ร้อยละ 3.5 ต่อปี",
  },
  {
    contentTitle: "เพื่อการทัศนศึกษา",
    contentValue: "ร้อยละ 3.5 ต่อปี",
  },
  {
    contentTitle: "เพื่อการซื้อรถยนต์หรือรถจักรยานยนต์",
    contentValue: "ร้อยละ 3 ต่อปี",
  },
  {
    contentTitle: "เพื่อเหตุภัยพิบัติจากภัยธรรมชาติ",
    contentValue: "ร้อยละ 2.5 ต่อปี",
  },
  {
    contentTitle: "เงินกู้หุ้นตนเอง",
    contentValue: "ร้อยละ 5.75 ต่อปี",
  },
];

export const AGENT_DATA = [
  {
    id: 1,
    name: "สมาคมฌาปนกิจสงเคราะห์ สมาชิกสหกรณ์ราชการ รัฐวิสาหกิจไทย",
    logo: "/images/agnet-1.png",
    link: "https://cgse.or.th/",
  },
  {
    id: 2,
    name: "สมาคมฌาปนกิจสงเคราะห์ สหกรณ์สมาชิกของ ชุมนุมสหกรณ์ออมทรัพย์ แห่งประเทศไทย",
    logo: "/images/agent-2.png",
    link: "http://www.fscct.or.th/",
  },
  {
    id: 3,
    name: "กระทรวงการพัฒนาสังคม และความมั่นคงของมนุษย์",
    logo: "/images/agent-3.png",
    link: "https://www.m-society.go.th/home.php",
  },
  {
    id: 4,
    name: "กรมพัฒนาสังคม และสวัสดิการ",
    logo: "/images/agent-4.png",
    link: "https://dsdw.go.th/Index",
  },
  {
    id: 5,
    name: "กรมกิจการเด็กและเยาวชน",
    logo: "/images/agent-5.png",
    link: "https://www.dcy.go.th/",
  },
  {
    id: 6,
    name: "กรมกิจการผู้สูงอายุ",
    logo: "/images/agent-6.png",
    link: "https://www.dop.go.th/",
  },
  {
    id: 7,
    name: "กรมกิจการสตรี และสถาบันครอบครัว",
    logo: "/images/agent-7.png",
    link: "https://www.dwf.go.th/",
  },
  {
    id: 8,
    name: "กรมส่งเสริมและพัฒนา คุณภาพชีวิตคนพิการ",
    logo: "/images/agent-8.png",
    link: "https://dep.go.th/th",
  },
  {
    id: 9,
    name: "สํานักงานธนานุเคราะห์",
    logo: "/images/agent-9.png",
    link: "https://www.pawn.co.th/#/home",
  },
  {
    id: 10,
    name: "สถาบันพัฒนา องค์กรชุมชน",
    logo: "/images/agent-10.png",
    link: "https://www.codi.or.th/",
  },
];

export const committeeMenuItems = [
  {
    text: "คณะกรรมการดำเนินการ",
    href: "/committee/1",
  },
  {
    text: "คณะกรรมการเงินกู้",
    href: "/committee/2",
  },
  {
    text: "คณะกรรมการศึกษาและประชาสัมพันธ์",
    href: "/committee/3",
  },
  {
    text: "คณะอนุกรรมการช่วยเหลือสมาชิกผู้ค้ำประกันเงินกู้",
    href: "/committee/4",
  },
  {
    text: "คณะอนุกรรมการวิเคราะห์การลงทุน",
    href: "/committee/6",
  },
  {
    text: "คณะอนุกรรมการทุนการศึกษาบุตรสมาชิก",
    href: "/committee/7",
  },
  {
    text: "เจ้าหน้าที่สหกรณ์",
    href: "/personnel",
  },
];
