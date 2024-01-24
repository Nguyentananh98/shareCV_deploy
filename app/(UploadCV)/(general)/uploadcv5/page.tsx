"use client";

import { useState } from "react";
import { EducationFormProps, initialEducationForm } from "./type";
import EducationItem from "./EducationItem";

const UploadCV5: React.FC = () => {
  const [educations, setEducations] = useState<EducationFormProps[]>([
    initialEducationForm,
  ]);
  const handleRemoveEducation = (index: number) => {
    setEducations(educations.filter((_, i) => i !== index));
  };

  const handleAddEducation = () => {
    setEducations([...educations, initialEducationForm]);
  };

  const handleEducationChange = (index: number, key: string, value: any) => {
    setEducations(
      educations.map((item, i) =>
        i === index ? { ...item, [key]: value } : item
      )
    );
  };
  return (
    <div className="container">
      <div className="p-10 bg-background rounded-3xl">
        <div className="flex flex-col-reverse gap-10">
        {educations.map((education, index) => (
          <EducationItem
            key={index}
            index={index}
            newest={index === educations.length - 1}
            initialValues={education}
            onAdd={handleAddEducation}
            onRemove={handleRemoveEducation}
            onChange={handleEducationChange}
          />
        ))}
        </div>
      </div>
    </div>
  );
};

export default UploadCV5;
