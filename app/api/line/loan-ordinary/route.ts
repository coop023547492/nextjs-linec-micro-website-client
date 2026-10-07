import {
  confirmGuaranteeSchema,
  considerationSchema,
  receiveDocSchema,
} from "@/line-flex/validators";
import { NextRequest, NextResponse } from "next/server";
import { parseError } from "@/line-flex/utils";
import { FlexApproveDoc } from "@/line-flex/FlexApproveDoc";
import { pushLineFlexApi } from "@/line-flex/api";
import { FlexConsideration } from "@/line-flex/FlexConsideration";
import { FlexConfirmGuarantee } from "@/line-flex/FlexConfirmGuarantee";

export const POST = async (request: NextRequest) => {
  const {
    title,
    step,
    userId,
    date,
    memberNumber,
    total,
    detail,
    approveAmt,
    deductAmt,
    loanTypeName,
    loanfullName,
    loanMemberNumber,
  } = await request.json();

  // Validate required fields
  if (!step || !userId) {
    return NextResponse.json(
      { message: "Error: step is required" },
      { status: 400 }
    );
  }

  // Handle the step for APPROVE_DOC
  if (step === "APPROVE_DOCUMENT") {
    // Validate the input data
    const parsedDoc = receiveDocSchema.safeParse({
      title,
      date,
      memberNumber,
      total,
      detail,
    });
    if (!parsedDoc.success) {
      const errorMessages = parseError(parsedDoc);
      return NextResponse.json(
        {
          message: `Error: ${errorMessages}`,
        },
        { status: 400 }
      );
    }

    // Create the FlexApproveDoc content
    const flex = FlexApproveDoc({
      title,
      date,
      memberNumber,
      total,
      detail,
    });

    // Push the Flex message to the LINE API
    const response = await pushLineFlexApi(userId, flex);

    // Check if the response is successful
    return NextResponse.json(response);
  }

  // Handle the step for CONSIDERATION
  if (step === "CONSIDERATION") {
    // Validate the input data for consideration
    const parsedConsideration = considerationSchema.safeParse({
      date,
      memberNumber,
      total,
      approveAmt,
      deductAmt,
    });
    if (!parsedConsideration.success) {
      const errorMessages = parseError(parsedConsideration);
      return NextResponse.json(
        {
          message: `Error: ${errorMessages}`,
        },
        { status: 400 }
      );
    }

    // Create the FlexConsideration content
    const flex = FlexConsideration({
      date,
      memberNumber,
      approveAmt,
      deductAmt,
      total,
    });

    // Push the Flex message to the LINE API
    const response = await pushLineFlexApi(userId, flex);

    // Check if the response is successful
    return NextResponse.json(response);
  }

  // Handle the step for CONFIRM_GUARANTEE
  if (step === "CONFIRM_GUARANTEE") {
    // Validate the input data for confirmation
    const parsedGuarantee = confirmGuaranteeSchema.safeParse({
      date,
      memberNumber,
      approveAmt,
      loanTypeName,
      loanfullName,
      loanMemberNumber,
    });
    if (!parsedGuarantee.success) {
      const errorMessages = parseError(parsedGuarantee);
      return NextResponse.json(
        {
          message: `Error: ${errorMessages}`,
        },
        { status: 400 }
      );
    }

    // Create the FlexConfirmGuarantee content
    const flex = FlexConfirmGuarantee({
      date,
      memberNumber,
      loanTypeName,
      loanfullName,
      loanMemberNumber,
      approveAmt,
    });

    // Push the Flex message to the LINE API
    const response = await pushLineFlexApi(userId, flex);

    // Check if the response is successful
    return NextResponse.json(response);
  }
};
