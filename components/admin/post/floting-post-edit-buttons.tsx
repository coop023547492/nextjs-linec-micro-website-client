import { Button } from "@/components/ui/button";
import { Post } from "@/utils/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useState } from "react";
import { delPostApi } from "../api";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { CopyIcon, Edit3Icon, Trash2Icon, ViewIcon } from "lucide-react";

export default function FloatingPostEditButtons({
  post,
  page,
}: {
  post: Post;
  page: string;
}) {
  return (
    <div className="absolute mt-2 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex space-x-1">
      <Button
        variant="outline"
        onClick={() => {
          navigator.clipboard.writeText(
            `${window.location.origin}/line/post/${post.id}`
          );
          toast.success("Copied to clipboard");
        }}
      >
        <CopyIcon />
      </Button>
      <Button asChild>
        <Link href={`/admin/post/${post.id}`}>
          <Edit3Icon />
        </Link>
      </Button>
      <Button variant="secondary" asChild>
        <Link href={`/line/post/${post.id}`}>
          <ViewIcon />
        </Link>
      </Button>
      <DeleteButton id={post.id} currentPage={Number(page)} />
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
        <Button variant="destructive">
          <Trash2Icon />
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
