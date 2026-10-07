import { getCommitteeCategories } from "@/components/committee/api";
import CategoryMenu from "@/components/committee/CategoryMenu";
import PersonnelDetail from "@/components/committee/PersonnelDetail";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "โครงสร้างการบริหารงาน",
};

export default async function page() {
  const catId = "5"; // Default category ID as per the original code
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["committee", catId],
    queryFn: () => getCommitteeCategories(catId),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className=" wrapper space-y-10">
        <h1 className="text-Medium-grey text-3xl font-normal text-center">
          โครงสร้างการบริหารงาน
        </h1>
        <CategoryMenu />
        <h2 className="text-center Main-dark-Blue text-xl font-bold">
          เจ้าหน้าที่สหกรณ์
        </h2>
        <PersonnelDetail catId={catId} />
      </div>
    </HydrationBoundary>
  );
}
