"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { getLogoutApi } from "./api";

export default function LogoutBtn() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate } = useMutation({
    mutationFn: getLogoutApi,
    onSuccess: (message) => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      router.push("/");
      toast.success(message);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const handleLogout = async () => {
    mutate();
  };

  return <span onClick={handleLogout}>Sign out</span>;
}
