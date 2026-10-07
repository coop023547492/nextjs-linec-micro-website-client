import { LoanFlexType } from "./type";

export const flexLoan = ({
  loanTitle,
  loanDescription,
  payDate,
  memberNo,
  loanName,
  loanNumber,
  approvAmount,
  deductAmount,
  netAmount,
}: LoanFlexType) => {
  const flex = {
    type: "flex",
    altText: "เงินกู้",
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
                text: loanTitle,
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
                type: "text",
                text: loanName,
                color: "#111111",
                size: "sm",
                weight: "regular",
                align: "start",
              },
              {
                type: "box",
                layout: "baseline",
                contents: [
                  {
                    type: "text",
                    text: "สัญญาเลขที่",
                    size: "sm",
                    color: "#999999",
                    flex: 0,
                  },
                  {
                    type: "text",
                    text: loanNumber,
                    color: "#111111",
                    size: "md",
                    weight: "bold",
                    flex: 0,
                  },
                  {
                    type: "text",
                    text: loanDescription,
                    size: "sm",
                    color: "#999999",
                    flex: 0,
                  },
                ],
                flex: 0,
                spacing: "sm",
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
                    text: "ยอดอนุมัติ",
                    size: "sm",
                    color: "#999999",
                    flex: 1,
                  },
                  {
                    type: "text",
                    text: approvAmount,
                    size: "sm",
                    color: "#111111",
                    flex: 0,
                    align: "end",
                  },
                  {
                    type: "text",
                    text: " บาท",
                    size: "sm",
                    color: "#999999",
                    flex: 0,
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
                    text: "ยอดหัก",
                    size: "sm",
                    color: "#999999",
                    flex: 1,
                  },
                  {
                    type: "text",
                    text: `-${deductAmount}`,
                    size: "sm",
                    color: "#111111",
                    flex: 0,
                    align: "end",
                  },
                  {
                    type: "text",
                    text: " บาท",
                    size: "sm",
                    color: "#999999",
                    flex: 0,
                  },
                ],
                flex: 0,
                spacing: "sm",
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
                    text: "ยอดรับสุทธิ",
                    size: "sm",
                    color: "#999999",
                    flex: 1,
                  },
                  {
                    type: "text",
                    text: netAmount,
                    size: "md",
                    color: "#1DB446",
                    flex: 0,
                    align: "end",
                    weight: "bold",
                  },
                  {
                    type: "text",
                    text: " บาท",
                    size: "sm",
                    color: "#999999",
                    flex: 0,
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

  return flex;
};
