import {
  Home,
  Settings,
  Newspaper,
  UserIcon,
  MonitorCheckIcon,
} from "lucide-react";
import { NavItems } from "./types";

//admin route
export const adminItems = [
  {
    title: "Dashboard",
    url: "/admin/dashboard",
    icon: Home,
  },
  {
    title: "Posts",
    url: "/admin/post",
    icon: Newspaper,
  },
  {
    title: "Members",
    url: "/admin/members",
    icon: UserIcon,
  },

  {
    title: "Settings",
    url: "/admin/settings",
    icon: Settings,
  },
  {
    title: "Auditor",
    url: "/admin/auditor",
    icon: MonitorCheckIcon,
  },
];

//admin route
export const auditorItems = [
  {
    title: "Auditor",
    url: "/admin/auditor",
    icon: MonitorCheckIcon,
  },
];

// landing route
export const mainNavItems: NavItems = [
  {
    text: "หน้าแรก",
    href: "/",
  },
  {
    text: "เกี่ยวกับสหกรณ์",
    href: "/about-us",
  },
  {
    text: "บริการเงินฝาก",
    href: "/saving",
  },
  {
    text: "บริการสินเชื่อ",
    href: "/loan",
  },
  {
    text: "สวัสดิการสงเคราะห์",
    href: "/welfare",
  },
  {
    text: "ดาวน์โหลดเอกสาร",
    href: "/download",
  },
  {
    text: "ติดต่อสหกรณ์",
    href: "/contact-us",
  },
];

// landing Mobile route
export const mainNavItemsMobile: NavItems = [
  {
    text: "หน้าแรก",
    href: "/",
  },
  {
    text: "เกี่ยวกับสหกรณ์",
    href: "/about-us",
  },
  {
    text: "บริการเงินฝาก",
    href: "/saving",
  },
  {
    text: "บริการสินเชื่อ",
    href: "/loan",
  },
  {
    text: "สวัสดิการสงเคราะห์",
    href: "/welfare",
  },
  {
    text: "ดาวน์โหลดเอกสาร",
    href: "/download",
  },
  {
    text: "ติดต่อสหกรณ์",
    href: "/contact-us",
  },

  {
    text: "คู่มือสมาชิก",
    href: "/member-manual",
  },
  {
    text: "ระเบียบข้อบังคับ",
    href: "/regulations",
  },
  {
    text: "ผลการดำเนินงาน",
    href: "/performance",
  },

  {
    text: "ข่าวสารสหกรณ์",
    href: "/announcement",
  },
  {
    text: "ภาพข่าวสหกรณ์",
    href: "/gallery",
  },
  {
    text: "ลงทะเบียนเลือกตั้ง",
    href: "https://election.coopmsds.com/",
  },
];

export const headNavItems: NavItems = [
  {
    text: "ลงทะเบียนเลือกตั้ง",
    href: "https://election.coopmsds.com/",
  },
  {
    text: "ระเบียบข้อบังคับ",
    href: "/regulations",
  },
  {
    text: "คู่มือสมาชิก",
    href: "/member-manual",
  },
  {
    text: "ผลการดำเนินงาน",
    href: "/performance",
  },
  {
    text: "ข่าวสารสหกรณ์",
    href: "/announcement",
  },
  {
    text: "ภาพข่าวสหกรณ์",
    href: "/gallery",
  },
];
