import { getStatsMembersApi } from "@/components/admin/api";
import { useQuery } from "@tanstack/react-query";

export const useStatsMembers = (connectDays: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["stats-members", connectDays],
    queryFn: () => getStatsMembersApi(connectDays),
  });

  return { data, isLoading };
};
