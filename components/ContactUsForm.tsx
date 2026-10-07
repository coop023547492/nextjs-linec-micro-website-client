"use client";

import { z } from "zod";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "ชื่อควรมีอย่างน้อย 2 ตัวอักษร",
  }),
  email: z.string().email({
    message: "กรุณากรอกอีเมลที่ถูกต้อง",
  }),
  message: z.string().min(10, {
    message: "ข้อความควรมีอย่างน้อย 10 ตัวอักษร",
  }),
});

export default function ContactUsForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "ไม่สามารถส่งข้อความได้");
      }

      form.reset();
      alert("ส่งข้อความสำเร็จ!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(error instanceof Error ? error.message : "เกิดข้อผิดพลาด");
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2.5">
        <h3 className="text-Medium-grey text-xl font-bold">ติดต่อสอบถาม</h3>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-Light-grey text-lg font-bold">
                ชื่อ
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="p-2 bg-white rounded-[5px] border border-stone-300"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-Light-grey text-lg font-bold">
                อีเมล์
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="p-2 bg-white rounded-[5px] border border-stone-300"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-Light-grey text-lg font-bold">
                ข้อความ
              </FormLabel>
              <FormControl>
                <Textarea
                  rows={5}
                  {...field}
                  className="p-2 bg-white rounded-[5px] border border-stone-300 resize-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="w-full px-2.5 py-3 bg-gradient-to-r from-[#3A68E5] to-[#A4DAFF] rounded-lg"
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          ส่งข้อความ
        </Button>
      </form>
    </Form>
  );
}
