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
import { Textarea } from "../../ui/textarea";
import { usePostDetail } from "@/components/line/hook/usePostDetail";
import axiosInstance from "@/utils/axiosInstance";
import { AxiosError } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import Image from "next/image";

const formSchema = z.object({
  title: z.string().min(1, "กรุณากรอกหัวข้อ"),
  description: z.string(),
  file: z.union([z.instanceof(File), z.undefined()]),
  fixDate: z.date(),
});

export default function UpdatePost({ postId }: { postId: string }) {
  const queryClient = useQueryClient();
  const { post, isLoading } = usePostDetail(postId);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: post?.data?.title || "",
      description: post?.data?.description || "",
      file: undefined,
      fixDate: new Date(post?.data?.fixDate) || new Date(),
    },
  });

  const updatePost = async (formData: FormData) => {
    try {
      const response = await axiosInstance.put(
        `/postcontent/${postId}`,
        formData
      );
      return response?.data?.message;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw error?.response?.data?.message;
      }
    }
  };

  const { mutate, isPending } = useMutation({
    mutationFn: updatePost,
    onSuccess: (data: string) => {
      toast.success(data);
      queryClient.invalidateQueries({
        queryKey: ["post", postId],
      });
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
    onError: (err: string) => {
      toast.error(err);
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("fixDate", format(values.fixDate, "yyyy-MM-dd"));

    if (values.file) {
      formData.append("image", values.file); // ✅ เช็กว่ามีไฟล์ก่อน
    }

    mutate(formData);
  }

  if (isLoading) return <p>Loading...</p>;

  const selectFromDate = new Date();
  selectFromDate.setFullYear(selectFromDate.getFullYear() - 1);

  const selectToDate = new Date();
  selectToDate.setFullYear(selectToDate.getFullYear() + 2);

  const image = form.watch("file");

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
        {post?.data?.imageUrl && !image ? (
          <Image
            src={process.env.NEXT_PUBLIC_BASE_URL + post.data.imageUrl}
            alt="Current Image"
            width={600}
            height={600}
            className="rounded-md object-cover"
          />
        ) : image ? (
          <Image
            src={URL.createObjectURL(image)}
            alt="Preview"
            width={600}
            height={600}
            className="rounded-md object-cover"
          />
        ) : null}
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
        <FormField
          control={form.control}
          name="fixDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>วันที่</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl className="w-full">
                    <Button
                      variant="outline"
                      className="normal-case flex justify-between pr-1"
                    >
                      {!!field.value ? (
                        format(field.value, "dd/MM/yyyy")
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
        <Button disabled={isPending} type="submit">
          {isPending ? "กำลังอัพเดทข้อมูล..." : "ตกลง"}
        </Button>
      </form>
    </Form>
  );
}
