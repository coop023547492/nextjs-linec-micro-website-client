import { useQuery } from "@tanstack/react-query";
import { getAllInfomations } from "../api";

export default function useAllInfomations() {
  const { data, isLoading } = useQuery({
    queryKey: ["informations"],
    queryFn: getAllInfomations,
  });

  return { data, isLoading };
}
