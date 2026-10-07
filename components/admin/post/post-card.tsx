"use client";

import { useAuth } from "@/components/auth/context/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAllPost } from "../hook/useAllPost";
import { ClockIcon, UserIcon } from "lucide-react";
import { Post } from "@/utils/types";
import Image from "next/image";
import { format } from "date-fns";
import PaginationNew from "@/components/PaginationNew";
import FloatingPostEditButtons from "./floting-post-edit-buttons";

export default function PostCard({ page }: { page: string }) {
  const { user } = useAuth();
  const { data, isLoading } = useAllPost(Number(page));

  if (user?.role !== "ADMIN") {
    return <div>You do not have permission to access this page.</div>;
  }

  if (isLoading) return <p>Loading....</p>;

  if (!data?.posts?.length) return <p>No Data</p>;

  return (
    <>
      <h1 className="text-2xl font-bold">โพสต์ทั้งหมด</h1>
      <p className=" text-sm text-gray-500">
        จำนวนโพสต์: {data?.pages?.totalCount}
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data?.posts?.map((post: Post) => (
          <div key={post.id} className="relative">
            <div>
              <Card className="w-full max-w-2xl mx-auto">
                <CardHeader>
                  <div className="w-full h-40 relative overflow-hidden rounded-md">
                    {post.imageUrl && (
                      <Image
                        src={process.env.NEXT_PUBLIC_BASE_URL + post.imageUrl}
                        alt={post.title}
                        fill
                        priority
                        className="object-cover"
                      />
                    )}
                  </div>
                  <CardTitle className=" text-lg line-clamp-1 mt-2">
                    {post?.title || "ไม่มีชื่อเรื่อง"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm mb-4 line-clamp-3">
                    {post?.description ? (
                      <div
                        dangerouslySetInnerHTML={{ __html: post.description }}
                      />
                    ) : (
                      "ไม่มีเนื้อหา"
                    )}
                  </div>

                  <div className="space-y-2">
                    <InfoItem
                      icon={UserIcon}
                      text={post?.postByUser || "ไม่ระบุชื่อผู้ใช้"}
                    />
                    <InfoItem
                      icon={ClockIcon}
                      text={
                        post?.fixDate
                          ? format(new Date(post.fixDate), "dd/MM/yyyy")
                          : "ไม่ระบุวันที่"
                      }
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
            <FloatingPostEditButtons post={post} page={page} />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-5">
        <PaginationNew
          currentPage={Number(page) || 1}
          totalPages={Number(data?.pages?.totalPages)}
        />
      </div>
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const InfoItem = ({ icon: Icon, text }: { icon: any; text: string }) => {
  return (
    <div className="flex items-center text-sm">
      <Icon className="mr-2 h-4 w-4 text-muted-foreground flex-shrink-0" />
      <span className="line-clamp-1">{text}</span>
    </div>
  );
};
