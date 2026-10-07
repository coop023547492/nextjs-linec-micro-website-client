"use client";

import HeaderLogo from "@/components/header/HeaderLogo";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-5">
      <HeaderLogo />
      <div className="p-6 max-w-screen-sm rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4">Not Found</h1>
        <p className="text-destructive">Cound not find requested page</p>
        <Button
          variant="outline"
          className="mt-4 ml-2"
          onClick={() => (window.location.href = "/")}
        >
          กลับหน้าหลัก
        </Button>
      </div>
    </div>
  );
}
