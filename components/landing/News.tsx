"use client";

import { formatThaiDate, truncateText } from "@/lib/utils";
import Link from "next/link";
import { Card, CardFooter, CardHeader, CardTitle } from "../ui/card";
import useAnnouncementFeatues from "../announcement/hook/useAnnouncementFeatues";
import { AnnouncementFeatureProps } from "@/utils/types";
import { useRouter } from "next/navigation";

export default function News() {
  const { data, isLoading } = useAnnouncementFeatues();

  if (isLoading) {
    return <NewsSkeleton />;
  }

  if (!data || data.length === 0) {
    return <div>ไม่มีข่าวสาร</div>;
  }

  return (
    <section className="wrapper space-y-5">
      <div className="flex justify-between">
        <h3 className="text-Medium-grey text-lg font-bold">ข่าวสารสหกรณ์</h3>
        <Link
          className="Main-dark-Blue text-lg font-bold hover:text-blue-600 transition-colors duration-200"
          href="/announcement"
        >
          ดูทั้งหมด→
        </Link>
      </div>
      <div className="grid md:grid-cols-4 gap-5">
        {data.map((item: AnnouncementFeatureProps) => (
          <NewsCard
            title={item.name}
            date={item.postdate}
            href={`/announcement/${item.id}`}
            key={item.id}
          />
        ))}
      </div>
    </section>
  );
}

type CardProps = {
  title: string;
  date: string;
  href: string;
};

const NewsCard = ({ title, date, href }: CardProps) => {
  const newTitle = truncateText(title);
  const router = useRouter();

  return (
    <Card
      onClick={() => router.push(href)}
      className="flex flex-col bg-slate-50 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-indigo-50 hover:shadow-lg hover:scale-105 transition-all duration-300 group-hover:bg-blue-50 group-hover:outline-blue-200 hover:cursor-pointer"
    >
      <CardHeader>
        <CardTitle className="text-zinc-800 text-xl font-bold group-hover:text-blue-600 transition-colors duration-300">
          {newTitle}
        </CardTitle>
      </CardHeader>
      <CardFooter className="mt-auto">
        <p className="text-stone-500 text-base group-hover:text-gray-600 transition-colors duration-300">
          {formatThaiDate(date)}
        </p>
      </CardFooter>
    </Card>
  );
};

const NewsSkeleton = () => {
  return (
    <section className="wrapper space-y-5">
      <div className="flex justify-between">
        <div className="h-6 w-32 bg-gray-300 rounded animate-pulse"></div>
        <div className="h-6 w-24 bg-gray-300 rounded animate-pulse"></div>
      </div>
      <div className="grid md:grid-cols-4 gap-5">
        {[...Array(8)].map((_, index) => (
          <NewsCardSkeleton key={index} />
        ))}
      </div>
    </section>
  );
};

const NewsCardSkeleton = () => {
  return (
    <div className="flex w-full h-full">
      <Card className="flex flex-col bg-slate-50 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-indigo-50 w-full">
        <CardHeader>
          <div className="space-y-3">
            <div className="h-5 w-full bg-gray-300 rounded animate-pulse"></div>
            <div className="h-5 w-3/4 bg-gray-300 rounded animate-pulse"></div>
            <div className="h-5 w-1/2 bg-gray-300 rounded animate-pulse"></div>
          </div>
        </CardHeader>
        <CardFooter className="mt-auto">
          <div className="h-4 w-20 bg-gray-300 rounded animate-pulse"></div>
        </CardFooter>
      </Card>
    </div>
  );
};
