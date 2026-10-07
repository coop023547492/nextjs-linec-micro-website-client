"use client";

import Image from "next/image";
import useGallerys from "./hook/useGallerys";
import Link from "next/link";
import { GalleryFeatureProps } from "@/utils/types";
import { COOP_DOMAIN_GALLERY_URL } from "@/utils/constants";
import PaginationNew from "../PaginationNew";

export default function GalleryMain({ page }: { page: string }) {
  const { data } = useGallerys({ page });

  if (!data || data.data.length === 0) {
    return (
      <div className="text-center text-gray-500">
        No galleries available at the moment.
      </div>
    );
  }

  // Filter data row 0 และ 1 ออกมาเป็นตัวแปรใหม่
  const featureData = data.data.slice(0, 2);
  // Filter data.data โดยเอา row 0 และ 1 ออกไป (เหลือแต่ row 2 เป็นต้นไป)
  const remainingData = data.data.slice(2);

  return (
    data && (
      <div className="flex flex-col gap-10">
        {/* Feature Section - 2 คอลัมน์ */}
        <div className="grid md:grid-cols-2 gap-5">
          {featureData.map((gallery: GalleryFeatureProps) => (
            <Link
              href={`/gallery/${gallery.id}`}
              key={gallery.id}
              className="space-y-3 group"
            >
              <div className="relative overflow-hidden rounded-[20px] border-2 border-gray-200 hover:border-blue-400 shadow-lg hover:shadow-2xl transition-all duration-500">
                <Image
                  src={`${COOP_DOMAIN_GALLERY_URL}/${gallery.gallery_cover}`}
                  alt={gallery.topic}
                  width={500}
                  height={300}
                  className="w-full h-auto md:h-96 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 group-hover:saturate-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-500"></div>
              </div>
              <p className="text-zinc-800 text-2xl font-bold group-hover:text-blue-600 transition-colors duration-300">
                {gallery.topic}
              </p>
            </Link>
          ))}
        </div>

        {/* Remaining Section - 3 คอลัมน์ */}
        <div className="grid md:grid-cols-3 gap-7">
          {remainingData.map((gallery: GalleryFeatureProps) => (
            <Link
              href={`/gallery/${gallery.id}`}
              key={gallery.id}
              className="space-y-3 group"
            >
              <div className="relative overflow-hidden rounded-[10px] border-2 border-gray-200 hover:border-blue-400 shadow-md hover:shadow-xl transition-all duration-400">
                <Image
                  src={`${COOP_DOMAIN_GALLERY_URL}/${gallery.gallery_cover}`}
                  alt={gallery.topic}
                  width={500}
                  height={300}
                  className="w-full h-auto md:h-60 object-cover transition-all duration-400 group-hover:scale-105 group-hover:brightness-105 group-hover:contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400"></div>
                <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-8 transition-all duration-400"></div>
              </div>
              <p className="text-zinc-800 text-xl font-bold group-hover:text-blue-600 transition-colors duration-300">
                {gallery.topic}
              </p>
            </Link>
          ))}
        </div>
        {/* Pagination Section */}
        <PaginationNew
          currentPage={Number(page)}
          totalPages={Number(data.pagination.totalPages)}
        />
      </div>
    )
  );
}
