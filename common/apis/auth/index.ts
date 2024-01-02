import { http } from "@/utils/http";
import {
  IAuthResponse,
  IRegisterResponse,
  IResetPasswordRequest,
} from "@/common/interfaces";
import qs from "qs";

export const login = (
  username: string,
  password: string
): Promise<IAuthResponse> => {
  const form = qs.stringify({username, password})
  return http.post("/auth/sign-in", form, {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: form
  });
};

export const register = (
  name: string,
  email: string,
  phone: string,
  password: string,
  password_again: string,
  taxCode: string
): Promise<IRegisterResponse> => {
  const role = "recruiter"
  const form = qs.stringify({name, email,phone, password,password_again,role})
  return http.post("/auth/sign-up", form, {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: form,
  });
};

export const forgetPassword = (email: string) => {
  return http.post("/auth/forget", { email });
};

export const resetPassword = (data: IResetPasswordRequest) => {
  return http.post("/auth/reset-password", { ...data });
};

export const resendOPT = (data: { id: string }) => {
  return http.post("/auth/resend-opt", { ...data });
};

export const verifyCode = (data: { id: string; code: string }) => {
  return http.post("/auth/verify-code", { ...data });
};

export const logout = () => {};
