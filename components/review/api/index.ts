import axiosInstance from "@/utils/axiosInstance";
import { COOP_DOMAIN_AUDITOR_API } from "@/utils/constants";
import axios from "axios";

export async function createConfirmStatement({
  member_number,
  member_status,
  member_note,
  member_fullname,
  member_unit,
  clientInfo,
}: {
  member_number: string;
  member_status: string;
  member_note?: string;
  member_fullname: string;
  member_unit: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  clientInfo: any;
}) {
  try {
    const res = await axios.post(
      `${COOP_DOMAIN_AUDITOR_API}/auditor_statements.php`,
      {
        member_number,
        member_status,
        member_note,
        member_fullname,
        client_info: clientInfo,
        member_unit,
      }
    );
    return res.data;
  } catch (error) {
    console.error(error);
    throw new Error("เกิดข้อผิดพลาด");
  }
}

export const getAllStatements = async ({
  currentPage,
  query,
  member_status,
  review_status,
}: {
  currentPage: string;
  query?: string;
  member_status?: string;
  review_status?: string;
}) => {
  try {
    const response = await axios.get(
      `${COOP_DOMAIN_AUDITOR_API}/auditor_statements.php`,
      {
        params: {
          page: currentPage,
          query,
          member_status,
          review_status,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("เกิดข้อผิดพลาด");
  }
};

export const getStatement = async ({ memberId }: { memberId: string }) => {
  try {
    const response = await axios.get(
      `${COOP_DOMAIN_AUDITOR_API}/auditor_statements.php`,
      {
        params: {
          id: Number(memberId),
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("เกิดข้อผิดพลาด");
  }
};

export const updateConfirmStatement = async ({
  id,
  review_status,
  reviewer_id,
  reviewer_name,
  review_note,
}: {
  id: string;
  review_status: string;
  reviewer_id: string;
  reviewer_name: string;
  review_note?: string;
}) => {
  try {
    const response = await axios.put(
      `${COOP_DOMAIN_AUDITOR_API}/auditor_statements.php?id=${id}`,
      { review_status, reviewer_id, reviewer_name, review_note }
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("เกิดข้อผิดพลาด");
  }
};

export const getStatsStatement = async () => {
  try {
    const response = await axios.get(
      `${COOP_DOMAIN_AUDITOR_API}/stats_statements.php`
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("เกิดข้อผิดพลาด");
  }
};

export const getMemberDetail = async ({ memberId }: { memberId: string }) => {
  try {
    const response = await axiosInstance.get(`/getconfirmbookbymember`, {
      params: { membCode: memberId },
    });

    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.message || "เกิดข้อผิดพลาด");
  }
};

export const getAuditorMasterById = async ({ id }: { id: string }) => {
  try {
    const response = await axios.get(`${COOP_DOMAIN_AUDITOR_API}/auditor.php`, {
      params: {
        id,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("เกิดข้อผิดพลาด");
  }
};
