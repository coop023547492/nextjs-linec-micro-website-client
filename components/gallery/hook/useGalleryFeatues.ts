import { useQuery } from "@tanstack/react-query";
import { getGalleryFeatues } from "../api";

export default function useGalleryFeatues() {
  const { data, isLoading } = useQuery({
    queryKey: ["gallery-features"],
    queryFn: getGalleryFeatues,
  });

  return { data, isLoading };
}
