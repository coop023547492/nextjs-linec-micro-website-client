"use client";

import CreatePost from "@/components/admin/post/CreatePost";
import { useAuth } from "@/components/auth/context/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default function Addpage() {
  const { user } = useAuth();
  const queryClient = new QueryClient();
  if (user?.role !== "ADMIN") {
    return <div>You do not have permission to access this page.</div>;
  }
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Card>
        <CardHeader>
          <CardTitle>เพิ่มข่าวสาร</CardTitle>
        </CardHeader>
        <CardContent>
          <CreatePost />
        </CardContent>
      </Card>
    </HydrationBoundary>
  );
}
