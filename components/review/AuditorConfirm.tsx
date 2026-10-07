"use client";

import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { auditorConfirmStatus } from "./type";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowLeftIcon, CheckIcon, Loader2Icon } from "lucide-react";
import useStatement from "./hook/useStatement";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateConfirmStatement } from "./api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function AuditorConfirm({ memberId }: { memberId: string }) {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { statementData } = useStatement({
    memberId: memberId,
  });

  const form = useForm<z.infer<typeof auditorConfirmStatus>>({
    resolver: zodResolver(auditorConfirmStatus),
    defaultValues: {
      description: statementData?.review_note || "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: ({
      id,
      review_status,
      reviewer_id,
      reviewer_name,
      review_note,
    }: {
      id: string;
      review_status: string;
      reviewer_id: string;
      reviewer_name: string;
      review_note?: string;
    }) =>
      updateConfirmStatement({
        id,
        review_status,
        reviewer_id,
        reviewer_name,
        review_note,
      }),
    onSuccess: (data) => {
      if (!data.success) {
        toast.error(data.message);
        return;
      }
      queryClient.invalidateQueries({
        queryKey: ["auditor-all-statements"],
      });
      queryClient.invalidateQueries({
        queryKey: ["auditor-statement", memberId],
      });
      queryClient.invalidateQueries({
        queryKey: ["stats-statements"],
      });
      toast.success(data.message);
      router.push("/admin/auditor");
    },
    onError: (err) => {
      form.setError("root", {
        message: err.message,
      });
    },
  });

  const onSubmit = async (values: z.infer<typeof auditorConfirmStatus>) => {
    mutate({
      id: statementData.id,
      review_status: "success",
      reviewer_id: "1",
      reviewer_name: "ผู้ตรวจ ทดสอบ",
      review_note: values.description,
    });
  };

  return (
    <Form {...form}>
      <form
        method="POST"
        className="space-y-8 print:hidden"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">
                  บันทึกจากผู้สอบบัญชี
                </FormLabel>
                <FormControl>
                  <Textarea placeholder="พิมพ์บันทึก..." rows={5} {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-around">
          <Button variant="destructive" disabled={isPending} asChild>
            <Link href="/admin/auditor">
              <ArrowLeftIcon /> ย้อนกลับ
            </Link>
          </Button>

          <Button type="submit" disabled={isPending}>
            {isPending ? (
              <Loader2Icon className=" w-4 h-4 animate-spin" />
            ) : (
              <CheckIcon />
            )}
            ตรวจสอบแล้ว
          </Button>
        </div>
      </form>
    </Form>
  );
}
