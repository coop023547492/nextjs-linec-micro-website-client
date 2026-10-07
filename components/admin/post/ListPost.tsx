"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "sonner";
import { Button } from "../../ui/button";
import Link from "next/link";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useState } from "react";
import { Post } from "@/utils/types";
import { useAllPost } from "../hook/useAllPost";
import { delPostApi } from "../api";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { format } from "date-fns";
import PaginationNew from "@/components/PaginationNew";
import { useAuth } from "@/components/auth/context/AuthContext";

export default function ListPost({ page }: { page: string }) {
  const { user } = useAuth();
  const { data, isLoading } = useAllPost(Number(page));

  if (user?.role !== "ADMIN") {
    return <div>You do not have permission to access this page.</div>;
  }

  if (isLoading) return <p>Loading....</p>;

  if (!data?.posts?.length) return <p>No Data</p>;

  return (
    <div className="flex flex-col items-center gap-5">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>TITLE</TableHead>
            <TableHead>DATE</TableHead>
            <TableHead>URL</TableHead>
            <TableHead className="text-center">ACTION</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.posts.map((post: Post) => {
            const date = post.fixDate.split("T")[0];
            return (
              <TableRow key={post.id}>
                <TableCell>{post.id}</TableCell>
                <TableCell>{post.title}</TableCell>
                <TableCell>{format(date, "dd/MM/yyyy")}</TableCell>
                <TableCell>{`https://line.coopmsds.com/line/post/${post.id}`}</TableCell>
                <TableCell>
                  <div className="flex justify-around gap-3">
                    <Button variant="link" size="sm" asChild>
                      <Link href={`/line/post/${post.id}`}>view</Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/admin/post/${post.id}`}>edit</Link>
                    </Button>
                    <DeleteButton id={post.id} currentPage={Number(page)} />
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <span className="text-center font-bold">หน้า {page}</span>
      <PaginationNew
        currentPage={Number(page) || 1}
        totalPages={Number(data?.pages?.totalPages)}
      />
    </div>
  );
}

const DeleteButton = ({
  id,
  currentPage,
}: {
  id: string;
  currentPage: number;
}) => {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);

  const { mutate, isPending } = useMutation({
    mutationFn: () => delPostApi(id),
    onSuccess: (message) => {
      toast.success(message);
      queryClient.invalidateQueries({
        queryKey: ["posts", currentPage],
      });
      queryClient.invalidateQueries({
        queryKey: ["post", id],
      });
      setOpen(false);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const handleDelete = () => {
    mutate();
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger>
        <Button variant="destructive" size="sm">
          ลบ
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>คุณต้องการลบรายการนี้หรือไม่?</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>ยกเลิก</AlertDialogCancel>
          <Button
            variant="destructive"
            size="sm"
            disabled={isPending}
            onClick={handleDelete}
          >
            {isPending ? "กำลังลบ..." : "ลบ"}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
