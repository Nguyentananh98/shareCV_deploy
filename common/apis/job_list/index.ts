import { axiosClient } from "@/utils/axios";
import { AxiosResponse } from "axios";

import { IJobListCreateResponse, IJobListDraftResponse } from "@/common/interfaces/job-list";

export const getCreatedJobList = (data: { page_index: number, limit: number }): Promise<AxiosResponse<IJobListCreateResponse>> => {
    // let payload: any = {
    //     page_index: data.page_index,
    //     limit: data.limit,
    // }
    const formData = new FormData();
    formData.append("page_index", data.page_index.toString());
    formData.append("limit", data.limit.toString());
    return axiosClient.post(`/postjob/recruiter/list-job/${false}`, formData, { headers: { "Content-Type": "application/x-www-urlencoded", } });
};

export const getDraftJobList = (data: { page_index: number, limit: number }): Promise<AxiosResponse<IJobListDraftResponse>> => {
    let payload: any = {
        page_index: data.page_index,
        limit: data.limit,
    }
    return axiosClient.post(`/postjob/recruiter/list-job/${true}`, payload, { headers: { "Content-Type": "application/x-www-urlencoded", } });
};

