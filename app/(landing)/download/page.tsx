import MainTitle from "@/components/ui/MainTitle";

import { Metadata } from "next";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getAllInfomations } from "@/components/downlaod/api";
import MainDownload from "@/components/downlaod/main/MainDownload";

export const metadata: Metadata = {
  title: "ดาวน์โหลดเอกสาร",
};

export default async function DownloadPage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["informations"],
    queryFn: getAllInfomations,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="wrapper space-y-10">
        <MainTitle>ดาวน์โหลดเอกสาร</MainTitle>
        <MainDownload />
      </div>
    </HydrationBoundary>
  );
}
