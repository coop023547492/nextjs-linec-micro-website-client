import { getAlertLineApi } from "@/components/admin/api";
import { useQuery } from "@tanstack/react-query";

export const useStatsAlertLine = ({ days }: { days: string }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["alert-line-count", days],
    queryFn: () => getAlertLineApi({ days }),
  });

  return { data, isLoading };
};
