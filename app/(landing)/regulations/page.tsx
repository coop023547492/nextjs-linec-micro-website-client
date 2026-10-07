import { getRegulations } from "@/components/regulations/api";
import RegulationsMain from "@/components/regulations/RegulationsMain";
import MainTitle from "@/components/ui/MainTitle";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ระเบียบข้อบังคับ",
};

export default async function page() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["regulations"],
    queryFn: getRegulations,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="wrapper space-y-10">
        <MainTitle>ระเบียบข้อบังคับ</MainTitle>
        <RegulationsMain />
      </div>
    </HydrationBoundary>
  );
}
