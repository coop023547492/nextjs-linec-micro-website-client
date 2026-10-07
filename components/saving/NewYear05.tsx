import BorderContent from "../ui/BorderContent";
import MobileAccordion from "../ui/MobileAccordion";
import MobileBorderContent from "../ui/MobileBorderContent";
import SectionTitle from "../ui/SectionTitle";
import TableData from "../ui/TableData";
import {
  mobileNewYear05,
  newYear05Data,
  newYear05Header,
} from "./config-table";

export default function NewYear05() {
  return (
    <>
      <DestopNewYear05 />
      <MoblieNewYear05 />
    </>
  );
}

const DestopNewYear05 = () => {
  return (
    <section id="ปีใหม่05" className="hidden lg:block mx-auto">
      <BorderContent>
        <SectionTitle>
          เงินฝากออมทรัพย์พิเศษปีใหม่ ระยะเวลา 60 เดือน (05)
        </SectionTitle>
        <TableData
          headers={newYear05Header}
          data={newYear05Data}
          className="max-w-screen-sm"
        />
      </BorderContent>
    </section>
  );
};

const MoblieNewYear05 = () => {
  return (
    <section id="ปีใหม่05" className="lg:hidden">
      <MobileBorderContent>
        <SectionTitle>
          เงินฝากออมทรัพย์พิเศษปีใหม่ ระยะเวลา 60 เดือน (05)
        </SectionTitle>
        <MobileAccordion data={mobileNewYear05} />
      </MobileBorderContent>
    </section>
  );
};
