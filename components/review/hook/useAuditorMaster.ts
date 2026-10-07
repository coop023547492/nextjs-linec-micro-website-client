import { useQuery } from "@tanstack/react-query";
import { getAuditorMasterById } from "../api";

export default function useAuditorMaster({ id }: { id: string }) {
  const { data: auditorMasterData, isLoading: isAuditorMasterLoading } =
    useQuery({
      queryKey: ["auditor-master", id],
      queryFn: () => getAuditorMasterById({ id }),
    });

  return { auditorMasterData, isAuditorMasterLoading };
}
