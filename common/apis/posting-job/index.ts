import { axiosClient } from "@/utils/axios";
import {
  IAuthResponse,
  IRegisterResponse,
  IResetPasswordRequest,
} from "@/common/interfaces";
import qs from "qs";
import { IUserLogin, IUserRegister } from "@/modules/auth/types";
import { ICompanyInfo } from "@/modules/posting-job/types";

export const addCompany = (
  data: ICompanyInfo
): Promise<IAuthResponse> => {
  
  return axiosClient.post("/", data)
};

export const register = (
  data: IUserRegister
): Promise<IRegisterResponse> => {
  const role = "recruiter"
  return axiosClient.post("/auth/sign-up",data);
};

export const forgetPassword = (email: string) => {
  return axiosClient.post("/auth/forget", { email });
};

export const resetPassword = (data: IResetPasswordRequest) => {
  return axiosClient.post("/auth/reset-password", { ...data });
};

export const resendOPT = (data: { id: string }) => {
  return axiosClient.post("/auth/resend-opt", { ...data });
};

export const verifyCode = (data: { id: string; code: string }) => {
  return axiosClient.post("/auth/verify-code", { ...data });
};

export const logout = () => {};
