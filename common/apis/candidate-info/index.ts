import { IResume } from "@/modules/cv-info/resume.interface";
import { axiosClient } from "@/utils/axios";
import { AxiosResponse } from "axios";

export const candidateInfoApi = {
  getById(id: number): Promise<AxiosResponse<IResume>> {
    return axiosClient.post(`/postjob/collaborator/get-detailed-resume`, {
      cv_id: id,
    });
  },
};
