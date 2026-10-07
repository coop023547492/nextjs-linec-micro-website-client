"use client";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { MEMBER_STATUS } from "@/utils/constants";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { confirmMemberStatusSchema } from "@/components/review/type";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function MemberConfirmTest() {
  const router = useRouter();

  const form = useForm<z.infer<typeof confirmMemberStatusSchema>>({
    resolver: zodResolver(confirmMemberStatusSchema),
    defaultValues: {
      memberStatus: "correct",
      description: "",
    },
  });

  const onSubmit = async (
    values: z.infer<typeof confirmMemberStatusSchema>
  ) => {
    console.log(values);

    toast.success("ทดสอบการส่งข้อมูลสำเร็จ");
    router.push("/review/mock-up/thank-test");
  };

  const memberStatus = form.watch("memberStatus");

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
                    <Textarea placeholder="พิมพ์..." rows={6} {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        )}
        {!!form.formState.errors.root?.message && (
          <FormMessage>{form.formState.errors.root.message}</FormMessage>
        )}

        <div className="flex justify-center gap-2">
          <Button
            className="w-full lg:w-max px-5 py-2.5 bg-gradient-to-r from-[#3a67e5] to-[#a4daff] rounded-[100px] flex justify-center items-center"
            type="submit"
          >
            ยืนยัน
          </Button>
        </div>
      </form>
    </Form>
  );
}
