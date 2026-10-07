import { useMutation } from "@tanstack/react-query";
import { getSalaryApi } from "../api";

type Props = {
  loanType: string;
  requestLoan: number;
  installments: number;
  salary: number;
  deduct: number;
  payment: number;
};

export default function useMutationSalary() {
  const { mutate, isPending } = useMutation({
    mutationFn: (values: Props) => getSalaryApi(values),
  });

  return { mutate, isPending };
}
