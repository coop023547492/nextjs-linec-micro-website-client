import { useQuery } from "@tanstack/react-query";
import { getAnnouncementFeatures } from "../api";

export default function useAnnouncementFeatues() {
  const { data, isLoading } = useQuery({
    queryKey: ["announcement-features"],
    queryFn: getAnnouncementFeatures,
  });

  return { data, isLoading };
}
