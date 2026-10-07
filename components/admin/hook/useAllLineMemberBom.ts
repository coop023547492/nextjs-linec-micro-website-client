import { getAllLineMemberApiBom } from "@/components/admin/api";
import { useQuery } from "@tanstack/react-query";

export const useAllLineMemberBom = ({
  currentPage,
  query,
  date,
}: {
  currentPage: number;
  query?: string;
  date?: string;
}) => {
  const { data, isLoading } = useQuery({
    queryKey: ["line-members", currentPage, query, date],
    queryFn: () => getAllLineMemberApiBom({ currentPage, query, date }),
  });

  return { data, isLoading };
};
