import Image from "next/image";
import loader from "/image/loader.gif";

export default function LoaderSpin() {
  return (
    <div className=" flex w-full h-screen justify-center items-center">
      <Image src={loader} height={50} width={50} alt="Loading..." />
    </div>
  );
}
