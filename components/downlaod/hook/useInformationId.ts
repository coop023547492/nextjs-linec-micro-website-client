import { getInfomationById } from "@/components/downlaod/api";
import { useQuery } from "@tanstack/react-query";

export default function useInformationId({ id }: { id: string }) {
  const { data, isLoading } = useQuery({
    queryKey: ["information", id],
    queryFn: () => getInfomationById(id),
  });

  return { data, isLoading };
}
