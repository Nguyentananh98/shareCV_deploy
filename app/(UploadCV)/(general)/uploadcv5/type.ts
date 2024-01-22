export interface EducationFormProps {
    academic_degree: string;
    university: string;
    major: string;
    gpa: string;
    start_date: Date;
    end_date: Date;
  }
  
  export interface EducationItemProps {
    index: number;
    newest: boolean;
    initialValues: EducationFormProps;
    onRemove: (index: number) => void;
    onChange: (index: number, key: string, value: any) => void;
    onAdd: () => void;
  }

  export const initialEducationForm = {
    academic_degree: "",
    university: "",
    major: "",
    gpa: "",
    start_date: new Date(),
    end_date: new Date(),
  }
  