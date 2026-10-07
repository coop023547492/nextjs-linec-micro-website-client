import BorderContent from "../ui/BorderContent";
import SectionTitleSmall from "../ui/SectionTitleSmall";
import TableData from "../ui/TableData";
import { generalLoansForData, generalLoansForHeader } from "./config-table";

export default function GeneralLoansFor() {
  return (
    <section id="เงินกู้สามัญเพื่อ">
      <BorderContent>
        <SectionTitleSmall>
          เงินกู้สามัญเพื่อการลงทุนประกอบอาชีพ, เงินกู้สามัญเพื่อการศึกษา,
          เงินกู้สามัญเพื่อการทัศนศึกษา,
          เงินกู้สามัญเพื่อการซื้อรถยนต์หรือรถจักรยานยนต์
        </SectionTitleSmall>
        <TableData headers={generalLoansForHeader} data={generalLoansForData} />
      </BorderContent>
    </section>
  );
}
