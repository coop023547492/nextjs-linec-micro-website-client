import { useQuery } from "@tanstack/react-query";
import { getGallerys } from "../api";

export default function useGallerys({ page }: { page: string }) {
  const { data, isLoading } = useQuery({
    queryKey: ["gallerys", page],
    queryFn: () => getGallerys({ page }),
  });

  return { data, isLoading };
}
