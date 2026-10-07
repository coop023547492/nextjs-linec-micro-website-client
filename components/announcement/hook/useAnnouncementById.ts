import { useQuery } from "@tanstack/react-query";
import { getAnnouncementById } from "../api";

export default function useAnnouncementById(id: string) {
  const { data, isLoading } = useQuery({
    queryKey: ["announcement", id],
    queryFn: () => getAnnouncementById(id),
  });

  return { data, isLoading };
}
