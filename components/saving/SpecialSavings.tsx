import DownloadById from "../downlaod/sub/DownloadById";
import BorderContent from "../ui/BorderContent";
import MobileAccordion from "../ui/MobileAccordion";
import MobileBorderContent from "../ui/MobileBorderContent";
import SectionTitle from "../ui/SectionTitle";
import TableData from "../ui/TableData";

import {
  mobileSpecialSavings,
  specialSavingsData,
  specialSavingsHeader,
} from "./config-table";

export default function SpecialSavings() {
  return (
    <>
      <DestopSpecialSavings />
      <MoblieSpecialSavings />
    </>
  );
}

const DestopSpecialSavings = () => {
  return (
    <section id="เงินฝากออมทรัพย์พิเศษ" className="hidden lg:block mx-auto">
      <BorderContent>
        <SectionTitle>เงินฝากออมทรัพย์พิเศษ (02)</SectionTitle>
        <TableData
          headers={specialSavingsHeader}
          data={specialSavingsData}
          className="max-w-screen-sm"
        />
        <DownloadById id="9" />
      </BorderContent>
    </section>
  );
};

const MoblieSpecialSavings = () => {
  return (
    <section id="เงินฝากออมทรัพย์พิเศษ" className="lg:hidden">
      <MobileBorderContent>
        <SectionTitle>เงินฝากออมทรัพย์พิเศษ (02)</SectionTitle>
        <MobileAccordion data={mobileSpecialSavings} />
        <DownloadById id="9" />
      </MobileBorderContent>
    </section>
  );
};
