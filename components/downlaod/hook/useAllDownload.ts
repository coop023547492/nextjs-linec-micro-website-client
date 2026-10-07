import { useQuery } from "@tanstack/react-query";
import { getAllDownlaodApi } from "../api";

export default function useAllDownload() {
  const { data, isLoading } = useQuery({
    queryKey: ["downloads"],
    queryFn: getAllDownlaodApi,
  });

  return { data, isLoading };
}
