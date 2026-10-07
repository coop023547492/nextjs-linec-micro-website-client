import { getListLoanApi } from "@/components/line/api";
import DebtPaymentMain from "@/components/line/DebtPaymentMain";
import { SearchParamsProps } from "@/components/line/type";
import ScrollToTop from "@/components/ui/ScrollToTop";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export const metadata = {
  title: "ตารางประมาณการชำระหนี้",
};

export default async function DebtPaymentPage({
  searchParams,
}: {
  searchParams: SearchParamsProps;
}) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["loan-list-type"],
    queryFn: getListLoanApi,
  });
  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <DebtPaymentMain params={searchParams} />
      </HydrationBoundary>
      <ScrollToTop />
    </>
  );
}
