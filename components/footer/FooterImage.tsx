import Image from "next/image";
import imageLeft from "@/image/landing/footer-left.svg";
import imageRight from "@/image/landing/footer-right.svg";

export default function FooterImage() {
  return (
    <>
      <div className="hidden wrapper md:flex justify-between items-center Main-dark-Blue">
        <Image
          src={imageLeft}
          height={100}
          width={100}
          alt="image-left"
          className="w-40 h-40 object-cover"
        />
        <div className="flex flex-col justify-center items-center gap-2.5">
          <p className="text-3xl font-normal">
            ความพึงพอใจของท่าน คือบริการของเรา
          </p>
          <p className="font-bold text-xl">สหกรณ์ออมทรัพย์ พม.</p>
        </div>
        <Image
          src={imageRight}
          height={100}
          width={100}
          alt="image-right"
          className="w-20 h-40 object-cover"
        />
      </div>
      <div className="flex wrapper md:hidden justify-between items-center Main-dark-Blue">
        <Image
          src={imageLeft}
          height={100}
          width={100}
          alt="image-left"
          className="w-20 h-20 object-cover"
        />
        <div className="flex flex-col justify-center items-center text-xl gap-2.5">
          <div className="text-center font-normal">
            <p>ความพึงพอใจของท่าน</p>
            <p>คือบริการของเรา</p>
          </div>
          <p className="font-bold text-center">สหกรณ์ออมทรัพย์ พม.</p>
        </div>
        <Image
          src={imageRight}
          height={100}
          width={100}
          alt="image-right"
          className="w-10 h-20 object-cover"
        />
      </div>
    </>
  );
}
