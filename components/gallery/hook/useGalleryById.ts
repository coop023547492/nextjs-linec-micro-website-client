import { useQuery } from "@tanstack/react-query";
import { getGalleryById } from "../api";

export default function useGalleryById(galleryId: string) {
  const { data, isLoading } = useQuery({
    queryKey: ["gallery", galleryId],
    queryFn: () => getGalleryById(galleryId),
  });

  return { data, isLoading };
}
