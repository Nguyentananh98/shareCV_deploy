export interface ProjectFormProps {
    name_project : string,
    start_date: Date,
    end_date: Date,
    awards: string[],
}

export interface ProjectItemProps {
    index: number,
    newest: boolean,
    initialValues: ProjectFormProps,
    onRemove: (index: number) => void;
    onChange: (index: number, key: string, value: any) => void;
    onAdd: () => void;
    onAddAward: (index: number) => void
    onRemoveAward: (index:number, awardIndex: number) => void
    onChangeAward: (index: number, awardIndex: number, value: string) => void
}

export const initialProjectForm = {
    name_project : "",
    start_date: new Date(),
    end_date: new Date(),
    awards: [""],
}