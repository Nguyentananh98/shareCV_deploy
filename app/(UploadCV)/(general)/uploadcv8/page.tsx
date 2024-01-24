"use client";

import { useState } from "react";
import { AwardFormProps, initialAwardForm } from "./type";
import AwardItem from "./AwardItem";

export default function UploadCV8() {
  const [awards, setAwards] = useState<AwardFormProps[]>([initialAwardForm]);
  const handleRemoveAward = (index: number) => {
    setAwards(awards.filter((_, i) => i !== index));
  };

  const handleAddAward = () => {
    setAwards([...awards, initialAwardForm]);
  };

  const handleAwardChange = (index: number, key: string, value: any) => {
    setAwards(
      awards.map((item, i) => (i === index ? { ...item, [key]: value } : item))
    );
  };
  console.log(awards)
  return (
    <>
      <div className="container">
        <div className="p-10 bg-background rounded-3xl">
          <div className="flex flex-col-reverse gap-10">
            {awards.map((award, index) => (
              <AwardItem
                key={index}
                index={index}
                newest={index === awards.length - 1}
                initialValues={award}
                onAdd={handleAddAward}
                onRemove={handleRemoveAward}
                onChange={handleAwardChange}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
