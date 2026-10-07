import { cn } from "@/lib/utils";
import { COOP_DOMAIN_COMMITTEE_URL } from "@/utils/constants";
import Image from "next/image";

export default function CategoryCard({
  img,
  name,
  position,
  type = "leader",
}: {
  img: string;
  name: string;
  position: string;
  type?: "member" | "leader";
}) {
  return (
    <div className="flex flex-col justify-start items-center gap-3">
      <Image
        src={`${COOP_DOMAIN_COMMITTEE_URL}/${img}`}
        alt={name}
        width={160}
        height={160}
        className={cn(
          "object-contain rounded-s-3xl",
          type === "leader" ? "w-40 h-40 " : "w-32 h-32"
        )}
      />
      <h3 className="text-center text-Dark-grey text-base font-bold">{name}</h3>
      <h5 className="text-center text-stone-500 text-lg">{position}</h5>
    </div>
  );
}
