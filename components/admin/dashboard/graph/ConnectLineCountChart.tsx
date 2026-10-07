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

type ItemProps = {
  createDate: string;
  title: string;
  countAmt: number;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ConnectLineCountChart({ data }: { data: any }) {
  const filterData = data?.filter(
    (item: ItemProps) => item?.title === "LineConnect"
  );

  return (
    <ResponsiveContainer height={400} width="100%">
      <BarChart
        data={filterData}
        className="[&_.recharts-tooltip-cursor]:fill-zinc-200"
        onClick={(v) => console.log(v.activePayload?.[0]?.value)}
      >
        <XAxis
          dataKey="createDate"
          fontSize={12}
          tickFormatter={(value) => {
            const parsedDate = parse(value, "yyyy-MM-dd", new Date());
            return format(parsedDate, "dd/MM").toString();
          }}
        />
        <YAxis fontSize={12} />
        <Tooltip
          separator=": "
          labelClassName="font-bold"
          wrapperClassName="!text-sm rounded-md"
          formatter={(value) => {
            return [value, "จำนวนคน"];
          }}
        />
        <Legend
          iconType="circle"
          formatter={() => <span className="text-sm">จำนวนคน</span>}
        />
        <Bar dataKey="countAmt" fill="#3A68E5" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
