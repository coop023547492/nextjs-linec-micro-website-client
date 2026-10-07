import { useQuery } from "@tanstack/react-query";
import { getStatement } from "../api";

export default function useStatement({ memberId }: { memberId: string }) {
  const { data: statementData, isLoading: isStatementing } = useQuery({
    queryKey: ["auditor-statement", memberId],
    queryFn: () => getStatement({ memberId: memberId }),
  });

  return { statementData, isStatementing };
}
