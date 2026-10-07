"use client";

import Image from "next/image";
import Link from "next/link";
import pdfIcon from "@/image/landing/Pdf-icon.svg";
import downloadIcon from "@/image/landing/Download-icon.svg";
import { COOP_DOMAIN_PERFORMANCE_URL } from "@/utils/constants";
import { RegulationProps } from "@/utils/types";
import usePerformance from "./hook/usePerformance";

export default function PerformanceMain() {
  const { data } = usePerformance();

  if (!data || data.length === 0) {
    return <div>No regulations available</div>;
  }
  return (
    <div className="group px-5 pt-5 pb-2.5 bg-white bg-opacity-40 rounded-[20px] shadow-[3px_12px_18px_0px_rgba(7,48,72,0.05)] outline outline-1 outline-offset-[-1px] outline-white outline-opacity-50 flex flex-col gap-2.5 w-full transition-all duration-300 hover:bg-opacity-60 hover:shadow-[3px_12px_24px_0px_rgba(7,48,72,0.10)] hover:outline-blue-200 hover:outline-opacity-70 hover:-translate-y-1 transform">
      {data.map((regulation: RegulationProps) => (
        <DownloadCardItem
          key={regulation.id}
          name={regulation.name}
          link={regulation.attachment}
        />
      ))}
    </div>
  );
}

type ItemProps = {
  name: string;
  link: string;
};

const DownloadCardItem = ({ name, link }: ItemProps) => {
  return (
    <div className="group/item content flex items-center py-3.5 border-b border-stone-300 gap-2.5 last:border-b-0 transition-all duration-300 hover:bg-blue-50 hover:bg-opacity-50 hover:border-blue-300 hover:px-4 hover:py-4 hover:rounded-lg hover:shadow-sm transform">
      <div className="relative w-6 h-6 transition-all duration-300 group-hover/item:scale-110">
        <Image
          src={pdfIcon}
          fill
          alt="pdf"
          className="object-cover transition-all duration-300 group-hover/item:brightness-110"
        />
      </div>
      <div className="text-Dark-grey text-lg me-auto transition-all duration-300 group-hover/item:text-blue-600 group-hover/item:font-medium">
        <Link
          href={`${COOP_DOMAIN_PERFORMANCE_URL}/${link}`}
          target="_blank"
          download
          className="transition-all duration-300 hover:underline"
        >
          {name}
        </Link>
      </div>
      <div className="relative w-6 h-6 transition-all duration-300 group-hover/item:scale-110 group-hover/item:animate-bounce">
        <Link
          href={`${COOP_DOMAIN_PERFORMANCE_URL}/${link}`}
          target="_blank"
          download
        >
          <Image
            src={downloadIcon}
            fill
            alt="download"
            className="object-cover transition-all duration-300 group-hover/item:brightness-110"
          />
        </Link>
      </div>

      {/* Hover indicator */}
      <div className="absolute right-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full opacity-0 scale-0 transition-all duration-300 group-hover/item:opacity-100 group-hover/item:scale-100"></div>
    </div>
  );
};
