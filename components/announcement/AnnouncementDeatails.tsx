"use client";

import { AnnouncementProps } from "@/utils/types";
import useAnnouncementById from "./hook/useAnnouncementById";
import Image from "next/image";
import Link from "next/link";
import { COOP_DOMAIN_ANNOUNCEMENT_URL } from "@/utils/constants";
import { formatThaiDate } from "@/lib/utils";

export default function AnnouncementDeatails({ id }: { id: string }) {
  const { data }: { data: AnnouncementProps } = useAnnouncementById(id);

  if (!data) {
    return <div className="flex justify-center">no data</div>;
  }

  // แทรก https://coopmsds.com/ ระหว่าง src=" กับ uploadfiles/
  const processedDetail =
    data.detail && data.detail.includes("<iframe")
      ? data.detail.replace(
          /src="uploadfiles\//g,
          'src="https://coopmsds.com/uploadfiles/'
        )
      : data.detail.startsWith("<img")
      ? data.detail.replace(
          /src="uploadfiles\//g,
          'src="https://coopmsds.com/uploadfiles/'
        )
      : data.detail;

  return (
    data && (
      <div className="wrapper flex flex-col items-center gap-10">
        <div className="header w-full flex flex-col gap-2.5 border-b border-stone-300 pb-5">
          <h1 className="text-Dark-grey text-3xl font-bold text-center">
            {data.name}
          </h1>
          <p className="text-center text-stone-500 text-base">
            {formatThaiDate(data.postdate)}
          </p>
        </div>
        <div
          className="w-full text-zinc-800 text-lg flex-1 max-w-3xl"
          dangerouslySetInnerHTML={{ __html: processedDetail }}
        />
        <div className="max-w-3xl p-5 bg-gradient-to-b from-sky-500 to-blue-600 rounded-[10px] w-full flex flex-col gap-2.5">
          <h4 className="text-white text-xl font-bold">ดาวน์โหลดไฟล์</h4>
          <div className=" flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <Image
                src="/images/announcement-pdf.svg"
                alt="icon pdf"
                height={100}
                width={100}
                className="w-6 h-6"
              />
              <Link
                href={`${COOP_DOMAIN_ANNOUNCEMENT_URL}/${data.attachment}`}
                target="_blank"
                className="text-white text-lg hover:underline"
              >
                {data.attachment}
              </Link>
            </div>
            <Link
              href={`${COOP_DOMAIN_ANNOUNCEMENT_URL}/${data.attachment}`}
              target="_blank"
            >
              <Image
                src="/images/announcement-download.svg"
                alt="icon download"
                height={100}
                width={100}
                className="w-6 h-6"
              />
            </Link>
          </div>
        </div>
      </div>
    )
  );
}
