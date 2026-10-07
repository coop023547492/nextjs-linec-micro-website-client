import {
  getAuditorMasterById,
  getMemberDetail,
  getStatement,
} from "@/components/review/api";
import ConfirmDetail from "@/components/review/ConfirmDetail";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import crypto from "crypto";

export default async function page({
  searchParams,
}: {
  searchParams: { token: string };
}) {
  if (!searchParams.token) {
    return <p>No token</p>;
  }

  const queryClient = new QueryClient();
  const token = searchParams.token.replace(/ /g, "+");

  const SECRET_KEY = Buffer.from(process.env.SECRET_KEY!, "base64"); // 32 bytes
  const IV = Buffer.from(process.env.IV!, "base64"); // 16 bytes

  function decrypt(encryptedText: string) {
    try {
      const decipher = crypto.createDecipheriv("aes-256-cbc", SECRET_KEY, IV);
      let decrypted = decipher.update(encryptedText, "base64", "utf8");
      decrypted += decipher.final("utf8");
      return decrypted;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error("❌ Decrypt failed:", err.message);
      return undefined;
    }
  }

  const memberId = decrypt(token);

  if (!memberId) return <p>token failed</p>;

  await queryClient.prefetchQuery({
    queryKey: ["auditor-master", "1"],
    queryFn: () => getAuditorMasterById({ id: "1" }),
  });

  await queryClient.prefetchQuery({
    queryKey: ["auditor-statement", memberId],
    queryFn: () => getStatement({ memberId: memberId }),
  });

  await queryClient.prefetchQuery({
    queryKey: ["auditor-memberdetail", memberId],
    queryFn: () => getMemberDetail({ memberId }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ConfirmDetail memberId={memberId} />
    </HydrationBoundary>
  );
}
