import { useQuery } from "@tanstack/react-query";
import { getPerformanceData } from "../api";

export default function usePerformanceData(category?: string) {
  const { data, isLoading } = useQuery({
    queryKey: ["performance-data", category],
    queryFn: () => getPerformanceData(category),
  });

  return { data, isLoading };
}
