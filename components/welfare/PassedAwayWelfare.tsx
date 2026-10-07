import DownloadSub from "../downlaod/sub/DownloadSub";
import BorderContent from "../ui/BorderContent";
import MobileAccordion from "../ui/MobileAccordion";
import MobileBorderContent from "../ui/MobileBorderContent";
import SectionTitle from "../ui/SectionTitle";
import TableData from "../ui/TableData";
import {
  mobilePassedAway,
  mobilePassedAwaySub,
  passedAwayData,
  passedAwayHeader,
  passedAwaySubData,
  passedAwaySubHeader,
} from "./config-data";

export default function PassedAwayWelfare() {
  return (
    <>
      <DestopPassedAway />
      <MobilePassedAway />
    </>
  );
}

const DestopPassedAway = () => {
  return (
    <section id="ถึงแก่กรรม" className="hidden lg:block mx-auto">
      <BorderContent>
        <SectionTitle>เงินสวัสดิการสงเคราะห์ กรณีถึงแก่กรรม</SectionTitle>
        <TableData
          headers={passedAwayHeader}
          data={passedAwayData}
          className="max-w-screen-sm"
        />
        <TableData
          headers={passedAwaySubHeader}
          data={passedAwaySubData}
          className="max-w-screen-sm"
        />
        <DownloadSub subId="19" />
      </BorderContent>
    </section>
  );
};

const MobilePassedAway = () => {
  return (
    <section id="ถึงแก่กรรม" className="lg:hidden">
      <MobileBorderContent>
        <SectionTitle>เงินสวัสดิการสงเคราะห์ กรณีถึงแก่กรรม</SectionTitle>
        <MobileAccordion data={mobilePassedAway} />
        {/* <TableData headers={passedAwaySubHeader} data={passedAwaySubData} /> */}
        <MobileAccordion data={mobilePassedAwaySub} title="อายุการเป็นสมาชิก" />
        <DownloadSub subId="19" />
      </MobileBorderContent>
    </section>
  );
};
