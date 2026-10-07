import DownloadById from "../downlaod/sub/DownloadById";
import DownloadSub from "../downlaod/sub/DownloadSub";
import BorderContent from "../ui/BorderContent";
import MobileAccordion from "../ui/MobileAccordion";
import MobileBorderContent from "../ui/MobileBorderContent";
import SectionTitle from "../ui/SectionTitle";
import TableData from "../ui/TableData";
import { carData, carHeader, mobileCarLoan } from "./config-table";

export default function CarLoan() {
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
      id="เงินกู้สามัญเพื่อการซื้อรถยนต์หรือรถจักรยานยนต์"
      className="hidden lg:block mx-auto"
    >
      <BorderContent>
        <SectionTitle>
          เงินกู้สามัญเพื่อการซื้อรถยนต์หรือรถจักรยานยนต์
        </SectionTitle>
        <TableData
          headers={carHeader}
          data={carData}
          className="max-w-screen-sm"
        />
        <DownloadById id="42" />
        <DownloadSub subId="3" />
      </BorderContent>
    </section>
  );
};

const Mobile = () => {
  return (
    <section
      id="เงินกู้สามัญเพื่อการซื้อรถยนต์หรือรถจักรยานยนต์"
      className="lg:hidden"
    >
      <MobileBorderContent>
        <SectionTitle>
          เงินกู้สามัญเพื่อการซื้อรถยนต์หรือรถจักรยานยนต์
        </SectionTitle>
        <MobileAccordion data={mobileCarLoan} />
        <DownloadById id="42" />
        <DownloadSub subId="3" />
      </MobileBorderContent>
    </section>
  );
};
