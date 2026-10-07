import axiosInstance from "@/utils/axiosInstance";
import { COOP_DOMAIN_LANDING_API } from "@/utils/constants";
import axios from "axios";

export const getAllDownlaodApi = async () => {
  try {
    const response = await axiosInstance.get("/getdocdladallgrpdoccate");
    const downloadList = response.data.post;
    return downloadList;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error?.response?.data?.message);
    return { downloadList: [] };
  }
};

export const getDownloadApi = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/getdocbyid/${id}`);
    const downloadList = response.data.data;
    return downloadList;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error?.response?.data?.message);
    return { downloadList: [] };
  }
};

export const getDownloadSubApi = async (subId: string) => {
  try {
    const response = await axiosInstance.get(`/getdocdladallbysub/${subId}`);
    const downloadList = response.data.post;
    return downloadList;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error?.response?.data?.message);
    return { downloadList: [] };
  }
};

export const getAllInfomations = async () => {
  try {
    const response = await axios.get(
      `${COOP_DOMAIN_LANDING_API}/get_all_info.php`
    );

    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || "Failed to fetch data");
  }
};

export const getInfomationBySubCat = async (subCatId: string) => {
  try {
    const response = await axios.get(
      `${COOP_DOMAIN_LANDING_API}/get_info_by_sub_cat.php`,
      {
        params: { sub_cat_id: subCatId },
      }
    );

    if (response.data.error) {
      throw new Error(response.data.error);
    }

    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || "Failed to fetch data");
  }
};

export const getInfomationById = async (infoid: string) => {
  try {
    const response = await axios.get(
      `${COOP_DOMAIN_LANDING_API}/get_info_by_id.php`,
      {
        params: { info_id: infoid },
      }
    );

    if (response.data.error) {
      throw new Error(response.data.error);
    }

    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || "Failed to fetch data");
  }
};

export const getInfomationFeatues = async () => {
  try {
    const response = await axios.get(
      `${COOP_DOMAIN_LANDING_API}/get_info_features.php`
    );

    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || "Failed to fetch data");
  }
};
