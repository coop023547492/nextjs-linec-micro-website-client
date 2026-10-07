import { getGalleryById } from "@/components/gallery/api";
import GalleryDetails from "@/components/gallery/GalleryDetails";
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
  params,
}: {
  params: { galleryId: string };
}) {
  const { galleryId } = params;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["gallery", galleryId],
    queryFn: () => getGalleryById(galleryId),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <GalleryDetails galleryId={galleryId} />
    </HydrationBoundary>
  );
}
