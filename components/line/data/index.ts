export const loanType = [
  {
    id: "21",
    name: "เงินกู้ฉุกเฉิน",
    limit: "200,000",
    interest: "5.75%",
    minPaymemt: 12,
    sendPayment: "16,700",
  },
  {
    id: "11",
    name: "เงินกู้สามัญ",
    limit: "2,500,000",
    interest: "6%",
    minPaymemt: 240,
    sendPayment: "10,500",
  },
];

export const loanTypeIds = loanType.map((l) => l.id) as [string, ...string[]];
