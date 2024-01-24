import { IUvListAdminResponse } from "@/common/interfaces/uv-list-admin";
import { axiosClient, subaxiosClient } from "@/utils/axios";
import { AxiosResponse } from "axios";

export const getUvListAdmin = (data: { page_index: number, limit: number, state: string }): Promise<AxiosResponse<IUvListAdminResponse>> => {
    let payload: any = {
        page_index: data.page_index,
        limit: data.limit,
        job_status: data.state,
    }
    console.log(payload);
    return axiosClient.post(`/postjob/admin/list-job`, payload, { headers: { "Content-Type": "application/json", } });
};
