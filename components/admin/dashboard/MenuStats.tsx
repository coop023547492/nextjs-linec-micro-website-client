import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ListChecksIcon } from "lucide-react";
import MenuCountChart from "./graph/MenuCountChart";
import FilterDays from "../FilterDays";

export default function MenuStats() {
  return (
    <Card className="my-4">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ListChecksIcon />
            <span>จำนวนคนที่คลิกแต่ละเมนูย่อย</span>
          </div>
          <FilterDays param="menuDays" />
        </CardTitle>
      </CardHeader>
      <CardContent className="pl-0">
        <MenuCountChart />
      </CardContent>
    </Card>
  );
}
