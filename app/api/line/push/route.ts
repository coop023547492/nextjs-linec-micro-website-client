import { FlexDeposit } from "@/line-flex/FlexDeposit";
import { FLexInterest } from "@/line-flex/FLexInterest";
import { flexLoan } from "@/line-flex/FlexLoan";
import { DepFlexType, LoanFlexType } from "@/line-flex/type";
import { parseError } from "@/line-flex/utils";
import {
  depFlexSchema,
  inmFlexSchema,
  lonFlexSchema,
  typeFlexSchema,
  userIdSchema,
} from "@/line-flex/validators";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const {
    userId,
    type,
    typeDep,
    loanTitle,
    loanDescription,
    payDate,
    memberNo,
    loanName,
    loanNumber,
    approvAmount,
    deductAmount,
    netAmount,
  } = await request.json();

  const parsedType = typeFlexSchema.safeParse({ type });

  if (!parsedType.success) {
    const errorMessages = parseError(parsedType);
    return NextResponse.json(
      {
        message: `Error: ${errorMessages}`,
      },
      { status: 400 }
    );
  }

  const parsedUserId = userIdSchema.safeParse({ userId });
  if (!parsedUserId.success) {
    const errorMessages = parseError(parsedUserId);
    return NextResponse.json(
      {
        message: `Error: ${errorMessages}`,
      },
      { status: 400 }
    );
  }

  let flex;

  if (type === "LON") {
    const parsed = lonFlexSchema.safeParse({
      loanTitle,
      loanDescription,
      payDate,
      memberNo,
      loanName,
      loanNumber,
      approvAmount,
      deductAmount,
      netAmount,
    });

    if (!parsed.success) {
      const errorMessages = parseError(parsed);
      return NextResponse.json(
        {
          message: `Error: ${errorMessages}`,
        },
        { status: 400 }
      );
    }

    flex = flexLoan(parsed.data as LoanFlexType);
  }

  if (type === "DEP") {
    const parsed = depFlexSchema.safeParse({
      typeDep,
      loanTitle,
      payDate,
      memberNo,
      loanNumber,
      approvAmount,
      netAmount,
    });

    if (!parsed.success) {
      const errorMessages = parseError(parsed);
      return NextResponse.json(
        {
          message: `Error: ${errorMessages}`,
        },
        { status: 400 }
      );
    }

    flex = FlexDeposit(parsed.data as DepFlexType);
  }

  if (type === "DepINM") {
    const parsed = inmFlexSchema.safeParse({
      payDate,
      memberNo,
      loanDescription,
      loanNumber,
      approvAmount,
    });

    if (!parsed.success) {
      const errorMessages = parseError(parsed);
      return NextResponse.json(
        {
          message: `Error: ${errorMessages}`,
        },
        { status: 400 }
      );
    }

    flex = FLexInterest(parsed.data);
  }

  try {
    await axios.post(
      "https://api.line.me/v2/bot/message/push",
      {
        to: userId,
        messages: [flex],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.LINE_ACCESS_TOKEN}`,
        },
      }
    );

    return NextResponse.json({ message: "success" });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { message: error.response?.data || error?.message || "เกิดข้อผิดพลาด" },
      { status: 500 }
    );
  }
}
