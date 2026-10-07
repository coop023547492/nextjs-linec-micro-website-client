import Image from "next/image";
import Link from "next/link";

export default function FacebookInfo() {
  return (
    <Link
      href="https://www.facebook.com/profile.php?id=61571711157391"
      target="_blank"
      rel="noopener noreferrer"
      className="group w-full h-full bg-gradient-to-l from-blue-600/80 to-blue-600/0 rounded-[10px] flex flex-col gap-5 items-center justify-center py-3 relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-green-200/50 hover:scale-[1.02] transform"
    >
      <Image
        src="/images/about-us-fb-bg.png"
        fill
        alt="line-info-bg"
        className="absolute top-0 left-0 w-full h-full object-cover rounded-[20px] opacity-80 transition-all duration-500 group-hover:opacity-90 group-hover:scale-105"
        priority
      />

      {/* Gradient overlay animation */}
      <div className="absolute inset-0  bg-gradient-to-l from-blue-600/80 to-blue-600/0 rounded-[10px] opacity-0 transition-all duration-300 group-hover:opacity-100"></div>

      <h5 className="text-blue-600 text-xl font-bold z-10 transition-all duration-300 group-hover:text-green-100 group-hover:scale-105 group-hover:-translate-y-1 transform">
        Facebook
      </h5>

      <Image
        src="/images/about-us-facebook.svg"
        height={50}
        width={50}
        alt="fb icon"
        className="w-24 h-24 md:w-36 md:h-36 z-10 transition-all duration-300 group-hover:border-green-200 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-white/30 group-hover:rotate-2 transform"
      />

      {/* Desktop Icons */}
      <div className="hidden md:flex justify-between items-center w-full px-5  z-10">
        <Image
          src="/images/about-us-w1.svg"
          height={60}
          width={60}
          alt="line-icon"
          className="w-20 h-24 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:-translate-y-2 transform"
        />
        <Image
          src="/images/about-us-m1.svg"
          height={100}
          width={100}
          alt="line-users"
          className="w-20 h-28 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6 group-hover:translate-y-1 transform"
        />
      </div>

      {/* Mobile Icons */}
      <Image
        src="/images/about-us-w1.svg"
        height={60}
        width={60}
        alt="line-icon"
        className="w-24 h-32 md:hidden absolute bottom-1 left-0 z-10 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:-translate-y-2 group-hover:translate-x-1 transform"
      />
      <Image
        src="/images/about-us-m1.svg"
        height={100}
        width={100}
        alt="line-users"
        className="w-24 h-36 md:hidden absolute bottom-0 right-0 z-10 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6 group-hover:translate-y-1 group-hover:-translate-x-1 transform"
      />

      {/* Floating particles effect */}
      <div className="absolute top-4 left-4 w-2 h-2 bg-white/40 rounded-full opacity-0 transition-all duration-1000 group-hover:opacity-100 group-hover:animate-ping"></div>
      <div className="absolute top-8 right-8 w-1 h-1 bg-green-200/60 rounded-full opacity-0 transition-all duration-1000 delay-200 group-hover:opacity-100 group-hover:animate-pulse"></div>
      <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-white/50 rounded-full opacity-0 transition-all duration-1000 delay-500 group-hover:opacity-100 group-hover:animate-bounce"></div>
    </Link>
  );
}
