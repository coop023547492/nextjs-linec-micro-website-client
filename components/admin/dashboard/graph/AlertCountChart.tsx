"use client";

import { format, parse } from "date-fns";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useRouter, useSearchParams } from "next/navigation";
import { useStatsAlertLine } from "../../hook/useStatsAlertLine";

export default function AlertCountChart() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const { data } = useStatsAlertLine({
    days: searchParams.get("alertDays") || "7",
  });

  return data ? (
    <ResponsiveContainer height={400} width="100%">
      <BarChart
        data={data}
        className="[&_.recharts-tooltip-cursor]:fill-zinc-200"
        onClick={(v) => router.push(`/admin/alerts?date=${v.activeLabel}`)}
      >
        <XAxis
          dataKey="date"
          fontSize={12}
          tickFormatter={(value) => {
            const parsedDate = parse(value, "dd/MM/yyyy", new Date());
            return format(parsedDate, "dd/MM").toString();
          }}
        />
        <YAxis fontSize={12} />
        <Tooltip
          separator=" : "
          labelClassName="font-bold"
          wrapperClassName="!text-sm rounded-md"
          formatter={(value, name) => {
            let label;
            if (name === "ลงรับเอกสาร") {
              label = "ลงรับเอกสารสำเร็จ";
            } else if (name === "loan_register_unsuccess") {
              label = "ลงรับเอกสารไม่สำเร็จ";
            } else if (name === "จ่ายเงินกู้") {
              label = "จ่ายเงินกู้สำเร็จ";
            } else if (name === "loan_paid_unsuccess") {
              label = "จ่ายเงินกู้ไม่สำเร็จ";
            } else if (name === "จ่ายดอกเบี้ย") {
              label = "จ่ายดอกเบี้ยสำเร็จ";
            } else if (name === "interest_paid_unsuccess") {
              label = "จ่ายดอกเบี้ยไม่สำเร็จ";
            } else if (name === "ฝากเงิน") {
              label = "ฝากเงินสำเร็จ";
            } else if (name === "deposit_unsuccess") {
              label = "ฝากเงินไม่สำเร็จ";
            } else if (name === "ถอนเงิน") {
              label = "ถอนเงินสำเร็จ";
            } else if (name === "withdraw_unsuccess") {
              label = "ถอนเงินไม่สำเร็จ";
            }

            return [value, label];
          }}
        />
        <Legend />
        <Bar
          dataKey="loan_register_success"
          stackId={1}
          fill="#df18bd"
          name="ลงรับเอกสาร"
        />
        <Bar
          dataKey="loan_register_unsuccess"
          stackId={1}
          fill="#6b7280"
          radius={[4, 4, 0, 0]}
          legendType="none"
        />
        <Bar
          dataKey="loan_paid_success"
          stackId={2}
          fill="#2196F3"
          name="จ่ายเงินกู้"
        />
        <Bar
          dataKey="loan_paid_unsuccess"
          stackId={2}
          fill="#6b7280"
          radius={[4, 4, 0, 0]}
          legendType="none"
        />
        <Bar
          dataKey="interest_paid_success"
          stackId={3}
          fill="#FF9800"
          name="จ่ายดอกเบี้ย"
        />
        <Bar
          dataKey="interest_paid_unsuccess"
          stackId={3}
          fill="#6b7280"
          radius={[4, 4, 0, 0]}
          legendType="none"
        />
        <Bar
          dataKey="deposit_success"
          stackId={4}
          fill="#4CAF50"
          name="ฝากเงิน"
        />
        <Bar
          dataKey="deposit_unsuccess"
          stackId={4}
          fill="#6b7280"
          radius={[4, 4, 0, 0]}
          legendType="none"
        />
        <Bar
          dataKey="withdraw_success"
          stackId={5}
          fill="#F44336"
          name="ถอนเงิน"
        />
        <Bar
          dataKey="withdraw_unsuccess"
          stackId={5}
          fill="#6b7280"
          radius={[4, 4, 0, 0]}
          legendType="none"
        />
      </BarChart>
    </ResponsiveContainer>
  ) : (
    "no data available"
  );
}
