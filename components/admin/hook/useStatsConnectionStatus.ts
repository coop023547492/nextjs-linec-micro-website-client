import { getStatsConnectionStatusApi } from "@/components/admin/api";
import { useQuery } from "@tanstack/react-query";

export const useStatsConnectionStatus = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["stats-connect-status"],
    queryFn: getStatsConnectionStatusApi,
  });

  return { data, isLoading };
};
