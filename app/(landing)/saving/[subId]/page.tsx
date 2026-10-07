import NewYear05 from "@/components/saving/NewYear05";
import NewYear06 from "@/components/saving/NewYear06";
import NewYear07 from "@/components/saving/NewYear07";
import SpecialSavings from "@/components/saving/SpecialSavings";
import SpecialSavingsCollateral from "@/components/saving/SpecialSavingsCollateral";
import FigmaButton from "@/components/ui/FigmaButton";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default function SubSavingPage({
  params,
}: {
  params: { subId: string };
}) {
  const { subId } = params;
  const queryClient = new QueryClient();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="wrapper custom-sub-page-container">
        {subId === "special-savings" && <SpecialSavings />}
        {subId === "collateral-savings" && <SpecialSavingsCollateral />}
        {subId === "newyear-05-savings" && <NewYear05 />}
        {subId === "newyear-06-savings" && <NewYear06 />}
        {subId === "newyear-07-savings" && <NewYear07 />}
        <FigmaButton className="mx-auto" href="/saving">
          ย้อนกลับ
        </FigmaButton>
      </div>
    </HydrationBoundary>
  );
}
