import { useMutation } from "@tanstack/react-query";
import { getPaymentApi } from "../api";

type Props = {
  loanType: string;
  requestLoan: number;
  installments: number;
  deduct: number;
  salary: number;
};

export default function useMutationInstallments() {
  const { mutate, isPending } = useMutation({
    mutationFn: (values: Props) => getPaymentApi(values),
  });

  return { mutate, isPending };
}
