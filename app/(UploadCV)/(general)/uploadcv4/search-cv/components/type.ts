export interface ExperienceFormProps {
  company_name: string;
  job_title: string;
  department: string;
  position: string[];
  responsibilities: string[];
  start_date: Date;
  end_date: Date;
}

export interface ExperienceItemProps {
  index: number;
  newest: boolean;
  initialValues: ExperienceFormProps;
  onRemove: (index: number) => void;
  onChange: (index: number, key: string, value: any) => void;
  onAdd: () => void;
}
