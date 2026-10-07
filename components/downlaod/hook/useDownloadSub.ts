import { useQuery } from "@tanstack/react-query";
import { getDownloadSubApi } from "../api";

export default function useDownloadSub(subId: string) {
  const { data, isLoading } = useQuery({
    queryKey: ["download-sub", subId],
    queryFn: () => getDownloadSubApi(subId),
  });
  return { data, isLoading };
}
