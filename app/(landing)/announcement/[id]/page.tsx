import AnnouncementDeatails from "@/components/announcement/AnnouncementDeatails";
import AnnouncementRelevant from "@/components/announcement/AnnouncementRelevant";
import {
  getAnnouncementById,
  getAnnouncementFeatures,
} from "@/components/announcement/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ข่าวสารสหกรณ์",
};

export default async function page({ params }: { params: { id: string } }) {
  const { id } = params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["announcement", id],
    queryFn: () => getAnnouncementById(id),
  });

  await queryClient.prefetchQuery({
    queryKey: ["announcement-features"],
    queryFn: getAnnouncementFeatures,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <AnnouncementDeatails id={id} />
      <AnnouncementRelevant />
    </HydrationBoundary>
  );
}
