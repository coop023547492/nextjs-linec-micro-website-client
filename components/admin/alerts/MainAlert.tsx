"use client";

import { useQuery } from "@tanstack/react-query";
import { getAlertLineByDateApi } from "../api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  XCircle,
  Percent,
  PiggyBank,
  Banknote,
  BookAIcon,
} from "lucide-react";

export default function MainAlert({ date }: { date: string }) {
  const { data } = useQuery({
    queryKey: ["line-alert-date", date],
    queryFn: () => getAlertLineByDateApi({ date }),
  });

  const loanRegisterSuccess = data?.loan_register?.success?.length || 0;
  const loanRegisterUnsuccess = data?.loan_register?.unsuccess?.length || 0;
  const loanRegisterTotal = loanRegisterSuccess + loanRegisterUnsuccess;

  const successCount = data?.loan_paid?.success?.length || 0;
  const unsuccessCount = data?.loan_paid?.unsuccess?.length || 0;
  const totalCount = successCount + unsuccessCount;

  const interestSuccessCount = data?.interest_paid?.success?.length || 0;
  const interestUnsuccessCount = data?.interest_paid?.unsuccess?.length || 0;
  const interestTotalCount = interestSuccessCount + interestUnsuccessCount;

  const depositSuccessCount = data?.deposit?.success?.length || 0;
  const depositUnsuccessCount = data?.deposit?.unsuccess?.length || 0;
  const depositTotalCount = depositSuccessCount + depositUnsuccessCount;

  const withdrawSuccessCount = data?.withdraw?.success?.length || 0;
  const withdrawUnsuccessCount = data?.withdraw?.unsuccess?.length || 0;
  const withdrawTotalCount = withdrawSuccessCount + withdrawUnsuccessCount;

  const renderSection = (
    title: string,
    icon: React.ReactNode,
    successData: string[] | undefined,
    unsuccessData: string[] | undefined,
    successCount: number,
    unsuccessCount: number,
    colorTheme: "loan" | "interest" | "deposit" | "withdraw" | "loanRegister"
  ) => {
    const colorClasses = {
      loanRegister: {
        bg: "bg-pink-50",
        border: "border-pink-100",
        hover: "hover:bg-pink-100",
        text: "text-pink-700",
        icon: "text-pink-500",
        badge: "bg-pink-100 text-pink-700",
        scrollbar: "scrollbar-thumb-pink-200",
      },
      loan: {
        bg: "bg-blue-50",
        border: "border-blue-100",
        hover: "hover:bg-blue-100",
        text: "text-blue-700",
        icon: "text-blue-500",
        badge: "bg-blue-100 text-blue-700",
        scrollbar: "scrollbar-thumb-blue-200",
      },
      interest: {
        bg: "bg-orange-50",
        border: "border-orange-100",
        hover: "hover:bg-orange-100",
        text: "text-orange-700",
        icon: "text-orange-500",
        badge: "bg-orange-100 text-orange-700",
        scrollbar: "scrollbar-thumb-orange-200",
      },
      deposit: {
        bg: "bg-green-50",
        border: "border-green-100",
        hover: "hover:bg-green-100",
        text: "text-green-700",
        icon: "text-green-500",
        badge: "bg-green-100 text-green-700",
        scrollbar: "scrollbar-thumb-green-200",
      },
      withdraw: {
        bg: "bg-red-50",
        border: "border-red-100",
        hover: "hover:bg-red-100",
        text: "text-red-700",
        icon: "text-red-500",
        badge: "bg-red-100 text-red-700",
        scrollbar: "scrollbar-thumb-red-200",
      },
    };

    const colors = colorClasses[colorTheme];

    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Success Section */}
        <div className="space-y-3">
          <div
            className={`flex items-center gap-2 pb-2 border-b ${colors.border}`}
          >
            <CheckCircle className={`h-5 w-5 ${colors.icon}`} />
            <h3 className={`text-lg sm:text-xl font-semibold ${colors.text}`}>
              สำเร็จ
            </h3>
            <Badge className={`${colors.badge} text-xs`}>{successCount}</Badge>
          </div>

          <div
            className={`max-h-60 sm:max-h-80 overflow-y-auto scrollbar-thin ${colors.scrollbar} scrollbar-track-gray-100`}
          >
            {successData && successData.length > 0 ? (
              <ul className="space-y-2">
                {successData.map((item: string, index: number) => (
                  <li
                    key={`success-${index}`}
                    className={`flex items-start gap-2 p-2 sm:p-3 ${colors.bg} rounded-lg border ${colors.border} ${colors.hover} transition-colors duration-200`}
                  >
                    <CheckCircle
                      className={`h-4 w-4 ${colors.icon} mt-0.5 flex-shrink-0`}
                    />
                    <span className="text-sm sm:text-base text-gray-700 break-words">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="flex flex-col items-center justify-center py-8 text-gray-500">
                <CheckCircle className="h-12 w-12 text-gray-300 mb-2" />
                <p className="text-sm">ไม่มีรายการที่สำเร็จ</p>
              </div>
            )}
          </div>
        </div>

        {/* Unsuccess Section */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-red-100">
            <XCircle className="h-5 w-5 text-red-500" />
            <h3 className="text-lg sm:text-xl font-semibold text-red-700">
              ไม่สำเร็จ
            </h3>
            <Badge className="bg-red-100 text-red-700 text-xs">
              {unsuccessCount}
            </Badge>
          </div>

          <div className="max-h-60 sm:max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-red-200 scrollbar-track-gray-100">
            {unsuccessData && unsuccessData.length > 0 ? (
              <ul className="space-y-2">
                {unsuccessData.map((item: string, index: number) => (
                  <li
                    key={`unsuccess-${index}`}
                    className="flex items-start gap-2 p-2 sm:p-3 bg-red-50 rounded-lg border border-red-100 hover:bg-red-100 transition-colors duration-200"
                  >
                    <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-700 break-words">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="flex flex-col items-center justify-center py-8 text-gray-500">
                <XCircle className="h-12 w-12 text-gray-300 mb-2" />
                <p className="text-sm">ไม่มีรายการที่ไม่สำเร็จ</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {/* จ่ายเงินกู้ Card - สีฟ้า #df18bd */}
      <Card className="shadow-lg border-0 bg-gradient-to-br from-pink-50 to-pink-100">
        <CardHeader className="pb-4 border-b border-pink-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <CardTitle className="text-xl sm:text-2xl font-bold text-pink-800 flex items-center gap-2">
              <BookAIcon className="h-6 w-6 text-pink-600" />
              ลงรับเอกสาร
            </CardTitle>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="text-xs sm:text-sm border-pink-300"
              >
                รวม {loanRegisterTotal} รายการ
              </Badge>
              <Badge className="bg-pink-500 text-xs sm:text-sm">
                สำเร็จ {loanRegisterSuccess}
              </Badge>
              <Badge variant="destructive" className="text-xs sm:text-sm">
                ไม่สำเร็จ {loanRegisterUnsuccess}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          {renderSection(
            "ลงรับเอกสาร",
            <Banknote />,
            data?.loan_register?.success,
            data?.loan_register?.unsuccess,
            loanRegisterSuccess,
            loanRegisterUnsuccess,
            "loanRegister"
          )}
        </CardContent>
      </Card>

      {/* จ่ายเงินกู้ Card - สีฟ้า #2196F3 */}
      <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-blue-100">
        <CardHeader className="pb-4 border-b border-blue-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <CardTitle className="text-xl sm:text-2xl font-bold text-blue-800 flex items-center gap-2">
              <Banknote className="h-6 w-6 text-blue-600" />
              จ่ายเงินกู้
            </CardTitle>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="text-xs sm:text-sm border-blue-300"
              >
                รวม {totalCount} รายการ
              </Badge>
              <Badge className="bg-blue-500 text-xs sm:text-sm">
                สำเร็จ {successCount}
              </Badge>
              <Badge variant="destructive" className="text-xs sm:text-sm">
                ไม่สำเร็จ {unsuccessCount}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          {renderSection(
            "จ่ายเงินกู้",
            <Banknote />,
            data?.loan_paid?.success,
            data?.loan_paid?.unsuccess,
            successCount,
            unsuccessCount,
            "loan"
          )}
        </CardContent>
      </Card>

      {/* ดอกเบี้ย Card - สีส้ม #FF9800 */}
      <Card className="shadow-lg border-0 bg-gradient-to-br from-orange-50 to-orange-100">
        <CardHeader className="pb-4 border-b border-orange-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <CardTitle className="text-xl sm:text-2xl font-bold text-orange-800 flex items-center gap-2">
              <Percent className="h-6 w-6 text-orange-600" />
              จ่ายดอกเบี้ย
            </CardTitle>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="text-xs sm:text-sm border-orange-300"
              >
                รวม {interestTotalCount} รายการ
              </Badge>
              <Badge className="bg-orange-500 text-xs sm:text-sm">
                สำเร็จ {interestSuccessCount}
              </Badge>
              <Badge variant="destructive" className="text-xs sm:text-sm">
                ไม่สำเร็จ {interestUnsuccessCount}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          {renderSection(
            "ดอกเบี้ย",
            <Percent />,
            data?.interest_paid?.success,
            data?.interest_paid?.unsuccess,
            interestSuccessCount,
            interestUnsuccessCount,
            "interest"
          )}
        </CardContent>
      </Card>

      {/* เงินฝาก Card - สีเขียว #4CAF50 */}
      <Card className="shadow-lg border-0 bg-gradient-to-br from-green-50 to-green-100">
        <CardHeader className="pb-4 border-b border-green-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <CardTitle className="text-xl sm:text-2xl font-bold text-green-800 flex items-center gap-2">
              <PiggyBank className="h-6 w-6 text-green-600" />
              ฝากเงิน
            </CardTitle>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="text-xs sm:text-sm border-green-300"
              >
                รวม {depositTotalCount} รายการ
              </Badge>
              <Badge className="bg-green-500 text-xs sm:text-sm">
                สำเร็จ {depositSuccessCount}
              </Badge>
              <Badge variant="destructive" className="text-xs sm:text-sm">
                ไม่สำเร็จ {depositUnsuccessCount}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          {renderSection(
            "เงินฝาก",
            <PiggyBank />,
            data?.deposit?.success,
            data?.deposit?.unsuccess,
            depositSuccessCount,
            depositUnsuccessCount,
            "deposit"
          )}
        </CardContent>
      </Card>

      {/* ถอนเงิน Card - สีแดง #F44336 */}
      <Card className="shadow-lg border-0 bg-gradient-to-br from-red-50 to-red-100">
        <CardHeader className="pb-4 border-b border-red-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <CardTitle className="text-xl sm:text-2xl font-bold text-red-800 flex items-center gap-2">
              <Banknote className="h-6 w-6 text-red-600" />
              ถอนเงิน
            </CardTitle>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="text-xs sm:text-sm border-red-300"
              >
                รวม {withdrawTotalCount} รายการ
              </Badge>
              <Badge className="bg-red-500 text-xs sm:text-sm">
                สำเร็จ {withdrawSuccessCount}
              </Badge>
              <Badge variant="destructive" className="text-xs sm:text-sm">
                ไม่สำเร็จ {withdrawUnsuccessCount}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          {renderSection(
            "ถอนเงิน",
            <Banknote />,
            data?.withdraw?.success,
            data?.withdraw?.unsuccess,
            withdrawSuccessCount,
            withdrawUnsuccessCount,
            "withdraw"
          )}
        </CardContent>
      </Card>
    </div>
  );
}
