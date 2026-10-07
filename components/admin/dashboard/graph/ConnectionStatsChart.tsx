"use client";

import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { formatNumberWithComma } from "@/lib/utils";

export default function ConnectionStatsChart({
  count,
  data,
}: {
  count: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}) {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Tooltip
          separator=" : "
          labelClassName="font-bold"
          wrapperClassName="[&_.recharts-tooltip-item]:!text-black !text-sm  rounded-md dark:!border-border"
          formatter={(value, name) => [
            formatNumberWithComma(value as number),
            name,
          ]}
        />
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          label={({ name, value, cx, cy, x, y }) => {
            if (name === "เชื่อมต่อแล้ว") {
              const percent = (value / count) * 100;
              return (
                <text
                  x={x - 25}
                  y={y + 50} // ปรับตำแหน่งให้สูงขึ้นเล็กน้อย
                  fill="#000"
                  textAnchor="middle"
                  dominantBaseline="central"
                  style={{ fontSize: "12px", fontWeight: "bold" }}
                >
                  {percent.toFixed(2)}%
                </text>
              );
            } else {
              const percent = (value / count) * 100;
              return (
                <text
                  x={x + 25}
                  y={y - 50} // ปรับตำแหน่งให้สูงขึ้นเล็กน้อย
                  fill="#000"
                  textAnchor="middle"
                  dominantBaseline="central"
                  style={{ fontSize: "12px", fontWeight: "bold" }}
                >
                  {percent.toFixed(2)}%
                </text>
              );
            }
          }}
          labelLine={false} // ปิดเส้น label เพื่อให้แสดงบน Pie โดยตรง
        >
          {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            data.map((dataItem: any, i: number) => (
              <Cell key={i} fill={dataItem.color} />
            ))
          }
        </Pie>
        <Legend verticalAlign="bottom" />
      </PieChart>
    </ResponsiveContainer>
  );
}
