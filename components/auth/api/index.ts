import axiosInstance from "@/utils/axiosInstance";
import { formSchemaProps } from "../type";

export const getLogoutApi = async () => {
  try {
    const response = await axiosInstance.get("/logout");
    return response.data.message;
    return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.message || "เกิดข้อผิดพลาด");
  }
};

export const fetchCurrentUserApi = async () => {
  try {
    const response = await axiosInstance.get("/current-user");
    return response?.data?.user;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error);
  }
};

export const fetchLoginApi = async (values: formSchemaProps) => {
  try {
    const response = await axiosInstance.post("/login", values);
    return response.data;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.message || "เกิดข้อผิดพลาด");
  }
};
