import { getDownloadApi } from "@/components/downlaod/api";
import { useQuery } from "@tanstack/react-query";

export default function useDownload({ id }: { id: string }) {
  const { data, isLoading } = useQuery({
    queryKey: ["download", id],
    queryFn: () => getDownloadApi(id),
  });

  return { data, isLoading };
}
