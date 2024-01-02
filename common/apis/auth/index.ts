import { http } from "@/utils/http";
import {
  IAuthResponse,
  IRegisterResponse,
  IResetPasswordRequest,
} from "@/common/interfaces";

export const login = (
  username: string,
  password: string
): Promise<IAuthResponse> => {
  return http.post("/auth/login", { username, password });
};

export const register = (
  email: string,
  password: string,
  confirmPassword: string
): Promise<IRegisterResponse> => {
  return http.post("/auth/register", { email, password, confirmPassword });
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
