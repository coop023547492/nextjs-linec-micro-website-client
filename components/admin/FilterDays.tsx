"use client";
import { useRouter, useSearchParams } from "next/navigation";

export default function FilterDays({ param }: { param: string }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const days = searchParams.get(param) ?? "7";

  const handleChangeDay = (day: number) => {
    // clone all existing search params
    const newParams = new URLSearchParams(searchParams.toString());

    // set only the field you want to change
    newParams.set(param, day.toString());

    // update URL keeping other params (like alertdays) intact
    router.push(`?${newParams.toString()}`);
  };
  return (
    <div className="flex gap-2">
      {[1, 7, 14, 30].map((d) => (
        <button
          key={d}
          onClick={() => handleChangeDay(d)}
          className={`px-4 py-2 rounded ${
            days === d.toString()
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          {d} วัน
        </button>
      ))}
    </div>
  );
}
