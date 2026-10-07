import { useQuery } from "@tanstack/react-query";
import { getAnnouncements } from "../api";

export default function useAnnouncements({ page }: { page: string }) {
  const { data, isLoading } = useQuery({
    queryKey: ["announcements", page],
    queryFn: () => getAnnouncements({ page }),
  });

  return { data, isLoading };
}
