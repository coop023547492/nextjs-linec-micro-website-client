import DownloadById from "../downlaod/sub/DownloadById";
import DownloadSub from "../downlaod/sub/DownloadSub";
import BorderContent from "../ui/BorderContent";
import MobileAccordion from "../ui/MobileAccordion";
import MobileBorderContent from "../ui/MobileBorderContent";
import SectionTitle from "../ui/SectionTitle";
import TableData from "../ui/TableData";
import {
  disastersData,
  disastersHeader,
  mobileDisastersLoan,
} from "./config-table";

export default function DisastersLoan() {
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
      id="เงินกู้สามัญเพื่อเหตุภัยพิบัติจากภัยธรรมชาติ"
      className="hidden lg:block mx-auto"
    >
      <BorderContent>
        <SectionTitle>
          เงินกู้สามัญเพื่อเหตุภัยพิบัติจากภัยธรรมชาติ
        </SectionTitle>
        <TableData
          headers={disastersHeader}
          data={disastersData}
          className="max-w-screen-sm"
        />
        <DownloadById id="62" />
        <DownloadSub subId="3" />
      </BorderContent>
    </section>
  );
};

const Mobile = () => {
  return (
    <section
      id="เงินกู้สามัญเพื่อเหตุภัยพิบัติจากภัยธรรมชาติ"
      className="lg:hidden"
    >
      <MobileBorderContent>
        <SectionTitle>
          เงินกู้สามัญเพื่อเหตุภัยพิบัติจากภัยธรรมชาติ
        </SectionTitle>
        <MobileAccordion data={mobileDisastersLoan} />
        <DownloadById id="62" />
        <DownloadSub subId="3" />
      </MobileBorderContent>
    </section>
  );
};
