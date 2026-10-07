import BorderContent from "../ui/BorderContent";
import SectionTitle from "../ui/SectionTitle";
import TableData from "../ui/TableData";
import { emergencyLoanAppData, emergencyLoanAppHeader } from "./config-table";

export default function EmergencyLoanApp() {
  return (
    <section id="เงินกู้ฉุกเฉินผ่านแอป">
      <BorderContent>
        <SectionTitle>เงินกู้ฉุกเฉินผ่านแอป</SectionTitle>
        <TableData
          headers={emergencyLoanAppHeader}
          data={emergencyLoanAppData}
        />
      </BorderContent>
    </section>
  );
}
