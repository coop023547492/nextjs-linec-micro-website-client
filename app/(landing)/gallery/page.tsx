import { getGallerys } from "@/components/gallery/api";
import GalleryMain from "@/components/gallery/GalleryMain";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ภาพข่าวสหกรณ์",
};

export default async function page({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const page = searchParams.page || "1"; // Default to page 1 if not provided
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["gallerys", page],
    queryFn: () => getGallerys({ page }),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="wrapper space-y-10 ">
        <h1 className="text-Medium-grey text-center text-3xl font-normal ">
          ภาพข่าวสหกรณ์
        </h1>
        <GalleryMain page={page} />
      </div>
    </HydrationBoundary>
  );
}
