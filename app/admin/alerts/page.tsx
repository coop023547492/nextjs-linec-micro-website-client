import MainAlert from "@/components/admin/alerts/MainAlert";
import { getAlertLineByDateApi } from "@/components/admin/api";
import { Button } from "@/components/ui/button";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import Link from "next/link";

export default async function page({
  searchParams,
}: {
  searchParams: { date: string };
}) {
  const { date } = searchParams;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["line-alert-date", date],
    queryFn: () => getAlertLineByDateApi({ date }),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className=" flex items-center gap-3 mb-2.5">
        <h3 className="text-xl font-bold">Line แจ้งเตือน</h3>
        {date && (
          <>
            Filtered by <i>&quot;{date}&quot;</i>
          </>
        )}
        <Button className="ms-auto" asChild>
          <Link href="/admin/dashboard">ย้อนกลับ</Link>
        </Button>
      </div>
      {date ? <MainAlert date={date} /> : "กรุณาเลือกวันที่"}
    </HydrationBoundary>
  );
}
