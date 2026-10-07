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
import { useStatsMenuLine } from "../../hook/useStatsMenuLine";
import { useSearchParams } from "next/navigation";

export default function MenuCountChart() {
  const searchParams = useSearchParams();

  const { data } = useStatsMenuLine({
    days: searchParams.get("menuDays") || "7",
  });

  return data ? (
    <ResponsiveContainer height={400} width="100%">
      <BarChart
        data={data}
        className="[&_.recharts-tooltip-cursor]:fill-zinc-200"
        onClick={(v) => console.log(v.activePayload?.[0]?.value)}
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
            if (name === "change") {
              label = "ยอดเรียกเก็บ";
            } else if (name === "stock") {
              label = "หุ้น";
            } else if (name === "profile") {
              label = "ข้อมูลสมาชิก";
            } else if (name === "menu") {
              label = "เมนู";
            } else if (name === "loan") {
              label = "เงินกู้";
            } else if (name === "gurantee") {
              label = "ค้ำประกัน";
            } else if (name === "deposit") {
              label = "เงินฝาก";
            } else if (name === "deviden") {
              label = "ปันผล-เฉลี่ยคืน";
            }

            return [value, label];
          }}
        />
        <Legend
          iconType="circle"
          formatter={(value) => {
            if (value === "change") {
              return <span className="text-sm">ยอดเรียกเก็บ</span>;
            } else if (value === "stock") {
              return <span className="text-sm">หุ้น</span>;
            } else if (value === "profile") {
              return <span className="text-sm">ข้อมูลสมาชิก</span>;
            } else if (value === "menu") {
              return <span className="text-sm">เมนู</span>;
            } else if (value === "loan") {
              return <span className="text-sm">เงินกู้</span>;
            } else if (value === "gurantee") {
              return <span className="text-sm">ค้ำประกัน</span>;
            } else if (value === "deposit") {
              return <span className="text-sm">เงินฝาก</span>;
            } else if (value === "deviden") {
              return <span className="text-sm">ปันผล-เฉลี่ยคืน</span>;
            }
          }}
        />
        <Bar dataKey="loan" fill="#9C27B0" radius={[4, 4, 0, 0]} />
        <Bar dataKey="deposit" fill="#FF9800" radius={[4, 4, 0, 0]} />
        <Bar dataKey="menu" fill="#F44336" radius={[4, 4, 0, 0]} />
        <Bar dataKey="profile" fill="#FFC107" radius={[4, 4, 0, 0]} />
        <Bar dataKey="gurantee" fill="#00BCD4" radius={[4, 4, 0, 0]} />
        <Bar dataKey="deviden" fill="#607D8B" radius={[4, 4, 0, 0]} />
        <Bar dataKey="change" fill="#4CAF50" radius={[4, 4, 0, 0]} />
        <Bar dataKey="stock" fill="#2196F3" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  ) : (
    "No data available"
  );
}
