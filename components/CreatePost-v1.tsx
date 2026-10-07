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
import axiosInstance from "@/utils/axiosInstance";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { Textarea } from "./ui/textarea";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const formSchema = z.object({
  title: z.string().min(1, "กรุณากรอกหัวข้อ"),
  description: z.string().min(1, "กรุณากรอกรายละเอียด"),
  file: z
    .any()
    .refine((file) => file instanceof File, { message: "กรุณาเลือกไฟล์" }),
});

export default function CreatePostV1() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      file: undefined,
    },
  });

  const createPost = async (formData: FormData) => {
    try {
      const response = await axiosInstance.post("/posts", formData);
      return response?.data?.msg;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(error?.response?.data?.msg);
        throw error?.response?.data?.msg;
      }
    }
  };

  const { mutate, isPending } = useMutation({
    mutationFn: createPost,
    onSuccess: (data) => {
      toast(data.toString());
      router.push("/admin/post");
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
    onError: (err) => {
      form.setError("root", {
        message: err.toString(),
      });
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("file", values.file);

    mutate(formData);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" flex flex-col gap-5"
      >
        <FormField
          control={form.control}
          name="title"
          disabled={isPending}
          render={({ field }) => (
            <FormItem>
              <FormLabel>หัวข้อ</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          disabled={isPending}
          render={({ field }) => (
            <FormItem>
              <FormLabel>รายละเอียด</FormLabel>
              <FormControl>
                <Textarea rows={10} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="file"
          disabled={isPending}
          render={({ field: { onChange } }) => (
            <FormItem>
              <FormLabel>Upload File</FormLabel>
              <FormControl>
                <Input
                  name="file"
                  type="file"
                  onChange={(e) => onChange(e.target.files?.[0] ?? null)} // ✅ จัดการไฟล์จาก input
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {!!form.formState.errors.root?.message && (
          <FormMessage>{form.formState.errors.root.message}</FormMessage>
        )}
        <Button disabled={isPending} type="submit">
          {isPending ? "กำลังเพิ่มข้อมูล..." : "ตกลง"}
        </Button>
      </form>
    </Form>
  );
}
