import { getConnectLineApi } from "@/components/admin/api";
import { useQuery } from "@tanstack/react-query";

export const useStatsConnect = (DayNum: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["connect-line-count", DayNum],
    queryFn: () => getConnectLineApi(DayNum),
  });

  return { data, isLoading };
};
