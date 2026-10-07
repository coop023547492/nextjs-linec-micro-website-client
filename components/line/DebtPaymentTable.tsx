import { cn, formatCommaToNumber, formatDecimalWithComma } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function DebtPaymentTable({ datas }: { datas: any[] }) {
  const sumPrincipal = formatDecimalWithComma(
    datas.reduce(
      (acc, cur) => acc + Number(formatCommaToNumber(cur.principalPayment)),
      0
    )
  );
  const sumInterest = formatDecimalWithComma(
    datas.reduce(
      (acc, cur) => acc + Number(formatCommaToNumber(cur.interestPayment)),
      0
    )
  );
  const sumTotal = formatDecimalWithComma(
    datas.reduce(
      (acc, cur) => acc + Number(formatCommaToNumber(cur.totalPayment)),
      0
    )
  );

  console.log({
    sumPrincipal,
    sumInterest,
    sumTotal,
  });

  return (
    <div className="p-2.5 lg:p-5 bg-white/40 rounded-[20px] shadow-[3px_12px_18px_0px_rgba(7,48,72,0.05)] border border-white/50">
      <Table className="bg-white/40 rounded-[20px] p-2.5 border-separate border-spacing-0">
        <TableHeader>
          <TableRow>
            <TableHead className="border border-l-0 border-t-0 text-center font-bold">
              งวดที่
            </TableHead>
            <TableHead className="border border-t-0 text-center font-bold">
              วันที่ชำระ
            </TableHead>
            <TableHead className="border border-t-0 text-center font-bold">
              จำนวนวัน
            </TableHead>
            <TableHead className="border border-t-0 text-center font-bold">
              ชำระเงินต้น
            </TableHead>
            <TableHead className="border border-t-0 text-center font-bold">
              ชำระดอกเบี้ย
            </TableHead>
            <TableHead className="border border-t-0 text-center font-bold">
              รวมชำระ
            </TableHead>
            <TableHead className="border border-t-0 border-r-0 text-center font-bold">
              เงินต้นคงเหลือ
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {datas.map((data) => (
            <TableRow key={data.period}>
              <TableCell className={cn("border border-l-0 text-center")}>
                {data.period}
              </TableCell>
              <TableCell className={cn("border text-center")}>
                {data.paymentDate}
              </TableCell>
              <TableCell className={cn("border text-center")}>
                {data.daysInPeriod}
              </TableCell>
              <TableCell
                className={cn("border Main-dark-Blue font-bold text-right")}
              >
                {data.principalPayment}
              </TableCell>
              <TableCell
                className={cn("border Main-dark-Blue font-bold text-right")}
              >
                {data.interestPayment}
              </TableCell>
              <TableCell
                className={cn("border Main-dark-Blue font-bold text-right")}
              >
                {data.totalPayment}
              </TableCell>
              <TableCell className={cn("border border-r-0 text-right")}>
                {data.remainingBalance}
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={3} />
            <TableCell
              className={cn(
                "border border-b-0 Main-dark-Blue font-extrabold text-base text-right"
              )}
            >
              {sumPrincipal}
            </TableCell>
            <TableCell
              className={cn(
                "border border-b-0 Main-dark-Blue font-extrabold text-base text-right"
              )}
            >
              {sumInterest}
            </TableCell>
            <TableCell
              className={cn(
                "border border-b-0 Main-dark-Blue font-extrabold text-base text-right"
              )}
            >
              {sumTotal}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
