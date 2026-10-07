import DownloadSub from "../downlaod/sub/DownloadSub";
import BorderContent from "../ui/BorderContent";
import MobileAccordion from "../ui/MobileAccordion";
import MobileBorderContent from "../ui/MobileBorderContent";
import SectionTitle from "../ui/SectionTitle";
import TableData from "../ui/TableData";

import {
  mobileOwnShareLoan,
  ownShareLoanData,
  ownShareLoanExampleLink,
  ownShareLoanHeader,
} from "./config-table";

export default function OwnShareLoan() {
  return (
    <>
      <Destop />
      <Mobile />
    </>
  );
}

const Destop = () => {
  return (
    <section id="เงินกู้หุ้นตนเอง" className="hidden lg:block mx-auto">
      <BorderContent>
        <SectionTitle>เงินกู้หุ้นตนเอง</SectionTitle>
        <TableData
          headers={ownShareLoanHeader}
          data={ownShareLoanData}
          className="max-w-screen-sm "
        />
        <DownloadSub subId="2" exampleLink={ownShareLoanExampleLink} />
      </BorderContent>
    </section>
  );
};

const Mobile = () => {
  return (
    <section id="เงินกู้หุ้นตนเอง" className="lg:hidden">
      <MobileBorderContent>
        <SectionTitle>เงินกู้หุ้นตนเอง</SectionTitle>
        <MobileAccordion data={mobileOwnShareLoan} />
        <DownloadSub subId="2" exampleLink={ownShareLoanExampleLink} />
      </MobileBorderContent>
    </section>
  );
};
