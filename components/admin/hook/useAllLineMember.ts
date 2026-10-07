import { getAllLineMemberApi } from "@/components/admin/api";
import { useQuery } from "@tanstack/react-query";

export const useAllLineMember = ({
  currentPage,
  query,
  date,
}: {
  currentPage: number;
  query: string;
  date: string;
}) => {
  const { data, isLoading } = useQuery({
    queryKey: ["line-members", currentPage, query, date],
    queryFn: () => getAllLineMemberApi({ currentPage, query, date }),
  });

  return { data, isLoading };
};
