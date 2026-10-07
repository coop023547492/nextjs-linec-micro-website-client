import { Skeleton } from "../ui/skeleton";

export default function DownloadCardSkeleton({
  count = 2,
}: {
  count?: number;
}) {
  return (
    <div className="px-5 pt-5 pb-2.5 bg-white bg-opacity-40 rounded-[20px] shadow-[3px_12px_18px_0px_rgba(7,48,72,0.05)] outline outline-1 outline-offset-[-1px] outline-white outline-opacity-50 flex flex-col gap-2.5 w-full">
      <div className="title">
        <Skeleton className="w-32 h-6" />
      </div>
      {Array.from({ length: count }, (_, i) => (
        <CardSkeletonItem key={i} />
      ))}
    </div>
  );
}

const CardSkeletonItem = () => {
  return (
    <div className="content flex items-center py-3.5 border-b border-stone-300 gap-2.5">
      <Skeleton className="w-6 h-6 rounded" />
      <Skeleton className="h-5 flex-1" />
      <Skeleton className="w-6 h-6 rounded" />
    </div>
  );
};
