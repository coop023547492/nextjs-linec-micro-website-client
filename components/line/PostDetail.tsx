"use client";

import Image from "next/image";
/* import { Skeleton } from "@/components/ui/skeleton"; */
import { formatThaiDate } from "@/lib/utils";
import { usePostDetail } from "./hook/usePostDetail";
import { notFound } from "next/navigation";

export default function PostDetail({ postId }: { postId: string }) {
  const { post } = usePostDetail(postId);

  if (!post?.data) notFound();

  const thaiDate = formatThaiDate(post?.data.fixDate);

  const formattedText = post?.data.description.replace(/\r\n|\n|\r/g, "<br />");

  return (
    <div className="flex flex-col items-center gap-5 py-2.5 ">
      <PostTitle title={post?.data.title} thaiDate={thaiDate} />
      <div className="md:max-w-screen-md flex flex-col gap-[30px] w-full">
        <PostImage imageUrl={post?.data.imageUrl} title={post?.data.title} />
        <PostText formattedText={formattedText} />
      </div>
    </div>
  );
}

const PostTitle = ({
  title,
  thaiDate,
}: {
  title: string;
  thaiDate: string;
}) => {
  return (
    <div className="post-title flex flex-col text-center gap-2.5">
      <h1 className="hidden font-normal">ข่าวสารสหกรณ์</h1>
      <h3 className="text-[#333333] text-3xl font-bold">{title}</h3>
      <small>{thaiDate}</small>
    </div>
  );
};

const PostImage = ({
  imageUrl,
  title,
}: {
  imageUrl: string;
  title: string;
}) => {
  return (
    <div className="relative w-full aspect-[1/1] overflow-hidden rounded-md">
      <Image
        fill
        src={`${process.env.NEXT_PUBLIC_BASE_URL}${imageUrl}`}
        alt={title}
        className="object-cover"
        priority
      />
    </div>
  );
};

const PostText = ({ formattedText }: { formattedText: string }) => {
  return (
    <div className="flex-grow prose prose-strong:text-gray-500 prose-headings:text-gray-500 max-w-none">
      <div className="text-lg leading-relaxed text-gray-500 space-y-6">
        <div dangerouslySetInnerHTML={{ __html: formattedText }}></div>
      </div>
    </div>
  );
};

/* function PostSkeleton() {
  return (
    <div className="w-full flex flex-col items-center gap-9 my-5 px-2.5 lg:px-0">
      <div className="post-title flex flex-col text-center gap-5">
        <Skeleton className="hidden w-40 h-10" />
        <Skeleton className="w-60 h-8" />
        <Skeleton className="w-24 h-4" />
      </div>
      <div className="post-content w-full lg:max-w-lg flex flex-col gap-[30px]">
        <div className="relative w-full aspect-[1/1]">
          <Skeleton className="w-full h-full" />
        </div>
        <Skeleton className="w-full h-6" />
        <Skeleton className="w-full h-6" />
        <Skeleton className="w-full h-6" />
        <Skeleton className="w-full h-6" />
        <div className="hidden post-download p-5 bg-gradient-to-br from-[#00a8e3] to-[#3a67e5] rounded-[10px] flex flex-col gap-3">
          <Skeleton className="w-32 h-6" />
          <div className="flex items-center justify-between">
            <div className="flex gap-3 items-center">
              <Skeleton className="w-10 h-10" />
              <Skeleton className="w-40 h-5" />
            </div>
            <Skeleton className="w-10 h-10" />
          </div>
        </div>
      </div>
    </div>
  );
} */
