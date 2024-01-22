export interface IJobListCreate {
    job_id: number;
    job_title: string;
    job_major: string;
    recruited_time: string; // mm-dd-yyyy
    job_service: string;
    num_cvs: number;
    status: string;
}

export interface IJobListDraft {
    job_id: number;
    job_title: string;
    job_major: string;
    recruited_time: string; // mm-dd-yyyy
    job_service: string;
}


