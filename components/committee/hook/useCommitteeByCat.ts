import { useQuery } from "@tanstack/react-query";
import { getCommitteeCategories } from "../api";

export default function useCommitteeByCat(catId: string) {
  const { data, isLoading } = useQuery({
    queryKey: ["committee", catId],
    queryFn: () => getCommitteeCategories(catId),
  });

  return { data, isLoading };
}
