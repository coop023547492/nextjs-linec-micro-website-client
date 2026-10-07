import DownloadById from "../downlaod/sub/DownloadById";
import DownloadSub from "../downlaod/sub/DownloadSub";
import BorderContent from "../ui/BorderContent";
import MobileAccordion from "../ui/MobileAccordion";
import MobileBorderContent from "../ui/MobileBorderContent";
import SectionTitle from "../ui/SectionTitle";
import TableData from "../ui/TableData";
import {
  educationData,
  educationHeader,
  mobileEducationLoan,
} from "./config-table";

export default function EducationLoan() {
  return (
    <>
      <Destop />
      <Mobile />
    </>
  );
}

const Destop = () => {
  return (
    <section id="เงินกู้สามัญเพื่อการศึกษา" className="hidden lg:block mx-auto">
      <BorderContent>
        <SectionTitle>เงินกู้สามัญเพื่อการศึกษา</SectionTitle>
        <TableData
          headers={educationHeader}
          data={educationData}
          className="max-w-screen-sm"
        />
        <DownloadById id="40" />
        <DownloadSub subId="3" />
      </BorderContent>
    </section>
  );
};

const Mobile = () => {
  return (
    <section id="เงินกู้สามัญเพื่อการศึกษา" className="lg:hidden">
      <MobileBorderContent>
        <SectionTitle>เงินกู้สามัญเพื่อการศึกษา</SectionTitle>
        <MobileAccordion data={mobileEducationLoan} />
        <DownloadById id="40" />
        <DownloadSub subId="3" />
      </MobileBorderContent>
    </section>
  );
};
