import DownloadById from "../downlaod/sub/DownloadById";
import DownloadSub from "../downlaod/sub/DownloadSub";
import BorderContent from "../ui/BorderContent";
import MobileAccordion from "../ui/MobileAccordion";
import MobileBorderContent from "../ui/MobileBorderContent";
import SectionTitle from "../ui/SectionTitle";
import TableData from "../ui/TableData";
import {
  careerInvestmentData,
  careerInvestmentHeader,
  mobileCareerInvestmentLoan,
} from "./config-table";

export default function CareerInvestmentLoan() {
  return (
    <>
      <Destop />
      <Mobile />
    </>
  );
}

const Destop = () => {
  return (
    <section
      id="เงินกู้สามัญเพื่อการลงทุนประกอบอาชีพ"
      className="hidden lg:block mx-auto"
    >
      <BorderContent>
        <SectionTitle>เงินกู้สามัญเพื่อการลงทุนประกอบอาชีพ</SectionTitle>
        <TableData
          headers={careerInvestmentHeader}
          data={careerInvestmentData}
          className="max-w-screen-sm"
        />
        <DownloadById id="43" />
        <DownloadSub subId="3" />
      </BorderContent>
    </section>
  );
};

const Mobile = () => {
  return (
    <section id="เงินกู้สามัญเพื่อการลงทุนประกอบอาชีพ" className="lg:hidden">
      <MobileBorderContent>
        <SectionTitle>เงินกู้สามัญเพื่อการลงทุนประกอบอาชีพ</SectionTitle>
        <MobileAccordion data={mobileCareerInvestmentLoan} />
        <DownloadById id="43" />
        <DownloadSub subId="3" />
      </MobileBorderContent>
    </section>
  );
};
