import BorderContent from "../ui/BorderContent";
import MobileAccordion from "../ui/MobileAccordion";
import MobileBorderContent from "../ui/MobileBorderContent";
import SectionTitle from "../ui/SectionTitle";
import TableData from "../ui/TableData";
import {
  mobileNewYear07,
  newYear07Data,
  newYear07Header,
} from "./config-table";

export default function NewYear07() {
  return (
    <>
      <DestopNewYear07 />
      <MoblieNewYear07 />
    </>
  );
}

const DestopNewYear07 = () => {
  return (
    <section id="ปีใหม่07" className="hidden lg:block mx-auto">
      <BorderContent>
        <SectionTitle>
          เงินฝากออมทรัพย์พิเศษปีใหม่ รุ่นสะสมทรัพย์ ระยะเวลา 60 เดือน (07)
        </SectionTitle>
        <TableData
          headers={newYear07Header}
          data={newYear07Data}
          className="max-w-screen-sm"
        />
      </BorderContent>
    </section>
  );
};

const MoblieNewYear07 = () => {
  return (
    <section id="ปีใหม่07" className="lg:hidden">
      <MobileBorderContent>
        <SectionTitle>
          เงินฝากออมทรัพย์พิเศษปีใหม่ รุ่นสะสมทรัพย์ ระยะเวลา 60 เดือน (07)
        </SectionTitle>
        <MobileAccordion data={mobileNewYear07} />
      </MobileBorderContent>
    </section>
  );
};
