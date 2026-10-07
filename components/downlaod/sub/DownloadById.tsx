"use client";

import DownloadCardSkeleton from "../DownloadCardSkeleton";
import DownloadCardForSub from "./DownloadCardForSub";
import useInformationId from "../hook/useInformationId";

export default function DownloadById({
  id,
  title,
}: {
  id: string;
  title?: string;
}) {
  const { data, isLoading } = useInformationId({ id });

  if (isLoading) return <DownloadCardSkeleton count={1} />;

  if (!data) return <p>No data available</p>;

  return <DownloadCardForSub title={title} datas={data} />;
}
