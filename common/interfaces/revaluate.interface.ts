export interface ILanguageCertificates {
    certificate_language: string;
    certificate_name: string;
    certificate_point_level: string;
  }
  
  export interface IRevaluate {
    cv_id:number;
    level:string;
    current_salary: number;
    language_certificates: ILanguageCertificates[];
    degree: string[];
  }