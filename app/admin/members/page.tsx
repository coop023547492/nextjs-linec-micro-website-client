import { getAllLineMemberApiBom } from "@/components/admin/api";
import ListMembers from "@/components/admin/members/ListMembers";
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
  searchParams: { page: string; query?: string; date?: string };
}) {
  const { page = "1", query, date } = searchParams;
  const queryClient = new QueryClient();
  /*   await queryClient.prefetchQuery({
    queryKey: ["line-members", Number(page), query, date],
    queryFn: () =>
      getAllLineMemberApi({ currentPage: Number(page), query, date }),
  });
 */
  await queryClient.prefetchQuery({
    queryKey: ["line-members", Number(page), query, date],
    queryFn: () =>
      getAllLineMemberApiBom({ currentPage: Number(page), query, date }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className=" flex items-center gap-3 mb-2.5">
        <h3 className="text-xl font-bold">ระบบจัดการสมาชิก</h3>
        {(query || date) && (
          <>
            Filtered by <i>&quot;{query || date}&quot;</i>
            <Link href="/admin/members">
              <Button variant="outline" size="sm">
                Remove Filter
              </Button>
            </Link>
          </>
        )}
      </div>
      <ListMembers page={page} query={query} date={date} />
    </HydrationBoundary>
  );
}
