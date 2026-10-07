import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LaptopIcon } from "lucide-react";
import ConnectLineCount from "./graph/ConnectLineCountChart";
//import { useStatsConnect } from "../hook/useStatsConnect";

export default function ConnectStats() {
  //const { data } = useStatsConnect();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <LaptopIcon />
          <span>จำนวนคนที่เข้ามาหน้าเชื่อมต่อแต่ละวัน (30 วัน)</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ConnectLineCount data={[]} />
      </CardContent>
    </Card>
  );
}
