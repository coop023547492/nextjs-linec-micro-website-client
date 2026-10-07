import { getMemberDetail, getStatement } from "@/components/review/api";
import AuditorConfirm from "@/components/review/AuditorConfirm";
import ConfirmDetail from "@/components/review/ConfirmDetail";
import ReviewHeader from "@/components/review/ReviewHeader";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default async function page({ params }: { params: { id: string } }) {
  const { id } = params;

  if (!id) return <p>No Member Id</p>;

  const strMemberId = id.padStart(6, "0");

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["auditor-statement", strMemberId],
    queryFn: () => getStatement({ memberId: strMemberId }),
  });

  await queryClient.prefetchQuery({
    queryKey: ["auditor-memberdetail", strMemberId],
    queryFn: () => getMemberDetail({ memberId: strMemberId }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="space-y-4">
        <ReviewHeader />
        <ConfirmDetail isAuditor={true} memberId={strMemberId} />
        <AuditorConfirm memberId={strMemberId} />
      </div>
    </HydrationBoundary>
  );
}
