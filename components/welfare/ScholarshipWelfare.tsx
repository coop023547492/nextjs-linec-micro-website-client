import BorderContent from "../ui/BorderContent";
import MobileBorderContent from "../ui/MobileBorderContent";
import SectionTitle from "../ui/SectionTitle";
import {
  mobileScholarship,
  scholarshipData,
  scholarshipHeader,
} from "./config-data";

import MobileAccordion from "../ui/MobileAccordion";
import TableData from "../ui/TableData";
import DownloadSub from "../downlaod/sub/DownloadSub";

export default function ScholarshipWelfare() {
  return (
    <>
      <DestopScholarship />
      <MobileScholarship />
    </>
  );
}

const DestopScholarship = () => {
  return (
    <section id="ทุนการศึกษาบุตร" className="hidden lg:block mx-auto">
      <BorderContent>
        <SectionTitle>ทุนการศึกษาบุตร</SectionTitle>
        <TableData
          headers={scholarshipHeader}
          data={scholarshipData}
          className="max-w-screen-sm"
        />
        <DownloadSub subId="20" />
      </BorderContent>
    </section>
  );
};

const MobileScholarship = () => {
  return (
    <section id="ทุนการศึกษาบุตร" className="lg:hidden">
      <MobileBorderContent>
        <SectionTitle>ทุนการศึกษาบุตร</SectionTitle>
        <MobileAccordion data={mobileScholarship} />
        <DownloadSub subId="20" />
      </MobileBorderContent>
    </section>
  );
};
