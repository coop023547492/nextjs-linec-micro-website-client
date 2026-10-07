import BorderContent from "../ui/BorderContent";
import TableDataNoBorder from "../ui/TableDataNoBorder";
import { welfareMainData, welfareMainHeader } from "./config-data";

export default function MianWelfare() {
  return (
    <BorderContent className="lg:mx-auto">
      <TableDataNoBorder
        headers={welfareMainHeader}
        data={welfareMainData}
        className="max-w-screen-md"
      />
    </BorderContent>
  );
}
