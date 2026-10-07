"use client";

import Image from "next/image";
import Link from "next/link";

import { GalleryFeatureProps } from "@/utils/types";
import useGalleryFeatues from "../gallery/hook/useGalleryFeatues";
import { COOP_DOMAIN_GALLERY_URL } from "@/utils/constants";
import { useRouter } from "next/navigation";

export default function GalleryFeature() {
  const { data, isLoading } = useGalleryFeatues();
  const router = useRouter();
  if (isLoading) {
    return <GalleryFeatureSkeleton />;
  }

  if (!data || data.length === 0) {
    return <p>no data available</p>;
  }

  return (
    <section className="flex flex-col gap-5 w-full">
      <div className="flex justify-between">
        <h5 className="text-Light-grey text-lg font-bold">ภาพข่าวสหกรณ์</h5>
        <Link className="Main-dark-Blue text-lg font-bold" href="/gallery">
          ดูทั้งหมด→
        </Link>
      </div>

      {/* Mobile: แสดง 4 items, Desktop: แสดง 3 items */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {/* Mobile: แสดงทั้ง 4 items */}
        <div className="md:hidden contents">
          {data.map((item: GalleryFeatureProps) => (
            <div
              onClick={() => router.push(`/gallery/${item.id}`)}
              key={item.id}
              className="flex flex-col items-center justify-center h-full space-y-5 group transition-all duration-300 hover:-translate-y-1 transform hover:cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg border-2 border-gray-200 hover:border-blue-400 shadow-md hover:shadow-xl transition-all duration-300">
                <Image
                  src={`${COOP_DOMAIN_GALLERY_URL}/${item.gallery_cover}`}
                  alt="Gallery Cover"
                  width={520}
                  height={400}
                  className="w-auto h-40 object-cover transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
              <p className="text-zinc-800 text-base group-hover:text-blue-600 group-hover:font-medium transition-all duration-200">
                {item.topic.length > 40
                  ? `${item.topic.slice(0, 40)}...`
                  : item.topic}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop: แสดงเฉพาะ 3 items แรก */}
        <div className="hidden md:contents">
          {data.slice(0, 3).map((item: GalleryFeatureProps) => (
            <div
              onClick={() => router.push(`/gallery/${item.id}`)}
              key={item.id}
              className="flex flex-col items-center justify-center h-full space-y-5 group transition-all duration-300 hover:-translate-y-1 transform hover:cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg border-2 border-gray-200 hover:border-blue-400 shadow-md hover:shadow-xl transition-all duration-300">
                <Image
                  src={`${COOP_DOMAIN_GALLERY_URL}/${item.gallery_cover}`}
                  alt="Gallery Cover"
                  width={520}
                  height={400}
                  className="w-auto h-40 object-cover transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
              <p className="text-zinc-800 text-base group-hover:text-blue-600 group-hover:font-medium transition-all duration-200">
                {item.topic.length > 40
                  ? `${item.topic.slice(0, 40)}...`
                  : item.topic}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const GalleryFeatureSkeleton = () => {
  return (
    <section className="flex flex-col gap-5 w-full">
      <div className="flex justify-between">
        <div className="h-6 w-32 bg-gray-300 rounded animate-pulse"></div>
        <div className="h-6 w-24 bg-gray-300 rounded animate-pulse"></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {/* Mobile Skeleton: 4 items */}
        <div className="md:hidden contents">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center space-y-5 animate-pulse"
            >
              <div className="w-full h-40 bg-gray-300 rounded-lg"></div>
              <div className="h-5 w-3/4 bg-gray-300 rounded"></div>
            </div>
          ))}
        </div>

        {/* Desktop Skeleton: 3 items */}
        <div className="hidden md:contents">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center space-y-5 animate-pulse"
            >
              <div className="w-full h-40 bg-gray-300 rounded-lg"></div>
              <div className="h-5 w-3/4 bg-gray-300 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
