"use client";

import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { getStatsStatement } from "./api";
import { formatNumberWithComma } from "@/lib/utils";
import { Badge } from "../ui/badge";

export default function StatsStatements() {
  const { data } = useQuery({
    queryKey: ["stats-statements"],
    queryFn: getStatsStatement,
    refetchInterval: 10000,
  });

  const memberTotal = 7782;
  const total = data.total;
  const correct = data.correct;
  const incorrect = data.incorrect;
  const review_success = data.review_success;

  const totalPercentage = ((total / memberTotal) * 100).toFixed(2);
  const correctPercentage = ((correct / total) * 100).toFixed(2);
  const incorrectPercentage = ((incorrect / total) * 100).toFixed(2);
  const reviewSuccessPercentage = ((review_success / total) * 100).toFixed(2);

  return (
    <div className=" grid lg:grid-cols-4 gap-4">
      <Card>
        <CardHeader className="bg-black text-white relative">
          <Badge className="absolute top-1 bg-white text-black right-1 h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
            {totalPercentage === "NaN" ? "0.0" : totalPercentage}%
          </Badge>
          <CardTitle className="text-center relative">
            สมาชิกส่งมาแล้ว
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 items-center justify-between py-4">
          <h3 className=" text-4xl font-bold">
            {formatNumberWithComma(total)}
          </h3>
          <p className="text-muted-foreground">ราย</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className=" bg-green-300 relative">
          <Badge className="absolute top-1 bg-white text-black right-1 h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
            {correctPercentage === "NaN" ? "0.0" : correctPercentage}%
          </Badge>
          <CardTitle className="text-center relative">ยอดถูกต้อง</CardTitle>
        </CardHeader>
        <CardContent className=" flex flex-col gap-4 items-center justify-between py-4">
          <h3 className=" text-4xl font-bold">
            {formatNumberWithComma(correct)}
          </h3>
          <p className=" text-muted-foreground">ราย</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="bg-red-300 relative">
          <Badge className="absolute top-1 right-1 bg-white text-black h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
            {incorrectPercentage === "NaN" ? "0.0" : incorrectPercentage}%
          </Badge>
          <CardTitle className="text-center relative">ยอดไม่ถูกต้อง</CardTitle>
        </CardHeader>
        <CardContent className=" flex flex-col gap-4 items-center justify-between py-4">
          <h3 className=" text-4xl font-bold">
            {formatNumberWithComma(incorrect)}
          </h3>
          <p className=" text-muted-foreground">ราย</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="bg-blue-300 relative">
          <Badge className="absolute top-1 right-1 bg-white text-black h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
            {reviewSuccessPercentage === "NaN"
              ? "0.0"
              : reviewSuccessPercentage}
            %
          </Badge>
          <CardTitle className="text-center relative">ตรวจสอบแล้ว</CardTitle>
        </CardHeader>
        <CardContent className=" flex flex-col gap-4 items-center justify-between py-4">
          <h3 className=" text-4xl font-bold">
            {formatNumberWithComma(review_success)}
          </h3>
          <p className=" text-muted-foreground">ราย</p>
        </CardContent>
      </Card>
    </div>
  );
}
