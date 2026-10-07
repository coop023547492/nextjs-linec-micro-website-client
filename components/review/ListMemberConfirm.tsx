"use client";

import Link from "next/link";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { useQuery } from "@tanstack/react-query";
import { getAllStatements } from "./api";
import PaginationNew from "../PaginationNew";
import { cn } from "@/lib/utils";
import AdminSearch from "../admin/AdminSearch";
import { Button } from "../ui/button";
import FilterStatus from "../admin/FilterStatus";
import { format } from "date-fns";

export default function ListMemberConfirm({
  page = "1",
  query,
  member_status,
  review_status,
}: {
  page: string;
  query?: string;
  member_status?: string;
  review_status?: string;
}) {
  const { data } = useQuery({
    queryKey: [
      "auditor-all-statements",
      page,
      query,
      member_status,
      review_status,
    ],
    queryFn: () =>
      getAllStatements({
        currentPage: page,
        query,
        member_status,
        review_status,
      }),
    refetchInterval: 10000,
  });

  return (
    <>
      <div className=" flex flex-col items-center gap-5">
        <div className=" flex gap-2">
          <AdminSearch placeholder="ค้นหาเลขทะเบียน หรือ ชื่อ-นามสกุล" />
          <Link href="/admin/auditor">
            <Button variant="outline" size="sm">
              Clear Filter
            </Button>
          </Link>
          {query && (
            <div className="space-x-4">
              <span>
                Filtered by <i>&quot;{query}&quot;</i>
              </span>
            </div>
          )}
        </div>
        <div className="flex justify-center gap-5">
          <FilterStatus
            name="สถานะสมาชิกยืนยันยอด"
            param="member_status"
            options={[
              { value: "", label: "ทั้งหมด" },
              { value: "correct", label: "ถูกต้อง" },
              { value: "incorrect", label: "ไม่ถูกต้อง" },
            ]}
          />
          <FilterStatus
            name="สถานะการตรวจสอบ"
            param="review_status"
            options={[
              { value: "", label: "ทั้งหมด" },
              { value: "pending", label: "รอตรวจสอบ" },
              { value: "success", label: "ตรวจสอบแล้ว" },
            ]}
          />
        </div>
      </div>
      {data?.data.length > 0 && (
        <div className=" flex flex-col gap-5 items-center">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-center font-bold">ลำดับ</TableHead>
                <TableHead className="text-center font-bold">
                  เลขทะเบียน
                </TableHead>
                <TableHead className="text-center font-bold">
                  ชื่อ-นามสกุล
                </TableHead>
                <TableHead className="text-center font-bold">
                  วันที่ยืนยัน
                </TableHead>
                <TableHead className="text-center font-bold">
                  สมาชิกยืนยันยอด
                </TableHead>
                <TableHead className="text-center font-bold">
                  ผู้สอบบัญชี
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                data.data.map((statement: any, index: number) => (
                  <TableRow key={statement.id}>
                    <TableCell className="text-center">
                      {(Number(page) - 1) * 20 + index + 1}
                    </TableCell>
                    <TableCell className="text-center">
                      <Link href={`/admin/auditor/${statement.member_number}`}>
                        {statement.member_number.padStart(6, "0")}
                      </Link>
                    </TableCell>
                    <TableCell className="text-center">
                      <Link href={`/admin/auditor/${statement.member_number}`}>
                        {statement.member_fullname}
                      </Link>
                    </TableCell>
                    <TableCell className="text-center">
                      <Link href={`/admin/auditor/${statement.member_number}`}>
                        {format(
                          new Date(statement.confirmed_at),
                          "dd/MM/yyyy HH:mm"
                        )}
                      </Link>
                    </TableCell>
                    <TableCell
                      className={cn(
                        "text-center",
                        statement.member_status !== "correct"
                          ? "text-red-500 font-bold"
                          : ""
                      )}
                    >
                      <Link href={`/admin/auditor/${statement.member_number}`}>
                        {statement.member_status === "correct"
                          ? "ถูกต้อง"
                          : "ไม่ถูกต้อง"}
                      </Link>
                    </TableCell>
                    <TableCell
                      className={cn(
                        "text-center",
                        statement.review_status !== "pending"
                          ? "text-green-500 font-bold"
                          : ""
                      )}
                    >
                      <Link href={`/admin/auditor/${statement.member_number}`}>
                        {statement.review_status === "pending"
                          ? "รอตรวจสอบ"
                          : "ตรวจสอบแล้ว"}
                      </Link>
                    </TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
          <span className="font-bold">หน้า {page}</span>
          <PaginationNew
            currentPage={Number(page) || 1}
            totalPages={data?.pagination?.totalPages}
          />
        </div>
      )}
    </>
  );
}
