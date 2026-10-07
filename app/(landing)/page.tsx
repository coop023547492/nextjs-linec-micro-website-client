import Agencies from "@/components/landing/Agencies";
import BannerCarousel from "@/components/landing/BannerCarousel";
import DownloadFeature from "@/components/landing/DownloadFeature";
import Features from "@/components/landing/Features";
import GalleryFeature from "@/components/landing/GalleryFeature";
import InterestInfo from "@/components/landing/InterestInfo";
import LineInfo from "@/components/landing/LineInfo";
import News from "@/components/landing/News";
import Performance from "@/components/landing/Performance";
import RecieptOnline from "@/components/landing/RecieptOnline";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <BannerCarousel />
      <div className="bg-white py-5">
        <Features />
        <News />
        <section className="wrapper grid md:grid-cols-4 gap-5">
          <div className="md:col-span-2">
            <Performance />
          </div>
          <RecieptOnline />
          <LineInfo />
        </section>
      </div>
      <div className="w-full relative px-2.5 py-5 bg-gradient-to-l from-[#A4DAFF] to-[#3A68E5] rounded-tl-[10px] rounded-tr-[10px]">
        <Image
          src="/images/bg-rating.png"
          alt="bg-rating"
          fill
          className="object-cover absolute left-0 top-0 w-full h-full opacity-10"
        />
        <InterestInfo />
      </div>
      <div className=" bg-white py-5">
        <div className="wrapper grid md:grid-cols-2 gap-11">
          <DownloadFeature />
          <GalleryFeature />
        </div>
      </div>
      <div className="py-5 bg-neutral-100 ">
        <Agencies />
      </div>
    </>
  );
}
