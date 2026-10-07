"use client";

import { useForm } from "react-hook-form";
import { confirmMemberStatusSchema } from "./type";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { MEMBER_STATUS } from "@/utils/constants";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { CheckIcon, LoaderIcon } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createConfirmStatement } from "./api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { clientInfoForDB } from "@/lib/utils";

export default function MemberConfirm({
  isAuditor,
  memberId,
  memberFullname,
  memberUnit,
  statement,
}: {
  mStatus?: string;
  isAuditor?: boolean;
  memberId: string;
  memberFullname: string;
  memberUnit: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  statement?: any;
}) {
  const queryClient = useQueryClient();
  const router = useRouter();

  const form = useForm<z.infer<typeof confirmMemberStatusSchema>>({
    resolver: zodResolver(confirmMemberStatusSchema),
    defaultValues: {
      memberStatus: statement?.member_status || "correct",
      description: statement?.member_note || "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: ({
      member_number,
      member_status,
      member_note,
      member_fullname,
      member_unit,
      clientInfo,
    }: {
      member_number: string;
      member_status: string;
      member_note?: string;
      member_fullname: string;
      member_unit: string;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      clientInfo: any;
    }) =>
      createConfirmStatement({
        member_number,
        member_status,
        member_note,
        member_fullname,
        member_unit,
        clientInfo,
      }),
    onSuccess: (data) => {
      if (!data.success) {
        toast.error(data.message);
        return;
      }
      queryClient.invalidateQueries({
        queryKey: ["auditor-all-statements", "1"],
      });
      queryClient.invalidateQueries({
        queryKey: ["auditor-statement", memberId],
      });
      toast.success(data.message);
      router.push("/review/thanks");
    },
    onError: (err) => {
      form.setError("root", {
        message: err.message,
      });
    },
  });

  const onSubmit = async (
    values: z.infer<typeof confirmMemberStatusSchema>
  ) => {
    const clientInfo = clientInfoForDB();

    mutate({
      member_number: memberId,
      member_status: values.memberStatus,
      member_note: values.description,
      member_fullname: memberFullname,
      member_unit: memberUnit,
      clientInfo,
    });
  };

  const memberStatus = form.watch("memberStatus");

  const isAlradySubmit = statement?.member_status ? true : false;

  return (
    <Form {...form}>
      <form
        method="POST"
        className="space-y-8"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="memberStatus"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    className="flex flex-col gap-5 sm:flex-row sm:gap-10"
                  >
                    {MEMBER_STATUS.map((status) => (
                      <FormItem
                        key={status.key}
                        className="flex items-center space-x-3 space-y-0"
                      >
                        <FormControl>
                          <RadioGroupItem
                            value={status.key}
                            checked={field.value === status.key}
                            disabled={isAlradySubmit}
                          />
                        </FormControl>
                        <FormLabel className="text-[#3a67e5] font-bold text-base">
                          {status.name}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {memberStatus === "incorrect" && (
          <div>
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      readOnly={isAlradySubmit}
                      placeholder="พิมพ์..."
                      rows={6}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        )}
        {!!form.formState.errors.root?.message && (
          <FormMessage>{form.formState.errors.root.message}</FormMessage>
        )}

        {!isAuditor && !isAlradySubmit && (
          <div className="flex justify-center gap-2">
            <Button
              disabled={isPending}
              className="w-full lg:w-max px-5 py-2.5 bg-gradient-to-r from-[#3a67e5] to-[#a4daff] rounded-[100px] flex justify-center items-center"
              type="submit"
            >
              {isPending ? (
                <LoaderIcon className="w-4 h-4 animate-spin" />
              ) : (
                <CheckIcon />
              )}{" "}
              ยืนยัน
            </Button>
          </div>
        )}
      </form>
    </Form>
  );
}
