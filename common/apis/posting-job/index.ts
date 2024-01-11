import { axiosClient } from "@/utils/axios";
import {
  IAuthResponse,
  ICompanyInfo,
  IRegisterResponse,
  IResetPasswordRequest,
} from "@/common/interfaces";
import qs from "qs";
import { IUserLogin, IUserRegister } from "@/modules/auth/types";

export const addCompany = (
  data: ICompanyInfo
): Promise<IAuthResponse> => {
  
  return axiosClient.post("/", data)
};

export const getCompanyInfo = () : Promise<ICompanyInfo> => {
  return axiosClient.get("/postjob/recruiter/get-company-info")
};