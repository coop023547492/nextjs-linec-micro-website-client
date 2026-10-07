"use client";

import Image from "next/image";
import Link from "next/link";

import useInformationFeatues from "../downlaod/hook/useInformationFeatues";
import { InformationSubCatProps } from "@/utils/types";
import { COOP_DOMAIN_DOWNLOAD_DOCUMENT_URL } from "@/utils/constants";

export default function DownloadFeature() {
  const { data, isLoading } = useInformationFeatues();

  if (isLoading) {
    return <DownloadFeatureSkeleton />;
  }

  if (!data || data.length === 0) {
    return <p>no data available</p>;
  }

  return (
    <section className="flex flex-col gap-5 w-full">
      <div className="flex justify-between">
        <h5 className="text-Light-grey text-lg font-bold">ดาวน์โหลดเอกสาร</h5>
        <Link
          className="Main-dark-Blue text-lg font-bold hover:text-blue-600 transition-colors duration-200"
          href="/download"
        >
          ดูทั้งหมด→
        </Link>
      </div>
      <div className="flex flex-col gap-5">
        {data.map((item: InformationSubCatProps) => (
          <div
            key={item.info_id}
            className="item flex items-center gap-2.5 group hover:bg-blue-50 rounded-lg transition-all duration-200 hover:shadow-md border border-transparent hover:border-blue-200"
          >
            <Image
              src="/images/download-pdf-streamline.svg"
              alt="download-pdf-streamline"
              width={4}
              height={4}
              className="w-4 h-4 group-hover:scale-110 transition-transform duration-200"
            />
            <Link
              href={`${COOP_DOMAIN_DOWNLOAD_DOCUMENT_URL}/${item.attachment}`}
              className="Main-dark-Blue text-base hover:text-blue-600 hover:underline transition-all duration-200 group-hover:translate-x-1"
              target="_blank"
            >
              {item.info_name}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

const DownloadFeatureSkeleton = () => {
  return (
    <section className="flex flex-col gap-5 w-full">
      <div className="flex justify-between">
        <div className="h-6 w-32 bg-gray-300 rounded animate-pulse"></div>
        <div className="h-6 w-24 bg-gray-300 rounded animate-pulse"></div>
      </div>
      <div className="flex flex-col gap-5">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="item flex gap-2.5 p-2">
            <div className="w-4 h-4 bg-gray-300 rounded animate-pulse"></div>
            <div className="h-5 w-40 bg-gray-300 rounded animate-pulse"></div>
          </div>
        ))}
      </div>
    </section>
  );
};
