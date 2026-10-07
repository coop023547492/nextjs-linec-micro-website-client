import LoginMain from "@/components/auth/LoginMain";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default async function LoginPage() {
  const queryClient = new QueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <LoginMain />
    </HydrationBoundary>
  );
}
