"use client";

import useAllInfomations from "../hook/useAllInfomations";
import DownloadCard from "./DownloadCard";

export default function MainDownload() {
  const { data } = useAllInfomations();

  return <DownloadCard informations={data} />;
}
