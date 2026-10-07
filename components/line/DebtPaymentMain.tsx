"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import DebtPaymentForm from "./DebtPaymentForm";
import DebtPaymentTable from "./DebtPaymentTable";
import { SearchParamsProps } from "./type";

export default function DebtPaymentMain({
  params,
}: {
  params?: SearchParamsProps;
}) {
  const [datas, setDatas] = useState([]);

  return (
    <>
      <Card className="max-w-screen-sm mx-auto  bg-neutral-100 rounded-[20px]">
        <CardHeader className="text-Medium-grey text-xl font-bold">
          ประมาณการชำระหนี้
        </CardHeader>
        <CardContent>
          <DebtPaymentForm setDatas={setDatas} params={params} />
        </CardContent>
      </Card>
      {datas.length > 0 && <DebtPaymentTable datas={datas} />}
    </>
  );
}
