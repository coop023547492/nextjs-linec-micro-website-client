"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { TableProps } from "@/utils/types";

export default function TableDataForOrdinaryLoan({
  headers,
  data,
  className,
}: TableProps) {
  return (
    <Table
      className={cn(
        "min-w-[896px] w-full bg-white/40 rounded-[20px] border-separate border-spacing-0",
        className
      )}
    >
      <TableHeader>
        {headers.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {row.map((header, colIndex) => (
              <TableHead
                key={colIndex}
                colSpan={header.colSpan || 1}
                rowSpan={header.rowSpan || 1}
                className={cn(
                  "text-[#333333] font-bold text-center",
                  // ลบ border ออก แล้วใช้ border เฉพาะด้าน
                  "border",
                  colIndex === 0 && "border-l-0",
                  colIndex === row.length - 1 && "border-r-0",
                  rowIndex === 0 && "border-t-0",
                  header.className
                )}
              >
                {header.label}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {data.map(
          (row, rowIndex) =>
            row && (
              <TableRow key={rowIndex}>
                {Object.keys(row).map((colKey, colIndex) => {
                  const cellData = row[colKey] || {
                    value: "-",
                    className: "",
                    colSpan: 1,
                    rowSpan: 1,
                  };
                  return (
                    <TableCell
                      key={colIndex}
                      colSpan={cellData.colSpan}
                      rowSpan={cellData.rowSpan}
                      className={cn(
                        "text-[#666666] leading-relaxed",
                        "border",
                        colIndex === 0 && "border-l-0",
                        colIndex === Object.keys(row).length - 1 &&
                          "border-r-0",
                        rowIndex === 0 && "border-t-0",
                        rowIndex === data.length - 1 && "border-b-0",
                        cellData.className
                      )}
                    >
                      {cellData.value}
                    </TableCell>
                  );
                })}
              </TableRow>
            )
        )}
      </TableBody>
    </Table>
  );
}
