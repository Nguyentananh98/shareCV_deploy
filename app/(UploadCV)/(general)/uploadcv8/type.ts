export interface AwardFormProps {
    name_award: string,
    start_date: Date,
    description: string,
}

export interface AwardItemProps {
    index: number,
    newest: boolean,
    initialValues: AwardFormProps,
    onRemove: (index: number) => void;
    onChange: (index: number, key: string, value: any) => void;
    onAdd: () => void;
}

export const initialAwardForm = {
    name_award: "",
    start_date: new Date(),
    description: "",
}