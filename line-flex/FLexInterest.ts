import { InmFlexType } from "./type";

export const FLexInterest = ({
  payDate,
  memberNo,
  loanDescription,
  loanNumber,
  approvAmount,
}: InmFlexType) => {
  return {
    type: "flex",
    altText: "ดอกเบี้ยเงินฝาก",
    contents: {
      type: "bubble",
      body: {
        type: "box",
        layout: "horizontal",
        contents: [
          {
            type: "box",
            layout: "vertical",
            contents: [
              {
                type: "text",
                text: "รายการจ่ายดอกเบี้ยเงินฝาก",
                color: "#1DB446",
                size: "md",
                align: "start",
                margin: "xs",
                weight: "bold",
              },
              {
                type: "box",
                layout: "baseline",
                contents: [
                  {
                    type: "text",
                    text: payDate,
                    size: "xs",
                    color: "#999999",
                    align: "start",
                  },
                  {
                    type: "text",
                    text: `(${memberNo})`,
                    size: "xs",
                    color: "#999999",
                    align: "end",
                  },
                ],
              },
              {
                type: "separator",
                margin: "lg",
              },
              {
                type: "box",
                layout: "vertical",
                contents: [],
                flex: 0,
                height: "10px",
              },
              {
                type: "box",
                layout: "baseline",
                contents: [
                  {
                    type: "text",
                    text: loanDescription,
                    size: "sm",
                    color: "#999999",
                    flex: 0,
                  },
                ],
              },
              {
                type: "box",
                layout: "vertical",
                contents: [],
                flex: 0,
                height: "10px",
              },
              {
                type: "box",
                layout: "baseline",
                contents: [
                  {
                    type: "text",
                    text: "เลขที่บัญชี",
                    size: "sm",
                    color: "#999999",
                    flex: 1,
                  },
                  {
                    type: "text",
                    text: loanNumber,
                    color: "#111111",
                    size: "md",
                    flex: 0,
                    align: "end",
                    weight: "bold",
                  },
                ],
                flex: 0,
                spacing: "sm",
              },
              {
                type: "box",
                layout: "baseline",
                contents: [
                  {
                    type: "text",
                    text: "จำนวนเงิน",
                    size: "sm",
                    color: "#999999",
                    flex: 1,
                  },
                  {
                    type: "text",
                    text: approvAmount,
                    size: "lg",
                    color: "#1DB446",
                    flex: 0,
                    align: "end",
                    weight: "bold",
                  },
                  {
                    type: "text",
                    text: " บาท",
                    size: "sm",
                    color: "#1DB446",
                    flex: 0,
                    weight: "bold",
                  },
                ],
                flex: 0,
                spacing: "sm",
              },
            ],
          },
        ],
      },
    },
  };
};
