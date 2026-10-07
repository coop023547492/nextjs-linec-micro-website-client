import { useMutation } from "@tanstack/react-query";
import { getTableCalPayApi } from "../api";
import { FormItemType } from "../type";

export default function useMutationTableCalPay() {
  const { mutate, isPending } = useMutation({
    mutationFn: (values: FormItemType) => getTableCalPayApi(values),
  });

  return { mutate, isPending };
}
