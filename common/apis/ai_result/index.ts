import { axiosClient, subaxiosClient } from "@/utils/axios";
import { AxiosResponse } from "axios";

export const getCompanyInfo = (): Promise<> => {
    return axiosClient.get("/postjob/recruiter/get-company-info");
};
