import { z } from "zod";
import { formatCommaToNumber } from "@/lib/utils";
import { LOANTYPE } from "@/utils/constants";

const loanPermisionSchema = z
  .object({
    loanType: z
      .string()
      .refine((data) => LOANTYPE.includes(data), {
        message: "กรุณาเลือกชนิดเงินกู้",
      }),
    installments: z.coerce
      .number()
      .int()
      .min(1, { message: "กรุณากรอกจำนวนงวด" }),
    requestLoan: z.string().superRefine((val, ctx) => {
      const num = Number(formatCommaToNumber(val));
      if (num <= 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "กรุณากรอกจำนวนขอกู้",
        });
      }
    }),
    sendPayment: z.string().superRefine((val, ctx) => {
      const num = Number(formatCommaToNumber(val));
      if (num <= 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "กรุณากรอกจำนวนส่งชำระงวดละ",
        });
      }
    }),
  })
  .superRefine((data, ctx) => {
    if (data.loanType === "11") {
      if (Number(formatCommaToNumber(data.requestLoan)) > 2500000) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["requestLoan"],
          message: "วงเงินสูงสุดไม่เกิน 2.5 ล้าน",
        });
      }
      if (Number(formatCommaToNumber(data.installments)) > 240) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["installments"],
          message: "ส่งชำระไม่เกิน 240 งวด",
        });
      }
    }
    if (data.loanType === "21") {
      if (Number(formatCommaToNumber(data.requestLoan)) > 200000) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["requestLoan"],
          message: "วงเงินสูงสุดไม่เกิน 2 แสน",
        });
      }
      if (Number(formatCommaToNumber(data.installments)) > 12) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["installments"],
          message: "ส่งชำระไม่เกิน 12 งวด",
        });
      }
    }
  });

export const formSchema = z
  .object({
    contractDate: z.date(),
    salary: z.string().superRefine((val, ctx) => {
      const num = Number(formatCommaToNumber(val));
      if (num <= 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "กรุณากรอกเงินเดือน",
        });
      }
    }),
    deduct: z.string().superRefine((val, ctx) => {
      const num = Number(formatCommaToNumber(val));
      if (num < 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "กรุณากรอกรายการรวมหัก",
        });
      }
    }),
  })
  .and(loanPermisionSchema);

export type FormItemType = z.infer<typeof formSchema>;

export type ListLoanType = {
  id: string;
  name: string;
  limit: string;
  interest: string;
  maxPeriod: string;
  sendPayMent: string;
  nicname: string;
};

export type SearchParamsProps = {
  loanLType?: string;
  loanLrequest?: string;
};
