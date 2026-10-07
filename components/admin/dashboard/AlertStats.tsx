import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircleIcon } from "lucide-react";
import AlertCountChart from "./graph/AlertCountChart";
import FilterDays from "../FilterDays";

export default function AlertStats() {
  return (
    <Card className="my-4">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <AlertCircleIcon />
            <span>จำนวนแจ้งเตือน</span>
          </div>
          <FilterDays param="alertDays" />
        </CardTitle>
      </CardHeader>
      <CardContent className="pl-0">
        <AlertCountChart />
      </CardContent>
    </Card>
  );
}
