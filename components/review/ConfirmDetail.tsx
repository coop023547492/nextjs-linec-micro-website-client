"use client";

import { Card, CardContent } from "../ui/card";
import MemberConfirm from "./MemberConfirm";
import { Loader2Icon, CameraIcon, AlertCircleIcon } from "lucide-react";
import useStatement from "./hook/useStatement";
import { Button } from "../ui/button";
import { useQuery } from "@tanstack/react-query";
import { getMemberDetail } from "./api";
import { useState } from "react";
import { Alert, AlertTitle } from "../ui/alert";
import useAuditorMaster from "./hook/useAuditorMaster";

export default function ConfirmDetail({
  isAuditor = false,
  memberId,
}: {
  isAuditor?: boolean;
  memberId: string;
}) {
  const [isCapturing, setIsCapturing] = useState(false);

  const { statementData, isStatementing } = useStatement({
    memberId,
  });

  const { data, isLoading } = useQuery({
    queryKey: ["auditor-memberdetail", memberId],
    queryFn: () => getMemberDetail({ memberId }),
  });

  const { auditorMasterData, isAuditorMasterLoading } = useAuditorMaster({
    id: "1",
  });

  if (isLoading || isAuditorMasterLoading || isStatementing)
    return <p>กำลังโหลดข้อมูลสมาชิก...</p>;

  if (!auditorMasterData)
    return <p>ไม่พบข้อมูลการตรวจสอบการยืนยันยอดหุ้น หนี้และเงินฝาก</p>;

  const now = new Date();
  const isOpen =
    now >= new Date(auditorMasterData.start_at) &&
    now <= new Date(auditorMasterData.end_at);

  if (!isOpen && !isAuditor)
    return (
      <Alert
        variant="destructive"
        className="mt-5 md:w-max md:mx-auto text-center"
      >
        <AlertTitle>
          ขออภัย! ปัจจุบันอยู่นอกช่วงเวลาการยืนยันยอดประจำปี {""}
          {new Date(auditorMasterData.end_at).getFullYear() + 543}{" "}
          ซึ่งได้สิ้นสุดแล้ว
        </AlertTitle>
      </Alert>
    );

  if (!data) return <p>ไม่พบข้อมูลสำหรับสมาชิก</p>;

  return (
    <div className="flex flex-col gap-8 mt-5">
      <div className="print:hidden flex justify-center gap-3">
        <Button
          variant="outline"
          className="w-max hidden md:block"
          onClick={() => window.print()}
        >
          พิมพ์
        </Button>

        {!isAuditor && (
          <Button
            variant="outline"
            className="w-max flex items-center gap-2"
            onClick={() => captureScreen({ setIsCapturing, data })}
            disabled={isCapturing}
          >
            {isCapturing ? (
              <Loader2Icon className="h-4 w-4 animate-spin" />
            ) : (
              <CameraIcon className="h-4 w-4" />
            )}
            {isCapturing ? "กำลังบันทึก..." : "บันทึกรูป"}
          </Button>
        )}
      </div>

      {statementData?.member_status && <AlertAlreadyConfirm />}

      <div id="confirm-detail-content" className="bg-white px-1">
        <div className="title text-center space-y-2.5">
          <h4 className="sm:text-lg">
            เลขทะเบียนสมาชิก{" "}
            <span className="text-[#3a67e5] font-bold text-xl">
              {data.member_number}
            </span>
          </h4>
          <h5 className="text-[#333333] font-bold">{data.member_name}</h5>
          <h5 className="sm:text-lg">
            สังกัด{" "}
            <span className=" text-[#333333] font-bold">
              {data.member_unit}
            </span>
          </h5>
          <p className="text-sm text-left sm:text-base">
            สหกรณ์สหกรณ์ออมทรัพย์กระทรวงการพัฒนาสังคมและความมั่นคงของมนุษย์
            จากัด ขอเรียนว่า ณ วันที่{" "}
            <span className="text-[#3a67e5] font-bold text-lg">
              {data.date}
            </span>{" "}
            ท่านมี ยอดหุ้น หนี้ และเงินฝาก ดังรายละเอียดต่อไปนี้
          </p>
        </div>

        <div className="content sm:px-5 lg:px-10 space-y-5 mt-8">
          {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            data.contacts.map((contact: any, index: number) => {
              const total: string[] = contact.con_total
                ? contact.con_total.split(" ")
                : ["", "", ""];

              let newname;
              const name: string[] = contact.con_name
                ? contact.con_name.split(" ")
                : ["", "", "", ""];

              if (index === 0) {
                newname = (
                  <>
                    <span className="text-[#333333] font-bold">{name[0]}</span>{" "}
                    {name[1]}
                  </>
                );
              } else {
                newname = (
                  <>
                    {name[0]}{" "}
                    <span className="text-[#333333] font-bold">{name[1]}</span>{" "}
                    {name[2] || ""} {name[3] || ""} {name[4] || ""}
                  </>
                );
              }

              return (
                <div key={index} className="flex flex-col gap-2">
                  <div className="flex justify-between items-center font-bold text-xs sm:text-base">
                    <div>
                      {index + 1}. {contact.con_key}
                    </div>
                    <div className="text-end">
                      {total[0]}{" "}
                      <span className="text-[#3a67e5]">{total[1]}</span>{" "}
                      {total[2]}
                    </div>
                  </div>
                  <div className="text-xs sm:text-base ms-4">{newname}</div>
                </div>
              );
            })
          }
        </div>

        {statementData?.member_status && (
          <div className="mt-10">
            <AlertAlreadyConfirm />
          </div>
        )}

        <div className="footer text-sm sm:text-base flex flex-col items-center space-y-2 mt-8">
          <p>
            เพื่อประโยชน์ของท่าน
            โปรดตรวจสอบยอดเงินคงเหลือข้างต้นว่าถูกต้องหรือไม่
          </p>
          <Card>
            <CardContent className="flex flex-col gap-5 py-5 text-sm sm:text-base text-[#333333] leading-6">
              <p>
                เรียน ผู้สอบบัญชี
                สหกรณ์ออมทรัพย์กระทรวงการพัฒนาสังคมและความมั่นคงของมนุษย์ จำกัด
                ข้าพเจ้าขอเรียนว่า ยอดเงินคงเหลือข้างต้น ณ วันที่{" "}
                <span className="text-[#3a67e5] font-bold text-base">
                  {data.date}
                </span>{" "}
                ข้าพเจ้าตรวจสอบแล้วว่า
              </p>
              {isStatementing ? (
                <Loader2Icon className=" h-4 w-4 animate-spin" />
              ) : (
                <MemberConfirm
                  isAuditor={isAuditor}
                  memberId={memberId}
                  statement={statementData}
                  memberFullname={data.member_name}
                  memberUnit={data.member_uid}
                />
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

const AlertAlreadyConfirm = () => {
  return (
    <Alert variant="destructive" className="md:w-max md:mx-auto print:hidden">
      <div className="flex justify-center items-center gap-2 flex-wrap text-center">
        <AlertCircleIcon />
        <AlertTitle>คุณได้ทำการยืนยันยอดประจำปี 2569 เรียบร้อยแล้ว</AlertTitle>
      </div>
    </Alert>
  );
};

const captureScreen = async ({
  setIsCapturing,
  data,
}: {
  setIsCapturing: (isCapturing: boolean) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}) => {
  setIsCapturing(true);

  try {
    // ตรวจสอบว่าเปิดใน Line App หรือไม่
    const isLineApp = /Line/i.test(navigator.userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/i.test(navigator.userAgent);

    if (isLineApp) {
      // แสดง modal หรือ alert แนะนำให้เปิดบน browser ภายนอก
      const shouldOpenExternal = confirm(
        "เพื่อให้สามารถบันทึกรูปภาพได้ กรุณาเปิดลิงก์นี้ใน Browser ภายนอก\n\n" +
          (isIOS
            ? 'กดปุ่ม "..." มุมล่างขวา แล้วเลือก "เปิดใน Chrome"'
            : 'กดปุ่มเมนู แล้วเลือก "เปิดในเบราว์เซอร์ภายนอก"')
      );

      if (!shouldOpenExternal) {
        setIsCapturing(false);
        return;
      }
    }

    // Dynamic import html2canvas
    const html2canvas = (await import("html2canvas")).default;

    const element = document.getElementById("confirm-detail-content");
    if (!element) return;

    const canvas = await html2canvas(element, {
      useCORS: true,
      allowTaint: true,
      scale: 2,
      width: window.innerWidth - 20,
      height: element.scrollHeight,
      scrollX: 0,
      scrollY: 0,
    });

    const dataURL = canvas.toDataURL("image/png");

    if (isIOS || isLineApp || isAndroid) {
      // สำหรับ iOS/Line App: เปิดรูปในหน้าต่างใหม่
      const newWindow = window.open("", "_blank");
      if (newWindow) {
        newWindow.document.write(`
          <html>
            <head>
              <title>Confirm Detail - ${data?.member_number || "member"}</title>
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <style>
                body { 
                  margin: 0; 
                  padding: 20px; 
                  display: flex; 
                  flex-direction: column;
                  justify-content: center; 
                  align-items: center;
                  min-height: 100vh;
                  background: #f5f5f5;
                  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                }
                img { 
                  max-width: 100%; 
                  height: auto; 
                  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                  border-radius: 8px;
                  margin-bottom: 20px;
                }
                .instructions {
                  background: rgba(0,0,0,0.8);
                  color: white;
                  padding: 15px 20px;
                  border-radius: 10px;
                  font-size: 16px;
                  text-align: center;
                  margin-bottom: 20px;
                  line-height: 1.4;
                }
                .step {
                  margin: 10px 0;
                  padding: 10px;
                  background: rgba(255,255,255,0.9);
                  border-radius: 8px;
                  color: #333;
                }
              </style>
            </head>
            <body>
              <div class="instructions">
                📱 วิธีบันทึกรูปภาพ
              </div>
              ${
                isIOS
                  ? `
                <div class="step">
                  📍 สำหรับ iPhone/iPad:<br>
                  1. กดค้างที่รูปภาพ<br>
                  2. เลือก "บันทึกลงในรูปภาพ" หรือ "Save to Photos"
                </div>
              `
                  : `
                <div class="step">
                  📍 สำหรับ Android:<br>
                  1. กดค้างที่รูปภาพ<br>
                  2. เลือก "บันทึกรูปภาพ" หรือ "Download image"
                </div>
              `
              }
              <img src="${dataURL}" alt="Confirm Detail" />
            </body>
          </html>
        `);
        newWindow.document.close();
      }
    } else {
      // สำหรับ Desktop/Android Browser: ใช้วิธีดาวน์โหลดปกติ
      canvas.toBlob((blob) => {
        if (!blob) return;

        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `confirm-detail-${
          data?.member_number || "member"
        }-${new Date().getTime()}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }, "image/png");
    }
  } catch (error) {
    console.error("Error capturing screen:", error);
    alert("เกิดข้อผิดพลาดในการบันทึกรูปภาพ");
  } finally {
    setIsCapturing(false);
  }
};
