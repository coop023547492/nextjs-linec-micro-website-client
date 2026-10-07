import { getAllPostApi } from "@/components/admin/api";
import { useQuery } from "@tanstack/react-query";

export const useAllPost = (currentPage: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ["posts", currentPage],
    queryFn: () => getAllPostApi(currentPage),
  });

  return { data, isLoading };
};
