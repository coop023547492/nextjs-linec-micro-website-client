import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import c1 from "@/image/landing/c-1.png";
import c2 from "@/image/landing/c-2.png";
import c3 from "@/image/landing/c-3.png";
import Image from "next/image";

export default function CarouselGroup() {
  return (
    <Carousel opts={{ loop: true }} className="w-full">
      <CarouselContent>
        <CarouselItem>
          <Image
            className="w-full rounded-[20px] shadow-[3px_12px_18px_0px_rgba(7,48,72,0.05)] object-cover"
            src={c1}
            alt="c1"
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            className="w-full rounded-[20px] shadow-[3px_12px_18px_0px_rgba(7,48,72,0.05)] object-cover"
            src={c2}
            alt="c2"
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            className="w-full rounded-[20px] shadow-[3px_12px_18px_0px_rgba(7,48,72,0.05)] object-cover"
            src={c3}
            alt="c3"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
