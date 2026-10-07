import { MEMBER_STATUS } from "@/utils/constants";
import { z } from "zod";

export const confirmMemberStatusSchema = z
  .object({
    description: z.string().optional(),
    memberStatus: z.string().min(1, "status is required"),
  })
  .refine(
    (data) => MEMBER_STATUS.some((status) => status.key === data.memberStatus),
    {
      path: ["memberStatus"],
      message: "Invalid status method",
    }
  );

export const auditorConfirmStatus = z.object({
  description: z.string().optional(),
});
