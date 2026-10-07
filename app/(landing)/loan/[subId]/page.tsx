import CareerInvestmentLoan from "@/components/loan/CareerInvestmentLoan";
import CarLoan from "@/components/loan/CarLoan";
import CollateralLoan from "@/components/loan/CollateralLoan";
import DisastersLoan from "@/components/loan/DisastersLoan";
import EducationLoan from "@/components/loan/EducationLoan";
import EmergencyLoan from "@/components/loan/EmergencyLoan";
import MedicalLoan from "@/components/loan/MedicalLoan";
import OrdinaryLoan from "@/components/loan/OrdinaryLoan";
import OwnShareLoan from "@/components/loan/OwnShareLoan";
import TripLoan from "@/components/loan/TripLoan";
import FigmaButton from "@/components/ui/FigmaButton";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default function SubLoanPage({ params }: { params: { subId: string } }) {
  const { subId } = params;
  const queryClient = new QueryClient();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="wrapper custom-sub-page-container">
        {subId === "emergency-loan" && <EmergencyLoan />}
        {subId === "ownshare-loan" && <OwnShareLoan />}
        {subId === "ordinary-loan" && <OrdinaryLoan />}
        {subId === "special-loan" && <CollateralLoan />}
        {subId === "investment-loan" && <CareerInvestmentLoan />}
        {subId === "education-loan" && <EducationLoan />}
        {subId === "tour-loan" && <TripLoan />}
        {subId === "car-loan" && <CarLoan />}
        {subId === "medical-loan" && <MedicalLoan />}
        {subId === "disasters-loan" && <DisastersLoan />}
        <FigmaButton className="mx-auto" href="/loan">
          ย้อนกลับ
        </FigmaButton>
      </div>
    </HydrationBoundary>
  );
}
