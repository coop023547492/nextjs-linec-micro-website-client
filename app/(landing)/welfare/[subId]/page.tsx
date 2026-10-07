import FigmaButton from "@/components/ui/FigmaButton";
import FireWelfare from "@/components/welfare/FireWelfare";
import PassedAwayWelfare from "@/components/welfare/PassedAwayWelfare";
import ScholarshipWelfare from "@/components/welfare/ScholarshipWelfare";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default function SubWelfarePage({
  params,
}: {
  params: { subId: string };
}) {
  const { subId } = params;
  const queryClient = new QueryClient();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="wrapper custom-sub-page-container">
        {subId === "passedaway-welfare" && <PassedAwayWelfare />}
        {subId === "fire-welfare" && <FireWelfare />}
        {subId === "scholarship-welfare" && <ScholarshipWelfare />}
        <FigmaButton className="mx-auto" href="/welfare">
          ย้อนกลับ
        </FigmaButton>
      </div>
    </HydrationBoundary>
  );
}
