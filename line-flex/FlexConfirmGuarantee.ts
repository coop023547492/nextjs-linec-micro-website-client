export const FlexConfirmGuarantee = ({
  date,
  memberNumber,
  loanTypeName,
  loanfullName,
  loanMemberNumber,
  approveAmt,
}: {
  date: string;
  memberNumber: string;
  loanTypeName: string;
  loanfullName: string;
  loanMemberNumber: string;
  approveAmt: string;
}) => {
  const flex = {
    type: "flex",
    altText: "ยืนยันค้ำประกัน",
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
                text: "กรุณายืนยันการค้ำประกันเงินกู้",
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
                text: loanTypeName,
                color: "#111111",
                size: "sm",
                weight: "bold",
                align: "start",
              },
              {
                type: "box",
                layout: "baseline",
                contents: [
                  {
                    type: "text",
                    text: "ของ",
                    size: "sm",
                    color: "#999999",
                    flex: 0,
                  },
                  {
                    type: "text",
                    text: loanfullName,
                    color: "#111111",
                    size: "sm",
                    flex: 0,
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
                    text: "เลขทะเบียน",
                    size: "sm",
                    color: "#999999",
                    flex: 0,
                  },
                  {
                    type: "text",
                    text: loanMemberNumber,
                    color: "#111111",
                    size: "sm",
                    flex: 0,
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
                    text: "คุณยินยอมเป็นผู้ค้ำประกัน?",
                    size: "md",
                    color: "#111111",
                    flex: 1,
                    align: "center",
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
                layout: "horizontal",
                contents: [
                  {
                    type: "button",
                    action: {
                      type: "uri",
                      label: "ยินยอม",
                      uri: `http://localhost:3000/line/guarantee/add?status=confirm&memberNumber=${memberNumber}&loanTypeName=${encodeURIComponent(
                        loanTypeName
                      )}&loanMemberNumber=${loanMemberNumber}&approveAmt=${approveAmt}`,
                    },
                    style: "primary",
                    margin: "lg",
                  },
                  {
                    type: "button",
                    action: {
                      type: "uri",
                      label: "ไม่ยินยอม",
                      uri: `http://localhost:3000/line/guarantee/add?status=reject&memberNumber=${memberNumber}&loanTypeName=${encodeURIComponent(
                        loanTypeName
                      )}&loanMemberNumber=${loanMemberNumber}&approveAmt=${approveAmt}`,
                    },
                    style: "primary",
                    margin: "lg",
                    color: "#999999",
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
                    text: "หากต้องการสอบถามข้อมูลเพิ่มเติม กรุณาติดต่อเจ้าหน้าที่สินเชื่อ",
                    size: "sm",
                    color: "#999999",
                    flex: 1,
                    align: "center",
                    wrap: true,
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
