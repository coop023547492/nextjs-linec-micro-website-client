"use client";

import { useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import Image from "next/image";

export default function ContactToggle() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-5 flex flex-col items-end space-y-2 z-50">
      <div className="flex flex-col items-end space-y-2 transition-all duration-300">
        <button
          className={`
             p-7 relative rounded-full bg-green-500 text-white shadow-md hover:bg-green-600 transform transition-all duration-300
            ${
              open
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2 pointer-events-none"
            }
          `}
          onClick={() => window.open("https://lin.ee/gCKzLdBX", "_blank")}
        >
          <Image
            src="/images/line-logo.svg"
            alt="line-logo"
            fill
            className="object-fill w-full h-full rounded-full top-0 left-0"
          />
        </button>

        <button
          className={`
            p-4 rounded-full bg-primary text-white shadow-md hover:bg-primary/90 transform transition-all duration-300 
            ${
              open
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2 pointer-events-none"
            }
          `}
          onClick={() => (window.location.href = "tel:023547486")}
        >
          <Phone className="w-6 h-6" />
        </button>
      </div>

      <button
        onClick={() => setOpen(!open)}
        className="p-4 rounded-full bg-[#3A68E5] text-white shadow-lg hover:bg-[#3A68E5]/90 transition-all"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
}
