import axiosInstance from "@/utils/axiosInstance";
import { COOP_DOMAIN_API } from "@/utils/constants";
import { PostFormApi } from "@/utils/types";
import axios from "axios";

export const getAllPostApi = async (currentPage: number) => {
  try {
    const response = await axiosInstance.get(
      `/postcontent?page=${currentPage}&pageSize=12`
    );
    const posts = response.data.post;
    const pages = response.data.pagetination;
    const newPosts = posts.map((post: PostFormApi) => {
      return {
        id: post.id,
        postTypeCode: post.postTypeCode,
        title: post.title,
        description: post.description,
        inActive: post.inActive,
        createDate: post.createDate,
        fixDate: post.fixDate,
        imageUrl: post.PostImages[0]?.imageUrl || "",
        postByUser: post.postByUser.username,
      };
    });

    return { posts: newPosts, pages };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error);
    return {
      posts: [],
      pages: {
        page: 1,
        pageSize: 1,
        totalPages: 0,
        totalCount: 0,
      },
    };
  }
};

export const createPostApi = async (formData: FormData) => {
  try {
    const response = await axiosInstance.post("/postcontent", formData);
    return response?.data?.message;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.message || "เกิดข้อผิดพลาด");
  }
};

export const delPostApi = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`/postcontent/${id}`);
    return response?.data?.message;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.message || "เกิดข้อผิดพลาด");
  }
};

export const getConnectLineApi = async (DayNum: string) => {
  try {
    const response = await axiosInstance.get("/getgrpdtlinelogaction", {
      params: {
        DayNum: DayNum, // Default to 7 days if not provided
      },
    });
    return response.data.datas;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.message || "เกิดข้อผิดพลาด");
  }
};

export const getMenuLineApi = async ({ days }: { days: string }) => {
  try {
    const response = await axiosInstance.get(`/getdashboardLLA?DayNum=${days}`);
    return response.data.datas;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.message || "เกิดข้อผิดพลาด");
  }
};

export const getAlertLineApi = async ({ days }: { days: string }) => {
  try {
    const response = await axiosInstance.get(
      `/getdashboardalertonappline?DayNum=${days}`
    );
    return response.data.datas;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.message || "เกิดข้อผิดพลาด");
  }
};

export const getAllLineMemberApi = async ({
  currentPage,
  query,
  date,
}: {
  currentPage: number;
  query: string;
  date: string;
}) => {
  try {
    const response = await axios.get(`${COOP_DOMAIN_API}/get_members.php`, {
      params: {
        page: currentPage,
        query: query || null,
        date: date || null,
      },
    });

    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.message || "เกิดข้อผิดพลาด");
  }
};

export const getAllLineMemberApiBom = async ({
  currentPage,
  query,
  date,
}: {
  currentPage: number;
  query?: string;
  date?: string;
}) => {
  try {
    const response = await axiosInstance.get(`/getalllineonmember`, {
      params: {
        page: currentPage,
        searchType: "Line",
        membCode: query,
        date: date,
      },
    });

    return response.data; // data[] & pagetination
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.message || "เกิดข้อผิดพลาด");
  }
};

/* export const deleteLineMemberApi = async (lineId: string) => {
  try {
    const response = await axios.delete(
      `${COOP_DOMAIN_API}/delete_member.php`,
      {
        data: {
          lineId: lineId,
        },
      }
    );

    if (!response.data.success) throw new Error(response.data.message);

    return response.data.message;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.error || "เกิดข้อผิดพลาด");
  }
}; */

export const deleteLineMemberBomApi = async (userId: string) => {
  try {
    const response = await axiosInstance.patch(
      `/deldatamemberbyline?lineId=${userId}`
    );

    console.log(response.data);

    if (!response.data.success) {
      throw new Error(
        response.data.message || "Failed to delete Line member in BOM"
      );
    }

    await axios.delete(`${COOP_DOMAIN_API}/delete_member.php`, {
      data: {
        id: userId,
      },
    });

    return response.data.message || "Line member deleted successfully";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error deleting Line member in BOM:", error);
    throw new Error(
      error?.response?.data?.message || "Failed to delete Line member in BOM"
    );
  }
};

export const getStatsMembersApi = async (connectDays: string) => {
  try {
    const response = await axios.get(
      `${COOP_DOMAIN_API}/dashboard_summary.php`,
      {
        params: {
          connectDays: connectDays, // Default to 30 days if not provided
        },
      }
    );

    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.message || "เกิดข้อผิดพลาด");
  }
};

/* export const getStatsConnectionStatusApi = async () => {
  try {
    const response = await axios.get(
      `${COOP_DOMAIN_API}/connection_status.php`
    );

    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.message || "เกิดข้อผิดพลาด");
  }
}; */

export const getStatsConnectionStatusApi = async () => {
  try {
    const response = await axiosInstance.get(`getdashboardlineonmember`);

    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.message || "เกิดข้อผิดพลาด");
  }
};

export const getAlertLineByDateApi = async ({ date }: { date: string }) => {
  try {
    const response = await axiosInstance.get(
      `/getallalertonapplinebytype?date=${date}`
    );
    return response.data;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.message || "เกิดข้อผิดพลาด");
  }
};
