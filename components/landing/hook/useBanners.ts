import { useQuery } from "@tanstack/react-query";
import { getBanners } from "../api";

export default function useBanners() {
  const { data, isLoading } = useQuery({
    queryKey: ["banners"],
    queryFn: getBanners,
  });

  return { data, isLoading };
}
