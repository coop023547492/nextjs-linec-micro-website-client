"use client";

import AdminSidebar from "@/components/admin/AdminSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useAuth } from "@/components/auth/context/AuthContext";
import { useRouter } from "next/navigation";
import LoaderSpin from "@/components/ui/loader-spin";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  if (isLoading) return <LoaderSpin />;

  if (!user) return router.push("/login");
  return (
    <>
      {user.id && !isLoading && (
        <SidebarProvider>
          <AdminSidebar />
          <SidebarTrigger className="print:hidden" />
          <div className="w-screen px-5 py-10 overflow-auto">{children}</div>
        </SidebarProvider>
      )}
    </>
  );
}
