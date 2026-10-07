import { useQuery } from "@tanstack/react-query";
import { getListLoanApi } from "../api";

export default function useListLoan() {
  const { data, isLoading } = useQuery({
    queryKey: ["loan-list-type"],
    queryFn: getListLoanApi,
  });

  return { data, isLoading };
}
