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
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { deleteLineMemberBomApi } from "../api";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { MemberBomProps } from "../type";

import AdminSearch from "../AdminSearch";
import PaginationNew from "@/components/PaginationNew";
import { useAuth } from "@/components/auth/context/AuthContext";
import { useAllLineMemberBom } from "../hook/useAllLineMemberBom";

export default function ListMembers({
  page,
  query,
  date,
}: {
  page: string;
  query?: string;
  date?: string;
}) {
  const { user } = useAuth();
  /* const { data, isLoading } = useAllLineMember({
    currentPage: Number(page),
    query,
    date,
  }); */
  const { data, isLoading } = useAllLineMemberBom({
    currentPage: Number(page),
    query,
    date,
  });

  if (user?.role !== "ADMIN") {
    return <div>You do not have permission to access this page.</div>;
  }

  if (isLoading) return <p>Loading....</p>;

  if (!data?.data?.length) return <p>No Data</p>;

  return (
    <div className="flex flex-col items-center gap-5">
      <div>
        <AdminSearch placeholder="ค้นหาเลขทะเบียน" />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">ลำดับ</TableHead>
            <TableHead className="text-center">เลขทะเบียนสมาชิก</TableHead>
            <TableHead className="text-center">สังกัด</TableHead>
            <TableHead className="text-center">ชื่อ-นามสกุล</TableHead>
            <TableHead className="text-center">LINE ID</TableHead>
            <TableHead className="text-center">วันที่เชื่อมต่อ</TableHead>
            <TableHead className="text-center">ACTION</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.data.map((member: MemberBomProps, index: number) => {
            return (
              <TableRow key={member.seqNo}>
                <TableCell className="text-center">
                  {(Number(page) - 1) * 50 + index + 1}
                </TableCell>
                <TableCell className="text-center">{member.membCode}</TableCell>
                <TableCell>{member.membGrpCode}</TableCell>
                <TableCell>{member.fullName}</TableCell>
                <TableCell>{member.lineId}</TableCell>
                <TableCell className="text-center">
                  {member.lineLastUpdateDate}
                </TableCell>
                <TableCell className="text-center">
                  <DeleteButton
                    lineId={member.lineId}
                    currentPage={Number(page)}
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <span className="text-center font-bold">หน้า {page}</span>

      <PaginationNew
        currentPage={Number(page) || 1}
        totalPages={data?.pagination?.totalPages}
      />
    </div>
  );
}

const DeleteButton = ({
  lineId,
  currentPage,
}: {
  lineId: string;
  currentPage: number;
}) => {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);

  const { mutate, isPending } = useMutation({
    mutationFn: () => deleteLineMemberBomApi(lineId),
    onSuccess: (message) => {
      toast.success(message);
      queryClient.invalidateQueries({
        queryKey: ["line-members", currentPage],
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
