import { useQuery } from "@tanstack/react-query";
import { getInfomationFeatues } from "../api";

export default function useInformationFeatues() {
  const { data, isLoading } = useQuery({
    queryKey: ["information-features"],
    queryFn: getInfomationFeatues,
  });

  return { data, isLoading };
}
