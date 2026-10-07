import { useQuery } from "@tanstack/react-query";
import { getInfomationBySubCat } from "../api";

export default function useInformationSubCats(subId: string) {
  const { data, isLoading } = useQuery({
    queryKey: ["information-sub-cat", subId],
    queryFn: () => getInfomationBySubCat(subId),
  });
  return { data, isLoading };
}
