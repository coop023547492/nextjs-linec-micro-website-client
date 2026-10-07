export const FlexApproveDoc = ({
  title,
  date,
  memberNumber,
  total,
  detail,
}: {
  title: string;
  date: string;
  memberNumber: string;
  total: string;
  detail: string;
}) => {
  const flex = {
    type: "flex",
    altText: "เอกสารขอกู้",
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
                text: "ได้รับเอกสารขอกู้ของคุณแล้ว",
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
                text: title,
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
                    text: "ยอดขอกู้",
                    size: "sm",
                    color: "#999999",
                    flex: 1,
                  },
                  {
                    type: "text",
                    text: total,
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
              detail !== "-"
                ? {
                    type: "box",
                    layout: "vertical",
                    contents: [
                      {
                        type: "text",
                        text: "กรุณาติดต่อเจ้าหน้าที่สหกรณ์",
                        size: "sm",
                        color: "#999999",
                        align: "start",
                        wrap: true,
                      },
                      {
                        type: "text",
                        text: detail,
                        size: "sm",
                        color: "#FF0000",
                        align: "start",
                        wrap: true,
                      },
                    ],
                  }
                : { type: "box", layout: "vertical", contents: [] },
            ],
          },
        ],
      },
    },
  };

  return flex;
};
