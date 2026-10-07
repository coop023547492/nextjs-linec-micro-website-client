import { getPerformanceAll } from "@/components/performance/api";
import PerformanceMain from "@/components/performance/PerformanceMain";
import MainTitle from "@/components/ui/MainTitle";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ผลการดำเนินงาน",
};

export default async function page() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["performance"],
    queryFn: getPerformanceAll,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="wrapper space-y-10">
        <MainTitle>ผลการดำเนินงาน</MainTitle>
        <PerformanceMain />
      </div>
    </HydrationBoundary>
  );
}
