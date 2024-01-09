// import { ITitleImageItem } from "./component/ImageUpload/types";

export interface ICompanyInfo {
    logo: File;
    coverImage: File;
    name: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
    taxCode: string;
    file: ITitleImageItem[];
    // role: string;
}

export interface ITitleImageItem {
    url: string;
    file: File | null
}