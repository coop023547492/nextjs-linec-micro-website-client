"use client";

import { useAuth } from "@/components/auth/context/AuthContext";
import MemberStats from "./MemberStats";
import MenuStats from "./MenuStats";
import AlertStats from "./AlertStats";

export default function MainDashboard() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (user?.role !== "ADMIN") {
    return <div>You do not have permission to access this page.</div>;
  }

  return (
    <div className="flex flex-col gap-5">
      <h5 className="text-2xl font-bold">Welcome {user?.username}</h5>
      <MemberStats />
      <MenuStats />
      <AlertStats />
    </div>
  );
}
