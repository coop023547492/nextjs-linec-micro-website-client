import Link from "next/link";
import { Button } from "./button";
import { cn } from "@/lib/utils";

export default function FigmaButton({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <Button
      className={cn(
        "px-5 py-2.5 bg-gradient-to-r from-[#3a67e5] to-[#a4daff] rounded-[100px] flex justify-center items-center",
        className
      )}
      asChild
    >
      <Link className="text-white text-[13px] font-semibold" href={href}>
        {children}
      </Link>
    </Button>
  );
}
