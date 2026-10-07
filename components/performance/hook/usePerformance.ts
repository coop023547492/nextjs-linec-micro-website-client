import { useQuery } from "@tanstack/react-query";
import { getPerformanceAll } from "../api";

export default function usePerformance() {
  const { data, isLoading } = useQuery({
    queryKey: ["performance"],
    queryFn: getPerformanceAll,
  });

  return { data, isLoading };
}
