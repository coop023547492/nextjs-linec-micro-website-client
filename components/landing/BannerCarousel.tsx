"use client";

import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import useBanners from "./hook/useBanners";
import { bannersProps } from "@/utils/types";
import { COOP_DOMAIN_BANNER_URL } from "@/utils/constants";

export default function BannerCarousel() {
  const { data, isLoading } = useBanners();

  if (isLoading) {
    return <BannerSkeleton />;
  }

  if (!data || data.length === 0) {
    return (
      <section className="wrapper flex justify-center items-center h-96">
        <p className="text-gray-500">No banners available</p>
      </section>
    );
  }

  return (
    <section className="wrapper flex">
      <Carousel
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 10000,
            stopOnInteraction: true,
            stopOnMouseEnter: true,
          }),
        ]}
        className="w-full mb-4 md:mb-8"
      >
        <CarouselContent>
          {data.map((item: bannersProps) => (
            <CarouselItem key={item.id}>
              {item.url ? (
                <Link href={item.url} target="_blank" rel="noopener noreferrer">
                  <div className="relative mx-auto">
                    <Image
                      src={`${COOP_DOMAIN_BANNER_URL}/${item.image}`}
                      alt={item.image}
                      height={0}
                      width={0}
                      sizes="100vw"
                      className="w-full h-auto"
                    />
                  </div>
                </Link>
              ) : (
                <div className="relative mx-auto">
                  <Image
                    src={`${COOP_DOMAIN_BANNER_URL}/${item.image}`}
                    alt={item.image}
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="w-full h-auto"
                  />
                </div>
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}

const BannerSkeleton = () => {
  return (
    <section className="wrapper flex">
      <div className="w-full mb-4 md:mb-8 relative">
        {/* Main Banner Skeleton */}
        <div className="relative mx-auto animate-pulse">
          <div className="w-full bg-gray-300 rounded-lg aspect-[16/9] md:aspect-[21/9]"></div>
        </div>

        {/* Navigation Buttons Skeleton */}
        <div className="absolute inset-y-0 left-4 flex items-center">
          <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse"></div>
        </div>
        <div className="absolute inset-y-0 right-4 flex items-center">
          <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse"></div>
        </div>

        {/* Carousel Indicators Skeleton */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {Array.from({ length: 3 }, (_, index) => (
            <div
              key={index}
              className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};
