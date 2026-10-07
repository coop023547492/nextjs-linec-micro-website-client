import { getAllPostApi } from "@/components/admin/api";
import PostCard from "@/components/admin/post/post-card";
import { Button } from "@/components/ui/button";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import Link from "next/link";

export default async function page({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const { page = "1" } = searchParams;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["posts", Number(page)],
    queryFn: () => getAllPostApi(Number(page)),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="flex flex-col gap-10">
        <div>
          <Button asChild>
            <Link href="/admin/post/add-post">Add Post</Link>
          </Button>
        </div>
        <PostCard page={page} />
      </div>
    </HydrationBoundary>
  );
}
