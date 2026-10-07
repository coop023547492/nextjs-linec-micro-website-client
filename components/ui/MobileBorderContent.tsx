import { cn } from "@/lib/utils";

export default function MobileBorderContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const baseClass =
    "w-full p-2.5 bg-white/40 rounded-[20px] shadow-[3px_12px_18px_0px_rgba(7,48,72,0.05)] border border-white/50 flex flex-col gap-y-5";

  return <div className={cn(baseClass, className)}>{children}</div>;
}
