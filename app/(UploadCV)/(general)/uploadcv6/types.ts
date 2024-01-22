export interface CertificateFormProps {
    language: string,
    certificate: string,
    level: number,
    start_date: Date,
    end_date: Date,
}

export interface CertificateItemProps {
    index: number,
    newest: boolean,
    initialValues: CertificateFormProps,
    onRemove: (index: number) => void;
    onChange: (index: number, key: string, value: any) => void;
    onAdd: () => void;
}

export const initialCertificateForm = {
    language: "",
    certificate: "",
    level: 0,
    start_date: new Date(),
    end_date: new Date(),
}