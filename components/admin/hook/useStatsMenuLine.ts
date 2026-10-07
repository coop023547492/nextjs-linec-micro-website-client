import { getMenuLineApi } from "@/components/admin/api";
import { useQuery } from "@tanstack/react-query";

export const useStatsMenuLine = ({ days }: { days: string }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["menu-line-count", days],
    queryFn: () => getMenuLineApi({ days }),
  });

  return { data, isLoading };
};
