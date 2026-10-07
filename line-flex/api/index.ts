import axios from "axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const pushLineFlexApi = async (userId: string, flex: any) => {
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

    return { message: "success" };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error);
    return {
      message: error.response?.data || error?.message || "เกิดข้อผิดพลาด",
    };
  }
};
