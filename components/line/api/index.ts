import axiosInstance from "@/utils/axiosInstance";
import { format } from "date-fns";
import { FormItemType } from "../type";

///////////////////////// DebtPayment ///////////////////////////////////////////

export const getListLoanApi = async () => {
  try {
    const response = await axiosInstance.get("listloantypecode");
    return {
      data: response.data.datas,
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error fetching data:", error);
    return {
      message: error?.response?.data?.message || "เกิดข้อผิดพลาด",
    };
  }
};

export const getTableCalPayApi = async (data: FormItemType) => {
  try {
    const response = await axiosInstance.get("gettablecalpay", {
      params: {
        loanTypecode: data.loanType,
        loanReqAmt: data.requestLoan,
        periodPayAmt: data.installments,
        periodPayment: data.sendPayment,
        startContDate: format(data.contractDate, "yyyy-MM-dd"),
      },
    });

    return {
      data: response.data.tables,
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error fetching data:", error);
    throw new Error(error?.response?.data?.message || "เกิดข้อผิดพลาด");
  }
};

export const getPaymentApi = async (data: {
  loanType: string;
  requestLoan: number;
  installments: number;
  salary: number;
  deduct: number;
}) => {
  try {
    const response = await axiosInstance.get("getperiodroundup", {
      params: {
        loantypeCode: data.loanType,
        loanReqAmt: data.requestLoan,
        PeriodAmt: data.installments,
        salaryAmt: data.salary,
        deducAmt: data.deduct,
        lineId: "no",
      },
    });

    return {
      data: {
        period: response.data.message[0].period,
        payment: response.data.message[0].payment,
        salaryAmt: response.data.message[0].salaryAmt,
        loanReqAmt: response.data.message[0].loanReqAmt,
      },
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error fetching data:", error);
    throw new Error(error?.response?.data?.message || "เกิดข้อผิดพลาด");
  }
};

export const getPeriodApi = async (data: {
  loanType: string;
  requestLoan: number;
  sendPayment: number;
  salary: number;
  deduct: number;
  installments: number;
}) => {
  try {
    const response = await axiosInstance.get("getpaymentroundup100", {
      params: {
        loantypeCode: data.loanType,
        loanReqAmt: data.requestLoan,
        PaymentAmt: data.sendPayment,
        salaryAmt: data.salary,
        deducAmt: data.deduct,
        lineId: "no",
        PeriodAmt: data.installments,
      },
    });

    return {
      data: {
        period: response.data.message[0].period,
        payment: response.data.message[0].payment,
        salaryAmt: response.data.message[0].salaryAmt,
        loanReqAmt: response.data.message[0].loanReqAmt,
      },
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error fetching data:", error);
    throw new Error(error?.response?.data?.message || "เกิดข้อผิดพลาด");
  }
};

export const getLoanReqApi = async (data: {
  loanType: string;
  requestLoan: number;
  installments: number;
  salary: number;
  deduct: number;
}) => {
  try {
    const response = await axiosInstance.get("getloanreqamtrounddown100", {
      params: {
        loantypeCode: data.loanType,
        loanReqAmt: data.requestLoan,
        PeriodAmt: data.installments,
        lineId: "no",
        salaryAmt: data.salary,
        deducAmt: data.deduct,
      },
    });

    return {
      data: {
        loanReqAmt: response.data.message[0].loanReqAmt,
        period: response.data.message[0].period,
        payment: response.data.message[0].payment,
        salaryAmt: response.data.message[0].salaryAmt,
      },
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error fetching data:", error);
    throw new Error(error?.response?.data?.message || "เกิดข้อผิดพลาด");
  }
};

export const getSalaryApi = async (data: {
  loanType: string;
  requestLoan: number;
  installments: number;
  salary: number;
  deduct: number;
  payment: number;
}) => {
  try {
    const response = await axiosInstance.get("getsalaryroundup10", {
      params: {
        loantypeCode: data.loanType,
        loanReqAmt: data.requestLoan,
        PeriodAmt: data.installments,
        lineId: "no",
        salaryAmt: data.salary,
        deducAmt: data.deduct,
        PaymentAmt: data.payment,
      },
    });

    console.log(response.data);

    return {
      data: {
        loanReqAmt: response.data.message[0].loanReqAmt,
        period: response.data.message[0].period,
        payment: response.data.message[0].payment,
        salaryAmt: response.data.message[0].salaryAmt,
        warning: response.data.message[0].warning,
      },
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error fetching data:", error);
    throw new Error(error?.response?.data?.message || "เกิดข้อผิดพลาด");
  }
};

////////////////////////////////////  POST //////////////////////////////////

export const getPostContentDetail = async (postId: string) => {
  try {
    const response = await axiosInstance.get(`/postcontent/${postId}`);
    const post = response.data.post;
    return {
      data: {
        id: post.id,
        postTypeCode: post.postTypeCode,
        title: post.title,
        description: post.description,
        inActive: post.inActive,
        createDate: post.createDate,
        fixDate: post.fixDate,
        imageUrl: post.PostImages[0]?.imageUrl || "",
        postByUser: post.postByUser.username,
      },
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error fetching data:", error);
    throw new Error(error?.response?.data?.message || "เกิดข้อผิดพลาด");
  }
};
