import { useQuery } from "@tanstack/react-query";
import { getRegulations } from "../api";

export default function useRegulations() {
  const { data, isLoading } = useQuery({
    queryKey: ["regulations"],
    queryFn: getRegulations,
  });

  return { data, isLoading };
}
