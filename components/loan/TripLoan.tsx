import DownloadById from "../downlaod/sub/DownloadById";
import DownloadSub from "../downlaod/sub/DownloadSub";
import BorderContent from "../ui/BorderContent";
import MobileAccordion from "../ui/MobileAccordion";
import MobileBorderContent from "../ui/MobileBorderContent";
import SectionTitle from "../ui/SectionTitle";
import TableData from "../ui/TableData";
import { mobileTripLoan, tripData, tripHeader } from "./config-table";

export default function TripLoan() {
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
      id="เงินกู้สามัญเพื่อการทัศนศึกษา"
      className="hidden lg:block mx-auto"
    >
      <BorderContent>
        <SectionTitle>เงินกู้สามัญเพื่อการทัศนศึกษา</SectionTitle>
        <TableData
          headers={tripHeader}
          data={tripData}
          className="max-w-screen-sm"
        />
        <DownloadById id="41" />
        <DownloadSub subId="3" />
      </BorderContent>
    </section>
  );
};

const Mobile = () => {
  return (
    <section id="เงินกู้สามัญเพื่อการทัศนศึกษา" className="lg:hidden">
      <MobileBorderContent>
        <SectionTitle>เงินกู้สามัญเพื่อการทัศนศึกษา</SectionTitle>
        <MobileAccordion data={mobileTripLoan} />
        <DownloadById id="41" />
        <DownloadSub subId="3" />
      </MobileBorderContent>
    </section>
  );
};
