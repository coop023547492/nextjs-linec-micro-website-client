import { useMutation } from "@tanstack/react-query";
import { getPeriodApi } from "../api";

type Props = {
  loanType: string;
  requestLoan: number;
  sendPayment: number;
  salary: number;
  deduct: number;
  installments: number;
};

export default function useMutationSendPayment() {
  const { mutate, isPending } = useMutation({
    mutationFn: (values: Props) => getPeriodApi(values),
  });

  return { mutate, isPending };
}
