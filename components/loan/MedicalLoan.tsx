import DownloadById from "../downlaod/sub/DownloadById";
import DownloadSub from "../downlaod/sub/DownloadSub";
import BorderContent from "../ui/BorderContent";
import MobileAccordion from "../ui/MobileAccordion";
import MobileBorderContent from "../ui/MobileBorderContent";
import SectionTitle from "../ui/SectionTitle";
import TableData from "../ui/TableData";
import { medicalData, medicalHeader, mobileMedicalLoan } from "./config-table";

export default function MedicalLoan() {
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
      id="เงินกู้สามัญเพื่อการรักษาพยาบาล"
      className="hidden lg:block mx-auto"
    >
      <BorderContent>
        <SectionTitle>เงินกู้สามัญเพื่อการรักษาพยาบาล</SectionTitle>
        <TableData
          headers={medicalHeader}
          data={medicalData}
          className="max-w-screen-sm"
        />
        <DownloadById id="44" />
        <DownloadSub subId="3" />
      </BorderContent>
    </section>
  );
};

const Mobile = () => {
  return (
    <section id="เงินกู้สามัญเพื่อการรักษาพยาบาล" className="lg:hidden">
      <MobileBorderContent>
        <SectionTitle>เงินกู้สามัญเพื่อการรักษาพยาบาล</SectionTitle>
        <MobileAccordion data={mobileMedicalLoan} />
        <DownloadById id="44" />
        <DownloadSub subId="3" />
      </MobileBorderContent>
    </section>
  );
};
