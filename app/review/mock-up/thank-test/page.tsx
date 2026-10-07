import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function ThankTestPage() {
  return (
    <div className="mt-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-center leading-relaxed">
            คุณได้ทำการทดสอบยืนยันยอดประจำปี 2568 เรียบร้อยแล้ว
          </CardTitle>
        </CardHeader>
        <CardContent className=" text-center">
          ขอขอบพระคุณที่เป็นส่วนหนึ่งในการช่วยให้ สอ.พม.
          เกิดความถูกต้องโปร่งใสในการดำเนินงาน
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            type="button"
            className="w-max flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-[#00C300] hover:bg-[#00A700] text-white shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#00C300]/50"
            asChild
          >
            <Link href="https://lin.ee/t2DsGxs">กลับไปที่ LINE ทดสอบ</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
