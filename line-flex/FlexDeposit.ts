import { DepFlexType } from "./type";

export const FlexDeposit = ({
  typeDep,
  loanTitle,
  payDate,
  memberNo,
  loanNumber,
  approvAmount,
  netAmount,
}: DepFlexType) => {
  const flex = {
    type: "flex",
    altText: "เงินฝาก-ถอน",
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
                color: typeDep === "DepWith" ? "#DC2626" : "#1DB446",
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
                    text: "จำนวนเงิน",
                    size: "sm",
                    color: "#999999",
                    flex: 1,
                  },
                  {
                    type: "text",
                    text: approvAmount,
                    size: "lg",
                    color: typeDep === "DepWith" ? "#DC2626" : "#1DB446",
                    flex: 0,
                    align: "end",
                    weight: "bold",
                  },
                  {
                    type: "text",
                    text: " บาท",
                    size: "sm",
                    color: typeDep === "DepWith" ? "#DC2626" : "#1DB446",
                    flex: 0,
                    weight: "bold",
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
                    text: "ยอดเงินคงเหลือ",
                    size: "sm",
                    color: "#999999",
                    flex: 1,
                  },
                  {
                    type: "text",
                    text: netAmount,
                    size: "sm",
                    color: "#999999",
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
            ],
          },
        ],
      },
    },
  };

  return flex;
};
