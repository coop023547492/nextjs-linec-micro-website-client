import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LaptopIcon, PieChartIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { formatNumberWithComma } from "@/lib/utils";
import { useStatsConnect } from "../hook/useStatsConnect";
import ConnectionStatsChart from "./graph/ConnectionStatsChart";
import MemberRegisterChart from "./graph/MemberRegisterChart";
import { useStatsConnectionStatus } from "../hook/useStatsConnectionStatus";
import { useSearchParams } from "next/navigation";
import FilterDays from "../FilterDays";

export default function MemberStats() {
  const searchParams = useSearchParams();

  const { data: connectStats } = useStatsConnect(
    searchParams.get("connectDays") || "7"
  );
  const { data: lineTargetStats } = useStatsConnectionStatus();

  const filterConnectData = connectStats?.filter(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (item: any) => item?.title === "LineConnect"
  );

  return (
    <>
      <div className="grid lg:grid-cols-3 gap-4">
        {lineTargetStats ? (
          <CardMemberTotal totalMember={lineTargetStats.totalLineActive} />
        ) : (
          "ไม่พบข้อมูลสมาชิก"
        )}

        <div className="lg:col-span-2">
          {lineTargetStats ? (
            <CardConnectionStats
              count={lineTargetStats.totalLineTarget}
              data={lineTargetStats.data}
            />
          ) : (
            "ไม่พบข้อมูลเป้าหมายการเชื่อมต่อ"
          )}
        </div>
      </div>
      {connectStats ? (
        <CardMemberGraph data={filterConnectData} />
      ) : (
        "ไม่พบข้อมูลกราฟสมาชิก"
      )}
    </>
  );
}

const CardMemberTotal = ({ totalMember }: { totalMember: number }) => {
  return (
    <Card className=" flex flex-col">
      <CardHeader>
        <CardTitle className="text-base">
          จำนวนคนที่เชื่อมต่อระบบสำเร็จ
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 items-center gap-2">
        <UserIcon />
        <div className="text-5xl font-bold Main-dark-Blue">
          {formatNumberWithComma(totalMember)}
        </div>
      </CardContent>
      <CardFooter>
        <Button size="sm" variant="secondary" asChild>
          <Link href="/admin/members">view all</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CardConnectionStats = ({ count, data }: { count: number; data: any }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{`Line ทาร์เก็ตรีช ${formatNumberWithComma(count)} คน`}</span>
          <PieChartIcon />
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-0">
        <ConnectionStatsChart count={count} data={data} />
      </CardContent>
    </Card>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CardMemberGraph = ({ data }: { data: any }) => {
  return (
    <Card className="my-4">
      <CardHeader>
        <CardTitle className="flex flex-col gap-2.5 justify-center items-center ">
          <LaptopIcon />
          <span className="text-base">
            จำนวนคนเชื่อมต่อสำเร็จ VS จำนวนครั้งที่เข้ามาหน้าเชื่อมต่อ แต่ละวัน
          </span>

          <FilterDays param="connectDays" />
        </CardTitle>
      </CardHeader>
      <CardContent className="pl-0">
        <MemberRegisterChart data={data} />
      </CardContent>
    </Card>
  );
};
