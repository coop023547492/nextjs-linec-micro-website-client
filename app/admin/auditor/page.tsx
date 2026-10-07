import { getAllStatements, getStatsStatement } from "@/components/review/api";
import ListMemberConfirm from "@/components/review/ListMemberConfirm";
import ReviewHeader from "@/components/review/ReviewHeader";
import StatsStatements from "@/components/review/StatsStatements";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export const revalidate = 10;

export default async function page({
  searchParams,
}: {
  searchParams: {
    page: string;
    query?: string;
    member_status?: string;
    review_status?: string;
  };
}) {
  const { page, query, member_status, review_status } = searchParams;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: [
      "auditor-all-statements",
      page || "1",
      query,
      member_status,
      review_status,
    ],
    queryFn: () =>
      getAllStatements({
        currentPage: page || "1",
        query,
        member_status,
        review_status,
      }),
  });

  await queryClient.prefetchQuery({
    queryKey: ["stats-statements"],
    queryFn: getStatsStatement,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="space-y-11">
        <ReviewHeader />
        <StatsStatements />
        <ListMemberConfirm
          page={page}
          query={query}
          member_status={member_status}
          review_status={review_status}
        />
      </div>
    </HydrationBoundary>
  );
}
