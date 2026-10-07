"use client";

import { GalleryProps } from "@/utils/types";
import useGalleryById from "./hook/useGalleryById";
import { COOP_DOMAIN_GALLERY_URL } from "@/utils/constants";
import Image from "next/image";
import { formatThaiDate } from "@/lib/utils";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function GalleryDetails({ galleryId }: { galleryId: string }) {
  const { data }: { data: GalleryProps } = useGalleryById(galleryId);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  if (!data) {
    return <p>No data available</p>;
  }

  // รวมรูปปกและรูปอื่นๆ ทั้งหมด
  const allImages = [data.gallery_cover, ...data.photos];

  const openModal = (imageSrc: string, index: number) => {
    setSelectedImage(imageSrc);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (currentIndex < allImages.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedImage(allImages[currentIndex + 1]);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedImage(allImages[currentIndex - 1]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  };

  return (
    data && (
      <div className="wrapper flex flex-col items-center gap-8">
        <div className=" flex flex-col w-full items-center gap-5 pb-2.5 border-b border-stone-300">
          <h1 className="text-Dark-grey text-center text-3xl font-bold">
            {data.topic}
          </h1>
          <p className="text-stone-500 text-base mb-5">
            {formatThaiDate(data.postdate)}
          </p>
        </div>
        <div className="flex justify-center ">
          <Image
            src={`${COOP_DOMAIN_GALLERY_URL}/${data.gallery_cover}`}
            alt="Gallery Cover"
            width={820}
            height={400}
            className="w-auto h-auto rounded-[20px] object-cover cursor-pointer hover:opacity-90 transition-all duration-300 hover:scale-[1.02] border-2 border-gray-200 hover:border-blue-400 shadow-lg hover:shadow-xl"
            onClick={() => openModal(data.gallery_cover, 0)}
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {data.photos.map((photo, index) => (
            <Image
              key={index}
              src={`${COOP_DOMAIN_GALLERY_URL}/${photo}`}
              alt={`Gallery Photo ${index + 1}`}
              width={400}
              height={300}
              className="w-full h-auto rounded-[10px] object-cover cursor-pointer hover:opacity-90 transition-all duration-300 hover:scale-105 transform border-2 border-gray-200 hover:border-blue-400 shadow-md hover:shadow-lg"
              onClick={() => openModal(photo, index + 1)}
            />
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-2 md:p-4 animate-fadeIn"
            onClick={closeModal}
            onKeyDown={handleKeyPress}
            tabIndex={0}
          >
            <div className="relative w-full h-full flex items-center justify-center animate-scaleIn">
              {/* Modal Header with Close Button */}
              <div className="absolute top-2 md:top-4 left-2 md:left-8 right-2 md:right-6 flex justify-between items-center px-2 md:px-6 z-50">
                <div className="bg-black bg-opacity-50 text-white px-2 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm border border-white border-opacity-30 backdrop-blur-sm">
                  <span className="font-medium">
                    {currentIndex + 1} / {allImages.length}
                  </span>
                </div>
                <button
                  onClick={closeModal}
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 md:p-3 text-white transition-all duration-200 hover:scale-110 border border-white border-opacity-30 backdrop-blur-sm hover:rotate-90"
                >
                  <X size={16} className="md:hidden" />
                  <X size={20} className="hidden md:block" />
                </button>
              </div>

              {/* Navigation Buttons */}
              <div className="absolute inset-y-0 left-1 md:left-4 right-1 md:right-4 flex items-center justify-between px-1 md:px-4 pointer-events-none z-50">
                {/* Previous Button */}
                {currentIndex > 0 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="pointer-events-auto bg-white bg-opacity-15 hover:bg-opacity-25 rounded-full p-2 md:p-4 text-white transition-all duration-300 hover:scale-110 border border-white border-opacity-30 backdrop-blur-sm shadow-lg hover:shadow-xl animate-slideInLeft group"
                  >
                    <ChevronLeft
                      size={20}
                      className="md:hidden group-hover:-translate-x-0.5 transition-transform duration-200"
                    />
                    <ChevronLeft
                      size={28}
                      className="hidden md:block group-hover:-translate-x-0.5 transition-transform duration-200"
                    />
                  </button>
                )}

                {/* Next Button */}
                {currentIndex < allImages.length - 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="pointer-events-auto bg-white bg-opacity-15 hover:bg-opacity-25 rounded-full p-2 md:p-4 text-white transition-all duration-300 hover:scale-110 border border-white border-opacity-30 backdrop-blur-sm shadow-lg hover:shadow-xl animate-slideInRight group"
                  >
                    <ChevronRight
                      size={20}
                      className="md:hidden group-hover:translate-x-0.5 transition-transform duration-200"
                    />
                    <ChevronRight
                      size={28}
                      className="hidden md:block group-hover:translate-x-0.5 transition-transform duration-200"
                    />
                  </button>
                )}
              </div>

              {/* Main Image Container */}
              <div
                className="relative flex items-center justify-center animate-zoomIn mx-8 md:mx-16 z-40"
                onClick={(e) => e.stopPropagation()}
                style={{
                  maxWidth: "calc(100vw - 4rem)",
                  maxHeight: "calc(100vh - 6rem)",
                }}
              >
                <Image
                  src={`${COOP_DOMAIN_GALLERY_URL}/${selectedImage}`}
                  alt="Selected Gallery Image"
                  width={1200}
                  height={800}
                  className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg md:rounded-xl shadow-2xl border-2 md:border-4 border-white border-opacity-20 backdrop-blur-sm"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    width: "auto",
                    height: "auto",
                  }}
                  quality={100}
                />
              </div>

              {/* Modal Footer with Image Info */}
              <div className="absolute bottom-2 md:bottom-4 left-0 right-0 flex justify-center px-2 md:px-6 z-60">
                <div className="bg-black bg-opacity-60 text-white px-3 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl border border-white border-opacity-30 backdrop-blur-sm animate-slideInUp shadow-lg max-w-xs md:max-w-md text-center">
                  <p className="text-xs md:text-sm font-medium truncate">
                    {data.topic}
                  </p>
                  <p className="text-xs text-gray-300 mt-1">
                    {formatThaiDate(data.postdate)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes scaleIn {
            from {
              transform: scale(0.8);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }

          @keyframes zoomIn {
            from {
              transform: scale(0.9);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }

          @keyframes slideInLeft {
            from {
              transform: translateX(-30px);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes slideInRight {
            from {
              transform: translateX(30px);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes slideInUp {
            from {
              transform: translateY(30px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
          }

          .animate-scaleIn {
            animation: scaleIn 0.3s ease-out;
          }

          .animate-zoomIn {
            animation: zoomIn 0.4s ease-out;
          }

          .animate-slideInLeft {
            animation: slideInLeft 0.4s ease-out;
          }

          .animate-slideInRight {
            animation: slideInRight 0.4s ease-out;
          }

          .animate-slideInUp {
            animation: slideInUp 0.4s ease-out;
          }
        `}</style>
      </div>
    )
  );
}
