import { cn } from "@/lib/utils";

export default function BorderContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const baseClass =
    "p-2.5 lg:p-5 bg-white/40 rounded-[20px] shadow-[3px_12px_18px_0px_rgba(7,48,72,0.05)] border border-white/50 flex flex-col gap-5";

  return <div className={cn(baseClass, className)}>{children}</div>;
}
