import { parseError } from "@/line-flex/utils";
import { pushMessageSchema } from "@/line-flex/validators";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { lineId, message } = await request.json();

  const parsedMessage = pushMessageSchema.safeParse({ lineId, message });

  if (!parsedMessage.success) {
    const errorMessages = parseError(parsedMessage);
    return NextResponse.json(
      {
        message: `Error: ${errorMessages}`,
      },
      { status: 400 }
    );
  }

  try {
    await axios.post(
      "https://api.line.me/v2/bot/message/push",
      {
        to: parsedMessage.data.lineId,
        messages: [{ type: "text", text: parsedMessage.data.message }],
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
