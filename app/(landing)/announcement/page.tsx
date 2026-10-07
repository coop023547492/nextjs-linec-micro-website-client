import AnnouncementMain from "@/components/announcement/AnnouncementMain";
import { getAnnouncements } from "@/components/announcement/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ข่าวสารสหกรณ์",
};

export default async function page({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const page = searchParams?.page || "1";

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["announcements", page],
    queryFn: () => getAnnouncements({ page }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="wrapper space-y-10">
        <h1 className="text-Medium-grey text-center text-3xl font-normal ">
          ข่าวสารสหกรณ์
        </h1>
        <AnnouncementMain page={page} />
      </div>
    </HydrationBoundary>
  );
}
