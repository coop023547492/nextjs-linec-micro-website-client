"use client";

import { format, parse } from "date-fns";
import { useRouter } from "next/navigation";
import {
  Bar,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  ComposedChart,
  Line,
} from "recharts";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MemberRegisterChart({ data }: { data: any }) {
  const router = useRouter();

  return (
    <ResponsiveContainer height={400} width="100%">
      <ComposedChart
        data={data}
        className="[&_.recharts-tooltip-cursor]:fill-zinc-200"
      >
        <XAxis
          dataKey="createDate"
          stroke="#888888"
          fontSize={12}
          tickFormatter={(value) => {
            const parsedDate = parse(value, "yyyy-MM-dd", new Date());
            return format(parsedDate, "dd/MM").toString();
          }}
        />
        <YAxis
          yAxisId="left"
          orientation="left"
          stroke="#3A68E5"
          fontSize={12}
          tickFormatter={(value) => `${value} คน`}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          stroke="#888888"
          fontSize={12}
          tickFormatter={(value) => `${value} ครั้ง`}
        />
        <Tooltip
          separator=": "
          formatter={(value, name) => {
            if (name === "countSuccess") {
              return [value, "เชื่อมต่อสำเร็จ"];
            } else {
              return [value, "เข้ามาหน้าเชื่อมต่อ"];
            }
          }}
        />
        <Legend
          iconType="circle"
          formatter={(value) => {
            if (value === "countSuccess") {
              return <div className="text-sm">เชื่อมต่อสำเร็จ</div>;
            } else {
              return <div className="text-sm">เข้ามาหน้าเชื่อมต่อ</div>;
            }
          }}
        />
        <Bar
          yAxisId="left"
          dataKey="countSuccess"
          stackId={1}
          fill="#3A68E5"
          onClick={(v) => {
            const parsedDate = parse(v.createDate, "yyyy-MM-dd", new Date());
            const date = format(parsedDate, "yyyy-MM-dd").toString();
            router.push(`/admin/members?date=${date}`);
          }}
        />
        <Line
          yAxisId="right"
          dataKey="countAmt"
          type="monotone"
          stroke="#888888"
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
