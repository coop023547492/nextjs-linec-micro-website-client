import BorderContent from "../ui/BorderContent";
import TableDataNoBorder from "../ui/TableDataNoBorder";
import { savingMainData, savingMainHeader } from "./config-table";

export default function MainSaving() {
  return (
    <BorderContent className="lg:mx-auto">
      <TableDataNoBorder
        headers={savingMainHeader}
        data={savingMainData}
        className="max-w-screen-md"
      />
      <LostAccount />
    </BorderContent>
  );
}

/* const LostAccount = () => {
  return (
    <div className="flex justify-center items-center p-2.5  bg-white rounded-[10px] shadow-[3px_12px_18px_0px_rgba(7,48,72,0.05)] w-full max-w-screen-md mx-auto">
      <p className="text-center font-bold">
        หากสมุดคู่บัญชีทุกประเภทสูญหาย
        ต้องนำใบแจ้งความมาแสดงต่อเจ้าหน้าที่สหกรณ์ <br />
        เพื่อออกสมุดคู่บัญชีเล่มใหม่ โดยมีการคิดค่าธรรมเนียม
      </p>
    </div>
  );
}; */

const LostAccount = () => {
  return (
    <p className="text-center leading-relaxed font-bold lg:text-xl">
      หากสมุดคู่บัญชีทุกประเภทสูญหาย ต้องนำใบแจ้งความมาแสดงต่อเจ้าหน้าที่สหกรณ์{" "}
      <br />
      เพื่อออกสมุดคู่บัญชีเล่มใหม่ โดยมีการคิดค่าธรรมเนียม
    </p>
  );
};
