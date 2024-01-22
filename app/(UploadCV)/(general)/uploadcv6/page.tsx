"use client"
import { useState } from "react";
import { CertificateFormProps, initialCertificateForm } from "./types";
import CertificateItem from "./CertificateItem";


export default function UploadCV6() {
    const [certificates, setCertificates] = useState<CertificateFormProps[]>([initialCertificateForm])

    const handleRemoveCertificate = (index: number) => {
        setCertificates(certificates.filter((_,i) => i !== index))
    }

    const handleAddCertificate = () => {
        setCertificates([...certificates, initialCertificateForm])
    }

    const handleCertificateChange = (index: number, key: string, value:any) => {
        setCertificates(
            certificates.map((item, i) => (
                i === index ? {...item, [key] : value} : item
            ))
        )
    }

    return (
        <div className="container">
            <div className="p-10 bg-background rounded-3xl">
                <div className="flex flex-col-reverse gap-10">
                    {
                        certificates.map((certificate, index) => (
                            <CertificateItem
                            key={index}
                            index={index}
                            newest={index === certificates.length - 1}
                            initialValues={certificate}
                            onAdd={handleAddCertificate}
                            onRemove={handleRemoveCertificate}
                            onChange={handleCertificateChange}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}