import { useMutation } from "@tanstack/react-query";
import { getLoanReqApi } from "../api";

type Props = {
  loanType: string;
  requestLoan: number;
  installments: number;
  salary: number;
  deduct: number;
};

export default function useMutationRequestLoan() {
  const { mutate, isPending } = useMutation({
    mutationFn: (values: Props) => getLoanReqApi(values),
  });

  return { mutate, isPending };
}
