export interface IUvListAdmin {
    id: number;
    job_title: string;
    company_name: string;
    company_logo: string;
    industry: string[];
    job_service: string;
    status: boolean;
    created_date: string; // mm-dd-yyyy
}

export interface IUvListAdminResponse {
    message: string,
    data: {
        total_pages: number,
        total_items: number,
        item_lst: IUvListAdmin[]
    }
}