import { getCommitteeCategories } from "@/components/committee/api";
import CategoryDetail from "@/components/committee/CategoryDetail";
import CategoryMenu from "@/components/committee/CategoryMenu";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "โครงสร้างการบริหารงาน",
};

export default async function page({ params }: { params: { catId: string } }) {
  const { catId } = params;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["committee", catId],
    queryFn: () => getCommitteeCategories(catId),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="wrapper space-y-10">
        <h1 className="text-Medium-grey text-3xl font-normal text-center">
          โครงสร้างการบริหารงาน
        </h1>
        <CategoryMenu />
        <CategoryDetail catId={catId} />
      </div>
    </HydrationBoundary>
  );
}
