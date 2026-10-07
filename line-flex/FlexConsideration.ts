export const FlexConsideration = ({
  date,
  memberNumber,
  approveAmt,
  deductAmt,
  total,
}: {
  date: string;
  memberNumber: string;
  approveAmt: string;
  deductAmt: string;
  total: string;
}) => {
  const flex = {
    type: "flex",
    altText: "เงินกู้อยู่ระหว่างพิจารณา",
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
                text: "อยู่ระหว่างพิจารณาเงินกู้",
                color: "#1DB446",
                size: "md",
                align: "start",
                margin: "xs",
                weight: "bold",
                wrap: true,
              },
              {
                type: "box",
                layout: "baseline",
                contents: [
                  {
                    type: "text",
                    text: date,
                    size: "xs",
                    color: "#999999",
                    align: "start",
                  },
                  {
                    type: "text",
                    text: `(${memberNumber})`,
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
                text: "เงินกู้สามัญ",
                color: "#111111",
                size: "sm",
                weight: "bold",
                align: "start",
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
                    text: approveAmt,
                    size: "sm",
                    color: "#111111",
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
                    text: deductAmt,
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
                    text: total,
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
                text: "คำขอกู้ของคุณอยู่ระหว่างการพิจารณาของคณะกรรมการเงินกู้ และตรวจสอบวินัยกับทางหน่วยงานต้นสังกัด",
                color: "#999999",
                size: "sm",
                align: "start",
                wrap: true,
              },
            ],
          },
        ],
      },
    },
  };

  return flex;
};
