import ReviewHeader from "@/components/review/ReviewHeader";

export default function ReviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col wrapper">
      <ReviewHeader />
      <div className="flex-1">{children}</div>
    </div>
  );
}
