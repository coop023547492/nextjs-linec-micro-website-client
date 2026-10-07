import BorderContent from "../ui/BorderContent";
import MobileAccordion from "../ui/MobileAccordion";
import MobileBorderContent from "../ui/MobileBorderContent";
import SectionTitle from "../ui/SectionTitle";
import TableData from "../ui/TableData";
import {
  mobileNewYear06,
  newYear06Data,
  newYear06Header,
} from "./config-table";

export default function NewYear06() {
  return (
    <>
      <DestopNewYear06 />
      <MoblieNewYear06 />
    </>
  );
}

const DestopNewYear06 = () => {
  return (
    <section id="ปีใหม่06" className="hidden lg:block mx-auto">
      <BorderContent>
        <SectionTitle>
          เงินฝากออมทรัพย์พิเศษปีใหม่ 2567 ระยะเวลา 60 เดือน (06)
        </SectionTitle>
        <TableData
          headers={newYear06Header}
          data={newYear06Data}
          className="max-w-screen-sm"
        />
      </BorderContent>
    </section>
  );
};

const MoblieNewYear06 = () => {
  return (
    <section id="ปีใหม่06" className="lg:hidden">
      <MobileBorderContent>
        <SectionTitle>
          เงินฝากออมทรัพย์พิเศษปีใหม่ 2567 ระยะเวลา 60 เดือน (06)
        </SectionTitle>
        <MobileAccordion data={mobileNewYear06} />
      </MobileBorderContent>
    </section>
  );
};
