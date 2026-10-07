"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { Dispatch, SetStateAction } from "react";
import {
  formatCommaToNumber,
  formatNumberWithComma,
  formatThaiDateToDatePicker,
} from "@/lib/utils";
import { formSchema, ListLoanType, SearchParamsProps } from "./type";
import useListLoan from "./hook/useListLoan";
/* import useMutationInstallments from "./hook/useMutationInstallments";
import useMutationSendPayment from "./hook/useMutationSendPayment";
import useMutationRequestLoan from "./hook/useMutationRequestLoan"; */
import useMutationTableCalPay from "./hook/useMutationTableCalPay";
import useMutationSalary from "./hook/useMutationSalary";

export default function DebtPaymentForm({
  setDatas,
  params,
}: {
  setDatas: Dispatch<SetStateAction<never[]>>;
  params?: SearchParamsProps;
}) {
  const { data } = useListLoan();
  const { mutate: tableCalMutate, isPending: tableCalPending } =
    useMutationTableCalPay();
  /*   const { mutate: installmentsMutate } = useMutationInstallments();
  const { mutate: sendPaymentMutate } = useMutationSendPayment();
  const { mutate: requestLoanMutate } = useMutationRequestLoan(); */
  const { mutate: requestSalaryMutate } = useMutationSalary();

  const loanLType = params?.loanLType;
  const loanLrequest = params?.loanLrequest;

  let loanLInstallments;
  let loanLSendPayment;

  if (loanLType && loanLrequest) {
    const loanData: ListLoanType = data?.data.find(
      (item: ListLoanType) => item.id === loanLType
    );

    loanLInstallments = Number(loanData.maxPeriod);
    loanLSendPayment = formatNumberWithComma(
      Math.ceil(
        Number(formatCommaToNumber(loanLrequest)) / loanLInstallments / 100
      ) * 100
    );
  }

  /////////////////////////////////// use form ////////////////////////////////////////////////////

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      loanType: loanLType || "21",
      requestLoan: loanLrequest || "200,000",
      installments: loanLInstallments || 12,
      sendPayment: loanLSendPayment || "16,700",
      contractDate: new Date(),
      salary: "0",
      deduct: "0",
    },
  });

  //////////////////////////// Event ////////////////////////////////////////////////////////

  async function onSubmit(values: z.infer<typeof formSchema>) {
    requestSalaryMutate(
      {
        loanType: values.loanType,
        requestLoan: Number(formatCommaToNumber(values.requestLoan)),
        installments: values.installments,
        salary: Number(formatCommaToNumber(values.salary)),
        deduct: Number(formatCommaToNumber(values.deduct)),
        payment: Number(formatCommaToNumber(values.sendPayment)),
      },
      {
        onSuccess: (res) => {
          form.setValue("requestLoan", res.data?.loanReqAmt);
          form.setValue("installments", res.data?.period);
          form.setValue("sendPayment", res.data?.payment);
          form.setValue("salary", res.data?.salaryAmt);
          form.setValue("deduct", form.getValues("deduct"));

          if (res.data?.warning) {
            form.setError("root", {
              message: res.data.warning,
            });
            return;
          }

          tableCalMutate(
            {
              loanType: values.loanType,
              requestLoan: formatCommaToNumber(values.requestLoan),
              installments: values.installments,
              sendPayment: formatCommaToNumber(values.sendPayment),
              contractDate: values.contractDate,
              salary: values.salary,
              deduct: values.deduct,
            },
            {
              onSuccess: (res) => {
                setDatas(res.data);
              },
              onError: (err) => {
                form.setError("root", {
                  message: err.message,
                });
              },
            }
          );
        },
        onError: (err) => {
          form.setError("root", {
            message: err.message,
          });
        },
      }
    );

    /*    tableCalMutate(
      {
        loanType: values.loanType,
        requestLoan: formatCommaToNumber(values.requestLoan),
        installments: values.installments,
        sendPayment: formatCommaToNumber(values.sendPayment),
        contractDate: values.contractDate,
        salary: values.salary,
        deduct: values.deduct,
      },
      {
        onSuccess: (res) => {
          setDatas(res.data);
        },
        onError: (err) => {
          form.setError("root", {
            message: err.message,
          });
        },
      }
    ); */
  }

  const handleSelectLoanTypeChange = (value: string) => {
    form.setValue("loanType", value);
    const selectedLoanType = data?.data.find(
      (item: ListLoanType) => item.id === value
    );
    form.setValue("requestLoan", selectedLoanType?.limit || "0");
    form.setValue("installments", Number(selectedLoanType?.maxPeriod) || 0);
    form.setValue("sendPayment", selectedLoanType?.sendPayMent || "0");
  };

  const handleInstallmentsChange = async () => {
    /*     const installments = Number(form.getValues("installments"));
    const requestLoan = Number(
      formatCommaToNumber(form.getValues("requestLoan"))
    );
    const loanType = form.getValues("loanType");

    const deduct = Number(formatCommaToNumber(form.getValues("deduct")));
    const salary = Number(formatCommaToNumber(form.getValues("salary")));

    installmentsMutate(
      { loanType, requestLoan, installments, deduct, salary },
      {
        onSuccess: (res) => {
          form.setValue("installments", res.data?.period);
          form.setValue("sendPayment", res.data?.payment);
          form.setValue("salary", res.data?.salaryAmt);
          form.setValue("requestLoan", res.data?.loanReqAmt);
        },
        onError: (err) => {
          form.setError("installments", {
            message: err.message,
          });
        },
      }
    ); */
  };

  const handleSendPaymentChange = async () => {
    const sendPayment = Number(
      formatCommaToNumber(form.getValues("sendPayment"))
    );

    form.setValue("sendPayment", formatNumberWithComma(sendPayment));
    /* const requestLoan = Number(
      formatCommaToNumber(form.getValues("requestLoan"))
    );
    const loanType = form.getValues("loanType");
    const salary = Number(formatCommaToNumber(form.getValues("salary")));
    const deduct = Number(formatCommaToNumber(form.getValues("deduct")));
    const installments = Number(
      formatCommaToNumber(form.getValues("installments"))
    );

    sendPaymentMutate(
      { loanType, requestLoan, sendPayment, salary, deduct, installments },
      {
        onSuccess: (res) => {
          form.setValue("installments", res.data?.period);
          form.setValue("sendPayment", res.data?.payment);
          form.setValue("salary", res.data?.salaryAmt);
          form.setValue("requestLoan", res.data.loanReqAmt);
        },
        onError: (err) => {
          form.setError("sendPayment", {
            message: err.message,
          });
        },
      }
    ); */
  };

  const handleRequestLoanChange = async () => {
    const requestLoan = Number(
      formatCommaToNumber(form.getValues("requestLoan"))
    );

    form.setValue("requestLoan", formatNumberWithComma(requestLoan));

    /*     const installments = Number(form.getValues("installments"));
    const loanType = form.getValues("loanType");

    const salary = Number(formatCommaToNumber(form.getValues("salary")));
    const deduct = Number(formatCommaToNumber(form.getValues("deduct")));

    requestLoanMutate(
      { loanType, requestLoan, installments, salary, deduct },
      {
        onSuccess: (res) => {
          form.setValue("requestLoan", res.data?.loanReqAmt);
          form.setValue("installments", res.data?.period);
          form.setValue("sendPayment", res.data?.payment);
          form.setValue("salary", res.data?.salaryAmt);
        },
        onError: (err) => {
          form.setError("requestLoan", {
            message: err.message,
          });
        },
      }
    );
 */
  };

  const handleSalaryChange = async () => {
    const salary = Number(formatCommaToNumber(form.getValues("salary")));

    form.setValue("salary", formatNumberWithComma(salary));

    /*     const deduct = Number(formatCommaToNumber(form.getValues("deduct")));

    const requestLoan = Number(
      formatCommaToNumber(form.getValues("requestLoan"))
    );
    const installments = Number(form.getValues("installments"));
    const loanType = form.getValues("loanType");

    requestSalaryMutate(
      { loanType, requestLoan, installments, salary, deduct },
      {
        onSuccess: (res) => {
          form.setValue("requestLoan", res.data?.loanReqAmt);
          form.setValue("installments", res.data?.period);
          form.setValue("sendPayment", res.data?.payment);
          form.setValue("salary", res.data?.salaryAmt);
          form.setValue(
            "deduct",
            formatNumberWithComma(form.getValues("deduct"))
          );
        },
        onError: (err) => {
          form.setError("requestLoan", {
            message: err.message,
          });
        },
      }
    );
 */
  };

  const selectFromDate = new Date();
  selectFromDate.setFullYear(selectFromDate.getFullYear() - 2);

  const selectToDate = new Date();
  selectToDate.setFullYear(selectToDate.getFullYear() + 2);

  ////////////////////////////////////////////////////////////////////////////////////////

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-2.5"
      >
        <FormField
          control={form.control}
          name="loanType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="custom-form-label">ประเภทเงินกู้</FormLabel>
              <Select
                onValueChange={(value) => handleSelectLoanTypeChange(value)}
                value={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="--เลือกประเภทเงินกู้--" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {data?.data?.map((item: ListLoanType) => (
                    <SelectItem key={item.id} value={item.id}>
                      {`${item.nicname}`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="requestLoan"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="custom-form-label">ขอกู้</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  required
                  onBlur={handleRequestLoanChange}
                  onFocus={(v) =>
                    form.setValue(
                      "requestLoan",
                      formatCommaToNumber(v.target.value)
                    )
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="salary"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="custom-form-label">เงินเดือน</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  required
                  onBlur={handleSalaryChange}
                  onFocus={(v) =>
                    form.setValue("salary", formatCommaToNumber(v.target.value))
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="deduct"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="custom-form-label">
                รวมหัก (ภาษี, กบข., หนี้ธนาคาร, หนี้หสหกรณ์, อื่นๆ)
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  required
                  onBlur={(v) =>
                    form.setValue(
                      "deduct",
                      formatNumberWithComma(v.target.value)
                    )
                  }
                  onFocus={(v) =>
                    form.setValue("deduct", formatCommaToNumber(v.target.value))
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="installments"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="custom-form-label">จำนวนงวด</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  min={0}
                  required
                  onBlur={handleInstallmentsChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="sendPayment"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="custom-form-label">ส่งชำระงวดละ</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  required
                  onBlur={handleSendPaymentChange}
                  onFocus={(v) =>
                    form.setValue(
                      "sendPayment",
                      formatCommaToNumber(v.target.value)
                    )
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contractDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="custom-form-label">
                วันที่เริ่มต้นสัญญา
              </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl className="w-full">
                    <Button
                      variant="outline"
                      className="normal-case flex justify-between pr-1"
                    >
                      {!!field.value ? (
                        formatThaiDateToDatePicker(field.value)
                      ) : (
                        <span>Pick a Date</span>
                      )}
                      <CalendarIcon />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-auto p-0">
                  <Calendar
                    mode="single"
                    defaultMonth={field.value}
                    selected={field.value}
                    onSelect={field.onChange}
                    fixedWeeks
                    weekStartsOn={1}
                    fromDate={selectFromDate}
                    toDate={selectToDate}
                    captionLayout="dropdown-buttons"
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        {!!form.formState.errors.root?.message && (
          <FormMessage>{form.formState.errors.root.message}</FormMessage>
        )}
        <Button
          className="bg-gradient-to-r from-[#3A68E5] to-[#A4DAFF] rounded-lg text-white text-lg font-bold mt-2.5"
          type="submit"
        >
          {tableCalPending ? "กำลังคำนวณ..." : "คำนวณ"}
        </Button>
      </form>
    </Form>
  );
}
