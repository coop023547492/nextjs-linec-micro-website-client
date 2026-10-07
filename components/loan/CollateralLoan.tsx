import DownloadSub from "../downlaod/sub/DownloadSub";
import BorderContent from "../ui/BorderContent";
import MobileAccordion from "../ui/MobileAccordion";
import MobileBorderContent from "../ui/MobileBorderContent";
import SectionTitle from "../ui/SectionTitle";
import TableData from "../ui/TableData";
import {
  collateralLoanData,
  collateralLoanHeader,
  mobileCollateralLoan,
} from "./config-table";

export default function CollateralLoan() {
  return (
    <>
      <Destop />
      <Mobile />
    </>
  );
}

const Destop = () => {
  return (
    <section id="ใช้หลักทรัพย์ค้ำประกัน" className="hidden lg:block mx-auto">
      <BorderContent>
        <SectionTitle>เงินกู้พิเศษ (ใช้หลักทรัพย์ค้ำประกัน)</SectionTitle>
        <TableData
          headers={collateralLoanHeader}
          data={collateralLoanData}
          className="max-w-screen-sm"
        />
        <DownloadSub subId="3" />
      </BorderContent>
    </section>
  );
};

const Mobile = () => {
  return (
    <section id="ใช้หลักทรัพย์ค้ำประกัน" className="lg:hidden">
      <MobileBorderContent>
        <SectionTitle>เงินกู้พิเศษ (ใช้หลักทรัพย์ค้ำประกัน)</SectionTitle>
        <MobileAccordion data={mobileCollateralLoan} />
        <DownloadSub subId="3" />
      </MobileBorderContent>
    </section>
  );
};
