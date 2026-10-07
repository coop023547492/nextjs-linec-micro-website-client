import DownloadSub from "../downlaod/sub/DownloadSub";
import BorderContent from "../ui/BorderContent";
import MobileAccordion from "../ui/MobileAccordion";
import MobileBorderContent from "../ui/MobileBorderContent";
import SectionTitle from "../ui/SectionTitle";
import TableData from "../ui/TableData";
import {
  emergencyLoanData,
  emergencyLoanExampleLink,
  emergencyLoanHeader,
  mobileEmergencyLoan,
  mobileEmergencyLoanForGuarantee,
} from "./config-table";

export default function EmergencyLoan() {
  return (
    <>
      <Destop />
      <Mobile />
    </>
  );
}

const Destop = () => {
  return (
    <section id="เงินกู้ฉุกเฉิน" className="hidden lg:block mx-auto">
      <BorderContent>
        <SectionTitle>เงินกู้ฉุกเฉิน</SectionTitle>
        <TableData
          headers={emergencyLoanHeader}
          data={emergencyLoanData}
          className="max-w-screen-sm"
        />
        <DownloadSub subId="1" exampleLink={emergencyLoanExampleLink} />
      </BorderContent>
    </section>
  );
};

const Mobile = () => {
  return (
    <section id="เงินกู้ฉุกเฉิน" className="lg:hidden">
      <MobileBorderContent>
        <SectionTitle>เงินกู้ฉุกเฉิน</SectionTitle>
        <MobileAccordion data={mobileEmergencyLoan} />
        <MobileAccordion
          data={mobileEmergencyLoanForGuarantee}
          title="ค้ำประกัน"
        />
        <DownloadSub subId="1" exampleLink={emergencyLoanExampleLink} />
      </MobileBorderContent>
    </section>
  );
};
