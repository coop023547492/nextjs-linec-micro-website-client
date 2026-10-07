import {
  getAlertLineApi,
  getConnectLineApi,
  getMenuLineApi,
  getStatsConnectionStatusApi,
} from "@/components/admin/api";
import MainDashboard from "@/components/admin/dashboard/MainDashboard";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default async function AdMinPage({
  searchParams,
}: {
  searchParams: { menuDays: string; alertMenu: string; connectDays: string };
}) {
  const { menuDays, alertMenu, connectDays } = searchParams;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["connect-line-count", connectDays ? connectDays : "7"],
    queryFn: () => getConnectLineApi(connectDays ? connectDays : "7"),
  });

  await queryClient.prefetchQuery({
    queryKey: ["stats-connect-status"],
    queryFn: getStatsConnectionStatusApi,
  });

  await queryClient.prefetchQuery({
    queryKey: ["menu-line-count", menuDays ? menuDays : "7"],
    queryFn: () => getMenuLineApi({ days: menuDays ? menuDays : "7" }),
  });

  await queryClient.prefetchQuery({
    queryKey: ["alert-line-count", alertMenu ? alertMenu : "7"],
    queryFn: () => getAlertLineApi({ days: alertMenu ? alertMenu : "7" }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MainDashboard />
    </HydrationBoundary>
  );
}
