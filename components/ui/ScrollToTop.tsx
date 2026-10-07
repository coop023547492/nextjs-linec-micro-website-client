"use client";

import { SquareChevronUpIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-10 right-5 w-10 h-10 py-[5px] bg-white/60 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-blue-600 text-blue-600 inline-flex justify-center items-center transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      } hover:bg-blue-600 hover:text-white`}
    >
      <SquareChevronUpIcon />
    </button>
  );
}
