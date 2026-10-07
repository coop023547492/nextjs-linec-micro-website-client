"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import useAnnouncementFeatues from "./hook/useAnnouncementFeatues";
import { formatThaiDate, truncateText } from "@/lib/utils";
import { AnnouncementFeatureProps } from "@/utils/types";

export default function AnnouncementRelevant() {
  const { data } = useAnnouncementFeatues();
  const router = useRouter();
  if (!data || data.length === 0) {
    return <div className="wrapper mt-5">ไม่มีข่าวที่เกี่ยวข้อง</div>;
  }

  const slideItems = data.slice(0, 3);

  return (
    <div className="wrapper border-t border-stone-300 flex flex-col items-center mt-5 gap-5 pt-5">
      <h3 className="Main-dark-Blue text-xl font-bold">ข่าวที่เกี่ยวข้อง</h3>
      <div className="grid md:grid-cols-3 gap-7">
        {slideItems.map((item: AnnouncementFeatureProps) => (
          <Card
            onClick={() => router.push(`/announcement/${item.id}`)}
            key={item.id}
            className="flex flex-col bg-indigo-50 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-indigo-50 w-full hover:cursor-pointer"
          >
            <CardHeader className="flex-1 ">
              <CardTitle className="text-zinc-800 text-xl font-bold ">
                {truncateText(item.name)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-stone-500 text-base ">
                {formatThaiDate(item.postdate)}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
