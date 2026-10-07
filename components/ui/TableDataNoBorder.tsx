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

export default function TableDataNoBorder({
  headers,
  data,
  className,
}: TableProps) {
  return (
    <Table className={cn("w-full min-w-[896px]", className)}>
      <TableHeader>
        {headers.map((row, rowIndex) => (
          <TableRow key={rowIndex} className="border-stone-300">
            {row.map((header, colIndex) => (
              <TableHead
                key={colIndex}
                colSpan={header.colSpan || 1}
                rowSpan={header.rowSpan || 1}
                className={`text-[#333333] font-bold text-center ${
                  header.className || ""
                }`}
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
              <TableRow key={rowIndex} className="border-stone-300">
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
                      className={`text-[#666666] leading-relaxed align-center ${cellData.className}`}
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
