import BorderContent from "../ui/BorderContent";
import SectionTitleSmall from "../ui/SectionTitleSmall";
import TableData from "../ui/TableData";
import { generalLoansFor2Data, generalLoansFor2Header } from "./config-table";

export default function GeneralLoansFor2() {
  return (
    <section id="เงินกู้สามัญเพื่อ2">
      <BorderContent>
        <SectionTitleSmall>
          เงินกู้สามัญเพื่อการรักษาพยาบาล,
          เงินกู้สามัญเพื่อเหตุภัยพิบัติจากภัยธรรมชาติ
        </SectionTitleSmall>
        <TableData
          headers={generalLoansFor2Header}
          data={generalLoansFor2Data}
        />
      </BorderContent>
    </section>
  );
}
