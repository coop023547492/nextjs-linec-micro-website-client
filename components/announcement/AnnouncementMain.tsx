"use client";

import { AnnouncementFeatureProps } from "@/utils/types";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import useAnnouncements from "./hook/useAnnouncements";
import Link from "next/link";
import { formatThaiDate } from "@/lib/utils";
import PaginationNew from "../PaginationNew";

export default function AnnouncementMain({ page }: { page: string }) {
  const { data } = useAnnouncements({ page });

  if (!data || data.data.length === 0) {
    return (
      <div className="text-center text-gray-500">
        No announcements available at the moment.
      </div>
    );
  }

  const fristData = data.data.slice(0, 1);
  const secondData = data.data.slice(1, 3);
  const remainingData = data.data.slice(3);

  return (
    data && (
      <div className="flex flex-col gap-5">
        {fristData.map((item: AnnouncementFeatureProps) => (
          <NewsCard
            key={item.id}
            id={item.id.toString()}
            name={item.name}
            postdate={item.postdate}
          />
        ))}
        <div className=" grid md:grid-cols-2 gap-5">
          {secondData.map((item: AnnouncementFeatureProps) => (
            <NewsCard
              key={item.id}
              id={item.id.toString()}
              name={item.name}
              postdate={item.postdate}
            />
          ))}
        </div>
        {remainingData.map((item: AnnouncementFeatureProps) => (
          <Link
            key={item.id}
            href={`/announcement/${item.id}`}
            className="w-full border-b py-5 border-stone-300 flex flex-col space-y-5 md:space-y-0 md:flex-row md:justify-between "
          >
            <h3 className="text-zinc-800 text-xl font-bold">{item.name}</h3>
            <p className=" text-stone-500 text-base">
              {formatThaiDate(item.postdate)}
            </p>
          </Link>
        ))}
        <PaginationNew
          currentPage={Number(page)}
          totalPages={Number(data.pagination.totalPages)}
        />
      </div>
    )
  );
}

const NewsCard = ({
  id,
  name,
  postdate,
}: {
  id: string;
  name: string;
  postdate: string;
}) => {
  return (
    <Link href={`/announcement/${id}`} className="flex ">
      <Card className="flex flex-col w-full bg-white/40 rounded-[20px] shadow-[3px_12px_18px_0px_rgba(7,48,72,0.05)] outline outline-1 outline-offset-[-1px] outline-white/50 ">
        <CardHeader className="flex-1">
          <CardTitle className="Main-dark-Blue font-bold text-xl">
            {name}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-stone-500 text-base">{formatThaiDate(postdate)}</p>
        </CardContent>
      </Card>
    </Link>
  );
};
