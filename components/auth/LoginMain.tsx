"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useAuth } from "./context/AuthContext";
import LoginForm from "./LoginForm";
import { useRouter } from "next/navigation";
import LoaderSpin from "@/components/ui/loader-spin";

export default function LoginMain() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  if (isLoading) return <LoaderSpin />;

  if (user && user.role === "ADMIN") {
    router.push("/admin/dashboard");
  }
  if (user && user.role === "AUDITOR") {
    router.push("/admin/auditor");
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      {!user ? (
        <Card>
          <CardHeader>
            <CardTitle>เข้าสู่ระบบ</CardTitle>
            <CardDescription>
              ระบบหลังบ้าน Line Connect สหกรณ์ออมทรัพย์ฯ พม.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
      ) : (
        <div className="text-center">
          <h1 className="text-2xl font-bold">คุณได้เข้าสู่ระบบแล้ว</h1>
          <p className="mt-4">กำลังนำทางไปยังหน้าหลัก...</p>
        </div>
      )}
    </div>
  );
}
