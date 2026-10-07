"use client";

import DownloadCardSkeleton from "../DownloadCardSkeleton";
import DownloadCardForSub from "./DownloadCardForSub";

import useInformationSubCats from "../hook/useInformationSubCats";

export default function DownloadSub({
  subId,
  title,
  exampleLink,
}: {
  subId: string;
  title?: string;
  exampleLink?: string[];
}) {
  const { data, isLoading } = useInformationSubCats(subId);

  if (isLoading) return <DownloadCardSkeleton />;

  if (!data || !data.length) return <p>No data available</p>;

  return (
    <DownloadCardForSub title={title} datas={data} exampleLink={exampleLink} />
  );
}
