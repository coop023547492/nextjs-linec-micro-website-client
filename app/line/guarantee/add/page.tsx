export default function page({
  searchParams,
}: {
  searchParams: {
    status: string;
    memberNumber: string;
    loanTypeName: string;
    loanMemberNumber: string;
    approveAmt: string;
  };
}) {
  console.log("searchParams", searchParams);

  return <div>page</div>;
}
