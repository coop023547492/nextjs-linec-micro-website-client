import { InformationSubCatProps } from "@/utils/types";
import Image from "next/image";
import pdfIcon from "@/image/landing/Pdf-icon.svg";
import downloadIcon from "@/image/landing/Download-icon.svg";
import { COOP_DOMAIN_DOWNLOAD_DOCUMENT_URL } from "@/utils/constants";
import Link from "next/link";

export default function DownloadCardForSub({
  title,
  datas,
  exampleLink,
}: {
  title?: string;
  datas: InformationSubCatProps[] | InformationSubCatProps;
  exampleLink?: string[];
}) {
  return (
    <div className="px-5 pt-5 pb-2.5  bg-white bg-opacity-40 rounded-[20px] shadow-[3px_12px_18px_0px_rgba(7,48,72,0.05)] outline outline-1 outline-offset-[-1px] outline-white outline-opacity-50 flex flex-col gap-2.5 w-full">
      <div className="title">
        <h3 className="Main-dark-Blue text-xl font-bold">{`ดาวน์โหลดเอกสาร${
          title ?? ""
        }`}</h3>
      </div>
      {Array.isArray(datas) ? (
        datas.map((data, i) => (
          <DownloadCardItem
            key={i}
            name={data.info_name}
            link={data.attachment}
            exampleLink={
              Array.isArray(exampleLink) ? exampleLink[i] : undefined
            }
          />
        ))
      ) : (
        <DownloadCardItem
          name={datas.info_name}
          link={datas.attachment}
          exampleLink={Array.isArray(exampleLink) ? exampleLink[0] : undefined}
        />
      )}
    </div>
  );
}

type ItemProps = {
  name: string;
  link: string;
  exampleLink?: string;
};

const DownloadCardItem = ({ name, link, exampleLink }: ItemProps) => {
  return (
    <div className="content flex items-center py-3.5 border-b border-stone-300 last:border-b-0 gap-2.5">
      <div className="relative w-6 h-6">
        <Image src={pdfIcon} fill alt="pdf" className="object-cover" />
      </div>
      <Link
        href={`${COOP_DOMAIN_DOWNLOAD_DOCUMENT_URL}/${link}`}
        target="_blank"
        className="me-auto text-Dark-grey text-lg transition-colors hover:Main-dark-Blue"
        download
      >
        {name}
      </Link>
      {exampleLink && (
        <Link
          className=" text-red-500 font-semibold text-lg text-center"
          href={exampleLink}
          target="_blank"
        >
          [ดูตัวอย่าง]
        </Link>
      )}
      <div className="relative w-6 h-6">
        <a
          href={`${COOP_DOMAIN_DOWNLOAD_DOCUMENT_URL}/${link}`}
          target="_blank"
          download
        >
          <Image src={downloadIcon} fill alt="pdf" className="object-cover" />
        </a>
      </div>
    </div>
  );
};
