import DownloadSub from "../downlaod/sub/DownloadSub";
import BorderContent from "../ui/BorderContent";
import MobileAccordion from "../ui/MobileAccordion";
import MobileBorderContent from "../ui/MobileBorderContent";
import SectionTitle from "../ui/SectionTitle";
import TableData from "../ui/TableData";
import { fireData, fireHeader, mobileFire } from "./config-data";

export default function FireWelfare() {
  return (
    <>
      <DestopFire />
      <MobileFire />
    </>
  );
}

const DestopFire = () => {
  return (
    <section id="กรณีสมาชิกประสบอัคคีภัย" className="hidden lg:block mx-auto">
      <BorderContent>
        <SectionTitle>
          เงินสวัสดิการสงเคราะห์ กรณีสมาชิกประสบอัคคีภัย
        </SectionTitle>
        <TableData
          headers={fireHeader}
          data={fireData}
          className="max-w-screen-sm"
        />
        <DownloadSub subId="21" />
      </BorderContent>
    </section>
  );
};

const MobileFire = () => {
  return (
    <section id="กรณีสมาชิกประสบอัคคีภัย" className="lg:hidden">
      <MobileBorderContent>
        <SectionTitle>
          เงินสวัสดิการสงเคราะห์ กรณีสมาชิกประสบอัคคีภัย
        </SectionTitle>
        <MobileAccordion data={mobileFire} />
        <DownloadSub subId="21" />
      </MobileBorderContent>
    </section>
  );
};
