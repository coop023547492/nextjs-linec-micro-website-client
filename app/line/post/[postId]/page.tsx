import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import PostDetail from "@/components/line/PostDetail";
import { getPostContentDetail } from "@/components/line/api";
import { stripeHtmlAndTruncate } from "@/lib/utils";

export async function generateMetadata({
  params,
}: {
  params: { postId: string };
}) {
  const { postId } = params;
  const { data: post } = await getPostContentDetail(postId);
  const imageUrl = process.env.BASE_URL + post?.imageUrl || "/logo.png";
  const shortDescription = stripeHtmlAndTruncate(post?.description || "", 160);
  const imageWidth = 1200;
  const imageHeight = 630;

  return {
    title: `${post?.title}` || "ข่าวสารสหกรณ์",
    description: shortDescription,
    openGraph: {
      title: `${post?.title}` || "ข่าวสารสหกรณ์",
      description: shortDescription,
      url: `${process.env.DOMAIN}/line/post/${post?.id}`,
      type: "article",
      site_name: process.env.DOMAIN,
      images: [
        {
          url: imageUrl,
          alt: post?.title || "ข่าวสารสหกรณ์",
          type: "image/jpeg",
          width: imageWidth,
          height: imageHeight,
        },
      ],
    },
    canonical: `${process.env.DOMAIN}/line/post/${post?.id}`,
  };
}

export default async function PostDetailPage({
  params,
}: {
  params: { postId: string };
}) {
  const queryClient = new QueryClient();
  const { postId } = params;

  await queryClient.prefetchQuery({
    queryKey: ["post", postId],
    queryFn: () => getPostContentDetail(postId),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostDetail postId={postId} />
    </HydrationBoundary>
  );
}
