import { z } from "zod";
import { flexType } from "./constants";

export const typeFlexSchema = z.object({
  type: z
    .string()
    .min(1, "type is required")
    .refine((data) => flexType.includes(data), {
      message: "Invalid type.",
    }),
});

export const userIdSchema = z.object({
  userId: z.string().min(1, "userId is required"),
});

export const lonFlexSchema = z.object({
  loanTitle: z.string().min(1, "loanTitle is required"),
  loanDescription: z.string().min(1, "loanDescription is required"),
  payDate: z.string().min(1, "payDate is required"),
  memberNo: z.string().min(1, "memberNo is required"),
  loanName: z.string().min(1, "loanName is required"),
  loanNumber: z.string().min(1, "loanNumber is required"),
  approvAmount: z.string().min(1, "approvAmount is required"),
  deductAmount: z.string().min(1, "deductAmount is required"),
  netAmount: z.string().min(1, "netAmount is required"),
});

export const depFlexSchema = z.object({
  typeDep: z.string().min(1, "typeDep is required"),
  loanTitle: z.string().min(1, "loanTitle is required"),
  payDate: z.string().min(1, "payDate is required"),
  memberNo: z.string().min(1, "memberNo is required"),
  loanNumber: z.string().min(1, "loanNumber is required"),
  approvAmount: z.string().min(1, "approvAmount is required"),
  netAmount: z.string().min(1, "netAmount is required"),
});

export const inmFlexSchema = z.object({
  payDate: z.string().min(1, "payDate is required"),
  memberNo: z.string().min(1, "memberNo is required"),
  loanDescription: z.string().min(1, "loanDescription is required"),
  loanNumber: z.string().min(1, "loanNumber is required"),
  approvAmount: z.string().min(1, "approvAmount is required"),
});

export const pushMessageSchema = z.object({
  lineId: z.string().min(1, "lineId is required"),
  message: z.string().min(1, "message is required"),
});

export const receiveDocSchema = z.object({
  title: z.string().min(1, "title is required"),
  date: z.string().min(1, "date is required"),
  memberNumber: z.string().min(1, "memberNumber is required"),
  total: z.string().min(1, "total is required"),
  detail: z.string().min(1, "detail is required"),
});

export const considerationSchema = z.object({
  date: z.string().min(1, "date is required"),
  memberNumber: z.string().min(1, "memberNumber is required"),
  total: z.string().min(1, "total is required"),
  approveAmt: z.string().min(1, "approveAmt is required"),
  deductAmt: z.string().min(1, "deductAmt is required"),
});

export const confirmGuaranteeSchema = z.object({
  date: z.string().min(1, "date is required"),
  memberNumber: z.string().min(1, "memberNumber is required"),
  loanTypeName: z.string().min(1, "loanTypeName is required"),
  loanfullName: z.string().min(1, "loanfullName is required"),
  loanMemberNumber: z.string().min(1, "loanMemberNumber is required"),
  approveAmt: z.string().min(1, "approveAmt is required"),
});
