import DownloadById from "../downlaod/sub/DownloadById";
import BorderContent from "../ui/BorderContent";
import MobileAccordion from "../ui/MobileAccordion";
import MobileBorderContent from "../ui/MobileBorderContent";
import SectionTitle from "../ui/SectionTitle";
import TableData from "../ui/TableData";
import {
  mobileSpecialSavingsCollateral,
  specialSavingsCollateralData,
  specialSavingsCollateralHeader,
} from "./config-table";

export default function SpecialSavingsCollateral() {
  return (
    <>
      <DestopSpecialSavingsCollateral />
      <MoblieSpecialSavingsCollateral />
    </>
  );
}

const DestopSpecialSavingsCollateral = () => {
  return (
    <section id="หลักประกันเงินกู้" className="hidden lg:block mx-auto">
      <BorderContent>
        <SectionTitle>
          เงินฝากออมทรัพย์พิเศษ (หลักประกันเงินกู้) (04)
        </SectionTitle>
        <TableData
          headers={specialSavingsCollateralHeader}
          data={specialSavingsCollateralData}
          className="max-w-screen-sm"
        />
        <DownloadById id="10" />
      </BorderContent>
    </section>
  );
};

const MoblieSpecialSavingsCollateral = () => {
  return (
    <section id="หลักประกันเงินกู้" className="lg:hidden">
      <MobileBorderContent>
        <SectionTitle>
          เงินฝากออมทรัพย์พิเศษ (หลักประกันเงินกู้) (04)
        </SectionTitle>
        <MobileAccordion data={mobileSpecialSavingsCollateral} />
        <DownloadById id="10" />
      </MobileBorderContent>
    </section>
  );
};
