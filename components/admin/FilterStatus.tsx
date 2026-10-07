"use client";
import { useRouter, useSearchParams } from "next/navigation";

interface FilterStatusProps {
  name?: string; // label ชื่อของ filter
  param: string; // ชื่อ search param เช่น "member_status", "review_status"
  options: {
    value: string;
    label: string;
  }[];
  defaultValue?: string;
}

export default function FilterStatus({
  name,
  param,
  options,
  defaultValue = "",
}: FilterStatusProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentStatus = searchParams.get(param) ?? defaultValue;

  const handleChangeStatus = (status: string) => {
    // clone all existing search params
    const newParams = new URLSearchParams(searchParams.toString());

    if (status === defaultValue) {
      newParams.delete(param); // Remove param if it's default value
    } else {
      newParams.set(param, status);
    }

    // update URL keeping other params intact
    router.push(`?${newParams.toString()}`);
  };

  return (
    <div className="flex flex-col gap-2">
      {/* Filter Label */}
      {name && (
        <label className="text-sm font-medium text-gray-700">{name}</label>
      )}

      {/* Filter Buttons */}
      <div className="flex gap-2 p-1 bg-gray-100 rounded-lg">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => handleChangeStatus(option.value)}
            className={`relative px-4 py-2 rounded-md font-medium text-xs transition-all duration-300 transform ${
              currentStatus === option.value
                ? "bg-white text-blue-600 shadow-md scale-105"
                : "text-gray-600 hover:text-blue-600 hover:bg-white/50 hover:scale-102"
            }`}
          >
            {option.label}

            {/* Active indicator */}
            {currentStatus === option.value && (
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
