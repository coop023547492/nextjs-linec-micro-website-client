import { useQuery } from "@tanstack/react-query";
import { getPostContentDetail } from "../api";

export function usePostDetail(postId: string) {
  const { data: post, isLoading } = useQuery({
    queryFn: () => getPostContentDetail(postId),
    queryKey: ["post", postId],
  });

  return { post, isLoading };
}
