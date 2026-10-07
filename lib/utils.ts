import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";
import { th } from "date-fns/locale";
import qs from "query-string";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function truncateText(text: string, maxLength: number = 60): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}

export const formatThaiDate = (dateString: string) => {
  const date = new Date(dateString);
  const buddhistYear = date.getFullYear() + 543;

  return `${format(date, "EEEE", { locale: th })}ที่ ${format(date, "d MMMM", {
    locale: th,
  })} พ.ศ. ${buddhistYear}`;
};

export const getMonthYearThai = (date: Date) => {
  const month = format(date, "MMMM", { locale: th }); // เดือนเป็นภาษาไทย
  const buddhistYear = date.getFullYear() + 543; // คิดปีพุทธศักราช
  const monthYear = `${month} ${buddhistYear}`;
  return monthYear;
};

export function formatThaiDateToDatePicker(date: Date): string {
  const day = format(date, "dd");
  const month = format(date, "MM");
  const year = (date.getFullYear() + 543).toString(); // แปลงเป็นปี พ.ศ.
  return `${day}/${month}/${year}`;
}

export function formatNumberWithComma(value: number | string): string {
  const num = typeof value === "string" ? parseFloat(value) : value;

  if (isNaN(num)) return "0";

  return num.toLocaleString("en-US");
}

export function formatDecimalWithComma(value: number | string): string {
  const num = typeof value === "string" ? parseFloat(value) : value;

  if (isNaN(num)) return "0.00";

  return num.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function formatCommaToNumber(value: string | number): string {
  if (typeof value === "number") return value.toString();

  // ลบ comma และแปลงเป็น float
  const cleaned = value.replace(/,/g, "");
  const num = parseFloat(cleaned);

  return isNaN(num) ? "0" : num.toString();
}

export function formUrlQuery({
  params,
  key,
  value,
}: {
  params: string;
  key: string;
  value: string | null;
}) {
  const query = qs.parse(params);
  query[key] = value;

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query,
    },
    {
      skipNull: true,
    }
  );
}

export function detectClient() {
  if (typeof navigator === "undefined") {
    return {
      platform: "unknown",
      isMobile: false,
      isIOS: false,
      isAndroid: false,
      isLine: false,
      ua: "",
      language: null as string | null,
    };
  }

  const ua = navigator.userAgent || "";
  const isLine = /Line/i.test(ua);
  const isIOS = /iPad|iPhone|iPod/.test(ua);
  const isAndroid = /Android/i.test(ua);
  const isMobile = isIOS || isAndroid;
  const platform = isIOS ? "ios" : isAndroid ? "android" : "desktop";

  return {
    platform,
    isMobile,
    isIOS,
    isAndroid,
    isLine,
    ua,
    language: (navigator.language || null) as string | null,
  };
}

export function clientInfoForDB() {
  const info = detectClient();

  // Screen dimensions
  const screenWidth = typeof window !== "undefined" ? window.innerWidth : null;
  const screenHeight =
    typeof window !== "undefined" ? window.innerHeight : null;
  const devicePixelRatio =
    typeof window !== "undefined" ? window.devicePixelRatio : null;

  // Viewport dimensions
  const viewportWidth =
    typeof window !== "undefined" ? window.innerWidth : null;
  const viewportHeight =
    typeof window !== "undefined" ? window.innerHeight : null;

  // Connection info
  const connection =
    typeof navigator !== "undefined" && "connection" in navigator
      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (navigator as any).connection
      : null;

  // Location info (if available)
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // Source classification
  const source = info.isLine ? `line-${info.platform}` : info.platform;

  return {
    // Device & Platform
    source, // 'line-ios', 'android', 'desktop', etc.
    platform: info.platform, // 'ios', 'android', 'desktop'
    isLine: info.isLine,
    isMobile: info.isMobile,
    isIOS: info.isIOS,
    isAndroid: info.isAndroid,

    // Browser & System
    userAgent: info.ua,
    language: info.language,
    languages: typeof navigator !== "undefined" ? navigator.languages : null,

    // Screen & Display
    screenWidth,
    screenHeight,
    viewportWidth,
    viewportHeight,
    devicePixelRatio,
    colorDepth: typeof screen !== "undefined" ? screen.colorDepth : null,

    // Network (if available)
    connectionType: connection?.effectiveType || null,
    downlink: connection?.downlink || null,

    // Time & Location
    timezone,
    timestamp: new Date().toISOString(),

    // Page Info
    referrer: typeof document !== "undefined" ? document.referrer : null,
    url: typeof window !== "undefined" ? window.location.href : null,

    // Browser Features
    cookieEnabled:
      typeof navigator !== "undefined" ? navigator.cookieEnabled : null,
    onLine: typeof navigator !== "undefined" ? navigator.onLine : null,
  };
}

// Strip HTML tags and truncate text
export const stripeHtmlAndTruncate = (text: string, maxLength: number) => {
  const strippedText = text.replace(/(<([^>]+)>)/gi, "");
  const cleanedText = strippedText.replace(/\s+/g, " ").trim();
  return cleanedText.length > maxLength
    ? cleanedText.substring(0, maxLength) + "..."
    : cleanedText;
};
