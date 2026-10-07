import { cn } from "@/lib/utils";
export default function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h4
      className={cn("text-[#3a67e5] text-center font-bold text-2xl", className)}
    >
      {children}
    </h4>
  );
}
