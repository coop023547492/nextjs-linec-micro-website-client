import { getPostContentDetail } from "@/components/line/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import UpdatePost from "@/components/admin/post/UpdatePost";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default async function page({ params }: { params: { postId: string } }) {
  const { postId } = params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["post", postId],
    queryFn: () => getPostContentDetail(postId),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Card>
        <CardHeader>
          <CardTitle>Edit Id : {postId}</CardTitle>
        </CardHeader>
        <CardContent>
          <UpdatePost postId={postId} />
        </CardContent>
      </Card>
    </HydrationBoundary>
  );
}
